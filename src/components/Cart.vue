<script setup>
import { cartStore } from '@/stores/cartStore'
const cart = cartStore()
</script>

<template>
  <aside class="cart">
    <h2>Корзина</h2>
    <div v-for="item in cart.cartItems" :key="item.title" class="cart__item">
      <img :src="item.thumbnail" class="cart__item-img" />
      <div>
        <h4>{{ item.title }}</h4>
        <p v-if="item.discountPercentage > 0">{{ item.price - Math.round(item.price * (item.discountPercentage / 100)) }} cум</p>
        <p v-else>{{ item.price }} cум</p>
      </div>
      <div class="cart__item-controls">
        <button @click="cart.removeFromCart(item.title)">-</button>
        <span>{{ item.amount }}</span>
        <button @click="cart.addToCart(item)">+</button>
      </div>
    </div>

    <div class="cart__total">
      <strong>Итог:</strong> {{ cart.totalPrice }} сумм
    </div>

    <button v-if="cart.cartItems.length > 0" class="cart__order-btn">Заказать</button>
  </aside>
</template>
<style scoped>
.cart {
  position: fixed;
  top: 80px;
  right: 20px;
  width: 300px;
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0,0,0,0.15);
  border-radius: 10px;
  padding: 20px;
  max-height: 80vh;
  overflow-y: auto;
  font-family: sans-serif;
}

.cart h2 {
  font-size: 1.5rem;
  margin-bottom: 15px;
  border-bottom: 1px solid #ddd;
  padding-bottom: 10px;
}

.cart__item {
  display: flex;
  align-items: center;
  margin-bottom: 15px;
  gap: 10px;
  padding-bottom: 10px;
  border-bottom: 1px dashed #ccc;
}

.cart__item-img {
  width: 50px;
  height: 50px;
  object-fit: cover;
  border-radius: 6px;
}

.cart__item h4 {
  font-size: 1rem;
  margin: 0;
}

.cart__item p {
  margin: 3px 0 0;
  color: #666;
  font-size: 0.9rem;
}

.cart__item-controls {
  display: flex;
  align-items: center;
  margin-left: auto;
  gap: 8px;
}

.cart__item-controls button {
  background-color: #eee;
  border: none;
  padding: 5px 10px;
  font-size: 1rem;
  border-radius: 4px;
  cursor: pointer;
  transition: background 0.2s ease;
}

.cart__item-controls button:hover {
  background-color: #ccc;
}

.cart__item-controls span {
  min-width: 20px;
  text-align: center;
  font-weight: bold;
}

.cart__total {
  margin-top: 20px;
  font-size: 1.1rem;
  text-align: right;
}

.cart__order-btn {
  margin-top: 15px;
  width: 100%;
  background-color: #28a745;
  color: white;
  font-weight: bold;
  padding: 10px;
  border: none;
  border-radius: 6px;
  font-size: 1rem;
  cursor: pointer;
  transition: background 0.2s ease;
}

.cart__order-btn:hover {
  background-color: #218838;
}
</style>
