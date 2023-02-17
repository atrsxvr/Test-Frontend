<script>
import { RouterLink, RouterView } from 'vue-router'

export default {
    name: "Navbar"
};
</script>
<template>
  <nav
    class="navbar navbar-dark bg-light navbar-expand d-md-none d-lg-none d-xl-none fixed-bottom"
  >
    <ul class="navbar-nav nav-justified w-100 align-items-center">
      <li class="nav-item">
        <RouterLink to="/home" class="nav-link text-center" style="color: #537fe7">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1.5em"
            height="1.5em"
            viewBox="0 0 22 22"
          >
            <path
              fill="#537fe7"
              fill-rule="evenodd"
              d="M20,8h0L14,2.74a3,3,0,0,0-4,0L4,8a3,3,0,0,0-1,2.26V19a3,3,0,0,0,3,3H18a3,3,0,0,0,3-3V10.25A3,3,0,0,0,20,8ZM14,20H10V15a1,1,0,0,1,1-1h2a1,1,0,0,1,1,1Zm5-1a1,1,0,0,1-1,1H16V15a3,3,0,0,0-3-3H11a3,3,0,0,0-3,3v5H6a1,1,0,0,1-1-1V10.25a1,1,0,0,1,.34-.75l6-5.25a1,1,0,0,1,1.32,0l6,5.25a1,1,0,0,1,.34.75Z"
            />
          </svg>
          <p class="mb-0">Home</p>
        </RouterLink>
      </li>
      <li class="nav-item">
        <RouterLink to="/history" class="nav-link text-center" style="color: #537fe7">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1.5em"
            height="1.5em"
            viewBox="0 0 22 22"
          >
            <path
              fill="#537fe7"
              d="M16.4,3.3C12.5,1.1,7.7,1.8,4.6,4.8V3c0-0.6-0.4-1-1-1s-1,0.4-1,1v4.5c0,0.6,0.4,1,1,1h4.5c0.6,0,1-0.4,1-1s-0.4-1-1-1H5.7
              C7.1,4.9,9.2,4,11.5,4c4.4,0,8,3.6,8,8s-3.6,8-8,8c-0.6,0-1,0.4-1,1s0.4,1,1,1c3.6,0,6.9-1.9,8.7-5C22.9,12.2,21.2,6.1,16.4,3.3z
               M11.4,8c-0.6,0-1,0.4-1,1v3c0,0.6,0.4,1,1,1h2c0.6,0,1-0.4,1-1s-0.4-1-1-1h-1V9C12.4,8.4,12,8,11.4,8z"
            />
          </svg>
          <p class="mb-0">History</p>
        </RouterLink>
      </li>
      <li class="nav-item">
        <RouterLink to="/profile" class="nav-link text-center" style="color: #537fe7">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1.5em"
            height="1.5em"
            viewBox="0 0 20 20"
          >
            <path
              fill="#537fe7"
              fill-rule="evenodd"
              d="M374 2009c-2.206 0-4-1.794-4-4s1.794-4 4-4 4 1.794 4 4-1.794 4-4 4m3.758.673A5.983 5.983 0 0 0 380 2005a6 6 0 1 0-9.758 4.673c-3.659 1.375-6.242 4.772-6.242 9.327h2c0-5 3.589-8 8-8s8 3 8 8h2c0-4.555-2.583-7.952-6.242-9.327"
              transform="translate(-364 -1999)"
            />
          </svg>
          <p class="mb-0">Profile</p>
        </RouterLink>
      </li>
    </ul>
  </nav>
</template>
