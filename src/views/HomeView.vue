<template>
  <div>
    <ExpenseForm @add-expense="addExpense" />
    <TableView :entries="expenses" type="Expense" />
  </div>
</template>

<script>
import ExpenseForm from '../components/ExpenseForm.vue';
import TableView from '../components/TableView.vue';
import axios from 'axios';

export default {
  components: { ExpenseForm, TableView },
  data() {
    return {
      expenses: [],
    };
  },
  methods: {
    async addExpense(expense) {
      this.expenses.push(expense);
    },
  },
  async created() {
    const response = await axios.get('http://localhost:5003/api/expenses');
    this.expenses = response.data;
  },
};
</script>
