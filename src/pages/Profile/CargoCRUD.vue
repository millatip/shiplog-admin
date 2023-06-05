<template>
  <card>
    <h5 slot="header" class="title">Add or Edit Cargo</h5>
    <div class="row">
      <div class="col-md-4 pr-md-1">
        <base-input
          label="Cargo Type"
          v-model="model.cargoType"
          placeholder="Electronics"
        >
        </base-input>
      </div>
      <div class="col-md-4 px-md-1">
        <base-input
          label="Destination"
          v-model="model.destination"
          placeholder="New York"
        >
        </base-input>
      </div>
      <div class="col-md-4 pl-md-1">
        <base-input
          label="ETA"
          placeholder="Expected Arrival Time"
          v-model="model.expectedArrivalTime"
        >
        </base-input>
      </div>
    </div>
    <div class="row">
      <div class="col-md-8">
        <base-input>
          <label>Other Details</label>
          <textarea
            rows="4"
            cols="80"
            class="form-control"
            placeholder="Shipment Note"
            v-model="model.otherDetails"
          >
          </textarea>
        </base-input>
      </div>
    </div>
    <base-button slot="footer" type="primary" fill @click="saveCargo">Save</base-button>
  </card>
</template>

<script>
import Web3 from 'web3'; // 
import contractABI from '@/abi/ShippingInformation.json'; // Import contract ABI
const contractAddress = '0x0f1f3cBD0F2A020934A2c0f35ff2B3Fff28bE982'; // Replace with your contract address
const web3 = new Web3('http://127.0.0.1:7545'); // Replace with your provider URL

export default {
  props: {
    model: {
      type: Object,
      default: () => {
        return {};
      },
    },
  },
  methods: {
    saveCargo() {
      const contract = new web3.eth.Contract(contractABI, contractAddress);


      if (this.model.cargoId) {
        // Update existing cargo
        contract.methods
          .updateCargo(
            this.model.cargoId,
            this.model.cargoType,
            this.model.destination,
            this.model.expectedArrivalTime,
            this.model.otherDetails
          )
          .send({ from: "0xEFb3183F3D39247BdAd4AA15D3b5e2Aa3E23b49f", gas: 5000000 })
          .then((result) => {
            console.log("Cargo Updated:", result);
            this.$notify({type: 'success', message: 'Success Updating Cargo'})
            // Handle success or update UI
          })
          .catch((error) => {
            console.error("Cargo Update Error:", error);
            this.$notify({type: 'warning', message: 'Error Updating Cargo'})
            // Handle error or show error message
          });
      } else {
        // Register new cargo
        contract.methods
          .registerCargo(
            this.model.cargoType,
            this.model.destination,
            this.model.expectedArrivalTime,
            this.model.otherDetails
          )
          .send({ from: "0xEFb3183F3D39247BdAd4AA15D3b5e2Aa3E23b49f",gas: 5000000 })
          .then((result) => {
            console.log("Cargo Registered:", result);
            this.$notify({type: 'success', message: 'Success Registering Cargo'})
            window.location.reload();
            // Handle success or update UI
          })
          .catch((error) => {
            console.error("Cargo Registration Error:", error);
            this.$notify({type: 'warning', message: 'Error Registering Cargo'})
            // Handle error or show error message
          });
      }
    },
  },
};
</script>

<style></style>
