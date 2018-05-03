<template>
  <div class="tasks">
    <div class="addtask">
      <div class="submitForm">
        <input type="text" v-model="newTask.taskName" required>
        <input id="desc" type="text" v-model="newTask.taskDesc">
        <br>
        <button id="add" v-on:click="submitTask">Submit</button>
      </div>
    </div>
    <div v-if="tasks.length === 0">
      <p>No tasks</p>
    </div>
    <div v-else class="tasklist">
      <ol>
        <li v-for="task in tasks">
          <p>{{task.taskName}} : {{task.taskDesc}}</p>
        </li>
      </ol>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Tasks',
  data () {
    return {
      newTask : {
        taskName: '',
        taskDesc: ''
      },
      tasks: []
    }
  },
  methods: {
    submitTask: function(e) {
      const addTask = {
        taskName: this.newTask.taskName,
        taskDesc: this.newTask.taskDesc
      }
      this.tasks.push(addTask);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.tasklist {
  margin: 0 auto;
  width: 80%;
}

#desc {
  width: 50%
}

#add {
  margin-top: 20px;
}

.submitform {
  margin-top: 20px;
}
</style>