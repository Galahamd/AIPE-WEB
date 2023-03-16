import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import QuienesSomos from "../views/QuienesSomos.vue";
import ProgramasProyectos from "../views/ProgramasProyectos.vue";
import CasaEnlace from "../views/CasaEnlace.vue";
import Capacitacion from "../views/Capacitacion.vue";
import Asociados from "../views/Asociados.vue";
import Dona from "../views/Dona.vue";
import Thanku from "../views/Thanku.vue";
const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/quienessomos",
    name: "QuienesSomos",
    component: QuienesSomos,
  },
  {
    path: "/programasproyectos",
    name: "ProgramasProyectos",
    component: ProgramasProyectos,
  },
  {
    path: "/casaenlace",
    name: "CasaEnlace",
    component: CasaEnlace,
  },
  {
    path: "/capacitacion",
    name: "Capacitacion",
    component: Capacitacion,
  },
  {
    path: "/asociados",
    name: "Asociados",
    component: Asociados,
  },
  {
    path: "/dona",
    name: "Dona",
    component: Dona,
  },
  {
    path: "/thanku",
    name: "Thanku",
    component: Thanku,
  },
  {
    path: "/contactanos",
    name: "Contactanos",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Contactanos.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
