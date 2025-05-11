<template>
	<view ref="detail">
		details
	</view>
	<text id="a">text</text>
</template>

<script setup>
	import {ref,getCurrentInstance,onUnmounted} from 'vue'
	import { onLoad,onReady} from '@dcloudio/uni-app'
	// const instance = getCurrentInstance();
	const detail = ref()
	onLoad((option)=>{	
		// const item = JSON.parse(option.item)
		// console.log(option.item,'item')
		// console.log(detail,'onLoad')
		// let dom = document.querySelector('#a')
		// console.log(dom,'dom--onload')
		console.log(option,'option')
		
	})
  onUnmounted(()=>{
    console.log('detail Unmounted')
  })
	onReady((e)=>{
		// console.log(detail,'ready')
		// let dom = document.querySelector('#a')
		// console.log(dom,'dom')
    
		// const query = uni.createSelectorQuery().in(instance.proxy);
		// query
		//   .select("#a")
		//   .boundingClientRect((data) => {
		//     console.log("得到布局位置信息" + JSON.stringify(data));
		//     console.log("节点离页面顶部的距离为" + data.top);
		//   })
		//   .exec();
	})
</script>

<style>

</style>
