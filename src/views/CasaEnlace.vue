<template>
  <div class="casa-main-container">
    <h2>CONCEPTO</h2>
    <img class="casa-img" src="../assets/img/casa-enlace.png" alt="" />
    <p>
      Casa Enlace es una iniciativa productiva de la Red AIPE, su objetivo es
      apoyar el trabajo de cientos de hombres y mujeres que aportan con su labor
      al desarrollo del país y que requieren de un servicio de alojamiento y
      enlace en la Ciudad de Nuestra Señora de La Paz.<br />
      Casa Enlace ofrece habitaciones individuales y compartidas con servicios
      exclusivos y compartidos, además, ofrece salas de reuniones equipadas con
      internet y pantallas HD. También, apoya para que la labor del visitante se
      realice con las mejores condiciones. Casa Enlace se puede contratar por
      medio del sistema de <i>WhatsApp Bussiness</i> que se encuentra (más
      abajo) en este sitio WEB, donde se ofrece un servicio personalizado.<br />
      AIPE es una institución sin fines de lucro, por lo que Casa Enlace aporta a
      la sostenibilidad de las actividades de fortalecimiento que tiene la Red
      AIPE, beneficiando a 16 instituciones asociadas en el país que trabajan en
      zonas rurales y periurbanas de Chuquisaca, La Paz (El
      Alto), Cochabamba, Santa Cruz y Tarija.
    </p>
    <div class="casa-images-container">
      <h2>GALERIA DE FOTOGRAFIAS</h2>
      <div class="scroll-boxes">
        <div class="scroll-box">
          <img src="../assets/img/casa1.png" alt="" />
          <p>Sala "tierras altas"</p>
        </div>
        <div class="scroll-box">
          <img src="../assets/img/casa3.png" alt="" />
          <p>Sala "tierras bajas"</p>
        </div>
        <div class="scroll-box">
          <img src="../assets/img/casa4.png" alt="" />
          <p>Servicio de cocina</p>
        </div>
        <div class="scroll-box">
          <img src="../assets/img/casa2.png" alt="" />
          <p>Sala "tierras altas"</p>
        </div>
        <div class="scroll-box">
          <img src="../assets/img/casa5.png" alt="" />
          <p>Sala "tierras bajas"</p>
        </div>
      </div>
    </div>
    <div class="casa-bookins-container">
      <div class="casa-bookins-rooms">
        <h2>RESERVAS</h2>
        <div class="casa-rooms-matrix_vertical">
          <div class="casa-room">
            <div class="casa-room-info">
              <p>Simple con baño privado</p>
              <p>Habitación sencilla para una sola persona</p>
              <p>Costo: 160,00</p>
            </div>
          </div>
          <div class="casa-room">
            <div class="casa-room-info">
              <p>Doble con baño compartido</p>
              <p>
                Habitación con dos camas grandes escritorio y baño compartido.
              </p>
              <p>Costo: Bs. 280,00</p>
            </div>
          </div>
          <div class="casa-room">
            <div class="casa-room-info">
              <p>Doble con baño privado</p>
              <p>Habitación con cama doble y simple, baño privado, soleada.</p>
              <p>Costo: Bs. 300,00</p>
            </div>
          </div>
          <div class="casa-room">
            <div class="casa-room-info">
              <p>Doble con baño compartido</p>
              <p>
                Habitación con dos camas grandes escritorio y baño compartido.
              </p>
              <p>Costo: Bs. 280,00</p>
            </div>
          </div>
          <div class="casa-room">
            <div class="casa-room-info">
              <p>Triple con baño privado</p>
              <p>
                Habitación grande con dos camas dobles y una simple para grupos
                con baño privado.
              </p>
              <p>Costo: Bs. 360,00</p>
            </div>
          </div>
          <div class="casa-room">
            <div class="casa-room-info">
              <p>Triple con baño privado</p>
              <p>
                Habitación grande con dos camas dobles y una simple para grupos
                con baño privado.
              </p>
              <p>Costo: Bs. 360,00</p>
            </div>
          </div>
          <div class="casa-room">
            <div class="casa-room-info">
              <p>Simple+ con baño privado</p>
              <p>
                Habitación especial, simple con cama doble, con baño privado.
              </p>
              <p>Costo: Bs. 170,00</p>
            </div>
          </div>
        </div>
      <p id="reservas"><b>Reservas y coordinaciones:</b></p>
      </div>
      <a href="https://bit.ly/3JgF01R" class="casa-whatsapp_number"></a>
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
  data: function () {
    return {};
  },
};
</script>
<style scoped>
.casa-main-container {
  padding: 50px 15px 20px 15px;
  align-items: center;
}
.casa-main-container h2 {
  text-align: initial;
  font-size: 2rem;
  color: var(--red);
  padding-bottom: 20px;
}
.casa-main-container .casa-img {
  display: block;
  width: 50%;
  height: auto;
  margin-left: auto;
  margin-right: auto;
}
.casa-main-container p {
  font-size: 1.6rem;
  line-height: 1.4;
  padding-bottom: 30px;
  text-align: justify;
}
.casa-images-container {
}
.casa-images-container .scroll-boxes {
  display: flex;
  overflow-x: auto;
  white-space: nowrap;
  margin-bottom: 20px;
  padding: 2px 0;
  text-align: center;
  gap: 10px;
}
.casa-images-container .scroll-boxes .scroll-box img {
  width: 150px;
  height: auto;
}
.casa-images-container .scroll-boxes .scroll-box:hover {
  transform: scale(1.2);
}
.casa-bookins-container {
  display: flex;
  flex-direction: column;
  padding-bottom: 20px;
  align-items: center;
}
.casa-bookins-container .casa-bookins-rooms .casa-rooms-matrix_horizontal,
.casa-rooms-matrix_vertical {
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-flow: row;
  row-gap: 10px;
  justify-items: center;
  padding-bottom: 20px;
}
.casa-rooms-matrix_vertical .casa-room {
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  width: 280px;
  height: 375px;
}
.casa-room .casa-room-info {
  display: grid;
  grid-template-rows: 35px 300px 40px;
  align-items: center;
}
.casa-room .casa-room-info p {
  background-color: black;
  color: white;
  opacity: 0.6;
  
}
.casa-room .casa-room-info p:nth-child(2),
p:nth-child(3) {
  align-self: end;
}
.casa-rooms-matrix_vertical .casa-room:nth-child(1) {
  background-image: url("../assets/img/room1.png");
}
.casa-rooms-matrix_vertical .casa-room:nth-child(2) {
  background-image: url("../assets/img/room2.png");
}
.casa-rooms-matrix_vertical .casa-room:nth-child(3) {
  background-image: url("../assets/img/room3.png");
}
.casa-rooms-matrix_vertical .casa-room:nth-child(4) {
  background-image: url("../assets/img/room4.png");
}
.casa-rooms-matrix_vertical .casa-room:nth-child(5) {
  background-image: url("../assets/img/room5.png");
}
.casa-rooms-matrix_vertical .casa-room:nth-child(6) {
  background-image: url("../assets/img/room6.png");
}
.casa-rooms-matrix_vertical .casa-room:nth-child(7) {
  background-image: url("../assets/img/room7.png");
}

