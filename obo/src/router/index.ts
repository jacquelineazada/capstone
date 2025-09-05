/**
 * router/index.ts
 *
 * Automatic routes for `./src/pages/*.vue`
 */

// Composables
import { createRouter, createWebHistory } from "vue-router/auto";
import { setupLayouts } from "virtual:generated-layouts";
import AdminLayout from "@/layouts/AdminLayout.vue";
import ApplicantLayout from "@/layouts/ApplicantLayout.vue";
import home from "../pages/applicant/home.vue";
import login from "@/pages/applicant/login.vue";
import services from "../pages/applicant/services.vue";
import about from "../pages/applicant/about.vue";
import Dashboard from "@/pages/admin/dashboard.vue";
import ApplicantPortal from "@/pages/applicant/occupancy_permit/applicant_portal.vue";
import unified from "@/pages/applicant/occupancy_permit/occupancy_forms/unified.vue";
import CompletionForms from "@/pages/applicant/occupancy_permit/completion_forms.vue";
import cfei from "@/pages/applicant/occupancy_permit/occupancy_forms/cfei.vue";
import coc from "@/pages/applicant/occupancy_permit/occupancy_forms/coc.vue";
import mc from "@/pages/applicant/occupancy_permit/occupancy_forms/mc.vue";
import upload from "@/pages/applicant/occupancy_permit/upload.vue";
import StatusOne from "@/pages/applicant/occupancy_permit/statuses/status_one.vue";
import DataTable from "@/pages/admin/inspectors_schedule/data_table.vue";
import ScheduleMix from "@/pages/admin/inspectors_schedule/schedule_mix.vue";
import ScheduleApp from "@/pages/admin/inspectors_schedule/schedule_approved.vue";
import ReportTable from "@/pages/admin/inspection_report/report_table.vue";
import ReportPending from "@/pages/admin/inspection_report/report_pending.vue";
import ReportApproved from "@/pages/admin/inspection_report/report_approved.vue";
import AdminTable from "@/pages/admin/Administrative/admin_table.vue";
import AdminPending from "@/pages/admin/Administrative/admin_pending.vue";
import TableAdmin from "@/pages/admin/Administrative/table_admin.vue";
import verified from "@/pages/admin/Administrative/verified.vue";
import inspector from "@/pages/admin/inspector/inspector_login.vue";
import architectural from "@/pages/admin/inspector/architectural/architectural_table.vue";
import archireport from "@/pages/admin/inspector/architectural/report.vue";
import electrical from "@/pages/admin/inspector/electrical/electrical_table.vue";

const routes = [
  {
    path: "/",
    component: ApplicantLayout,
    children: [
      {
        path: "",
        component: home,
      },
      {
        path: "home",
        component: home,
      },
      {
        path: "services",
        component: services,
      },
      {
        path: "about",
        component: about,
      },
      {
        path: "login",
        component: login,
      },
      {
        path: "applicant-portal",
        component: ApplicantPortal,
      },
      {
        path: "unified",
        component: unified,
      },
      {
        path: "completion-forms",
        component: CompletionForms,
      },
      {
        path: "cfei",
        component: cfei,
      },
      {
        path: "coc",
        component: coc,
      },
      {
        path: "mc",
        component: mc,
      },
      {
        path: "upload",
        component: upload,
      },
      {
        path: "StatusOne",
        component: StatusOne,
      },
      {
        path: "DataTable",
        component: DataTable,
      },
      {
        path: "ScheduleMix",
        component: ScheduleMix,
      },
      {
        path: "ScheduleApp",
        component: ScheduleApp,
      },
      {
        path: "ReportTable",
        component: ReportTable,
      },
      {
        path: "ReportPending",
        component: ReportPending,
      },
      {
        path: "ReportApproved",
        component: ReportApproved,
      },
      {
        path: "AdminTable",
        component: AdminTable,
      },
      {
        path: "AdminPending",
        component: AdminPending,
      },
      {
        path: "TableAdmin",
        component: TableAdmin,
      },
      {
        path: "verified",
        component: verified,
      },
      {
        path: "inspector",
        component: inspector,
      },
      {
        path: "architectural",
        component: architectural,
      },
      {
        path: "electrical",
        component: electrical,
      },
    ],
  },
  {
    path: "/admin",
    component: AdminLayout,
    children: [
      {
        path: "dashboard",
        component: Dashboard,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: setupLayouts(routes),
});

// Workaround for https://github.com/vitejs/vite/issues/11804
router.onError((err, to) => {
  if (err?.message?.includes?.("Failed to fetch dynamically imported module")) {
    if (localStorage.getItem("vuetify:dynamic-reload")) {
      console.error("Dynamic import error, reloading page did not fix it", err);
    } else {
      console.log("Reloading page to fix dynamic import error");
      localStorage.setItem("vuetify:dynamic-reload", "true");
      location.assign(to.fullPath);
    }
  } else {
    console.error(err);
  }
});

router.isReady().then(() => {
  localStorage.removeItem("vuetify:dynamic-reload");
});

export default router;
