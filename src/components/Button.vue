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

</style>