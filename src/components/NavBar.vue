<template>
  <nav>
    <div class="menu-movile">
      <input type="checkbox" class="toogler" />
      <div class="menu-container">
        <img src="../assets/icons/menublack.png" alt="Menu" />
        <img src="../assets/icons/closeBlack.png" alt="Cerrar Menu" />
        <div class="menu-options_wrap">
          <ul>
            <li>
              <router-link to="/">Inicio</router-link>
            </li>
            <li>
              <router-link to="/quienessomos">Quienes somos</router-link>
            </li>
            <li>
              <router-link to="/asociados">Asociados</router-link>
            </li>
            <li>
              <router-link to="/programasproyectos"
                >Programas y Proyectos</router-link
              >
            </li>
            <li>
              <router-link to="/capacitacion">Capacitación</router-link>
            </li>
            <li>
              <router-link to="/casaenlace">Casa Enlace</router-link>
            </li>
            <li><router-link to="/dona" class="donar">Donar</router-link></li>
            <li>
              <router-link to="/contactanos">Contactanos</router-link>
            </li>
          </ul>
        </div>
      </div>
      <div class="menu-assets">
        <p>ASOCIACIÓN DE INSTITUCIONES PROMOCIÓN Y EDUCACIÓN</p>
        <router-link to="/"
          ><img src="../assets/img/isotipoAIPE.png" alt="Isologotipo AIPE"
        /></router-link>
      </div>
    </div>
    <div class="menu-laptop">
      <div class="menu-options_wrap">
        <ul>
          <li>
            <router-link to="/">Inicio</router-link>
          </li>
          <li>
            <router-link to="/quienessomos">Quienes somos</router-link>
          </li>
          <li>
            <router-link to="/asociados">Asociados</router-link>
          </li>
          <li>
            <router-link to="/programasproyectos"
              >Programas y Proyectos</router-link
            >
          </li>
          <li>
            <router-link to="/capacitacion">Capacitación</router-link>
          </li>
          <li>
            <router-link to="/casaenlace">Casa Enlace</router-link>
          </li>
          <li><router-link to="/dona" class="donar">Donar</router-link></li>
          <li>
            <router-link to="/contactanos">Contactanos</router-link>
          </li>
          <li>
            <div class="menu-logo">
              <router-link to="/"
                ><img src="../assets/img/isotipoAIPE.png" alt="Logo AIPE"
              /></router-link>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {};
</script>

<style scoped>
nav {
  position: fixed;
  display: flex;
  height: 50px;
  width: 100vw;
  background-color: white;
  padding: 5px 0;
  z-index: 2;
}
p {
  font-size: 0.9rem;
  font-weight: bold;
  text-align: center;
  padding: 12px 0 0 0;
}
.menu-movile {
  display: grid;
  grid-template-columns: 50px 270px;
}
.menu-laptop {
  display: none;
}
.menu-movile .menu-assets {
  grid-column-start: 2;
  grid-column-end: 4;
  display: grid;
  grid-template-columns: 2fr 1fr;
  justify-items: center;
}
a {
  justify-self: flex-end;
  margin-right: 10px;
}
img {
  height: 40px;
}

.menu-container {
  justify-self: flex-start;
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}
.menu-movile .toogler {
  align-self: flex-start;
  position: absolute;
  cursor: pointer;
  width: 40px;
  height: 40px;
  opacity: 0;
  z-index: 2;
  margin-left: 15px;
}

.menu-container img:nth-child(1) {
  width: 40px;
  height: auto;
  margin-left: 15px;
  transition: all 0.4s ease;
  visibility: visible;
}
.menu-container img:nth-child(2) {
  width: 40px;
  height: auto;
  margin-left: 15px;
  margin-top: -40px;
  /*transition: all 0.9s ease;*/
  visibility: hidden;
}
.menu-movile .toogler:checked + .menu-container > img:nth-child(1) {
  transform: rotate(135deg);
  visibility: hidden;
}

.menu-movile .toogler:checked + .menu-container > img:nth-child(2) {
  visibility: visible;
}

/*Menu with show and hide*/
.menu-movile .toogler:checked ~ .menu-container .menu-options_wrap {
  display: unset;
}

.menu-movile .menu-options_wrap {
  width: 100vw;
  height: auto;
  margin-left: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  background-color: white;
  padding: 10px 0 10px 20px;
  border-bottom-right-radius: 8px;
  border-bottom-left-radius: 8px;
  display: none;
}

.menu-movile .menu-options_wrap a {
  font-size: 1.6rem;
  font-weight: 500;
  text-decoration: none;
  color: var(--green);
  padding: 10px 0;
}
.menu-movile .menu-options_wrap ul li {
  list-style: none;
  padding-bottom: 15px;
}
.menu-movile .menu-options_wrap ul li:nth-child(7) a {
  background-color: var(--gray);
  color: var(--green);
  padding-right: 100%;
}
.menu-movile .menu-options_wrap ul li:nth-child(7) a:hover {
  background-color: white;
}
/*Movile M 375*/
@media (min-width: 375px) {
  .menu-movile {
    grid-template-columns: 50px 325px;
  }
}
/*Movile L 425*/
@media (min-width: 425px) {
  .menu-movile {
    grid-template-columns: 50px 375px;
  }
  p {
    font-size: 1rem;
    padding: 12px 0 0 15px;
  }
}
/*Tablet 768 px minimun */
@media (min-width: 768px) {
  .menu-movile {
    grid-template-columns: 70px 698px;
  }
  p {
    font-size: 1.3rem;
    padding: 12px 0 0 90px;
  }
  a {
    padding-right: 30px;
  }
}
/*---------------- LAPTOP 1024 px minimun -----------------*/
@media (min-width: 1024px) {
  nav {
    position: fixed;
    height: 70px;
    padding: 0;
  }
  .menu-movile {
    display: none;
  }
  .menu-laptop {
    display: unset;
    width: 100vw;
    padding-left: 20px;
  }
  .menu-laptop .menu-options_wrap ul {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
  }
  .menu-laptop .menu-options_wrap ul li {
    list-style: none;
  }
  .menu-laptop .menu-options_wrap ul li a {
    text-decoration: none;
    font-size: 1.8rem;
    font-weight: bold;
    color: var(--green);
    padding: 0;
    margin: 0;
  }

  .menu-laptop .menu-options_wrap ul li:nth-child(7) {
    background-color: var(--gray);
    padding: 25px 10px 24px 10px;
  }
  .menu-laptop .menu-options_wrap ul li:nth-child(7):hover {
    background-color: white;
  }
}
</style>
