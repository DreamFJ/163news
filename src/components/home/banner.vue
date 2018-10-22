<template>
    <div class="banner">
        <ul>
            <li>
                <a href="#"><img src="../../../static/imgs/banner.jpg" alt="banner"></a>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'banner',
    data () {
        return {

        }
    }
}
</script>

<style scoped>
.banner{
    width: 94%;
    margin: 0 3%;
    margin-bottom: 42px;
}
.banner li,.banner a{
    display: inline-block;
    width: 100%;
}
.banner li{
    white-space: nowrap;
}
.banner img{
    width: 100%;
}
</style>

