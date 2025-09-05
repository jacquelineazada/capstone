/\*\*

- router/index.ts
-
- Automatic routes for `./src/pages/*.vue`
  \*/

// Composables
import { createRouter, createWebHistory } from 'vue-router/auto'
import { setupLayouts } from 'virtual:generated-layouts'
import AdminLayout from '@/layouts/AdminLayout.vue'
import AuthLayout from '../layouts/AuthLayout.vue'
import Login from '@/pages/auth/Login.vue'
import Home from '@/pages/index.vue'
import About from '../pages/auth/About.vue'
import Services from '../pages/auth/Services.vue'
import Dashboard from '../pages/admin/Dashboard.vue'
import LocationalClearance from '@/pages/auth/LocationalClearance.vue'
import BuildingPermit from '@/pages/auth/BuildingPermit.vue'
import OccupancyPermit from '@/pages/auth/OccupancyPermit.vue'
const routes = [
{
path: '/',
component: AuthLayout,
children: [
{
path: '',
component: Home,
},
{
path: 'home',
component: Home,
},
{
path: 'services',
component: Services,
},
{
path: 'about',
component: About,
},
{
path: 'login',
component: Login,
},
{
path: 'locational-clearance',
component: LocationalClearance,
},
{
path: 'building-permit',
component: BuildingPermit,
},
{
path: 'occupancy-permit',
component: OccupancyPermit,
},
],
},
{
path: '/admin',
component: AdminLayout,
children: [
{
path: 'dashboard',
component: Dashboard,
},
],
},
]

const router = createRouter({
history: createWebHistory(import.meta.env.BASE_URL),
routes: setupLayouts(routes),
})

// Workaround for https://github.com/vitejs/vite/issues/11804
router.onError((err, to) => {
if (err?.message?.includes?.('Failed to fetch dynamically imported module')) {
if (localStorage.getItem('vuetify:dynamic-reload')) {
console.error('Dynamic import error, reloading page did not fix it', err)
} else {
console.log('Reloading page to fix dynamic import error')
localStorage.setItem('vuetify:dynamic-reload', 'true')
location.assign(to.fullPath)
}
} else {
console.error(err)
}
})

router.isReady().then(() => {
localStorage.removeItem('vuetify:dynamic-reload')
})

export default router
