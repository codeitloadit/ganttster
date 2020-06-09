<template>
    <div>
        <div v-bind:key="todo.id" v-for="todo in allTodos">
            <TodoItem v-bind:todo="todo" v-on:del-todo="$emit('del-todo', todo.id)" />
        </div>
    </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'
import TodoItem from './TodoItem'

export default {
    name: 'Todos',
    components: {
        TodoItem,
    },
    methods: {
        ...mapActions(['fetchTodos']),
    },
    computed: mapGetters(['allTodos']),
    created() {
        this.fetchTodos()
    },
}
</script>

<style scoped></style>
