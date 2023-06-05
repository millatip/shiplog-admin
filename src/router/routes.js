import DashboardLayout from "@/layout/dashboard/DashboardLayout.vue";
// GeneralViews
import NotFound from "@/pages/NotFoundPage.vue";

const CargoManagement = () => import(/* webpackChunkName: "common" */ "@/pages/CargoManagement");
const VesselTracking = () => import(/* webpackChunkName: "common" */ "@/pages/VesselTracking");
const ContainerTerminal = () => import(/* webpackChunkName: "common" */ "@/pages/ContainerTerminal");
const CustomClearance = () => import(/* webpackChunkName: "common" */ "@/pages/CustomClearance");
const FeeSettlement = () => import(/* webpackChunkName: "common" */ "@/pages/FeeSettlement");
const routes = [
  {
    path: "/",
    component: DashboardLayout,
    redirect: "/dashboard",
    children: [
      {
        path: "cargo-management",
        name: "cargo management",
        component: CargoManagement
      },
      {
        path: "vessel-tracking",
        name: "vessel tracking",
        component: VesselTracking
      },
      {
        path: "container-terminal",
        name: "container terminal",
        component: ContainerTerminal
      },
      {
        path: "custom-clearance",
        name: "custom clearance",
        component: CustomClearance
      },
      {
        path: "fee-settlement",
        name: "fee settlement",
        component: FeeSettlement
      }
    ]
  },
  { path: "*", component: NotFound },
];

/**
 * Asynchronously load view (Webpack Lazy loading compatible)
 * The specified component must be inside the Views folder
 * @param  {string} name  the filename (basename) of the view to load.
function view(name) {
   var res= require('../components/Dashboard/Views/' + name + '.vue');
   return res;
};**/

export default routes;
