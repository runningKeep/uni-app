<template>
	<view class="content">
		<image class="logo" src="/static/logo.png"></image>
		<view class="text-area">
			<text class="title">{{title}}</text>
		</view>
	</view>
	<view class="scroll-wrapper">
		<scroll-view class="menu-bar" scroll-y scroll-with-animation>
			<view class="wrapper">
				<view class="menu-item" @tap="handleMenuSelected(category.id)" 
					  :class="{active: currentCategoryId == category.id}" v-for="(category, index) in categories" :key="index">
					<!-- <image :src="category.category_image_url" class="image" mode="widthFix"></image> -->
					<view class="title">{{ category.name }}</view>
				</view>
			</view>
		</scroll-view>
		<scroll-view class="content-wrapper" scroll-y scroll-with-animation>
			<view class="wrapper">
				<ShoppingCard v-for="card in cards" :detail="card" :key="card.id"/>
			</view>
		</scroll-view>
	</view>
	<ShoppingCart class="cart"/>
</template>

<script setup>
import { ref } from 'vue'
import { onReady } from '@dcloudio/uni-app'
import {categories as mCategories,mcards} from './mock.js'
import ShoppingCard from './components/ShoppingCard.vue'
import ShoppingCart from './components/ShoppingCart.vue'
const title = ref('Hello-app')
onReady(() => {
  console.log('onReady')
})

const categories = ref([])
const currentCategoryId = ref('')
const cards = ref([])
cards.value = mcards
categories.value = mCategories
</script>


<style lang="scss">
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 24rpx;
		color: #8f8f94;
	}
	.scroll-wrapper{
		display: flex;
		max-height:calc(100vh - 100rpx)
	}
	.content-wrapper{
		flex:1;
	}
	.menu-bar{
		width:100px;
		background-color: #f5f5f5;
		// max-height: 200px;
		.menu-item{
			height:80px;
			display: flex;
			align-items: center;
			justify-content: center;
		}
	}
	.cart{
		position: fixed;
		bottom: 100rpx;
	}
</style>
