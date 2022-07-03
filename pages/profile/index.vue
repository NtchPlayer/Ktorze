<template>
  <main class="main-section">
    <p>Profile</p>
  </main>
</template>

<script>
export default {
  name: 'Profile',
  middleware: 'auth'
}
</script>

<style>
.main-section{
  padding-top: 70px;
}
</style>
