import Axios from 'axios'

export default {
    state: {
        todos: [],
    },
    getters: {
        allTodos: (state) => state.todos,
    },
    mutations: {
        setTodos: (state, todos) => (state.todos = todos),
        newTodo: (state, todo) => state.todos.unshift(todo),
        removeTodo: (state, id) => (state.todos = state.todos.filter((todo) => todo.id !== id)),
    },
    actions: {
        async fetchTodos({commit}) {
            const response = await Axios.get('https://jsonplaceholder.typicode.com/todos?_limit=5')

            commit('setTodos', response.data)
        },
        async addTodo({commit}, title) {
            const response = await Axios.post('https://jsonplaceholder.typicode.com/todos', {
                title,
                completed: false,
            })

            commit('newTodo', response.data)
        },
        async deleteTodo({commit}, id) {
            await Axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)

            commit('removeTodo', id)
        },
        async filterTodos({commit}, event) {
            const response = await Axios.get(`https://jsonplaceholder.typicode.com/todos?_limit=${event.target.value}`)

            commit('setTodos', response.data)
        },
    },
}
