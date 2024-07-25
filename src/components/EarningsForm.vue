<template>
  <div>
    <form @submit.prevent="addEarning">
      <div class="field">
        <label class="label">Item</label>
        <div class="control">
          <input class="input" type="text" v-model="item" required>
        </div>
      </div>
      <div class="field">
        <label class="label">Earning</label>
        <div class="control">
          <input class="input" type="number" v-model="earning" required>
        </div>
      </div>
      <div class="control">
        <button class="button is-primary" type="submit">Add Earning</button>
      </div>
    </form>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      item: '',
      earning: null,
    };
  },
  methods: {
    async addEarning() {
      const response = await axios.post('http://localhost:5003/api/earnings', {
        item: this.item,
        amount: this.earning,
      });
      this.$emit('add-earning', response.data);
      this.item = '';
      this.earning = null;
    },
  },
};
</script>
