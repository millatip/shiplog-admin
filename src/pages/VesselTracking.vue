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
        <card class="card" :header-classes="{'text-right': isRTL}">
          <h4 slot="header" class="card-title">{{$t('dashboard.simpleTable')}}</h4>
          <div class="table-responsive">
            <cargo-table></cargo-table>
          </div>
        </card>
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
import Web3 from 'web3';
import CargoTable from './Dashboard/CargoTable';
import contractABI from '@/abi/VesselFleet.json';
const contractAddress = "0x4f5003418fcBc6316A028654385f948610dC0183"
const web3 = new Web3('http://127.0.0.1:7545');
const contract = new web3.eth.Contract(contractABI, contractAddress);

  export default {
    components: {
      CargoTable,
    },
    data() {
      return {
        cargoID: '',
        currentLocation: '',
        eta: '',
        locationOrETA: '',
      };
    },
    methods: {
        async updateVesselFleetData() {
      try {
        

        const unixTimestamp = Math.floor(new Date(this.eta).getTime() / 1000);

        await contract.methods.updateVesselFleetData(this.cargoID, this.currentLocation, unixTimestamp)
          .send({ from: "0xEFb3183F3D39247BdAd4AA15D3b5e2Aa3E23b49f", gas: 5000000 });

        this.cargoID = '';
        this.currentLocation = '';
        this.eta = '';

        this.refreshTable = !this.refreshTable; // Trigger table refresh
        this.$notify({type: 'success', message: 'Successfully Updated Vessel Fleet Data'})
        // Reload the page to reflect the updated data in the table
        // window.location.reload();
      } catch (error) {
        console.error('Update Vessel Fleet Data Error:', error);
        // Handle error or show error message
      }
    },
    getLocationOrETA() {
      contract.methods
        .getCurrentLocation(this.cargoID)
        .call({ gas: 5000000 })
        .then((currentLocation) => {
          return contract.methods.getEstimatedTimeOfArrival(this.cargoID).call({ gas: 5000000 })
            .then((estimatedTimeOfArrival) => {
              this.locationOrETA = `Location: ${currentLocation}, ETA: ${estimatedTimeOfArrival}`;
            })
            .catch((error) => {
              console.error('Get Estimated Time of Arrival Error:', error);
              this.locationOrETA = 'Error retrieving ETA';
            });
        })
        .catch((error) => {
          console.error('Get Current Location Error:', error);
          this.locationOrETA = 'Error retrieving Location';
        });
    },
    },
  };
  </script>
  
  <style>
  /* Add any custom styles here */
  </style>
  