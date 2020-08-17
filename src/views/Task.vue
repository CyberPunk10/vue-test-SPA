<template lang="pug">
.row
  div(v-if="task")
    h4 {{ task.title }}

    form(@submit.prevent="submitHandler" class="col s8 offset-s2")

      div(v-if="textOnBtn === 'Сохранить изменения'")
        .input-field
          textarea(v-model="description" id="description" class="materialize-textarea" maxlength="2048" rows="12") {{ description }}
          label(for="description") Описание задачи
          span(class="character-counter" style="float: right; font-size: 12px;") {{ description.length }}/2048

          div(class="chips chips-placeholder" ref="vueChips")

      div(v-else)
        p {{ description }}

        p(v-for="item of task.tags.map(item => item.tag)").post-tag
            a {{ item }}

        p {{ new Date(task.date) }}

      <input type="text" ref="datepicker">

      button(type="submit" class="btn") {{ textOnBtn }}
      button(type="submit" class="btn blue btn-complete") Завершить задачу

  p(v-else) Tasks not found.

</template>

<script>
export default {
  name: 'task',
  data: () => {
    return {
      description: '',
      chips: null,
      date: null,
      dateForTagP: null,
      textOnBtn: 'Изменить'
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
      if (this.textOnBtn === 'Изменить') {
        this.textOnBtn = 'Сохранить изменения'
      } else {
        this.$store.dispatch('updateTask', {
          id: this.task.id,
          description: this.description,
          date: this.date.date
          // chips: this.chips
        })

        this.textOnBtn = 'Изменить'
        // this.$router.push('/list')
      }
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
button
  margin-top: 2rem
.btn-complete
  margin-left: 1rem
</style>
