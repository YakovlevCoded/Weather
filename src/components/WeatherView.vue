<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="6">
        <Search @city-change="changeCity" />
      </v-col>

      <template v-if="city">
        <v-tabs>
          <v-tab @click="mode = 'current'">Current</v-tab>
          <v-tab @click="mode = 'forecast'">7 days forecast</v-tab>
        </v-tabs>

        <v-col cols="12" v-if="mode === 'current'">
          <CurrentWeather :city="city" />
        </v-col>

        <v-col cols="12" v-else>
          <ForecastWeather :city="city" />
        </v-col>
      </template>

      <template v-else>
        <v-col cols="6">
          <v-alert border="right" color="blue-grey" dark>
            We haven't the city already yet. Please, input the city name.
          </v-alert>
        </v-col>
      </template>
    </v-row>
  </v-container>
</template>

<script>
import Search from "./Search.vue";
import CurrentWeather from "./CurrentWeather.vue";
import ForecastWeather from "./ForecastWeather.vue";

export default {
  name: "HelloWorld",
  components: {
    Search,
    CurrentWeather,
    ForecastWeather,
  },
  data() {
    return {
      city: null,
      mode: "current",
    };
  },
  methods: {
    changeCity(city) {
      console.log(city);
      this.city = city;
    },
  },
};
</script>
