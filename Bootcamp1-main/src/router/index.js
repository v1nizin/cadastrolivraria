import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import TimesView from '@/views/TimesView.vue';
import JogadoresView from '@/views/JogadoresView.vue';
import AutoresView from '@/views/AutoresView.vue';
import LivrosView from '@/views/LivrosView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'home', component: HomeView },
    { path: '/times', name: 'times', component: TimesView },
    { path: '/jogadores', name: 'jogadores', component: JogadoresView },
    { path: '/autores', name: 'autores', component: AutoresView },
    { path: '/livros', name: 'livros', component: LivrosView },
  ],
});

export default router
