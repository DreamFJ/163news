<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
a{
  text-decoration: none;
}
.clearfix:after {
    content: "";
    display: block;
    clear: both;
    visibility: hidden;
    height: 0
}
</style>
