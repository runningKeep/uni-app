<template>
	<view class="wrapper">
		<view class="cart-left">
			<view class="cart-icon-wrapper">
				<image class="cart-img" src="@/static/images/index/icon_shopping_bag.png"></image>
				<view v-if="carter.totalCount" class="total-count">{{carter.totalCount}}</view>
			</view>
			<view class="total-price">{{`￥${carter.totalPrice}`}}</view>
		</view>
		<button class="pay-btn" @tap="counter.increment" type="primary">去结算</button>
	</view>
</template>

<script setup>
import {ref,toRefs} from 'vue'
import  useCartStore,{useCounterStore} from '@/stores/cart.js'
let counter = useCounterStore()
const carter = useCartStore()
const totalCount = ref(0)
const totalPrice = ref(0)
</script>

<style scoped lang="scss">
	.wrapper{
		background-color: rgb(240, 240, 241);
		width:100vw;
		display: flex;
		position: relative;
		justify-content: space-between;
		height:100rpx;
		.cart-icon-wrapper{
			position: relative;
			margin-right:10rpx
		}
		.cart-left{
			display: flex;
			align-items: center;
		}
		.cart-img{
			width:100rpx;
			height:100rpx
		}
		.total-count{
			position: absolute;
			text-align: center;
			width:30rpx;
			height:30rpx;
			border-radius: 15rpx;
			font-size: 20rpx;
			background-color: red;
			color: #fff;
			right:0;
			top:0
		}
		.total-price{
			font-weight: 600;
		}
		.pay-btn{
			right:0;
			margin:0
		}
	}
</style>