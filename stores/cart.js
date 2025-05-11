import { defineStore } from 'pinia';
import {ref,computed} from 'vue'
export const useCounterStore = defineStore('counter', () => {
	console.log('ss')
	const count = ref(0);
	
	function increment() {
		count.value++;
	}

	return { count, increment };
});
export default defineStore('cart',()=>{
	const productList = ref([])
	let totalCount = computed(()=>{
		return productList.value.reduce((cal,cur)=>cal+cur.count,0)
	})
	let totalPrice = computed(()=>{
		return productList.value.reduce((cal,cur)=>cal+cur.count*cur.price,0)
	})
	const addProduct = (product)=>{
		let target = productList.value.find(item=>item.id===product.id)
		if(target){
			target.count++
		}else{
			productList.value.push({...product,count:1})
		}
	}
	const delProduct = (id)=>{
		let index = productList.value.findIndex(item=>item.id===id)
		if(index>-1){
			let target = productList.value[index]
			if(target.count<2){
				productList.value.splice(index,1)
			}else{
				target.count--
			}
		}
	}
	const getItemCount = (id)=>{
		let target = productList.value.find(item=>item.id===id)
		return target?.count||0
	}
	return{
		totalCount,
		totalPrice,
		addProduct,
		delProduct,
		getItemCount
	}

})