.casa-bookins-container .casa-bookins-rooms p {
  padding: 5px;
}

.casa-bookins-container .casa-whatsapp_number {
  background-image: url("../assets/img/btnWhatsapp.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  width: 300px;
  height: 70px;
  border-radius: 15px;
  margin-top: 20px;
}
/*--------------------------TABLET Min 768px---------------------------*/
@media (min-width: 768px) {
  .casa-main-container {
    padding: 50px 80px 30px 80px;
  }
  .casa-main-container .casa-img {
    display: block;
    width: 280px;
    height: auto;
    margin-left: 25%;
    position: absolute;
    opacity: 0.3;
    top: 65px;
  }
  .casa-bookins-container .casa-bookins-rooms .casa-rooms-matrix_vertical {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-auto-flow: row;
    gap: 20px;
    justify-items: center;
  }
  .casa-bookins-container .casa-bookins-rooms .casa-rooms-matrix img {
    width: 200px;
    height: 210px;
  }
  .casa-images-container .scroll-boxes .scroll-box img {
    width: 150px;
    height: auto;
  }
  .testimonials table tr th {
    font-size: 1.8rem;
  }
  .testimonials table tr td {
    font-size: 1.6rem;
  }
}
/*--------------------------LAPTOP Min 1024px--------------------------*/
@media (min-width: 1024px) {
  .casa-main-container {
    padding: 70px 100px 30px 100px;
  }
  .casa-main-container .casa-img {
    width: 250px;
    margin-left: 30%;
  }
  .casa-main-container h2 {
    font-size: 2rem;
  }
  .casa-main-container p {
    font-size: 1.6rem;
  }
  .casa-images-container .scroll-boxes .scroll-box img {
    width: 200px;
    height: auto;
  }
  .casa-bookins-container .casa-bookins-rooms .casa-rooms-matrix_horizontal {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-auto-flow: row;
    gap: 20px;
    justify-items: center;
  }
  .casa-bookins-container .casa-bookins-rooms .casa-rooms-matrix_vertical {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-auto-flow: row;
    row-gap: 40px;
    column-gap: 30px;
    justify-items: center;
  }
  .casa-room:hover {
    border: solid 2px var(--light-green);
    transform: scale(1.2);
  }
} ;
</style>
