<template>
    <div class="row">
      <div class="col-md-6">
        <div class="card">
          <div class="card-header">Get Cargo Loading Schedule</div>
          <div class="card-body">
            <form @submit.prevent="getCargoLoadingSchedule">
              <div class="form-group">
                <label for="loadingCargoID">Cargo ID</label>
                <input type="text" id="loadingCargoID" class="form-control" v-model="loadingCargoID" required>
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
                <label for="unloadingCargoID">Cargo ID</label>
                <input type="text" id="unloadingCargoID" class="form-control" v-model="unloadingCargoID" required>
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
                <label for="updateLoadingCargoID">Cargo ID</label>
                <input type="text" id="updateLoadingCargoID" class="form-control" v-model="updateLoadingCargoID" required>
              </div>
              <div class="form-group">
                <label for="loadingTerminalLocation">Terminal Location</label>
                <input type="text" id="loadingTerminalLocation" class="form-control" v-model="loadingTerminalLocation" required>
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
                <label for="updateUnloadingCargoID">Cargo ID</label>
                <input type="text" id="updateUnloadingCargoID" class="form-control" v-model="updateUnloadingCargoID" required>
              </div>
              <div class="form-group">
                <label for="unloadingTerminalLocation">Terminal Location</label>
                <input type="text" id="unloadingTerminalLocation" class="form-control" v-model="unloadingTerminalLocation" required>
              </div>
              <button type="submit" class="btn btn-primary">Update Schedule</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import Web3 from 'web3';
  import contractABI from '@/abi/ContainerTerminal.json';
  
  const contractAddress = '0x3719FD153D9F0eFf28c948AddE2B3F411Cc95617';
  const web3 = new Web3('http://127.0.0.1:7545');
  const contract = new web3.eth.Contract(contractABI, contractAddress);
  
  export default {
    data() {
      return {
        loadingCargoID: '',
        unloadingCargoID: '',
        updateLoadingCargoID: '',
        updateUnloadingCargoID: '',
        loadingTerminalLocation: '',
        unloadingTerminalLocation: '',
        loadingSchedule: '',
        unloadingSchedule: '',
      };
    },
    methods: {
      getCargoLoadingSchedule() {
        contract.methods
          .getCargoLoadingSchedule(this.loadingCargoID)
          .call({ gas: 5000000 })
          .then((loadingSchedule) => {
            this.loadingSchedule = loadingSchedule;
          })
          .catch((error) => {
            console.error('Get Cargo Loading Schedule Error:', error);
            this.loadingSchedule = 'Error retrieving loading schedule';
          });
      },
      getCargoUnloadingSchedule() {
        contract.methods
          .getCargoUnloadingSchedule(this.unloadingCargoID)
          .call({ gas: 5000000 })
          .then((unloadingSchedule) => {
            this.unloadingSchedule = unloadingSchedule;
          })
          .catch((error) => {
            console.error('Get Cargo Unloading Schedule Error:', error);
            this.unloadingSchedule = 'Error retrieving unloading schedule';
          });
      },
      updateCargoLoadingSchedule() {
        contract.methods
          .updateCargoLoadingSchedule(this.updateLoadingCargoID, this.loadingTerminalLocation)
          .send({ from: '0xABb94610763afe43dE3f150c1224B6806C1E9F76', gas: 5000000 })
          .then(() => {
            console.log('Cargo loading schedule updated successfully');
          })
          .catch((error) => {
            console.error('Update Cargo Loading Schedule Error:', error);
          });
      },
      updateCargoUnloadingSchedule() {
        contract.methods
          .updateCargoUnloadingSchedule(this.updateUnloadingCargoID, this.unloadingTerminalLocation)
          .send({ from: '0xABb94610763afe43dE3f150c1224B6806C1E9F76', gas: 5000000 })
          .then(() => {
            console.log('Cargo unloading schedule updated successfully');
          })
          .catch((error) => {
            console.error('Update Cargo Unloading Schedule Error:', error);
          });
      },
    },
  };
  </script>
  
  <style>
  </style>
  