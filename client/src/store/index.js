import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'
import router from '../router/index'
import { socketStore } from "./socketStore"

Vue.use(Vuex)

//Allows axios to work locally or live
let base = window.location.host.includes('localhost:8080') ? '//localhost:3000/' : '/'

let api = Axios.create({
  baseURL: base + "api",
  timeout: 3000,
  withCredentials: true
})

export default new Vuex.Store({
  state: {
    user: {},
    boards: [],
    activeBoard: {},
    lists: [],
    tasks: {}
  },
  mutations: {
    setUser(state, user) {
      state.user = user
    },
    setBoards(state, boards) {
      state.boards = boards
    },
    setActiveBoard(state, board) {
      state.activeBoard = board
    },

    setList(state, list) {
      state.lists = list
    },
    deleteList(state, id) {
      state.lists = state.lists.filter(c => c._id != id)
    },
    addList(state, list) {
      state.lists.push(list)
    },
    addTask(state, task) {
      state.tasks[task.listId].push(task)
    },
    moveTask(state, task) {
      let tesk = task.task;
      state.tasks[task.task.listId].push(tesk)
      state.tasks[task.oldList] = state.tasks[task.oldList].filter(c => c.id != task.task.id)
    },
    editTask(state, task) {
      state.tasks[task.listId] = state.tasks[task.listId].filter(t => t.id != task.id)
      state.tasks[task.listId].push(task)
    },
    deleteTask(state, task) {
      state.tasks[task.listId] = state.tasks[task.listId].filter(c => c.id != task.id)
    },
    setTasks(state, tasks) {
      Vue.set(state.tasks, tasks.listId, tasks.tasks)
    }
  },
  actions: {
    //#region -- AUTH STUFF --
    setBearer({ }, bearer) {
      api.defaults.headers.authorization = bearer;
    },
    resetBearer() {
      api.defaults.headers.authorization = "";
    },
    async getProfile({ commit }) {
      try {
        let res = await api.get("/profile")
        commit("setUser", res.data)
      } catch (err) {
        console.error(err)
      }
    },
    //#endregion


    //#region -- BOARDS --
    getBoards({ commit, dispatch }) {
      api.get('boards')
        .then(res => {
          commit('setBoards', res.data)
        })
    },
    async setActiveBoard({ commit }, boardId) {
      let board = await api.get(`boards/${boardId}`);
      commit("setActiveBoard", board.data);
    },
    addBoard({ commit, dispatch }, boardData) {
      api.post('boards', boardData)
        .then(serverBoard => {
          dispatch('getBoards')
        })
    },
    async editBoard({ dispatch }, update) {
      await api.put(`boards/${update.id}`, update)
      dispatch("getBoards")
    },
    async deleteBoardById({ commit, dispatch }, boardId) {
      await api.delete(`boards/${boardId}`)
      dispatch("getBoards")
    },
    //#endregion


    //#region -- LISTS --

    getList({ commit }, boardId) {
      api.get(`boards/${boardId}/lists`)
        .then(res => {
          commit('setList', res.data)
        })
    },

    createList({ commit }, list) {
      api.post('lists', list)
    },
    async deleteList({ commit, dispatch }, list) {
      await api.delete(`lists/${list.id}`)
    },
    async createTask({ commit }, task) {
      let tasks = await api.post('tasks', task)
    },
    async getTasksByListId({ commit }, id) {
      let tasks = await api.get(`lists/${id}/tasks`);
      commit("setTasks", { tasks: tasks.data, listId: id });
    },
    async deleteTaskById({ commit, dispatch }, task) {
      await api.delete(`tasks/${task.id}`);
    },
    async createComment({ commit, dispatch }, comment) {
      await api.post(`tasks/${comment.taskId}/comments`, comment)
    },
    async deleteComment({ dispatch }, commentDict) {
      await api.delete(`tasks/${commentDict.taskId}/comments/${commentDict.commentId}`)
    },

    async changeList({ dispatch }, bananaId) {
      await api.put(`tasks/${bananaId.taskId}`, { listId: bananaId.listId })
      dispatch("getTasksByListId", bananaId.listId)
    }


    //#endregion

  },
  modules: {
    socketStore
  }
})
