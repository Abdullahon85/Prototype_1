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
            </div>
        </div>
    </nav>
</template>

<script setup>
import { ref,} from 'vue'

const links = ref([
    { url: '/products', name: 'Products' }
])

</script>
