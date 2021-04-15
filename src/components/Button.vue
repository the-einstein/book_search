<template>
   <button @click="$router.push({ name: 'bookInfo', params: { book: book } })">
      More info
   </button>
</template>

<script>
export default {
  name: "Button",
  props: [
      'book'
  ]
}
</script>

<style scoped>
button{
  background-color: #e7e7e7;
  color: black;/* Green */
  border: none;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
}
</style>