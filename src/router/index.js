import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import PriceListView from "../views/PriceListView.vue";
import ContactsView from "../views/ContactsView.vue";
import CareerView from "../views/CareerView.vue";
import AboutView from "../views/AboutView.vue";
import ProductsView from '../views/ProductsView.vue'

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    component: AboutView,
  },
  {
    path: "/price-list",
    name: "price-list",
    component: PriceListView,
  },
  {
    path: "/career",
    name: "career",
    component: CareerView,
  },
  {
    path: "/contacts",
    name: "contacts",
    component: ContactsView,
  },
  {
    path: "/products",
    name: "products",
    component: ProductsView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
