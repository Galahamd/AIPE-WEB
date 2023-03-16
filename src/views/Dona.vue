<template>
  <div class="donate-main">
    <h1>DONAR</h1>
    <h2 id="subtitle">¿Por qué donar?</h2>
    <p>
      AIPE es una institución sin fines de lucro, todos sus ingresos por
      servicios prestados sirven para fortalecer capacidades de profesionales
      que desarrollan nuevas propuestas en apoyo a nuestra MISIÓN.<br /><br />
      <b
        >Somos una Red de Instituciones de Desarrollo de Bolivia, que contribuye
        con la generación de alternativas productivas, territoriales y
        ecológicas innovadoras, a la generación de un modelo de desarrollo
        centrado en el ser humano, social y económicamente justo y
        ambientalmente sostenible, que permita a todos y todas las bolivianas
        disfrutar de una vida plena.</b
      >
      <br /><br />
      Donar a AIPE, es apoyar la labor de los y las profesionales nacionales que
      trabajan para promover el desarrollo de las comunidades más vulnerables
      del país.
    </p>
    <h2>DONAR AHORA</h2>
    <form
      action="https://formsubmit.co/77c6f1616768e1b6b39170e59953dcc5"
      method="post"
      class="donate-form"
      id="donateForm"
    >
      <input type="hidden" name="_subject" value="Nueva Donacion" />
      <input type="hidden" name="_captcha" value="false" />

      <input
        type="hidden"
        name="_next"
        value="https://aipe.siriustechsol.com/thanku"
      />

      <label id="money-select" for="Tipo de Moneda"
        >Seleccione el tipo de moneda para la donacion:</label
      >
      <select name="Tipo de Moneda" v-model="selectedCoin">
        <option value="Bolivianos">Bolivianos</option>
        <option value="Dólares">Dólares</option>
        <option value="Euros">Euros</option>
      </select>
      <input
        class="radio"
        type="radio"
        value="20"
        name="Monto 20"
        v-model="valuePicked"
      />
      <label for="Monto 20">20</label>
      <input
        class="radio"
        type="radio"
        value="50"
        name="Monto 50"
        v-model="valuePicked"
      />
      <label for="Monto 50">50</label>
      <input
        class="radio"
        type="radio"
        value="100"
        name="Monto 100"
        v-model="valuePicked"
      />
      <label for="Monto 100">100</label>
      <input
        class="radio"
        type="radio"
        value="200"
        name="Monto 200"
        v-model="valuePicked"
      />
      <label for="Monto 200">200</label>
      <input
        class="radio"
        type="radio"
        value="-1"
        name="Otro Monto"
        v-model="valuePicked"
      />
      <label for="Otro Monto">Otro Monto</label>
      <input
        v-show="this.valuePicked < 0"
        type="number"
        placeholder="Monto..."
        name="Otro Monto"
        v-model="valuePickedOther"
      />
      <div class="amount"></div>
      <p>Seleccione el tipo de concepto de la donacion:</p>
      <select name="concepto" v-model="selectedConcept">
        <option value="Curso de capacitación">Curso de capacitación</option>
        <option value="Apoyo a programa">Apoyo a programa</option>
        <option value="Donación libre">Donación libre</option>
        <option value="Uso de la casa enlace">Uso de la casa enlace</option>
      </select>
      <fieldset>
        <legend>DATOS PERSONALES:</legend>
        <br />
        <label for="Correo electronico">Correo Electronico</label><br />
        <input
          class="donate-input"
          type="email"
          name="Correo electronico"
          placeholder="email@web.com"
          v-model="email"
        /><br />
        <label for="Número de Teléfono/Celular"
          >Número de Teléfono/Celular</label
        ><br />
        <input
          class="donate-input"
          type="number"
          name="Número de Teléfono/Celular"
          placeholder="Teléfono/Celular"
          v-model="number"
        /><br />
        <label for="Nombres">Nombres</label><br />
        <input
          class="donate-input"
          type="text"
          name="Nombres"
          placeholder="Nombres"
          v-model="names"
        /><br />
        <label for="Apellidos">Apellidos</label><br />
        <input
          class="donate-input"
          type="text"
          name="Apellidos"
          placeholder="Apellidos"
          v-model="lastnames"
        /><br />
        <label for="País">País</label><br />
        <input
          class="donate-input"
          type="text"
          name="País"
          placeholder="País"
          v-model="country"
        /><br />
        <label for="Departamento/Estado">Departamento/Estado</label><br />
        <input
          class="donate-input"
          type="text"
          name="Departamento/Estado"
          placeholder="Departamento/Estado"
          v-model="state"
        />
      </fieldset>
    </form>
    <div class="buttons">
      <button id="bt-cancel" type="button" v-on:click="reset()">
        CANCELAR
      </button>
      <button id="bt-submit" form="donateForm" type="submit" value="submit">
        ENVIAR
      </button>
    </div>
  </div>
  {{ selectedCoin }}
  {{ valuePicked }}
  {{ valuePickedOther }}
  {{ selectedConcept }}
  {{ email }}
  {{ number }}
  {{ names }}
  {{ lastnames }}
  {{ country }}
  {{ state }}
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
      selectedCoin: "",
      valuePicked: "",
      valuePickedOther: 0,
      selectedConcept: "",
      email: "",
      number: "",
      names: "",
      lastnames: "",
      country: "",
      state: "",
    };
  },

  methods: {
    reset() {
      this.selectedCoin = "";
      this.valuePicked = "";
      this.selectedConcept = "";
      this.email = "";
      this.number = "";
      this.names = "";
      this.lastnames = "";
      this.country = "";
      this.state = "";
    },
  },
};
</script>
<style scoped>
.donate-main {
  padding: 50px 30px 30px 30px;
}
.donate-main h1 {
  font-size: 3rem;
  text-align: center;
  color: var(--green);
  padding-bottom: 30px;
}
.donate-main h2 {
  font-size: 2.2rem;
  color: var(--green);
}
#subtitle {
  padding-bottom: 20px;
}
.donate-main p {
  font-size: 1.6rem;
  line-height: 1.4;
  text-align: justify;
  padding-bottom: 20px;
}
.donate-form {
  padding-top: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.donate-form #money-select {
  font-size: 1.6rem;
  line-height: 1.4;
  padding: 20px 0 10px 0;
}
.donate-form select {
  padding: 10px 0;
  margin-bottom: 10px;
  align-self: stretch;
}
.donate-form .amount {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  padding: 10px 0 20px 0;
}
.donate-form .radio {
  width: 25px;
  height: 25px;
}
.donate-form label {
  margin: 5px 5px 10px 5px;
  font-size: 1.6rem;
}
.donate-form fieldset {
  width: 100%;
}
.donate-form .donate-input {
  margin: 10px 10px;
  padding: 10px 0;
  width: 90%;
}
.donate-main .buttons {
  display: flex;
  justify-content: space-around;
  margin-top: 10px;
}
.donate-main .buttons button {
  color: white;
  font-size: 1.6rem;
  text-align: center;
  padding: 10px 0;
  width: 110px;
}
.donate-main .buttons #bt-cancel {
  background-color: red;
}
.donate-main .buttons #bt-submit {
  background-color: green;
}
/*-------------------------Laptop 1024 px MIN ------------------------*/
@media (min-width: 1024px) {
  .donate-main {
    padding: 70px 100px 30px 100px;
  }
}
</style>
