<template>
  <div>
    <h2 class="h2 pb-6">{{ city.name }}</h2>
    <v-row v-if="weather && weather.daily">
      <v-col v-for="day in weak" :key="day.dt" xs="12" sm="6" md="6" lg="3">
        <v-card max-width="400" class="pa-6">
          <div class="d-flex justify-center" max-width="200">
            <v-img
              :src="`/images/${day.weather[0].main}.png`"
              alt="Sunny image"
              width="92"
              max-width="92"
            ></v-img>
          </div>
          <v-card-title class="justify-center">
            Avg temp:
            {{ (day.temp.max + day.temp.min) | avgTemp }}</v-card-title
          >
          <v-card-subtitle> {{ day.weather[0].description }}</v-card-subtitle>
          <v-card-text> {{ day.dt | toDate }}</v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <v-alert dense type="info" v-else>Loading...</v-alert>
  </div>
</template>

<script>
import { getWeekWeatherByCity } from "../api/getWeather.js";
import moment from "moment";

export default {
  props: {
    city: {
      type: Object,
      required: true,
    },
  },
  async created() {
    this.weather = await getWeekWeatherByCity(this.city);
    console.log(this.weather);
  },
  data() {
    return {
      weather: null,
    };
  },
  computed: {
    weak() {
      return this.weather.daily.filter((day, index) => index < 7);
    },
  },
  filters: {
    toDate: function (value) {
      if (!value) return "";
      let date = new Date(value * 1000);
      return moment(date).format("YYYY-MM-DD");
    },
    avgTemp: function (temp) {
      if (!temp) {
        return "";
      }
      return (temp / 2).toFixed(1);
    },
  },
};
</script>
