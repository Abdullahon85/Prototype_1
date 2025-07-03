<template>
    <nav class="nav">
        <div class="container">
            <div class="nav__box">
                <ul class="nav__box-list">
                   <router-link 
                   v-for="link in links"
                   :key="link.name"
                   :to="link.url"
                   class="nav__box-list-link"
                   >{{ link.name }}</router-link>
                </ul>
                <div ref="wrapper" class="relative">
    <!-- Иконка корзины -->
    <div @click.stop="toggleCart" class="cursor-pointer fixed top-4 right-4 z-50">
      <img src="/public/images/icons8-shopping-cart-48.png" alt="cart-icon" />
    </div>

    <!-- Корзина (появляется/исчезает) -->
    <Cart v-if="isOpen" class="fixed top-12 right-4 z-40" />
  </div>
            </div>
        </div>
    </nav>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount} from 'vue'
import Cart from '@/components/Cart.vue'
const links = ref([
    { url: '/products', name: 'Products' }
])
const isOpen = ref(false)
const wrapper = ref(null)

const toggleCart = () => {
  isOpen.value = !isOpen.value
}

const handleClickOutside = (e) => {
  if (wrapper.value && !wrapper.value.contains(e.target)) {
    isOpen.value = false
  }
}

onMounted(() => document.addEventListener('click', handleClickOutside))
onBeforeUnmount(() => document.removeEventListener('click', handleClickOutside))


</script>
<style scoped>
.nav_box{
    display: flex;
    justify-content: space-between;
}
</style>