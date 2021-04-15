<template>
<div>
  <input type="text" autocomplete="on" placeholder="Type your search text here" v-model="query">
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
input{
  margin-bottom: 2vh;

  width: 80%;
  height: 5vh;
  text-align: center;
}
</style>