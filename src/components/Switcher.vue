<template>
  <div>
    <v-container fluid class="text-center bg-success">
      
      <v-switch
        v-model="model"
        color="primary"
        :label="printMessage"
        hide-details
        inset
        class="primary--text"
      ></v-switch>

    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      model: false,
    };
  },
  methods: {
    toggleSwitch() {
      this.model = !this.model;
    }
  },
  computed: {
    printMessage() {
      if (this.model) {
        return "Перемикач увімкнений!"
      }
      else {
        return "Увімкніть перемикач!"
      }
    }
  }
};
</script>

<style scoped>

</style>
