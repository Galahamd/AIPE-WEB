<template>
  <div class="home">
    <div class="heroe">
      <a
        href="https://drive.google.com/file/d/1wYf9BqFG4rU9fZRa85ypXitSjlp4T0q2/view?usp=sharing"
        target="_blank"
        >Conócenos más</a
      >
    </div>
    <div class="bubles-container">
      <div class="buble-card">
        <router-link to="/programasproyectos">
          <h2>
            PROGRAMAS <br />Y<br />
            PROYECTOS
          </h2>
          <img
            src="../assets/img/proyectos.png"
            alt="Persona capacitando gente"
          />
        </router-link>
        <p>
          La Red AIPE desarrolla programas y proyectos en todo el País, las
          instituciones asociadas los implementan territorialmente.
        </p>
      </div>
      <div class="buble-card">
        <router-link to="/asociados">
          <h2>
            INSTITUCIONES ASOCIADAS<br />
            DE LA RED
          </h2>
          <img
            src="../assets/img/asociados.jpeg"
            alt="Persona capacitando gente"
          />
        </router-link>
        <p>
          Las diez y seis instituciones asociadas de la red AIPE, se encuentran
          en cinco Departamentos, cuarenta y cinco Provincias y ochenta y un
          Municipios.
        </p>
      </div>
      <div class="buble-card">
        <router-link to="/capacitacion">
          <h2>OFERTA <br />DE <br />CAPACITACIÓN</h2>
          <img
            src="../assets/img/capacitacion.jpeg"
            alt="Persona capacitando gente"
          />
        </router-link>
        <p>
          La Red AIPE comparte el conocimiento y experiencia desarrollados en su
          trabajo, mediante un espacio de capacitación abierto al público
          interesado.
        </p>
      </div>
    </div>
    <div class="social_networks-container">
      <div class="social-container">
        <a
          href="https://www.facebook.com/aipe.unidad.gestion/posts/119786423944805"
        >
          <div class="social-imgf"></div>
        </a>
        <iframe
          class="facebook-container-page_plugin"
          src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Faipe.unidad.gestion%2F&tabs=timeline&width=340&height=500&small_header=false&adapt_container_width=false&hide_cover=false&show_facepile=true&appId"
          width="280"
          height="350"
          style="border: none; overflow: hidden"
          scrolling="no"
          frameborder="0"
          allowfullscreen="true"
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
        ></iframe>
      </div>
      <div class="social-container">
        <a href="https://twitter.com/OngAIPE">
          <div class="social-imgt"></div>
        </a>
        <a
          class="twitter-timeline"
          data-lang="es"
          data-width="280"
          data-height="350"
          href="https://twitter.com/OngAIPE?ref_src=twsrc%5Etfw"
          >Tweets by OngAIPE</a
        >
      </div>
      <div class="social-container">
        <a href="https://www.youtube.com/channel/UC6RBZUYKLiYiMAiYtf6lpgQ">
          <div class="social-imgy"></div>
        </a>
        <iframe
          class="social-iframe"
          width="280"
          height="158"
          src="https://www.youtube.com/embed/videoseries?list=PLr41_zAg6hDs_dzrVQiCBPr_AmLfUCCYs"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <iframe
          class="social-iframe_tab_lap"
          width="560"
          height="315"
          src="https://www.youtube.com/embed/videoseries?list=PLr41_zAg6hDs_dzrVQiCBPr_AmLfUCCYs"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </div>
    <div class="casa-container">
      <div class="casa-info-container">
        <router-link to="/casaenlace">
          <img src="../assets/img/casa-enlace.png" alt="Logo Casa Enlace" />
        </router-link>
        <p>
          Casa Enlace, es una iniciativa productiva de la Red AIPE que brinda
          servicios de alojamiento y enlace a personas que contribuyen con el
          desarrollo de Bolivia, cuando vistan la Ciudad de Nuestra Señora de La
          Paz.
        </p>
      </div>
      <div class="casa-container-matrix">
        <div class="quadrant">
          <router-link to="/casaenlace"
            ><img
              src="../assets/img/casaEnlace.jpg"
              alt="Camas de Casa Enlace"
            />CONCEPTO</router-link
          >
        </div>
        <div class="quadrant">
          <router-link to="/casaenlace"
            ><img
              src="../assets/img/casathree.png"
              alt="Sala de Casa Enlace"
            />GALERIA DE FOTOS</router-link
          >
        </div>
        <div class="quadrant">
          <router-link to="/casaenlace" class="bookings"
            ><img
              src="../assets/img/casaone.png"
              alt="Cocina de Casa Enlace"
            />RESERVAS</router-link
          >
        </div>
      </div>
    </div>
    <div class="donate-container">
      <h3>
        AIPE es una institución sin fines de lucro, todos sus ingresos por
        servicios prestados sirven para fortalecer capacidades de profesionales
        que desarrollan nuevas propuestas en apoyo a nuestra MISIÓN.
      </h3>
      <router-link to="/dona">DONAR</router-link>
    </div>
    <Footer />
  </div>
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
.heroe {
  background-image: url("../assets/img/aipe.jpg");
  background-size: cover; /* <------ */
  background-repeat: no-repeat;
  background-position: center center;
  margin-top: ;
  height: 100vh;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
}
.heroe a {
  justify-self: flex-start;
  align-self: center;
  grid-column: 1;
  grid-row: 2;
  padding-top: 15px;
  width: 140px;
  height: 50px;
  margin-left: 9%;
  border-radius: 8px;
  background-color: var(--green);
  opacity: 0.9;
  border: solid 4px var(--gray);
  color: white;
  cursor: pointer;
  text-decoration: none;
  font-size: 1.4rem;
  text-align: center;
}
.bubles-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--gray);
  padding-top: 30px;
}
.buble-card {
  display: flex;
  flex-direction: column;
  text-align: center;
  padding-bottom: 20px;
}
.bubles-container .buble-card img {
  width: 180px;
  height: 180px;
  border-radius: 10%;
  margin: 20px 0 10px 0;
  border: solid 4px #367432;
}
.bubles-container .buble-card a {
  text-decoration: none;
  color: #367432;
}
.bubles-container .buble-card p {
  text-align: justify;
  padding: 10px 15px;
  font-size: 1.6rem;
  line-height: 1.4;
}

