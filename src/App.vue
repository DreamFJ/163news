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
.gap{
    height: .15rem;
    background-color: rgb(244, 244, 244);
    font-size: 0;
}
</style>
