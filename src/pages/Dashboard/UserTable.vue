<template>
  <div>
    <base-table :data="cargoList" :columns="tableColumns" thead-classes="text-primary">
    </base-table>
  </div>
</template>

<script>
import { BaseTable } from "@/components";
import Web3 from 'web3';
import contractABI from '@/abi/ShippingInformation.json';

const contractAddress = '0xb2AAa406E6438548c85aB79de5BFC796a4A3527A';
const web3 = new Web3('http://127.0.0.1:7545');

export default {
  components: {
    BaseTable
  },
  data() {
    return {
      cargoList: [],
      tableColumns: [
        "id", "cargoType", "destination", "expectedArrivalTime", "otherDetails"
      ],
    };
  },
  mounted() {
    this.getAllCargo();
  },
  methods: {
    getAllCargo() {
      const contract = new web3.eth.Contract(contractABI, contractAddress);

      contract.methods
        .getAllCargoInfo()
        .call({ gas: 5000000 })
        .then((result) => {
          this.cargoList = result;
        })
        .catch((error) => {
          console.error("Get All Cargo Error:", error);
        });
    },
  },
};
</script>

<style>
</style>
