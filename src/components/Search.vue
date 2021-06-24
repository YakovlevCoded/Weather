<template>
  <v-text-field
    v-model="model"
    v-on:keyup.enter="search"
    :loading="loading"
    :error="error"
    outlined
    label="Search wather by city"
    type="text"
  >
    <template v-slot:append>
      <v-icon @click="search"> mdi-search-web </v-icon>
    </template>
  </v-text-field>
</template>

<script>
import axios from "axios";
const key = "76b8f9c8c27ad7f00855a166183a6978";

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
      this.model && this.model.length > 3 && this.loadWatherByCity(this.model);
    },
    async loadWatherByCity(v) {
      this.loading = true;
      this.error = false;

      // @TODO func to external module
      try {
        const res = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${v}&appid=${key}&units=metric`
        );
        if (res.status === 200) {
          this.$emit("city-change", res.data);
        }
      } catch (e) {
        this.error = true;
        this.model = null;
        this.$emit("city-change", null);
      }

      this.loading = false;
    },
  },
};
</script>
