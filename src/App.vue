<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <v-btn outlined href="https://github.com/YakovlevCoded"
        ><v-icon class="mr-2">mdi-github</v-icon>Weather App</v-btn
      >
      <v-spacer></v-spacer>
    </v-app-bar>
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
