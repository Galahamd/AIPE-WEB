<template>
  <div class="training-main">
    <h1>CAPACITACIÓN</h1>
    <p>
      La Red AIPE fortalece poermanentemente las capacidades de profesionales y
      técnicos que trabajan en las instituciones asociadas con espacios de
      formación variados que, hoy se abren al público interesado en fortalecer
      sus conociemtos y reflexionar sobre su acción.<br />
      La capacitación que ofrece la Red AIPE tiene la modalidad de donación por
      servicios y certifica institucionalmente la formación entregada.
    </p>
    <div class="trainig-card">
      <div class="training-card-img">
        <img src="../assets/img/cap2.png" alt="" />
      </div>
      <div class="training-card-info">
        <p>
          <b>
            Curso sobre derechos humanos e incidencia política del derecho
            humano a la alimentación</b
          >
        </p>
        <p>
          <b>DICTADIO POR:</b> Especialistas con amplia experiencia, asociados a
          la Red AIPE.<br />
          <b>CERTIFICADO EXPEDIDO POR:</b> Asociación de Instituciones de
          Promoción y Educación, AIPE.
        </p>
        <p><b>CARGA HORARIA:</b> 30 horas académicas.</p>
        <p><b>DURACIÓN ESTIMADA:</b> Un mes calendario.</p>
      </div>
      <div class="training-card-buttons">
        <router-link to="/dona">INSCRÍBETE</router-link>
      </div>
    </div>
    <div class="trainig-card">
      <div class="training-card-img">
        <img src="../assets/img/cap1.png" alt="" />
      </div>
      <div class="training-card-info">
        <p>
          Curso: “Cultivos biointensivos, respuesta sostenible a la
          agroindustria”
        </p>
        <p>
          <b>DICTADO POR:</b> AIPE en asociación con el Colectivo Producción Bio
          Intensiva.<br />
          <b>CERTIFICADO EXPEDIDO POR:</b> AIPE y CPBI.
        </p>
        <p><b>CARGA HORARIA:</b> 180 horas académicas.</p>
        <p><b>DURACIÓN ESTIMADA:</b> 6 meses.</p>
        <p><b>CURSO SEMIPRESENCIAL</b></p>
      </div>
      <div class="training-card-buttons">
        <router-link to="/dona">INSCRÍBETE</router-link>
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
};
</script>
<style scoped>
.training-main {
  padding: 50px 30px 30px 30px;
}
.training-main h1 {
  font-size: 3rem;
  color: var(--green);
  text-align: center;
  padding-bottom: 30px;
}
.training-main p {
  font-size: 1.6rem;
  text-align: justify;
  line-height: 1.4;
  padding-bottom: 30px;
}
.trainig-card {
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;
  justify-content: center;
  border: solid 1px var(--green);
  margin-bottom: 30px;
}

.trainig-card .training-card-img img {
  width: 100px;
  height: auto;
}
.trainig-card .training-card-info {
  font-size: 1.6rem;
  line-height: 1.4;
  text-align: justify;
  padding: 10px 0;
  border-top: solid 1px var(--green);
  border-bottom: solid 1px var(--green);
}
.trainig-card .training-card-info p:nth-child(1) {
  text-align: center;
  color: var(--green);
}
.trainig-card .training-card-info p:nth-child(2) {
  background-color: var(--gray);
  padding: 10px 15px;
}
.trainig-card .training-card-info p:nth-child(3),
p:nth-child(4),
p:nth-child(5) {
  padding-left: 15px;
  padding-right: 15px;
}
.trainig-card .training-card-buttons {
  padding-top: 10px;
  padding-bottom: 10px;
  display: flex;
  gap: 30px;
}
.trainig-card .training-card-buttons a {
  padding: 10px 15px;
  color: white;
  background-color: var(--green);
  border-radius: 8px;
  text-decoration: none;
  font-size: 1.6rem;
}
.trainig-card .training-card-buttons a:nth-child(2) {
  background-color: var(--gray);
  color: var(--green);
}
/*------------------------TABLET 768px MIN-----------------------------*/
@media (min-width: 768px) {
  .trainig-card {
    display: grid;
    grid-template-columns: 1fr 3fr 1fr;
  }
  .trainig-card .training-card-info {
    border-left: solid 1px var(--green);
    border-right: solid 1px var(--green);
    border-top: none;
    border-bottom: none;
  }
  .trainig-card .training-card-buttons {
    flex-direction: column;
  }
}
/*--------------------------LAPTOP 1024px MIN--------------------------*/
@media (min-width: 1024px) {
  .training-main {
    padding: 70px 100px 30px 100px;
  }
}
</style>
