<template>
  <div class="container">
    <nav class="navbar">
      <div class="navbar-brand">
        <router-link to="/" class="navbar-item">Expenses</router-link>
        <router-link to="/earnings" class="navbar-item">Earnings</router-link>
      </div>
    </nav>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>
@import "bulma/css/bulma.css";
</style>
