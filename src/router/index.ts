import { createRouter, createWebHistory } from 'vue-router';
import JournalView from '@/features/journal/JournalView.vue';
import JournalDetailView from '@/features/journal/JournalDetailView.vue';
import HomeView from '@/views/HomeView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      redirect: () => {
        return 'journal';
      },
      children: [
        {
          path: '/journal',
          name: 'journal',
          component: JournalView,
          meta: { title: 'Journal' },
          children: [
            {
              path: ':id',
              name: 'detail',
              component: JournalDetailView,
              meta: { title: 'Journal' },
            },
          ],
        },
      ],
    },
    {
      path: '/signup',
      name: 'signup',
      component: () => import('@/features/signup/SignUpView.vue'),
    },
  ],
});

export default router;
