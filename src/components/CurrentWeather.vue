<template>
  <v-card>
    <v-list-item two-line>
      <v-list-item-content>
        <v-list-item-title class="text-h5"> {{ city.name }} </v-list-item-title>
        <v-list-item-subtitle> {{ city.weather[0].main }}</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>

    <v-card-text>
      <v-row align="center">
        <v-col class="text-h2" cols="6">
          {{ city.main.temp.toFixed(0) }}&deg;C
        </v-col>
        <v-col cols="6">
          <v-img
            :src="`/images/${city.weather[0].main}.png`"
            alt="Sunny image"
            width="92"
          ></v-img>
        </v-col>
      </v-row>
    </v-card-text>

    <v-list-item>
      <v-list-item-icon>
        <v-icon>mdi-send</v-icon>
      </v-list-item-icon>
      <v-list-item-subtitle>{{ city.wind.speed }} km/h</v-list-item-subtitle>
    </v-list-item>

    <v-list-item>
      <v-list-item-icon>
        <v-icon>mdi-cloud-download</v-icon>
      </v-list-item-icon>
      <v-list-item-subtitle>{{ city.main.humidity }}%</v-list-item-subtitle>
    </v-list-item>
  </v-card>
</template>

<script>
export default {
  props: {
    city: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      labels: ["SU", "MO", "TU", "WED", "TH", "FR", "SA"],
      time: 0,
      forecast: [
        {
          day: "Tuesday",
          icon: "mdi-white-balance-sunny",
          temp: "24\xB0/12\xB0",
        },
        {
          day: "Wednesday",
          icon: "mdi-white-balance-sunny",
          temp: "22\xB0/14\xB0",
        },
        { day: "Thursday", icon: "mdi-cloud", temp: "25\xB0/15\xB0" },
      ],
    };
  },
};
</script>
