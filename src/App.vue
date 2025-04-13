<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
      <nav>
        <RouterLink class="rButtons" to="/">Home</RouterLink>
        <RouterLink to="/PushFold">PushFold</RouterLink>
      </nav>
  <RouterView />
</template>

<style scoped>
.rButtons{
  color: red;
}
</style>
