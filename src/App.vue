<template>
  <div id="app">
    <h1>ToDo App</h1>
    <div v-if="!name">
      <h3>Hey! Please enter your name</h3>
      <form v-on:submit="submitName">
        <input id="name" type="text" v-model="newName" placeholder="Enter name"><br>
        <button type="submit" class="btn btn-dark">Submit</button>
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

input[type=text], select {
    width: 60%;
    padding: 12px 20px;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
    text-align: center;
}

#name {
  width:20%;
}
</style>
