<template>
    <div class="row">
      <div class="col-md-6">
        <div class="card">
          <div class="card-header">Get Cargo Loading Schedule</div>
          <div class="card-body">
            <form @submit.prevent="getCargoLoadingSchedule">
              <div class="form-group">
                <label for="cargoID">Cargo ID</label>
                <input type="text" id="cargoID" class="form-control" v-model="cargoID" required>
              </div>
              <button type="submit" class="btn btn-primary">Get Schedule</button>
            </form>
            <div v-if="loadingSchedule">
              <p><strong>Cargo Loading Schedule:</strong> {{ loadingSchedule }}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-6">
        <div class="card">
          <div class="card-header">Get Cargo Unloading Schedule</div>
          <div class="card-body">
            <form @submit.prevent="getCargoUnloadingSchedule">
              <div class="form-group">
                <label for="cargoID">Cargo ID</label>
                <input type="text" id="cargoID" class="form-control" v-model="cargoID" required>
              </div>
              <button type="submit" class="btn btn-primary">Get Schedule</button>
            </form>
            <div v-if="unloadingSchedule">
              <p><strong>Cargo Unloading Schedule:</strong> {{ unloadingSchedule }}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-6">
        <div class="card">
          <div class="card-header">Update Cargo Loading Schedule</div>
          <div class="card-body">
            <form @submit.prevent="updateCargoLoadingSchedule">
              <div class="form-group">
                <label for="cargoID">Cargo ID</label>
                <input type="text" id="cargoID" class="form-control" v-model="cargoID" required>
              </div>
              <div class="form-group">
                <label for="terminalLocation">Terminal Location</label>
                <input type="text" id="terminalLocation" class="form-control" v-model="terminalLocation" required>
              </div>
              <button type="submit" class="btn btn-primary">Update Schedule</button>
            </form>
          </div>
        </div>
      </div>
      <div class="col-md-6">
        <div class="card">
          <div class="card-header">Update Cargo Unloading Schedule</div>
          <div class="card-body">
            <form @submit.prevent="updateCargoUnloadingSchedule">
              <div class="form-group">
                <label for="cargoID">Cargo ID</label>
                <input type="text" id="cargoID" class="form-control" v-model="cargoID" required>
              </div>
              <div class="form-group">
                <label for="terminalLocation">Terminal Location</label>
                <input type="text" id="terminalLocation" class="form-control" v-model="terminalLocation" required>
              </div>
              <button type="submit" class="btn btn-primary">Update Schedule</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        cargoID: "",
        terminalLocation: "",
        loadingSchedule: "",
        unloadingSchedule: "",
      };
    },
    methods: {
      getCargoLoadingSchedule() {
        // Implement logic to retrieve cargo loading schedule using cargoID
      },
      getCargoUnloadingSchedule() {
        // Implement logic to retrieve cargo unloading schedule using cargoID
      },
      updateCargoLoadingSchedule() {
        // Implement logic to update cargo loading schedule with cargoID and terminalLocation
      },
      updateCargoUnloadingSchedule() {
        // Implement logic to update cargo unloading schedule with cargoID and terminalLocation
      },
    },
  };
  </script>
  
  <style>
  </style>
  