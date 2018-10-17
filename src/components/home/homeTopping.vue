<template>
    <div class="home-topping">
        <article v-for="item in toppingList">
            <div class="title">{{item.title}}</div>
            <div class="info">
                <span class="topping">置顶</span>
                <span class="site">{{item.site}}</span>
            </div>
        </article>
    </div>
</template>

<script>
	export default{
		name: 'homeTopping',
		props: ['toppingList']
	}
</script>

<style scoped>
article{
    border-bottom: 1px solid rgb(221, 217, 217);
}
.title{
    font-size: .3rem;
}
.info{
    font-size: .15rem;
}
.topping{
    color: #ee1a1a;
}
.site{
    color: #ccc;
}
</style>
