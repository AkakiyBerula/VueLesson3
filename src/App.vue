<template>
  <div>
    <switcher />
    <HelloWorld :msg="''"/>
    <h1 class="text-center">Компоненти</h1>
    <selector />
    <AxiosAPI />   
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';
import AxiosAPI from './components/AxiosAPI.vue';
import LocalComponent from './components/LocalComponent.vue';
import Switcher from './components/Switcher.vue';
import Selector from './components/Selector.vue';

export default {
  name: 'App',
  components: {
    HelloWorld,
    AxiosAPI,
    LocalComponent,
    Switcher,
    Selector
  }
}
</script>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
