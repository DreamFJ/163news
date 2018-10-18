<template>
    <div class="home-topping">
        <article class="topping-list" v-for="item in toppingList">
            <a href="#">
                <div class="title">{{item.title}}</div>
                <div class="info">
                    <span class="topping">置顶</span>
                    <span class="site">{{item.site}}</span>
                </div>
            </a>
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
.topping-list{
    padding: .25rem;
    border-bottom: 1px solid rgb(221, 217, 217);
}
.title{
    font-size: .35rem;
    line-height: .5rem;
    font-family: PingFangSC-Medium, "Source Han Sans CN", sans-serif;
    color: rgb(63, 65, 70);
    margin-bottom: .15rem;
}
.info{
    font-size: .25rem;
}
.topping{
    color: rgb(232, 102, 102);
    font-weight: 100;
    margin-right: .16rem;
}
.site{
    color: rgb(155, 158, 163);
}
</style>
