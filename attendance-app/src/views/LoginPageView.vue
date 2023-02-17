<script>
import { RouterLink } from "vue-router";
export default {
  name: "LoginPage",
};
</script>
<template>
  <div
    class="mb-4"
    style="
      width: 200px;
      height: 200px;
      background: #537fe7;
      border-radius: 0 0 200px 0;
    "
  ></div>
  <div class="container">
    <h4 style="font-size: 25px" class="fw-normal">Welcome!</h4>
    <h1 style="font-size: 50px">Login</h1>
    <div class="d-flex flex-column gap-2 py-4">
      <input type="email" class="form-control" placeholder="Email" />
      <input type="password" class="form-control" placeholder="Password" />
    </div>
    <button
      @click.prevent="this.$router.push('/home')"
      type="button"
      class="btn text-white fw-semibold"
      style="background: #537fe7; min-width: 100%"
    >
      Login
    </button>
  </div>
</template>
