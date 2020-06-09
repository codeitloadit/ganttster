<template>
    <div class="todo-item" v-bind:class="{'is-complete': todo.completed}">
        <p>
            <input type="checkbox" v-on:change="markComplete" />
            {{ todo.title }}
            <i class="fas fa-trash-alt del" @click="delTodo"></i>
        </p>
    </div>
</template>

<script>
import {mapActions} from 'vuex'
export default {
    name: 'TodoItem',
    props: ['todo'],
    methods: {
        ...mapActions(['deleteTodo']),
        delTodo() {
            this.deleteTodo(this.todo.id)
        },
        markComplete() {
            this.todo.completed = !this.todo.completed
        },
    },
}
</script>

<style scoped>
.todo-item {
    background: #f4f4f4;
    padding: 10px;
    border-bottom: 1px dotted #ccc;
}

.is-complete {
    text-decoration: line-through;
}

.del {
    color: #f00000;
    padding: 5px 9px;
    cursor: pointer;
    float: right;
}
</style>
