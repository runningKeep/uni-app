<template>
	<view>home</view>
	<view>{{counter.count}}</view>
</template>

<script setup>
	import {useCounterStore} from '@/stores/cart.js'
	let counter = useCounterStore()
</script>

<style>
</style>