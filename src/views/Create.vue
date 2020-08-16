<template lang="pug">
.row
  .col.s6.offset-s3
    h1 Creted task

    form(@submit.prevent="submitHandler")
      .input-field
        input(id="title" v-model="title" type="text" class="validate" required)
        label(for="title") {{ title }}
        span(class="helper-text" data-error="Title is required" data-success=":)") Helper text

      <div class="chips chips-placeholder" ref="vueChips"></div>

      <div class="input-field">
        <textarea v-model="description" id="description" class="materialize-textarea" maxlength="2048" rows=4></textarea>
        <label for="description">Description</label>
        <span class="character-counter" style="float: right; font-size: 12px;">{{ description.length }}/2048</span>
      </div>

      <input type="text" ref="datepicker">

      button(type="submit" class="btn") Create task

</template>

<script>

export default {
  name: 'create',
  data: () => {
    return {
      description: '',
      title: '',
      chips: null,
      date: null
    }
  },

  mounted () {
    this.chips = window.M.Chips.init(this.$refs.vueChips, {
      placeholder: 'Task tags',
      secondaryPlaceholder: '+Tag',
      autocompleteOptions: {
        data: {
          apple: 'apple', test: 'test', text: 'text'
        },
        limit: 3
      }
    })

    this.date = window.M.Datepicker.init(this.$refs.datepicker, {
      format: 'dd.mm.yyyy',
      defaultDate: new Date(),
      setDefaultDate: true
    })
  },

  components: {

  },
  methods: {
    submitHandler () {
      const task = {
        title: this.title,
        description: this.description,
        id: Date.now(),
        status: 'active',
        tags: this.chips.chipsData,
        date: this.date.date
      }

      this.$store.dispatch('createTask', task)
      this.$router.push('/list')
    },

    destroyed () {
      if (this.date && this.date.destroy) {
        this.date.destroy()
      }
      if (this.chips && this.chips.destroy) {
        this.chips.destroy()
      }
    }
  }

}
</script>
