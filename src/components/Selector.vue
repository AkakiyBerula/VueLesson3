<template>
  <div>
    <v-container>
      <v-select
        v-model="selectedComponent"
        :items="components"
        label="Виберіть колір"
      ></v-select>

      <div v-if="selectedComponent === 'primary'" class="if-element">
        <Block1 :message="selectedComponent" />
      </div>

      <div v-if="selectedComponent === 'danger'" class="if-element">
        <Block2 :message="selectedComponent" />
      </div>

      <div v-if="selectedComponent === 'success'" class="if-element">
        <Block3 :message="selectedComponent" />
      </div>
    </v-container>
  </div>
</template>

<script>
import Block1 from '@/components/blocks/Block1.vue';
import Block2 from '@/components/blocks/Block2.vue';
import Block3 from '@/components/blocks/Block3.vue';

export default {
  name: "Selector",
  components: {
    Block1,
    Block2,
    Block3
  },
  data() {
    return {
      selectedComponent: null, 
      components: ['primary', 'danger', 'success']
    };
  }
};
</script>

<style scoped>

</style>

