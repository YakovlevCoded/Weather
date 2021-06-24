<template>
  <v-app>
    <v-main>
      <WeatherView />
    </v-main>
  </v-app>
</template>

<script>
import WeatherView from "./components/WeatherView";

export default {
  name: "App",

  components: {
    WeatherView,
  },

  data: () => ({
    //
  }),
};
</script>
