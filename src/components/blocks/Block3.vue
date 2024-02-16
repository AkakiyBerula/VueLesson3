<template>
  <div class="text-container">
    <v-container fluid class="bg-success">
      <v-card-text class="text">
        Блок з властивістю фону {{ message }}!
      </v-card-text>
    </v-container>
  </div>
</template>

<script>

export default {
  name: 'Block3',
  props: ["message"]
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