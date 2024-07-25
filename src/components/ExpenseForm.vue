<template>
  <div>
    <form @submit.prevent="addExpense">
      <div class="field">
        <label class="label">Item</label>
        <div class="control">
          <input class="input" type="text" v-model="item" required>
        </div>
      </div>
      <div class="field">
        <label class="label">Cost</label>
        <div class="control">
          <input class="input" type="number" v-model="cost" required>
        </div>
      </div>
      <div class="control">
        <button class="button is-primary" type="submit">Add Expense</button>
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
      cost: null,
    };
  },
  methods: {
    async addExpense() {
      const response = await axios.post('http://localhost:5003/api/expenses', {
        item: this.item,
        amount: this.cost,
      });
      this.$emit('add-expense', response.data);
      this.item = '';
      this.cost = null;
    },
  },
};
</script>
