<template>
    <header class="header">
        <h1>Ganttster</h1>
        <div id="nav">
            <router-link to="/">Home</router-link>
            <router-link to="/about">About</router-link>
        </div>
    </header>
</template>

<script>
export default {
    name: 'Header',
}
</script>

<style scoped>
.header {
    background: #333;
    color: #fff;
    text-align: center;
    padding: 10px;
}

#nav a {
    font-weight: bold;
    color: #aaa;
    padding: 0 15px;
    text-decoration: none;
}

#nav a.router-link-exact-active {
    color: #fff;
}
</style>
