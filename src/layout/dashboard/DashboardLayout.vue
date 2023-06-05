<template>
  <div class="wrapper">
    <side-bar>
      <template slot="links">
        <sidebar-link to="/cargo-management" :name="$t('sidebar.cargoManagement')" icon="tim-icons icon-delivery-fast"/>
        <sidebar-link to="/vessel-tracking" :name="$t('sidebar.vesselVleetManagement')" icon="tim-icons icon-compass-05"/>
        <sidebar-link to="/container-terminal" :name="$t('sidebar.containerTerminalManagement')" icon="tim-icons icon-app"/>
        <sidebar-link to="/custom-clearance" :name="$t('sidebar.cargoTracking')" icon="tim-icons icon-badge"/>
        <sidebar-link to="/fee-settlement" :name="$t('sidebar.feeSettlement')" icon="tim-icons icon-money-coins"/>
      </template>
    </side-bar>
    <div class="main-panel">
      <top-navbar></top-navbar>

      <dashboard-content @click.native="toggleSidebar">

      </dashboard-content>


      <content-footer></content-footer>
    </div>
  </div>
</template>
<style lang="scss">
</style>
<script>
import TopNavbar from "./TopNavbar.vue";
import ContentFooter from "./ContentFooter.vue";
import DashboardContent from "./Content.vue";
import MobileMenu from "./MobileMenu";
export default {
  components: {
    TopNavbar,
    ContentFooter,
    DashboardContent,
    MobileMenu
  },
  methods: {
    toggleSidebar() {
      if (this.$sidebar.showSidebar) {
        this.$sidebar.displaySidebar(false);
      }
    }
  }
};
</script>
