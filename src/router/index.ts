import { createRouter, createWebHistory } from 'vue-router';
import JournalView from '@/features/journal/JournalView.vue';
import HomeView from '@/views/HomeView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      redirect: (_) => {
        // the function receives the target route as the argument
        // a relative location doesn't start with `/`
        // or { path: 'profile'}
        return 'journal';
      },
      children: [
        {
          path: '/journal',
          name: 'journal',
          component: JournalView,
        },
      ],
    },
    {
      path: '/signup',
      name: 'signup',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('@/features/signup/SignUpView.vue'),
    },
  ],
});

export default router;
