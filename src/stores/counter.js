import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const usePockerStore = defineStore('pocker', {

  state: () => ({
    currentTable: {},
  }),
  actions: {
    changeCurrentTable(table) {
      this.currentTable = table
    },
  },

})
