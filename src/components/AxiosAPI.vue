<template>
  <div>
    <v-container>
    </v-container>
  </div>
</template>

<script>

import axiosInstance from "../../services/axios";


export default {
  name: 'AxiosAPI',
  data() {
    return {
      products: []
    }
  },
  methods: {
    getProductsAPI() {
      axiosInstance.get("/products")
        .then(response => {
          this.products = response.data
          console.log(this.products)
        })
        .catch(error => {
          console.log(error)
        })
    }
  },
  mounted() {
    this.getProductsAPI();
  }
}

</script>

<style scoped>

</style>