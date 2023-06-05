<template>
    <div class="row">
        <div class="col-md-6">
      <div class="card">
        <div class="card-header">Cargo Verification</div>
        <div class="card-body">
          <form @submit.prevent="getCargoVerification">
            <div class="form-group">
              <label for="cargoID">Cargo ID</label>
              <input type="text" id="cargoID" class="form-control" v-model="cargoID" required>
            </div>
            <button type="submit" class="btn btn-primary">Get Cargo Verification</button>
          </form>
          <div v-if="cargoVerification">
            <p><strong>Cargo Verification:</strong></p>
            <p><strong>Cargo ID:</strong> {{ cargoVerification[0] }}</p>
            <p><strong>Contents:</strong> {{ cargoVerification[1] }}</p>
            <p><strong>Value:</strong> {{ cargoVerification[2] }}</p>
            <p><strong>Destination:</strong> {{ cargoVerification[3] }}</p>
            <p><strong>Is Verified:</strong> {{ cargoVerification[4] }}</p>
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
        <card class="card" :header-classes="{'text-right': isRTL}">
          <h4 slot="header" class="card-title">{{$t('dashboard.simpleTable')}}</h4>
          <div class="table-responsive">
            <cargo-table></cargo-table>
          </div>
        </card>
      </div>
    </div>
  </template>
  
  <script>
  import Web3 from 'web3';
  import contractABI from '@/abi/CustomClearance.json';
  import CargoTable from './Dashboard/CargoTable';
  const contractAddress = "0x8F2d9599863831e2887537DeF7e6d3640c5498EE";
  const web3 = new Web3('http://127.0.0.1:7545');
  const contract = new web3.eth.Contract(contractABI, contractAddress);
  
  export default {
    components: {
      CargoTable,
    },
    data() {
      return {
        cargoID: "",
        contents: "",
        value: 0,
        destination: "",
        cargoVerification: null,
      };
    },
    computed: {
    flattenedCustomClearanceData() {
      return this.cargoVerification.flatMap((item, index) => ({
        cargoID: item[0],
        contents: item[1],
        value: item[2],
        destination: item[3],
        isVerified: item[4],
      }));
    },
    },
    methods: {
    getCargoVerification() {
      contract.methods
        .getCargoVerification(this.cargoID)
        .call()
        .then((result) => {
          // Check if the result is a valid response
        this.cargoVerification = result;
        console.log("Cargo verification retrieved successfully");      
        })
        .catch((error) => {
          console.error("Error retrieving cargo verification:", error);
        });
    },
      verifyCargo() {
        contract.methods
          .verifyCargo(this.cargoID, this.contents, this.value, this.destination)
          .send({ from: '0xB3C786d3d8E8C628B526A26b0775611F2C6b12Ba', gas: 5000000 })
          .then(() => {
            console.log("Cargo verified successfully");
          })
          .catch((error) => {
            console.error("Error verifying cargo:", error);
          });
      },
      writeAndUpdateCargo() {
        contract.methods
          .verifyCargo(this.cargoID, this.contents, this.value, this.destination)
          .send({ from: '0xB3C786d3d8E8C628B526A26b0775611F2C6b12Ba', gas: 5000000 })
          .then(() => {
            console.log("Cargo written and updated successfully");
          })
          .catch((error) => {
            console.error("Error writing and updating cargo:", error);
          });
      },
    },
  };
  </script>
  
  <style>
  </style>
  