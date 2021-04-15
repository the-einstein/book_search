<template>
<div id="book">
  <span id="title">{{book.volumeInfo.title}}</span>
  <img id="thumbnail" :src="book.volumeInfo.imageLinks.smallThumbnail" alt="">
  <span id="description">{{book.searchInfo.textSnippet}}</span>
  <span id="authors">{{book.volumeInfo.authors}}</span>
</div>
</template>

<script>
export default {
  name: "Book",
  props: [
      'book'
  ]
}
</script>

<style scoped>

</style>