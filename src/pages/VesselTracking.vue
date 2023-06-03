<template>
    <div class="row">
      <div class="col-md-8">
        <div class="card">
          <div class="card-header">Update Vessel Fleet Data</div>
          <div class="card-body">
            <form @submit.prevent="updateVesselFleetData">
              <div class="form-group">
                <label for="cargoID">Cargo ID</label>
                <input type="text" id="cargoID" class="form-control" v-model="cargoID" required>
              </div>
              <div class="form-group">
                <label for="currentLocation">Current Location</label>
                <input type="text" id="currentLocation" class="form-control" v-model="currentLocation" required>
              </div>
              <div class="form-group">
                <label for="eta">ETA</label>
                <input type="datetime-local" id="eta" class="form-control" v-model="eta" required>
              </div>
              <button type="submit" class="btn btn-primary">Update</button>
            </form>
          </div>
        </div>
      </div>
      <div class="col-md-4">
        <div class="card">
          <div class="card-header">Get Location or ETA</div>
          <div class="card-body">
            <form @submit.prevent="getLocationOrETA">
              <div class="form-group">
                <label for="cargoID">Cargo ID</label>
                <input type="text" id="cargoID" class="form-control" v-model="cargoID" required>
              </div>
              <button type="submit" class="btn btn-primary">Get</button>
            </form>
            <div v-if="locationOrETA">
              <p><strong>Location/ETA:</strong> {{ locationOrETA }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        cargoID: '',
        currentLocation: '',
        eta: '',
        locationOrETA: '',
      };
    },
    methods: {
      updateVesselFleetData() {
        // Call the updateVesselFleetData function with this.cargoID, this.currentLocation, this.eta
        // Handle the response or any errors
      },
      getLocationOrETA() {
        // Call the getLocationOrETA function with this.cargoID
        // Set this.locationOrETA with the response or handle any errors
      },
    },
  };
  </script>
  
  <style>
  /* Add any custom styles here */
  </style>
  