<template>
  <div class="hello">
    <homeHeader></homeHeader>
  </div>
</template>

<script>
import homeHeader from './home/homeHeader.vue'

export default {
  name: 'HelloWorld',
  components: {homeHeader},
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
