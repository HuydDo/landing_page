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


