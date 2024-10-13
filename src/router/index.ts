import { createRouter, createWebHistory } from 'vue-router'

import ReviewView from '../views/ReviewView.vue'
import ProfileView from '@/views/ProfileView.vue'
import SettingsView from '@/views/SettingsView.vue'
import CreateProfileView from '@/views/CreateProfileView.vue'
import EditProfileView from '@/views/EditProfileView.vue'
import HistoryView from '@/views/HistoryView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'review',
      component: ReviewView,
      meta: { transition: 'fade' },
    },
    {
      path: '/profile',
      name: 'profile',
      component: ProfileView,
      meta: { transition: 'fade' },
    },
    {
      path: '/settings',
      name: 'settings',
      component: SettingsView,
      meta: { transition: 'fade' },
    },
    {
      path: '/profile/create',
      name: 'profile.create',
      component: CreateProfileView,
      meta: { transition: 'fade' },
    },
    {
      path: '/profile/edit/:id',
      name: 'profile.edit',
      component: EditProfileView,
      meta: { transition: 'fade' },
    },
    {
      path: '/history/:id',
      name: 'history',
      component: HistoryView,
      meta: { transition: 'fade' },
    }
  ]
})

export default router
