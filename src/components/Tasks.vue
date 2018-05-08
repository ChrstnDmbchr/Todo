<template>
  <div class="tasks">
    <div class="addtask">
      <div class="submitForm">
        <label for="taskname">Task name:</label><br>
        <input type="text" id="taskname" v-model="newTask.taskName" placeholder="Enter task name"><br>
        <label for="taskdesc">Task description (optional):</label><br>
        <input id="taskdesc" type="text" v-model="newTask.taskDesc" placeholder="Enter task description"><br>
        <button id="add" class="btn btn-dark" v-on:click="submitTask">Submit</button>
      </div>
    </div>
    <div v-if="tasks.length === 0" class="notasks">
      <p>No tasks</p>
    </div>
    <div v-else class="tasklist">
      <div v-for="task in tasks" class="card" style="width: 35rem;">
        <div class="card-body">
          <button class="deluser" v-on:click="deleteTask">x</button>
          <h5 class="card-title">{{task.taskName}}</h5>
          <h6 class="card-subtitle mb-2 text-muted">{{task.taskDesc}}</h6>
        </div>
      </div>
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
      this.newTask.taskName = '';
      this.newTask.taskDesc = '';
    },
    deleteTask: function () {
      this.tasks.splice(this.tasks.indexOf(this.taskName, 1))
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.tasklist {
  margin-top: 40px;
  margin: 0 auto;
  width: 80%;
  background-color: #e3e5e8;
  border-radius: 3px;
  padding-top: 9px;
  padding-bottom: 9px;
}

#add {
  margin-top: 20px;
  margin-bottom: 20px;
}

.submitform {
  margin-top: 20px;
}

#taskname {
  width: 20%;
}

#taskdesc {
  width: 40%;
}

.notasks {
  margin-top: 40px;
}

.card {
  margin: 0 auto;
  margin-top: 9px;
}

.deluser {
  position: absolute;
  border-radius: 12px;
  margin-left: 43%;
  background-color: #b51c4d;
  color: white;
}
</style>