import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const cartStore = defineStore('cart', () => {
  const cartItems = ref([])

  const addToCart = (product) => {
    const found = cartItems.value.find(item => item.title === product.title)
    if (found) {
      if (found.amount < found.stock) found.amount++
    } else {
      cartItems.value.push({
        ...product,
        amount: 1
      })
    }
  }

  const removeFromCart = (productId) => {
    const found = cartItems.value.find(item => item.title === productId)
    if (found && found.amount > 1) {
      found.amount--
    } else {
      cartItems.value = cartItems.value.filter(item => item.title !== productId)
    }
  }

  const totalCount = computed(() =>
    cartItems.value.reduce((acc, item) => acc + item.amount, 0)
  )

  const totalPrice = computed(() =>
    cartItems.value.reduce((acc, item) =>
      acc + item.amount * Math.round(item.price - item.price * (item.discountPercentage / 100)), 0)
  )

  return {
    cartItems,
    addToCart,
    removeFromCart,
    totalCount,
    totalPrice
  }
})