.bubles-container .buble-card a > h2 {
  text-align: center;
  text-shadow: 0px 1px;
  font-size: 2rem;
  line-height: 1.4;
}
.bubles-container .buble-card a > h2 > br {
  display: none;
}
.social_networks-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px 0;
}

.social-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.social-container a {
  padding: 20px 20px;
}
.social-container .social-imgf {
  background-image: url("../assets/img/socialNetworksBadgetF.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  width: 280px;
  height: 90px;
  padding: 20px 20px;
}
.social-container .social-imgt {
  background-image: url("../assets/img/socialNetworksBadgetT.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  width: 280px;
  height: 90px;
  padding: 20px 20px;
}
.social-container .social-imgy {
  background-image: url("../assets/img/socialNetworksBadgetY.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  width: 280px;
  height: 90px;
  padding: 20px 20px;
}
.social-iframe {
  display: unset;
}
.social-iframe_tab_lap {
  display: none;
}
.casa-container {
  display: grid;
  height: auto;
  grid-template-columns: 1fr;
  justify-items: center;
  padding: 7% 0 12% 0;
  background-color: var(--gray);
}
.casa-container .casa-info-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-right: 20px 15px;
}
.casa-container .casa-info-container a img {
  width: 250px;
  height: auto;
}
.casa-container .casa-info-container p {
  font-size: 1.4rem;
  text-align: center;
  padding: 20px 15px;
  text-align: justify;
}
.casa-container .casa-container-matrix {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
}
.casa-container-matrix .quadrant {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 10px;
}
.casa-container-matrix .quadrant img {
  width: 100vw;
}
.casa-container-matrix .quadrant a {
  text-decoration: none;
  color: var(--red);
  font-size: 2rem;
  font-weight: bold;
  padding-top: 10px;
  margin-top: 10px;
  text-align: center;
}
.casa-container-matrix .quadrant a:hover {
  color: var(--light-green);
}
.casa-container-matrix .quadrant .bookings {
  background-color: var(--red);
  color: var(--gray);
  padding: 0;
}
.casa-container-matrix .quadrant .bookings:hover {
  background-color: var(--light-green);
  color: var(--gray);
}
.donate-container {
  background-image: url("../assets/img/donar.jpeg");
  background-size: cover; /* <------ */
  background-repeat: no-repeat;
  background-position: center center;
  height: 100vh;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
}
.donate-container h3 {
  align-self: center;
  justify-self: start;
  grid-column: 1;
  grid-row: 2;
  margin-left: 5%;
  color: white;
  font-size: 1.4rem;
  font-weight: bold;
  text-shadow: 2px 2px 4px #000000;
  background-color: var(--green);
  opacity: 0.9;
  padding: 10px 10px;
}
.donate-container a {
  justify-self: end;
  align-self: center;
  grid-column: 2;
  grid-row: 2;
  margin: 0% 9% 9% 0;
  padding-top: 5px;
  width: 140px;
  height: 30px;
  border-radius: 8px;
  background-color: #367432;
  opacity: 0.9;
  border: none;
  color: white;
  font-size: 1.6rem;
  text-align: center;
  cursor: pointer;
  text-decoration: none;
}
/*----------------------MOBILE M MIN 375 PX----------------------------*/
@media (min-width: 375px) {
  .donate-container h3 {
    font-size: 1.6rem;
  }
}
/*--------------------------TABLET MIN 768 PXC-------------------------*/

@media (min-width: 768px) {
  .heroe a {
    margin-left: 20%;
  }
  .bubles-container {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-content: center;
    width: 100vw;
    height: 100vh;
    gap: 2px;
    padding: 0 30px;
  }
  .bubles-container .buble-card a > h2 > br {
    display: unset;
  }
  .social_networks-container {
    flex-direction: row;
    align-items: center;
    flex-wrap: wrap;
    justify-content: space-around;
    padding: 0;
    width: 100vw;
  }
  .social-container {
    margin-top: 30px;
    justify-content: center;
    gap: 20px;
  }
  .social-container .social-imgf {
    background-image: url("../assets/img/socialNetworksBadgetF.png");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    width: 280px;
    height: 90px;
    padding: 20px 20px;
  }
  .social-container .social-imgt {
    background-image: url("../assets/img/socialNetworksBadgetT.png");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    width: 280px;
    height: 90px;
    padding: 20px 20px;
  }
  .social-container .social-imgy {
    background-image: url("../assets/img/socialNetworksBadgetY.png");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    width: 280px;
    height: 90px;
    padding: 20px 20px;
  }
  .social-iframe {
    display: none;
  }
  .social-iframe_tab_lap {
    display: unset;
  }
  .casa-container {
    justify-items: center;
    height: 100vh;
    padding: 30px 20px 30px 20px;
  }
  .casa-container .casa-info-container {
    flex-direction: row;
  }
  .casa-container .casa-info-container p {
    font-size: 1.6rem;
  }
  .casa-container .casa-container-matrix {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    column-gap: 50px;
  }
  .casa-container .casa-container-matrix img {
    width: 200px;
    height: auto;
    border: 2px solid var(--light-green);
  }
  .donate-container a {
    width: 140px;
    height: 44px;
    border-radius: 8px;
    background-color: var(--green);
    opacity: 0.9;
    border: solid 4px var(--gray);
    color: white;
    font-size: 2rem;
    text-align: center;
    cursor: pointer;
    text-decoration: none;
  }
}
/*--------------------------LAPTOP 1024px MIN--------------------------*/

@media (min-width: 1024px) {
  .heroe a {
    width: 190px;
    height: 70px;
    padding-top: 25px;
    font-size: 1.8rem;
  }
  .bubles-container {
    height: 100vh;
  }
  .bubles-container .buble-card img {
    width: 280px;
    height: 280px;
    border-radius: 10%;
    margin: 20px 0 10px 0;
    border: solid 4px #367432;
  }
  .bubles-container .buble-card a > h2 > br {
    display: none;
  }
  .bubles-container .buble-card a > h2 {
    font-size: 2rem;
    padding-bottom: 30px;
  }
  .bubles-container .buble-card p {
    font-size: 1.6rem;
  }
  .casa-container {
    margin-top: 20px;
    padding: 30px 20px 50px 20px;
  }
  .casa-container a img {
    width: 300px;
    height: auto;
  }
  .casa-container .casa-info-container {
    padding-right: 20px;
    padding: 0;
    justify-content: center;
  }
  .casa-container .casa-info-container a img {
    width: 350px;
    height: auto;
  }
  .casa-container .casa-container-matrix img {
    width: 280px;
    height: auto;
  }
  .donate-container h3 {
    width: 60%;
    align-self: center;
    justify-self: start;
    grid-column-start: 1;
    grid-column-end: 1;
    grid-row-start: 1;
    grid-row-end: 3;
    margin-left: 20%;
    color: white;
    font-size: 2rem;
    font-weight: bold;
    text-shadow: 2px 2px 4px #000000;
  }
  .donate-container a {
    justify-self: end;
    align-self: center;
    grid-column: 2;
    grid-row: 2;
    margin: 0% 9% 9% 0;
    padding: 15px 0px;
    width: 170px;
    height: 50px;
    border-radius: 8px;
    background-color: #367432;
    border: solid 4px var(--gray);
    color: white;
    font-size: 2.2rem;
  }
}
</style>
