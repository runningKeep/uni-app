<template>
	<uni-countdown :day="1" :hour="1" :minute="12" :second="40"></uni-countdown>
	order
	<button @tap="viewDetail">detail</button>
	<button @tap="reLanch">reLaunch</button>
</template>

<script setup>
import { onReady,onHide,onShow,onPullDownRefresh } from '@dcloudio/uni-app'
import{onUnmounted} from 'vue'
const viewDetail = ()=>{
	uni.navigateTo({
		url:'/pages/order/order-detail?id=34'
	})
}
const reLanch = ()=>{
	uni.reLaunch({url:'/pages/order/order'})
}
onUnmounted(()=>{
	console.log('unmounted')
})
</script>

<style>
</style>