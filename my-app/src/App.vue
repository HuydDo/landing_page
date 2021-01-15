<!--
<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
-->

<!--
<template>
<div>
  <h2>Counter</h2>
</div>
</template>


<script>
export default {
  data:counter,
};
</script>

<style>
.counter-button {
font-size: 1 rem;
padding: 5px 10px;
color: #585858
}
</style>
-->

<template>
    <div>
      <h2 class='counter'>{{counter}}</h2>
      <button @click="incrementValue" class="counter-button">Click</button>
    </div>
</template>

<script>
  export default {
    data() {
      return {
        counter: 42
      }
    },
    methods: {
      incrementValue() {
        this.counter++;
      }
    }
  };
</script>

<style>
  .counter-button {
    font-size: 1 rem;
    padding: 5px 10px;
    color: #585858
  }
</style>


