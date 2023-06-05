<template>
  <div>
    <base-table :data="flattenedCargoList" :columns="tableColumns" thead-classes="text-primary">
    </base-table>
  </div>
</template>

<script>
import { BaseTable } from "@/components";
import Web3 from 'web3';
import contractABI from '@/abi/ShippingInformation.json';

const contractAddress = '0x0f1f3cBD0F2A020934A2c0f35ff2B3Fff28bE982';
const web3 = new Web3('http://127.0.0.1:7545');

export default {
  components: {
    BaseTable
  },
  data() {
    return {
      cargoList: [],
      tableColumns: [
        "id", "type", "destination", "eta", "details"
      ],
    };
  },
  computed: {
    flattenedCargoList() {
      return this.cargoList.flatMap((item, index) => ({
        id: index,
        type: item[0],
        destination: item[1],
        eta: item[2],
        details: item[3],
      }));
    },
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
          console.log(this.cargoList);
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
