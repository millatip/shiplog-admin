<template>
    <div class="row">
      <div class="col-md-6">
        <div class="card">
          <div class="card-header">Get Cargo Verification</div>
          <div class="card-body">
            <form @submit.prevent="getCargoVerification">
              <div class="form-group">
                <label for="cargoID">Cargo ID</label>
                <input type="text" id="cargoID" class="form-control" v-model="cargoID" required>
              </div>
              <button type="submit" class="btn btn-primary">Get Verification</button>
            </form>
            <div v-if="cargoVerification">
              <p><strong>Cargo Verification:</strong> {{ cargoVerification }}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-6">
        <div class="card">
          <div class="card-header">Verify Cargo</div>
          <div class="card-body">
            <form @submit.prevent="verifyCargo">
              <div class="form-group">
                <label for="cargoID">Cargo ID</label>
                <input type="text" id="cargoID" class="form-control" v-model="cargoID" required>
              </div>
              <div class="form-group">
                <label for="contents">Contents</label>
                <input type="text" id="contents" class="form-control" v-model="contents" required>
              </div>
              <div class="form-group">
                <label for="value">Value</label>
                <input type="number" id="value" class="form-control" v-model="value" required>
              </div>
              <div class="form-group">
                <label for="destination">Destination</label>
                <input type="text" id="destination" class="form-control" v-model="destination" required>
              </div>
              <button type="submit" class="btn btn-primary">Verify Cargo</button>
            </form>
          </div>
        </div>
      </div>
      <div class="col-md-6">
        <div class="card">
          <div class="card-header">Write and Update Cargo</div>
          <div class="card-body">
            <form @submit.prevent="writeAndUpdateCargo">
              <div class="form-group">
                <label for="cargoID">Cargo ID</label>
                <input type="text" id="cargoID" class="form-control" v-model="cargoID" required>
              </div>
              <div class="form-group">
                <label for="contents">Contents</label>
                <input type="text" id="contents" class="form-control" v-model="contents" required>
              </div>
              <div class="form-group">
                <label for="value">Value</label>
                <input type="number" id="value" class="form-control" v-model="value" required>
              </div>
              <div class="form-group">
                <label for="destination">Destination</label>
                <input type="text" id="destination" class="form-control" v-model="destination" required>
              </div>
              <button type="submit" class="btn btn-primary">Write and Update Cargo</button>
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
        contents: "",
        value: 0,
        destination: "",
        cargoVerification: "",
      };
    },
    methods: {
      getCargoVerification() {
        // Implement logic to retrieve cargo verification using cargoID
      },
      verifyCargo() {
        // Implement logic to verify cargo with cargoID, contents, value, and destination
      },
      writeAndUpdateCargo() {
        // Implement logic to write and update cargo with cargoID, contents, value, and destination
      },
    },
  };
  </script>
  
  <style>
  </style>
  