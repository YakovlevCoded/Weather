<template>
  <v-text-field
    v-model="model"
    v-on:keyup.enter="search"
    :loading="loading"
    :error="error"
    outlined
    label="Search weather by city"
    type="text"
  >
    <template v-slot:append>
      <v-icon @click="search"> mdi-search-web </v-icon>
    </template>
  </v-text-field>
</template>

<script>
import { getWeatherByCityName } from "../api/getWeather.js";

export default {
  data() {
    return {
      model: null,
      loading: false,
      error: false,
    };
  },
  methods: {
    search() {
      this.model && this.model.length > 2 && this.loadWeatherByCity(this.model);
    },
    async loadWeatherByCity(city) {
      this.loading = true;
      this.error = false;

      const res = await getWeatherByCityName(city);

      if (!res) {
        this.error = true;
        this.model = null;
      }

      this.$emit("city-change", res);

      this.loading = false;
    },
  },
};
</script>
