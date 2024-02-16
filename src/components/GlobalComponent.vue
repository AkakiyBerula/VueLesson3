<template>
  <div class="text-container">
    <v-container fluid class="bg-info">
      <v-card-text class="text">
        {{ message }}
      </v-card-text>
    </v-container>
  </div>
</template>

<script>
export default {
  name: 'GlobalComponent',
  data() {
    return {
      message: "Привіт з глобального компоненту!!!"
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
  font-size: 16px;
  text-align: center;
}
</style>
