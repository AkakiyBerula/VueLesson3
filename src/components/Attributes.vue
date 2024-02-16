<template>
  <div>
    <v-container>
      <v-row>
        <v-col cols="3">
          <v-btn 
            class="btn"
            color="orange-lighten-2"
            :disabled="isDisabled"
            @click="disableButton"
          >
            Заблокувати кнопку
          </v-btn>
        </v-col>

        <v-col cols="3">
          <v-btn 
            class="btn"
            color="orange-lighten-2"
            @click="changeTextColor"
          >
            Змінити колір тексту
          </v-btn>
        </v-col>

        <v-col cols="6">
          <div
            class="text"
            :class="{ orange: colorText === 'orange' }"
          >
            <p class="text">Оранжевий текст</p>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isDisabled: false,
      colorText: ''
    };
  },
  methods: {
    disableButton() {
      this.isDisabled = !this.isDisabled;
    },
    changeTextColor() {
      this.colorText = this.colorText === 'orange' ? '' : 'orange';
    }
  },
  watch: {
    isDisabled(newValue, oldValue) {
      console.log(newValue, oldValue)
      console.log("Кнопка заблокована")
    }
  }
};
</script>

<style>
.btn {
  padding: 10px 20px;
  background-color: lightblue;
  border: none;
  cursor: pointer;
  margin-bottom: 10px;
}
.orange {
  color: orange;
}
.text {
  font-size: 20px;
  text-align: center;
}
</style>



