<template>
	<view class="wrapper">
	<view class="item" v-for="item in list">
		<navigator :url="`/pages/order-list/detail?item=${JSON.stringify(item)}`" hover-class="navigator-hover">
		<text>{{item.name}}</text>
		<text>{{item.price}}</text>
		</navigator>
	</view> 
	</view>
</template>

<script setup>
import { ref } from 'vue'
import { onReady } from '@dcloudio/uni-app'
const mockData = [
	{
		name:'鼠标',
		weight:34,
		price:100,
		id:1
	},
	{
		name:'键盘',
		weight:77,
		price:234,
		id:2
	},{
		name:'显示器',
		weight:34,
		price:1299,
		id:3
	},
]
const title = ref('Order-list')
const list = ref(mockData)
onReady(() => {
  console.log('onReady')
})
</script>

<style scoped lang="scss">
	.wrapper{
		padding:10px 10px 0 10px;
	}
.item{
	border:1px solid skyblue;
	margin-bottom:5px;
	padding:0 5px
}
</style>
