import { ref } from 'vue'
import { defineStore } from 'pinia'
import { RealProducts } from '@/data/RealProducts.js'

export const productsStore = defineStore('products', () => {
  const products = ref([])

  const getProducts = async () => {
    // можно добавить имитацию задержки, если нужно
    // await new Promise(resolve => setTimeout(resolve, 300))
    products.value = RealProducts
  }

  return {
    products,
    getProducts
  }
})
