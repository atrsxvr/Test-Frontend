<script>
export default {
  name: "editProfile",
};
</script>
<template>
  <div class="container pt-3" style="height: 90vh">
    <div>
      <h3 class="text-center" style="margin-bottom: 2.5rem">Edit Profile</h3>
      <form>
        <div class="mb-2">
          <label for="exampleFormControlInput1" class="form-label">Name</label>
          <input
            type="text"
            class="form-control"
            id="exampleFormControlInput1"
            value="Varian Atras Xavier"
          />
        </div>
        <div class="mb-2">
          <label for="exampleFormControlInput1" class="form-label">Phone</label>
          <input
            type="text"
            class="form-control"
            id="exampleFormControlInput1"
            value="08987654321"
          />
        </div>
        <div class="mb-2">
          <label for="exampleFormControlInput1" class="form-label">Email</label>
          <input
            type="email"
            class="form-control"
            id="exampleFormControlInput1"
            value="atrasx@gmail.com"
          />
        </div>
        <div class="mb-2">
          <label for="exampleFormControlInput1" class="form-label"
            >Date of Birth</label
          >
          <input
            type="date"
            class="form-control"
            id="exampleFormControlInput1"
            value="1995-09-15"
          />
        </div>
        <div class="mb-2">
          <label for="exampleFormControlInput1" class="form-label"
            >Domicile</label
          >
          <input
            type="text"
            class="form-control"
            id="exampleFormControlInput1"
            value="Citayam"
          />
        </div>
        <div class="d-flex flex-column gap-2 mt-4" style="min-width: 100%">
          <button
            @click.prevent="this.$router.push('/profile')"
            type="submit"
            class="btn text-white fw-semibold"
            style="background: #82c3ec; min-width: 100%"
          >
            Submit
          </button>
          <button
            @click.prevent="this.$router.push('/profile')"
            type="submit"
            class="btn text-white fw-semibold"
            style="background: #537fe7; min-width: 100%"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  </div>
</template>
