<template>
  <div class="text-container">
    <v-container fluid class="bg-success">
      <v-card-text class="text">
        {{ message }}
      </v-card-text>
    </v-container>
  </div>
</template>

<script>
export default {
  name: 'LocalComponent',
  data() {
    return {
      message: "Привіт з локального компоненту!!!"
    }
  }
}
</script>

<style scoped>
.text-container {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60%;
  margin-left: 20%
}

.text {
  font-size: 16px; /* Розмір тексту */
  text-align: center; /* Вирівнювання тексту по центру */
}
</style>
