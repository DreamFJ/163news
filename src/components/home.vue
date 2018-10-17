<template>
  <div class="hello">
    <homeHeader></homeHeader>
    <homeTopping :topping-list="toppingList"></homeTopping>
  </div>
</template>

<script>
import homeHeader from './home/homeHeader.vue'
import homeTopping from './home/homeTopping.vue'

export default {
  name: 'home',
  components: {homeHeader,homeTopping},
  data () {
    return {
      toppingList: [
        {
          title: '尊老敬贤，总书记情意浓浓',
          site: '新华网'
        },
        {
          title: '国家扶贫日，让我们牢记习近平总书记的扶贫金句',
          site: '人民网'
        }
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
