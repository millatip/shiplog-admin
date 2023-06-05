<template>
    <div class="row">
      <div class="col-md-6">
        <div class="card">
          <div class="card-header">Get Fee Settlement</div>
          <div class="card-body">
            <form @submit.prevent="getFeeSettlement">
              <div class="form-group">
                <label for="cargoID">Cargo ID</label>
                <input type="text" id="cargoID" class="form-control" v-model="cargoID" required>
              </div>
              <button type="submit" class="btn btn-primary">Get Settlement</button>
            </form>
            <div v-if="feeSettlement">
                <p><strong>Fee Settlement:</strong></p>
                <p><strong>Cargo ID:</strong> {{ feeSettlement[0] }}</p>
                <p><strong>Settlement Fee:</strong> {{ feeSettlement[1] }}</p>
                <p><strong>Is Settled:</strong> {{ feeSettlement[2] }}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-6">
        <div class="card">
          <div class="card-header">Initiate Fee Settlement</div>
          <div class="card-body">
            <form @submit.prevent="initiateFeeSettlement">
              <div class="form-group">
                <label for="cargoID">Cargo ID</label>
                <input type="text" id="cargoID" class="form-control" v-model="cargoID" required>
              </div>
              <div class="form-group">
                <label for="amount">Amount</label>
                <input type="number" id="amount" class="form-control" v-model="amount" required>
              </div>
              <button type="submit" class="btn btn-primary">Initiate Settlement</button>
            </form>
          </div>
        </div>
      </div>
      <div class="col-md-6">
        <div class="card">
          <div class="card-header">Settle Fee</div>
          <div class="card-body">
            <form @submit.prevent="settleFee">
              <div class="form-group">
                <label for="cargoID">Cargo ID</label>
                <input type="text" id="cargoID" class="form-control" v-model="cargoID" required>
              </div>
              <button type="submit" class="btn btn-primary">Settle Fee</button>
            </form>
          </div>
        </div>
      </div>
      <div class="col-md-6">
        <cargo-table></cargo-table>
      </div>
    </div>
  </template>
  
  <script>
  import Web3 from 'web3';
  import CargoTable from './Dashboard/CargoTable';
  import contractABI from '@/abi/ShoreTransport.json';
  
  const contractAddress = "0x4d12758cC3fCc9d8F94081678Aad626392Fcac84";
  const web3 = new Web3('http://127.0.0.1:7545');
  const contract = new web3.eth.Contract(contractABI, contractAddress);
  
  export default {
    components: {
      CargoTable,
    },
    data() {
      return {
        cargoID: "",
        amount: 0,
        feeSettlement: null,
      };
    },
    methods: {
      getFeeSettlement() {
        contract.methods
          .getFeeSettlement(this.cargoID)
          .call()
          .then((result) => {
            this.feeSettlement = result;
            console.log("Fee settlement retrieved:", result);
          })
          .catch((error) => {
            console.error("Error retrieving fee settlement:", error);
          });
      },
      initiateFeeSettlement() {
        contract.methods
          .initiateFeeSettlement(this.cargoID, this.amount)
          .send({ from: "0xD2eFf51B7Ab0182029BD8DeB7d206668655D4c66" })
          .then((receipt) => {
            console.log("Fee settlement initiated:", receipt);
            // Perform any additional actions or display success message
          })
          .catch((error) => {
            console.error("Error initiating fee settlement:", error);
          });
      },
      settleFee() {
        contract.methods
          .settleFee(this.cargoID)
          .send({ from: "0xD2eFf51B7Ab0182029BD8DeB7d206668655D4c66" })
          .then((receipt) => {
            console.log("Fee settled:", receipt);
            // Perform any additional actions or display success message
          })
          .catch((error) => {
            console.error("Error settling fee:", error);
          });
      },
    },
  };
  </script>
  
  <style>
  /* ... your existing styles ... */
  </style>
  