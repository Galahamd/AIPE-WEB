<template>
  <footer>
    <h2>CONTACTANOS</h2>
    <div class="social-media">
      <a
        href="https://www.facebook.com/aipe.unidad.gestion/posts/119786423944805"
        ><div class="fb"></div
      ></a>
      <a href="https://twitter.com/OngAIPE"><div class="twitter"></div></a>
      <a href="https://www.youtube.com/channel/UC6RBZUYKLiYiMAiYtf6lpgQ"><div class="youtube"></div></a>
    </div>
    <div class="address-container">
      <p>
        Calle Macario Pinilla Nº 525 Sopocachi <br />
        Telefono: 591 – 2 - 2419195
        <br />Correo electrónico: unidad.gestion@aipe.org.bo <br />Ciudad de
        Nuestra Señora de La Paz
      </p>
    </div>
    <div class="associates-container">
      <router-link to="/asociados"
        ><img src="../assets/img/associates/Black&White/cja.png" alt=""
      /></router-link>
      <router-link to="/asociados"
        ><img src="../assets/img/associates/Black&White/iptk.png" alt=""
      /></router-link>

      <router-link to="/asociados"
        ><img src="../assets/img/associates/Black&White/pasos.png" alt=""
      /></router-link>

      <router-link to="/asociados"
        ><img src="../assets/img/associates/Black&White/proagro.png" alt=""
      /></router-link>

      <router-link to="/asociados"
        ><img src="../assets/img/associates/Black&White/lider.png" alt=""
      /></router-link>

      <router-link to="/asociados"
        ><img src="../assets/img/associates/Black&White/cebiae.png" alt=""
      /></router-link>

      <router-link to="/asociados"
        ><img src="../assets/img/associates/Black&White/cistem.png" alt=""
      /></router-link>

      <router-link to="/asociados"
        ><img src="../assets/img/associates/Black&White/cecasem.png" alt=""
      /></router-link>

      <router-link to="/asociados"
        ><img src="../assets/img/associates/Black&White/semta.png" alt=""
      /></router-link>

      <router-link to="/asociados"
        ><img src="../assets/img/associates/Black&White/cepac.png" alt=""
      /></router-link>

      <router-link to="/asociados"
        ><img src="../assets/img/associates/Black&White/ico.png" alt=""
      /></router-link>

      <router-link to="/asociados"
        ><img src="../assets/img/associates/Black&White/proceso.png" alt=""
      /></router-link>

      <router-link to="/asociados"
        ><img src="../assets/img/associates/Black&White/iffi.png" alt=""
      /></router-link>

      <router-link to="/asociados"
        ><img src="../assets/img/associates/Black&White/aynisuyu.png" alt=""
      /></router-link>

      <router-link to="/asociados"
        ><img src="../assets/img/associates/Black&White/iicca.png" alt=""
      /></router-link>
    </div>
  </footer>
  <div class="sirius-container">
    <p>"Copyright © 2014-2022"</p>
    <a href="http://siriustechsol.com/"
      >http://siriustechsol.com<img
        src="../assets/icons/sirius.png"
        alt="Logo SIRIUS"
    /></a>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
footer {
  display: flex;
  flex-direction: column;
  background-color: var(--green);
  padding: 20px 0;
}
h2 {
  font-size: 2.2rem;
  color: white;
  line-height: 1.4;
  text-align: center;
  padding-bottom: 20px;
}
.social-media {
  display: flex;
  justify-content: center;
}
.social-media a div {
  width: 40px;
  height: 40px;
  margin-left: 12px;
  margin-right: 12px;
  padding-top: 14px;
}
.fb {
  background-image: url("../assets/icons/facebook.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
.twitter {
  background-image: url("../assets/icons/twitter.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
.youtube {
  background-image: url("../assets/icons/youtube.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
.address-container p {
  color: white;
  font-size: 1.6rem;
  padding: 20px 10px;
  text-align: center;
}
.associates-container {
  display: none;
}
.sirius-container {
  display: flex;
  justify-content: flex-end;
  justify-content: space-between;
  align-items: center;
  padding: 2px 15px;
}
.sirius-container p {
  font-size: 1rem;
  color: #333366;
}
.sirius-container a {
  text-decoration: none;
  font-size: 1rem;
  color: #333366;
  display: flex;
  align-items: center;
}
.sirius-container img {
  height: 2rem;
  width: auto;
  padding-left: 20px;
}
/*-------------TABLET MIN 768 PX---------------------------------------*/
@media (min-width: 768px) {
  footer {
    display: grid;
    grid-template-rows: repeat(3, 1fr);
    grid-template-columns: repeat(2, 1fr);
    align-items: center;
  }
  h2 {
    align-self: end;
  }
  .address-container {
    grid-row-start: 2;
  }
  .associates-container {
    display: unset;
    display: grid;
    grid-template-rows: repeat(4, 1fr);
    grid-template-columns: repeat(4, 1fr);
    grid-row-start: 1;
    grid-row-end: 4;
    grid-column-start: 2;
  }
  .associates-container a > img {
    width: 100px;
    height: auto;
  }
}
</style>
