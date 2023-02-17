<script>
import Navbar from "../components/Navbar.vue";
import Profile from "../components/Profile.vue";
import { LMap, LTileLayer, LMarker } from "@vue-leaflet/vue-leaflet";

export default {
  name: "homePage",
  data() {
    return {
      zoom: 17,
      user_lat: -6.220550360858781,
      user_long: 106.80993581216246,
    };
  },
  components: { Navbar, Profile, LMap, LTileLayer, LMarker },
  methods: {
    getLocation() {
      console.log("first");
      setTimeout(() => {
        navigator.geolocation.getCurrentPosition(
          this.success,
          this.errorPosition
        );
      }, 200);
    },
    success(position) {
      const { latitude, longitude } = position.coords;
      this.user_lat = latitude;
      this.user_long = longitude;
    },

    errorPosition(err) {
      console.log(err);
    },
  },
  created() {
    this.getLocation();
  },
};
</script>
<template>
  <Navbar />
  <div class="container pt-3" style="height: 90vh">
    <Profile />
    <div class="d-flex flex-column align-items-center mt-4">
      <p class="time m-0 fw-semibold" style="font-size: 48px">07:48 AM</p>
      <p>Fri, 17 Feb 2023</p>
      <div class="d-flex flex-column gap-5">
        <div class="card" style="height: 340px; width: 340px">
          <LMap ref="map" v-model:zoom="zoom" :center="[user_lat, user_long]">
            <LTileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              layer-type="base"
              name="OpenStreetMap"
            ></LTileLayer>
            <LMarker :lat-lng="[user_lat, user_long]"></LMarker>
          </LMap>
        </div>
        <button
          type="button"
          class="btn text-white fw-semibold"
          style="background: #537fe7; min-width: 100%"
        >
          Clock In
        </button>
      </div>
    </div>
  </div>
</template>
