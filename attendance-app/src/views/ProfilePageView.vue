<script>
import Navbar from "../components/Navbar.vue";

export default {
  components: { Navbar },
};
</script>
<template>
  <Navbar />
  <div class="container pt-3" style="height: 90vh">
    <div class="d-flex flex-column align-items-center">
      <img
        class="rounded-circle shadow"
        alt="avatar2"
        style="width: 140px; height: 140px"
        src="https://mdbcdn.b-cdn.net/img/new/avatars/1.webp"
      />
      <div class="text-center py-4">
        <h1 class="m-0" style="font-size: 24pt">Varian Atras Xavier</h1>
        <p class="text-secondary" style="font-size: 14pt">Web Developer</p>
      </div>
      <h3 style="color: #537fe7">Basic Information</h3>
      <table class="table my-4">
        <tbody>
          <tr>
            <td class="text-start" style="font-size: 14pt">Employee ID</td>
            <td class="text-end text-secondary" style="font-size: 14pt">
              130512389
            </td>
          </tr>
          <tr>
            <td class="text-start" style="font-size: 14pt">Phone</td>
            <td class="text-end text-secondary" style="font-size: 14pt">
              08987654321
            </td>
          </tr>
          <tr>
            <td class="text-start" style="font-size: 14pt">Email</td>
            <td class="text-end text-secondary" style="font-size: 14pt">
              atrasx@gmail.com
            </td>
          </tr>
          <tr>
            <td class="text-start" style="font-size: 14pt">Date of Birth</td>
            <td class="text-end text-secondary" style="font-size: 14pt">
              15 Sep 1995
            </td>
          </tr>
          <tr>
            <td class="text-start" style="font-size: 14pt">Domicile</td>
            <td class="text-end text-secondary" style="font-size: 14pt">
              Citayam
            </td>
          </tr>
        </tbody>
      </table>
      <div class="d-flex flex-column gap-2" style="min-width: 100%">
        <button
          @click.prevent="this.$router.push('/editProfile')"
          type="button"
          class="btn text-white fw-semibold"
          style="background: #82c3ec; min-width: 100%"
        >
          Edit Profile
        </button>
        <button
          @click.prevent="this.$router.push('/')"
          type="button"
          class="btn text-white fw-semibold"
          style="background: #537fe7; min-width: 100%"
        >
          Logout
        </button>
      </div>
    </div>
  </div>
</template>
