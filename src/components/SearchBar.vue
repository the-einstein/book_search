<template>
<div>
  <input type="text" v-model="query">
</div>
</template>

<script>

export default {
  name: "SearchBar",
  props: {
      onChange: { type: Function}
  },
  data: () => ({
    query: ''
  }),
  watch: {
    query: 'getBooks'
  },
  methods: {
    async getBooks(query) {
      await this.onChange(query);
    }
  },
}
</script>

<style scoped>

</style>