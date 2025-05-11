<template>
	<view>home</view>
	<view>{{count}}</view>
	<view>{{value()}}</view>
	<button @tap="add">add</button>
	<button @tap="switchTab('/pages/index/index')">index</button>
	<button @tap="switchTab('/pages/order/order')">index</button>
	<view class="aa"></view>
</template>

<script setup>
import {ref,onUnmounted,onMounted} from 'vue'
import {useCounterStore} from '@/stores/cart.js'
import { onReady,onHide,onShow,onPullDownRefresh } from '@dcloudio/uni-app'
uni.onAppShow(()=>{
	// console.log('onShow99')
})
onReady(()=>{
	console.log('onReady')
})
onHide(()=>{
	console.log('onPageHide')
})
onShow(()=>{
	console.log('onPageShow')
})
onPullDownRefresh(()=>{
	console.log('pull')
})
const switchTab = (url)=>{
	uni.switchTab({
	url
});
}
let counter = useCounterStore()
let count = ref(0)
const add = ()=>count.value++
const value = ()=>{
	let a = count.value
	let b = a+1
	return count.value
}
onMounted(()=>{
	console.log('Mounted')
})
onUnmounted(()=>{
	console.log('unMounted')
})
</script>

<style lang="scss">
.aa{
	height:500px
}
</style>