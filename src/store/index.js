import { createStore } from 'vuex'

export default createStore({
  state: {
    tasks: JSON.parse(localStorage.getItem('tasks') || '[]')
  },

  getters: {
    tasks: state => state.tasks,
    taskById: s => id => s.tasks.find(t => t.id === id)
  },

  mutations: {
    createTask (state, task) {
      state.tasks.push(task)

      localStorage.setItem('tasks', JSON.stringify(state.tasks))
    },
    updateTask (s, { id, description, date }) {
      const tasks = s.tasks.concat()

      const idx = tasks.findIndex(t => t.id === +id)
      const task = tasks[idx]

      const status = new Date(date) > new Date() ? 'active' : 'outdated'

      tasks[idx] = { ...task, date, description, status }

      s.tasks = tasks

      localStorage.setItem('tasks', JSON.stringify(s.tasks))
    }
  },

  actions: {
    createTask ({ commit }, task) {
      commit('createTask', task)
    },
    updateTask ({ commit }, task) {
      commit('updateTask', task)
    }
  },

  modules: {
  }
})
