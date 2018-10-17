<template>
  <div class="hello">
    <homeHeader></homeHeader>
    <homeTopping :topping-list="toppingList"></homeTopping>
    <footTab></footTab>
  </div>
</template>

<script>
import homeHeader from './home/homeHeader.vue'
import homeTopping from './home/homeTopping.vue'
import footTab from './footTab.vue'

export default {
  name: 'home',
  components: {homeHeader,footTab,homeTopping},
  data () {
    return {
      toppingList: [
        {
          title: '重阳节，重温习近平的这些暖人瞬间',
          site: '央视新闻'
        },
        {
          title: '二十多年，习近平一直牢记着这句话',
          site: '新华网'
        }
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
