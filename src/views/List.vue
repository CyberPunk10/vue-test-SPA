<template lang="pug">
div
  h3 Список задач
  hr

  table(v-if="tasks.length")
    thead
      tr
        th #
        th Заголовк
        th Дата
        th Описание задачи
        th Теги
        th Статус
        th Открыть
    tbody
      tr(v-for="(task, idx) in tasks" :key="task.id")
        td {{ idx + 1 }}
        td {{ task.title }}
        td {{ new Date(task.date).toLocaleDateString() }}
        td
          div.text.special-fix-width {{ task.description }}
        td
          p(v-for="item of task.tags.map(item => item.tag)").post-tag
            a {{ item }}
        td {{ task.status }}
        td
          <router-link tag="button" class="btn btn-small" :to="'/task/' + task.id">Open</router-link>

  p(v-else) No tasks

</template>

<script>
export default {
  // data() {
  //   return {
  //   }
  // },
  computed: {
    tasks () {
      return this.$store.getters.tasks
    }
  }
}
</script>

<style lang="sass" scoped>
table
  margin-bottom: 8rem

.special-fix-width
  max-width: 18rem            // ограничиваем ширину

.text
  white-space: nowrap         // запрещает перенос строк
  text-overflow: ellipsis     // добавляет три точки в конце строки
  overflow: hidden            // скрывает часть непомещающегося текста

</style>
