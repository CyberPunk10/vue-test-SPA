<template lang="pug">
.row
  div(v-if="task")
    h4 {{ task.title }}

    form(@submit.prevent="submitHandler" class="col s8 offset-s2")

      <div class="chips chips-placeholder" ref="vueChips"></div>

      <div class="input-field">
        <textarea v-model="description" id="description" class="materialize-textarea" maxlength="2048" rows="5">{{ description }}</textarea>
        <label for="description">Description</label>
        <span class="character-counter" style="float: right; font-size: 12px;">{{ description.length }}/2048</span>
      </div>

      <input type="text" ref="datepicker">

      button(type="submit" class="btn") Update
      button(type="submit" class="btn blue btn-complete") Complete task

  p(v-else) Tasks not found.

</template>

<script>
export default {
  name: 'task',
  data: () => {
    return {
      description: '',
      chips: null,
      date: null
    }
  },

  computed: {
    task () {
      return this.$store.getters.taskById(+this.$route.params.id) // строку привели к числу
    }
  },

  mounted () {
    this.description = this.task.description

    this.chips = window.M.Chips.init(this.$refs.vueChips, {
      placeholder: 'Task tags',
      secondaryPlaceholder: '+Tag',
      autocompleteOptions: {
        data: {
          apple: 'apple', test: 'test', text: 'text'
        },
        limit: 3
      },
      data: this.task.tags
    })

    this.date = window.M.Datepicker.init(this.$refs.datepicker, {
      format: 'dd.mm.yyyy',
      defaultDate: new Date(this.task.date),
      setDefaultDate: true
    })

    setInterval(() => {
      window.M.updateTextFields()
    }, 0)
  },

  methods: {
    submitHandler () {
      this.$store.dispatch('updateTask', {
        id: this.task.id,
        description: this.description,
        date: this.date.date
      })
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

<style lang="sass" scoped>
h4
  text-align: center
  margin: 3rem 0

.btn-complete
  margin-left: 1rem
</style>
