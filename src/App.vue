<template>
  <div id="app">
    <h1>ToDo App</h1>
    <div v-if="!name">
      <h3>Hey! Please enter your name</h3>
      <form v-on:submit="submitName">
        <input type="text" v-model="newName" placeholder="Enter name">
        <input type="submit" value="Submit">
      </form>
    </div>
    <div v-else>
      <h3>{{greeting}} {{name}}</h3>
      <p>So... what are we going to get done today? :)</p>
      <tasks></tasks>
    </div>
  </div>
</template>

<script>
import Tasks from './components/Tasks'

export default {
  name: 'App',
  components: {
    Tasks
  },
  data () {
    return {
      name: '',
      newName: '',
      greeting: ''
    }
  },
  methods: {
    submitName: function(e) {
      this.name = this.newName
      e.preventDefault();
    }
  },
  beforeMount: function () {
    let d = new Date()
    if (d.getHours() >= 12 && d.getHours() <= 24) {
      this.greeting = 'Good Afternoon'
    } else {
      this.greeting = 'Good Morning'
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  margin: 0 auto;
}
</style>
