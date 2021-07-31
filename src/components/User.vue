<template>
    <div>
        <h2>我是user组件动态路由</h2>
        <h2>{{($route.params.userId)}}</h2>
    </div>
</template>

<script>
export default {
    name: "User"
}
</script>