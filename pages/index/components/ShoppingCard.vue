<template>
	<view class="wrapper">
		<image :src="detail.url"></image>
		<view class="card-content">
			<view class="name">{{detail.name}}</view>
			<view class="count">{{`月售${detail.saleCount}`}}</view>
			<view>
				<!-- <uni-tag v-for="tag in detail.tags" :text="{{tag.tag}}" type="primary"></uni-tag> -->
			</view>
			<view class="card-bottom">
				<view>￥{{detail.price}}</view>
				<view>
					<template  v-if="itemCount()">
						<text class="decress" @tap="decress">-</text>
						<text class="check-count">{{itemCount()}}</text>
					</template>
					<text @tap="add">+</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script setup>
	import { ref,computed } from 'vue'
import  useCartStore from '@/stores/cart.js'
const props = defineProps({
		detail:{
			type:Object,
			default:{}
		}
	})
const count = ref(0)
const carter = useCartStore()
const add = ()=>{
	carter.addProduct(props.detail)
	}
const decress = ()=>{
	carter.delProduct(props.detail.id)
}
const itemCount = ()=>{
	return carter.getItemCount(props.detail.id)
}
</script>

<style scoped lang="scss">
	.wrapper{
		height:200rpx;
		display: flex;
		image{
			width:40%;
			border-radius: 8px;
			object-fit: cover;
			height:200rpx;
			flex-shrink: 0;
		}
		.card-content{
			flex:1;
			padding:20rpx
		}
		.name{
			
		}
		.count{
			font-size: 25rpx;
			color: gray;
		}
		.check-count{
			margin: 0 10rpx
		}
		.decress{
			color:red
		}
	}
	.card-bottom{
		display: flex;
		justify-content: space-between;
		font-weight: 600;
	}
</style>