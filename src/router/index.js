import { createRouter, createWebHashHistory } from 'vue-router'
import Layout from '@/layout'

export const constantRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login'),
    hidden: true,
  },
  {
    path: '/403',
    name: '403',
    component: () => import('@/views/403'),
    hidden: true,
  },
  {
    path: '/404',
    name: '404',
    component: () => import('@/views/404'),
    hidden: true,
  },
]
export const asyncRoutes = [
  {
    path: '/accountManagement',
    component: Layout,
    redirect: '/accountManagement',
    meta: {
      title: '會員管理',
      icon: 'home-4-line',
      affix: true,
    },
    children: [
      {
        path: 'accountManagement',
        name: 'AccountManagement',
        component: () => import('@/views/accountManagement'),
        meta: {
          title: '會員管理',
          icon: 'home-4-line',
          affix: true,
        },
      },
    ],
  },
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    alwaysShow: true,
    meta: {
      title: '健康服務管理',
      icon: 'apps-line',
    },
    children: [
      {
        path: 'dashboard',
        name: 'Dashboard',
        component: () => import('@/views/healthManagement/dashboard'),
        meta: {
          title: '健康方案儀表板',
          icon: 'table-2',
        },
      },
      {
        path: 'servicePlanManagement',
        name: 'ServicePlanManagement',
        component: () =>
          import('@/views/healthManagement/servicePlanManagement'),
        meta: {
          title: '服務方案管理',
          icon: 'table-2',
        },
      },
      {
        path: 'caseManagement',
        name: 'CaseManagement',
        component: () => import('@/views/healthManagement/caseManagement'),
        meta: {
          title: '個案管理',
          icon: 'table-2',
        },
      },
      {
        path: 'healthReport',
        name: 'HealthReport',
        component: () => import('@/views/healthManagement/healthReport'),
        meta: {
          title: '健康報告',
          icon: 'table-2',
        },
      },
      {
        path: 'healthRecord',
        name: 'HealthRecord',
        component: () => import('@/views/healthManagement/healthRecord'),
        meta: {
          title: '健康紀錄',
          icon: 'table-2',
        },
      },
    ],
  },
  {
    path: '/index',
    component: Layout,
    redirect: '/index',
    meta: {
      title: '首页',
      icon: 'home-4-line',
      //affix: true,
    },
    children: [
      {
        path: 'index',
        name: 'Index',
        component: () => import('@/views/index'),
        meta: {
          title: '首页',
          icon: 'home-4-line',
          //affix: true,
        },
      },
    ],
  },
  {
    path: '/vab',
    component: Layout,
    redirect: '/vab/table',
    alwaysShow: true,
    meta: {
      title: '组件',
      icon: 'apps-line',
    },
    children: [
      {
        path: 'table',
        name: 'Table',
        component: () => import('@/views/vab/table'),
        meta: {
          title: '表格',
          icon: 'table-2',
        },
      },
      {
        path: 'icon',
        name: 'Icon',
        component: () => import('@/views/vab/icon'),
        meta: {
          title: '图标',
          icon: 'remixicon-line',
        },
      },
    ],
  },
  {
    path: '/test',
    component: Layout,
    redirect: '/test/test',
    meta: {
      title: '动态路由测试',
      icon: 'test-tube-line',
    },
    children: [
      {
        path: 'test',
        name: 'Test',
        component: () => import('@/views/test'),
        meta: {
          title: '动态路由测试',
          icon: 'test-tube-line',
        },
      },
    ],
  },
  {
    path: '/error',
    name: 'Error',
    component: Layout,
    redirect: '/error/403',
    meta: {
      title: '错误页',
      icon: 'error-warning-line',
    },
    children: [
      {
        path: '403',
        name: 'Error403',
        component: () => import('@/views/403'),
        meta: {
          title: '403',
          icon: 'error-warning-line',
        },
      },
      {
        path: '404',
        name: 'Error404',
        component: () => import('@/views/404'),
        meta: {
          title: '404',
          icon: 'error-warning-line',
        },
      },
    ],
  },
  {
    path: '/*',
    redirect: '/404',
    hidden: true,
  },
]
const router = createRouter({
  history: createWebHashHistory(),
  routes: constantRoutes,
})

export default router
