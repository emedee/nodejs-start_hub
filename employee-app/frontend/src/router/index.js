import Vue from 'vue'
import VueRouter from 'vue-router'
import employee from '../views/employee.vue'
import department from '../views/department.vue'
import designation from '../views/designation.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'employee',
    component: employee
  },
  {
    path: '/department',
    name: 'department',
    component: department
  },
  {
    path: '/designation',
    name: 'designation',
    component: designation
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
