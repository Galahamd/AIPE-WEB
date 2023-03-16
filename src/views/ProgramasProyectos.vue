<template>
  <div class="proyect-main-container">
    <div class="proyects-info">
      <h1>PROGRAMAS Y PROYECTOS</h1>
      <P
        >Para el quiquenio 2021 - 2025 la Red AIPE ha generado las siguientes
        propuestas que constituyen nuestra cartera de proyectos en red que
        buscan implementar la Misión de la Red en todo el país.</P
      >
    </div>
    <div class="proyects-container">
      <div class="proyect">
        <h3>
          Hacia un modelo de educación y formación humana integral, resiliente a
          la pandemia post COVID-19
        </h3>
        <p>
          La propuesta plantea, trabajar una estrategia de educación integral,
          que contiene tres pilares:<br />i) la continuidad y nivelación
          pedagógica para la comunidad educativa del nivel secundario de
          educación regular y alternativa (CEA);<br />ii) la formación humana
          integral, dirigida a adolescentes y jóvenes, hombres y mujeres, y<br />iii)
          el desarrollo de mecanismos de gobernanza local con los actores y
          sectores involucrados.
        </p>
        <img src="../assets/img/covi_19.png" alt="" />
        <button v-on:click="show1 = !show1">MÁS INFORMACIÓN</button>
        <router-link to="/dona" class="donar">DONAR</router-link>
      </div>
      <div class="moreInfo" v-show="!show1">
        <p>Lugar de ejecución</p>
        <img class="imgMoreinfoBol" src="../assets/img/pro1.png" alt="" />
        <p>Asociadas Ejecutoras</p>
        <div class="excAsociates" id="excAsociates3">
          <router-link to="/asociados">PROAGRO</router-link>
          <router-link to="/asociados">LIDER</router-link>
          <router-link to="/asociados">UG-AIPE</router-link>
        </div>
        <p>Presupuesto solicitado</p>
        <p>700.000 €</p>
        <p>Documento completo</p>
        <a
          href="https://drive.google.com/file/d/1oCXO6cICfjSnIvK0Ua2f7_BC0ffg7FnH/view?usp=sharing"
          target="_blank"
          ><img
            class="imgMoreinfoPdf"
            src="../assets/img/pdfDown.png"
            alt="Descargar documento completo en pdf"
        /></a>
      </div>
      <div class="proyect">
        <h3>Saber alimentarse para vivir bien con la madre tierra</h3>
        <p>
          Pretendemos poner en marcha un proceso de fortalecimiento de las
          organizaciones de la sociedad civil en alianza con las asociadas de la
          Red AIPE, en procesos de apropiación de las metodologías y sistemas de
          planificación dictados por la Ley 777, a fin de Contribuir al
          fortalecimiento de las Organizaciones de la Sociedad Civil,
          cualificando su participación en la evaluación y ajuste de la
          aplicación de planes territoriales de desarrollo integral, promoviendo
          en el mediano plazo la relevancia del “saber alimentarse para vivir
          bien” en los sistemas de vida y productivos para lograr el equilibrio
          y la armonía con la madre tierra.
        </p>
        <img src="../assets/img/alimentacion.png" alt="" />
        <button v-on:click="show2 = !show2">MÁS INFORMACIÓN</button>
        <router-link to="/dona" class="donar">DONAR</router-link>
      </div>
      <div class="moreInfo" v-show="!show2">
        <p>Lugar de ejecución</p>
        <img class="imgMoreinfoBol" src="../assets/img/pro2.png" alt="" />
        <p>Asociadas Ejecutoras</p>
        <div class="excAsociates">
          <router-link to="/asociados">PROAGRO</router-link>
          <router-link to="/asociados">IPTK</router-link>
          <router-link to="/asociados">CENTRO JUANA AZURDUY</router-link>
          <router-link to="/asociados">LIDER</router-link>
          <router-link to="/asociados">PASOS</router-link>
          <router-link to="/asociados">CISTEM</router-link>
          <router-link to="/asociados">CEBIAE</router-link>
          <router-link to="/asociados">SEMTA</router-link>
          <router-link to="/asociados">CECASEM</router-link>
          <router-link to="/asociados">IFFI</router-link>
          <router-link to="/asociados">AYNISUYU</router-link>
          <router-link to="/asociados">ICO</router-link>
          <router-link to="/asociados">CEPAC</router-link>
          <router-link to="/asociados">PROCESO</router-link>
          <router-link to="/asociados">IICCA</router-link>
          <router-link to="/asociados">ASOCIO</router-link>
          <router-link to="/asociados">UG-AIPE</router-link>
        </div>
        <p>Presupuesto solicitado</p>
        <p>900.000 €</p>
        <p>Documento completo</p>
        <a
          href="https://drive.google.com/file/d/1k1umRk2dq4afoGxtUpVM6rkEu3sB4bK-/view?usp=sharing"
          target="_blank"
          ><img
            class="imgMoreinfoPdf"
            src="../assets/img/pdfDown.png"
            alt="Descargar documento completo en pdf"
        /></a>
      </div>
      <div class="proyect">
        <h3>
          Emprendimientos productivos alimentarios y de restauración del medio
          ambiente con enfoque de innovación y género"
        </h3>
        <p>
          Promover la generación de alternativas productivas y creación de
          empleo en las áreas rurales del país, aprovechando dos ejes temáticos
          que encajan de manera pertinente con este contexto, la seguridad
          alimentaria y la restauración del medio ambiente, a través de la
          promoción de la innovación en la generación de soluciones elaboradas
          por jóvenes que se conviertan en alternativa de generación de ingresos
          y mejoramiento de la productividad.
        </p>
        <img id="restauracion" src="../assets/img/restauracion.png" alt="" />
        <button v-on:click="show3 = !show3">MÁS INFORMACIÓN</button>
        <router-link to="/dona" class="donar">DONAR</router-link>
      </div>
      <div class="moreInfo" v-show="!show3">
        <p>Lugar de ejecución</p>
        <img class="imgMoreinfoBol" src="../assets/img/pro2.png" alt="" />
        <p>Asociadas Ejecutoras</p>
        <div class="excAsociates">
          <router-link to="/asociados">PROAGRO</router-link>
          <router-link to="/asociados">IPTK</router-link>
          <router-link to="/asociados">CENTRO JUANA AZURDUY</router-link>
          <router-link to="/asociados">LIDER</router-link>
          <router-link to="/asociados">PASOS</router-link>
          <router-link to="/asociados">CISTEM</router-link>
          <router-link to="/asociados">CEBIAE</router-link>
          <router-link to="/asociados">SEMTA</router-link>
          <router-link to="/asociados">CECASEM</router-link>
          <router-link to="/asociados">IFFI</router-link>
          <router-link to="/asociados">AYNISUYU</router-link>
          <router-link to="/asociados">ICO</router-link>
          <router-link to="/asociados">CEPAC</router-link>
          <router-link to="/asociados">PROCESO</router-link>
          <router-link to="/asociados">IICCA</router-link>
          <router-link to="/asociados">ASOCIO</router-link>
          <router-link to="/asociados">UG-AIPE</router-link>
        </div>
        <p>Presupuesto solicitado</p>
        <p>1.400.000 €</p>
        <p>Documento completo</p>
        <a
          href="https://drive.google.com/file/d/1qBA2quXU_9BgmzsQQNk8XcIFj2V-_Kqs/view?usp=sharing"
          target="_blank"
          ><img
            class="imgMoreinfoPdf"
            src="../assets/img/pdfDown.png"
            alt="Descargar documento completo en pdf"
        /></a>
      </div>
      <div class="proyect">
        <h3>Territorios en Escucha para el Desarrollo</h3>
        <p>
          El actual contexto exige la renovación del concepto de Seguridad
          Alimentaria y Nutricional, se presentan nuevos desafíos para entender
          el desarrollo, la gestión territorial, la sustentabilidad ambiental,
          la alimentación adecuada y saludable, y la pobreza, ante propuestas
          novedosas, como las economías circulares, las nuevas ruralidades y de
          emergencias sanitarias, como la COVID 19. En este contexto surge la
          necesidad de reconocer el empoderamiento de otros actores, como los
          jóvenes y mujeres que vienen asumiendo roles estratégicos en el
          desarrollo y gestión territorial, conectando lo rural con el ámbito
          urbano, bajo innovaciones proactivas que reediten las relaciones de
          producción y comercialización de los productos orgánicos.
        </p>
        <img src="../assets/img/territorios.png" alt="" />
        <button v-on:click="show4 = !show4">MÁS INFORMACIÓN</button>
        <router-link to="/dona" class="donar">DONAR</router-link>
      </div>
      <div class="moreInfo" v-show="!show4">
        <p>Lugar de ejecución</p>
        <img class="imgMoreinfoBol" src="../assets/img/pro2.png" alt="" />
        <p>Asociadas Ejecutoras</p>
        <div class="excAsociates">
          <router-link to="/asociados">PROAGRO</router-link>
          <router-link to="/asociados">IPTK</router-link>
          <router-link to="/asociados">CENTRO JUANA AZURDUY</router-link>
          <router-link to="/asociados">LIDER</router-link>
          <router-link to="/asociados">PASOS</router-link>
          <router-link to="/asociados">CISTEM</router-link>
          <router-link to="/asociados">CEBIAE</router-link>
          <router-link to="/asociados">SEMTA</router-link>
          <router-link to="/asociados">CECASEM</router-link>
          <router-link to="/asociados">IFFI</router-link>
          <router-link to="/asociados">AYNISUYU</router-link>
          <router-link to="/asociados">ICO</router-link>
          <router-link to="/asociados">CEPAC</router-link>
          <router-link to="/asociados">PROCESO</router-link>
          <router-link to="/asociados">IICCA</router-link>
          <router-link to="/asociados">ASOCIO</router-link>
          <router-link to="/asociados">UG-AIPE</router-link>
        </div>
        <p>Presupuesto solicitado</p>
        <p>1.200.000 €</p>
        <p>Documento completo</p>
        <a
          href="https://drive.google.com/file/d/12NT07G3dsMuM9MaE_brcHYiWYUW2Qjpw/view?usp=sharing"
          target="_blank"
          ><img
            class="imgMoreinfoPdf"
            src="../assets/img/pdfDown.png"
            alt="Descargar documento completo en pdf"
        /></a>
      </div>
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
  data() {
    return {
      show1: true,
      show2: true,
      show3: true,
      show4: true,
    };
  },
};
</script>
<style scoped>
.proyect-main-container {
  padding: 50px 15px 20px 15px;
}
.proyects-info h1 {
  font-size: 3rem;
  text-align: center;
  padding-bottom: 20px;
  color: var(--green);
}
.proyects-info p {
  font-size: 1.6rem;
  line-height: 1.4;
  text-align: justify;
}
.proyects-container {
  margin-top: 30px;
}
.proyect {
  display: grid;
  grid-template-rows: 100px 200px 370px 70px;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  justify-items: center;
  border: solid 1px var(--gray);
  margin-top: 20px;
}
.proyect h3 {
  grid-row-start: 1;
  grid-column-start: 1;
  grid-column-end: 4;
  padding: 0 15px;
  text-align: center;
  font-size: 1.6rem;
  color: var(--green);
}
.proyect img {
  grid-row-start: 2;
  grid-column-start: 1;
  grid-column-end: 4;
  width: auto;
  height: auto;
}
.proyect p {
  grid-row-start: 3;
  grid-column-start: 1;
  grid-column-end: 4;
  padding: 0 15px;
  font-size: 1.5rem;
  text-align: justify;
}
.proyect button {
  background-color: var(--gray);
  width: 90px;
  height: 45px;
  padding: 5px 2px;
  text-align: center;
  color: var(--green);
  border-radius: 8px;
  font-size: 1.1rem;
}
.proyect a {
  text-decoration: none;
  background-color: var(--green);
  width: 90px;
  height: 45px;
  padding-top: 12px;
  text-align: center;
  color: white;
  border-radius: 8px;
  font-size: 1.4rem;
}
.proyect:nth-child(4) {
  grid-row-start: 4;
  grid-column-start: 1;
}
.proyect :nth-child(5) {
  grid-row-start: 4;
  grid-column-start: 3;
  padding-top: 15px;
}
.proyects-container .moreInfo {
  width: 100%;
  display: grid;
  grid-template-rows: repeat(4, 100px);
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  justify-items: center;
  border: solid 1px var(--gray);
  /*display: none;*/
}
.proyects-container .moreInfo p {
  font-size: 1.6rem;
  padding: 5px;
}
.proyects-container .moreInfo .imgMoreinfoBol {
  width: 100px;
  height: auto;
}
.proyects-container .moreInfo .excAsociates {
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
}
.proyects-container .moreInfo .excAsociates a {
  font-size: 0.9rem;
  color: var(--green);
}
.proyects-container .moreInfo .imgMoreinfoPdf {
  width: 80px;
  height: auto;
}
/*------------------Tablet 768 px minimun------------------*/
@media (min-width: 768px) {
  .proyect {
    display: grid;
    grid-template-rows: 50px 300px 70px;
    grid-template-columns: repeat(3, 1fr);
    align-items: center;
    justify-items: center;
    border: solid 1px var(--gray);
    margin-top: 20px;
  }
  .proyect h2 {
    font-size: 2rem;
  }
  .proyect img {
    grid-row-start: 2;
    grid-column-start: 1;
    grid-column-end: 2;
    width: auto;
    height: auto;
  }
  .proyect #restauracion {
    width: 156px;
    height: 250px;
  }
  .proyect p {
    grid-row-start: 2;
    grid-column-start: 2;
    grid-column-end: 4;
    padding: 0 20px;
    font-size: 1.6rem;
  }
  .proyect:nth-child(4) {
    grid-row-start: 3;
    grid-column-start: 1;
  }
  .proyect :nth-child(5) {
    grid-row-start: 3;
    grid-column-start: 3;
    padding-top: 15px;
  }
}
/*------------------Laptop 1024px minimun-----------------*/
@media (min-width: 768px) {
  .proyect-main-container {
    padding-top: 70px;
  }
  .proyect h2 {
    font-size: 2.2rem;
  }
  .proyect img {
    width: 300px;
    height: auto;
  }
}
</style>
