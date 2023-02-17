<script>
import Navbar from "../components/Navbar.vue";
import Profile from "../components/Profile.vue";

export default {
  name: "history",
  components: { Navbar, Profile },
};
</script>
<template>
  <Navbar />
  <div class="container pt-3" style="height: 90vh">
    <Profile />
    <div class="d-flex flex-column align-items-center mt-4">
      <h3 style="color: #537fe7">Attendance History</h3>
      <table class="table mt-4">
        <tbody>
          <tr>
            <td class="text-start" style="font-size: 18px">15 Feb 2023</td>
            <td class="text-center" style="font-size: 18px">Clock In</td>
            <td class="text-end" style="font-size: 18px">07:48 AM</td>
          </tr>
          <tr>
            <td class="text-start" style="font-size: 18px">14 Feb 2023</td>
            <td class="text-center" style="font-size: 18px">Clock Out</td>
            <td class="text-end" style="font-size: 18px">17:15 PM</td>
          </tr>
          <tr>
            <td class="text-start" style="font-size: 18px">14 Feb 2023</td>
            <td class="text-center" style="font-size: 18px">Clock In</td>
            <td class="text-end" style="font-size: 18px">07:40 AM</td>
          </tr>
          <tr>
            <td class="text-start" style="font-size: 18px">13 Feb 2023</td>
            <td class="text-center" style="font-size: 18px">Clock Out</td>
            <td class="text-end" style="font-size: 18px">17:48 PM</td>
          </tr>
          <tr>
            <td class="text-start" style="font-size: 18px">13 Feb 2023</td>
            <td class="text-center" style="font-size: 18px">Clock In</td>
            <td class="text-end" style="font-size: 18px">07:56 AM</td>
          </tr>
          <tr>
            <td class="text-start" style="font-size: 18px">12 Feb 2023</td>
            <td class="text-center" style="font-size: 18px">Clock Out</td>
            <td class="text-end" style="font-size: 18px">17:10 PM</td>
          </tr>
          <tr>
            <td class="text-start" style="font-size: 18px">12 Feb 2023</td>
            <td class="text-center" style="font-size: 18px">Clock In</td>
            <td class="text-end" style="font-size: 18px">07:48 AM</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
