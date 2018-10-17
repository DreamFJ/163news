<template>
  <div class="hello">
    <homeHeader></homeHeader>
    <footTab></footTab>
  </div>
</template>

<script>
import homeHeader from './home/homeHeader.vue'
import footTab from './footTab.vue'

export default {
  name: 'home',
  components: {homeHeader,footTab},
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
