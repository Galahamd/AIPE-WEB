<template>
  <div class="main-contact">
    <h1>CONTACTANOS</h1>
    <p>Contacta con AIPE y síguenos por las redes sociales:</p>
    <h2>CORREO ELECTRONICO</h2>
    <div id="emailaipe">
      <img src="../assets/icons/email.png" alt="email" />
      <a href="mailto:unidad.gestion@aipe.org.bo">unidad.gestion@aipe.org.bo</a>
    </div>
    <div class="social-media">
      <a
        href="https://www.facebook.com/aipe.unidad.gestion/posts/119786423944805"
      >
        <img src="../assets/icons/facebookColorv.png" alt="facebook" />
      </a>
      <a href="https://twitter.com/OngAIPE"
        ><img src="../assets/icons/twitterColorv.png" alt="twitter"
      /></a>
      <a href="https://www.youtube.com/channel/UC6RBZUYKLiYiMAiYtf6lpgQ"
        ><img src="../assets/icons/youtubeColorv.png" alt="youtube"
      /></a>
    </div>
    <div class="house">
      <a href="https://bit.ly/3JgF01R" id="whatsapp">
        <img src="../assets/img/casa-enlace.png" alt="logo casa enlace">
      </a>
    </div>
  </div>
  <Footer />
</template>

<script>
import Footer from "/src/components/Footer.vue";
export default {
  name: "Home",
  components: {
    Footer,
  },
};
</script>

<style scoped>
.main-contact {
  padding: 50px 15px 20px 15px;
}
.main-contact h1 {
  font-size: 3rem;
  color: var(--green);
  text-align: center;
  padding-bottom: 30px;
}
.main-contact p {
  font-size: 1.6rem;
  text-align: justify;
}
.main-contact h2 {
  font-size: 2.2rem;
  color: var(--green);
  padding-bottom: 20px;
  padding-top: 30px;
}
.main-contact .social-media {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  padding-bottom: 30px;
}
.main-contact .social-media a > img {
  width: 60px;
  height: auto;
}
.main-contact #emailaipe {
  display: flex;
  align-items: center;
  padding-bottom: 30px;
}
.main-contact #emailaipe img {
  width: 50px;
  height: auto;
  padding-right: 10px;
}
.main-contact #emailaipe a {
  font-size: 1.6rem;
  color: var(--green);
}

.main-contact .house {
  display: flex;
  justify-content: center;
}
.main-contact .house a > img {
  width: 140px;
  height: auto;
}
@media (min-width: 1024px){
  .main-contact {
    padding: 70px 100px 30px 100px;
  }
}
</style>
