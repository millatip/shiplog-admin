<template>
  <div class="wrapper">
    <side-bar>
      <template slot="links">
        <sidebar-link to="/dashboard" :name="$t('sidebar.dashboard')" icon="tim-icons icon-chart-pie-36"/>
        <sidebar-link to="/user-management" :name="$t('sidebar.userManagement')" icon="tim-icons icon-atom"/>
        <sidebar-link to="/cargo-management" :name="$t('sidebar.cargoManagement')" icon="tim-icons icon-pin"/>
        <sidebar-link to="/vessel-tracking" :name="$t('sidebar.vesselVleetManagement')" icon="tim-icons icon-bell-55"/>
        <sidebar-link to="/container-terminal" :name="$t('sidebar.containerTerminalManagement')" icon="tim-icons icon-single-02"/>
        <sidebar-link to="/custom-clearance" :name="$t('sidebar.cargoTracking')" icon="tim-icons icon-align-center"/>
        <sidebar-link to="/fee-settlement" :name="$t('sidebar.feeSettlement')" icon="tim-icons icon-align-center"/>
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
