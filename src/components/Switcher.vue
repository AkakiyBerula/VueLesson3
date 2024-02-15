<template>
  <div>
    <v-container fluid class="text-center bg-primary">
      <v-row>
        <v-col cols="4">
          <v-switch
            v-model="model"
            color="primary"
            :label="printMessage"
            hide-details
            inset
          ></v-switch>
        </v-col>

        <v-col cols="4">
          <v-switch
            v-model="showSwitch"
            color="success"
            :label="'v-show перемикач'"
            hide-details
            inset
          ></v-switch>
        </v-col>

        <v-col cols="4">
          <v-switch
            v-model="ifSwitch"
            color="danger"
            :label="'v-if перемикач'"
            hide-details
            inset
          ></v-switch>
        </v-col>
      </v-row>

      <div v-show="showSwitch" class="show-element">
        <LocalComponent />
      </div>

      <v-divider></v-divider>

      <div v-if="ifSwitch" class="if-element">
        <GlobalComponent />
      </div>

    </v-container>
  </div>
</template>

<script>
import LocalComponent from './LocalComponent.vue';
export default {
  name: "Switcher",
  components: {
    LocalComponent
  },
  data() {
    return {
      model: false,
      showSwitch: true,
      ifSwitch: true
    };
  },
  methods: {
    toggleSwitch() {
      this.model = !this.model;
    },
    toggleShowSwitch() {
      this.showSwitch = !this.showSwitch;
    },
    toggleIfSwitch() {
      this.showSwitch = !this.showSwitch;
    },
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
