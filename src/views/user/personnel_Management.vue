<template>
    <div>
        <button @click="loginType='username'">切换1</button>
        <button @click="loginType=2">切换2</button>
        <template v-if="loginType === 'username'">
        <label>Username</label>
        <input placeholder="Enter your username" :key="1">
        </template>

        <template v-else>
        <label>Email</label>
        <input placeholder="Enter your email address" :key="2">
        </template>
        {{name1}}
        <br/>
        <button class="bnt" onclick="wj('哈哈')">调用原生</button>

        <!-- props传值 父传子 -->
        <Son :sonname='loginType'></Son>


    </div>
</template>
<script>
import Son from '../ceshi/son'
export default {
    data () {
        return{
            loginType:'username',
        }
    },
    created() {
        // alert(window.g.PUBLIC_IP)
        console.log(this.$route.params)
    },
    beforeRouteLeave(to, from, next) {
        alert('确定离开吗')
        next()
    },
    components:{
        Son
    }
}
</script>
<style scoped>

</style>
