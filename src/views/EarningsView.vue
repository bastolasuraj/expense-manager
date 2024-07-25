<template>
  <div>
    <EarningsForm @add-earning="addEarning" />
    <TableView :entries="earnings" type="Earning" />
  </div>
</template>

<script>
import EarningsForm from '../components/EarningsForm.vue';
import TableView from '../components/TableView.vue';
import axios from 'axios';

export default {
  components: { EarningsForm, TableView },
  data() {
    return {
      earnings: [],
    };
  },
  methods: {
    async addEarning(earning) {
      this.earnings.push(earning);
    },
  },
  async created() {
    const response = await axios.get('http://localhost:5003/api/earnings');
    this.earnings = response.data;
  },
};
</script>
