<template>
  <NavBar />
  <router-view />
</template>

<script>
// @ is an alias to /src
import NavBar from "@/components/NavBar.vue";
export default {
  name: "Home",
  components: {
    NavBar
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap");
:root {
  /*Colors for AIPE LOGO */
  --green: #367431;
  --gray: #ccc4ba;
  --black: #1d1d1b;
  /*Colors for Casa*/
  --red: #d64846;
  --light-green: #00a89d;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
html {
  font-size: 62.5%;
  font-family: "Roboto", "Open Sans", "IBM Plex Sans", sans-serif;
  scroll-behavior: smooth;
}
</style>
