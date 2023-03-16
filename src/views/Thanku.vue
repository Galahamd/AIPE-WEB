<template>
  <div class="main-thanks">
    <div class="thanks-container">
      <h2>Gracias !</h2>
      <p>
        Un correo electrónico ha sido enviado a AIPE. <br />
        Un personal autorizado le contactará en las próximas horas.
      </p>
      <router-link to="/">Presione aqui para regresar al inicio</router-link>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.main-thanks {
  display: flex;
  justify-content: center;
  padding: 50px 15px 20px 15px;
}
.thanks-container {
  display: flex;
  flex-direction: column;
  width: 280px;
  height: 200px;
  background-color: #eaedef;
}
.thanks-container h2 {
  font-size: 2.2rem;
  color: var(--green);
  padding: 20px 0 20px 20px;
}
.thanks-container p {
  font-size: 1.6rem;
  padding-left: 25px;
}
.thanks-container a {
  color: var(--green);
  align-self: center;
  font-size: 1.5rem;
  padding-top: 20px;
}
</style>
