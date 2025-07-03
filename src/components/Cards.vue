<script setup>
import { cartStore } from '@/stores/cartStore'
import { computed } from 'vue'

const props = defineProps({
  product: {
    type: Object,
    required: true
  }
})

const cart = cartStore()

const amount = computed(() => {
  const found = cart.cartItems.find(p => p.title === props.product.title)
  return found ? found.amount : 0
})

const discountedPrice = computed(() =>
  props.product.price - Math.round(props.product.price * (props.product.discountPercentage / 100))
)
</script>

<template>
  <div v-if="product.stock > 0" class="products__box-item">
    <!-- изображение и текст -->
    <div class="products__box-item-imgBox">
      <img :src="product.thumbnail" class="products__box-item-img" />
      <h3 class="products__box-item-text-title">{{ product.title }}</h3>
    </div>
    <div  class="products__box-item-text">
      <p>{{ product.brand }}</p>
      <p>Кол-во: {{ product.stock }}</p>
      <p>Цена: {{ product.price }} Сум</p>
      <p v-if="product.discountPercentage > 1">Цена со скидкой: {{ discountedPrice }} Сум</p>
      <p v-else>Скидки отсутствуют</p>
    </div>

    <!-- кнопки корзины -->
    <div class="products__box-item-cart">
      <button @click="cart.removeFromCart(product.title)">-</button>
      <output>{{ amount }}</output>
      <button @click="cart.addToCart(product)">+</button>
    </div>
  </div>
</template>


<style scoped>
.products__box-item-cart {
  margin-bottom: 1rem;
  margin-top: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
}

.products__box-item-cart button {
  background-color: #eee;
  border: none;
  padding: 5px 12px;
  font-size: 1rem;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.2s ease;
}

.products__box-item-cart button:hover {
  background-color: #ccc;
}

.products__box-item-cart output {
  min-width: 25px;
  text-align: center;
  font-weight: bold;
  font-size: 1rem;
}
</style>
