<template>
  <div>
    <div class="tabs">
      <ul>
        <li v-for="month in months" :key="month" :class="{ 'is-active': activeMonth === month }">
          <a @click="setActiveMonth(month)">{{ month }}</a>
        </li>
      </ul>
    </div>
    <table class="table is-fullwidth">
      <thead>
      <tr>
        <th>Sn.</th>
        <th>Date</th>
        <th>{{ type }}</th>
        <th>Amount</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(entry, index) in filteredEntries" :key="index">
        <td>{{ index + 1 }}</td>
        <td>{{ formatDate(entry.date) }}</td>
        <td>{{ entry.item }}</td>
        <td>{{ entry.amount }}</td>
      </tr>
      <tr>
        <td colspan="2">Total</td>
        <td>{{ total }}</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  props: {
    entries: Array,
    type: String,
  },
  data() {
    return {
      activeMonth: new Date().toLocaleString('default', { month: 'long' }),
      months: [],
    };
  },
  computed: {
    filteredEntries() {
      return this.entries.filter(entry => new Date(entry.date).toLocaleString('default', { month: 'long' }) === this.activeMonth);
    },
    total() {
      return this.filteredEntries.reduce((acc, entry) => acc + entry.amount, 0);
    },
  },
  methods: {
    setActiveMonth(month) {
      this.activeMonth = month;
    },
    formatDate(date) {
      const d = new Date(date);
      const year = d.getFullYear();
      const month = String(d.getMonth() + 1).padStart(2, '0');
      const day = String(d.getDate()).padStart(2, '0');
      return `${year}-${month}-${day}`;
    },
  },
  watch: {
    entries: {
      handler(newEntries) {
        this.months = [...new Set(newEntries.map(entry => new Date(entry.date).toLocaleString('default', { month: 'long' })))];
      },
      immediate: true,
    },
  },
};
</script>
