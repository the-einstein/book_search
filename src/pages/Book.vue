<template>
<div id="book">
  <h1 id="title">{{book.volumeInfo.title}}</h1>
  <img id="thumbnail" :src="book.volumeInfo.imageLinks.thumbnail" alt="">
  <h3 id="description">{{book.searchInfo.textSnippet.toString()}}</h3>
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
#book{
  margin: auto;
  width: 80%;
  display: flex;
  flex-direction: column;

  align-items: center;
}
img{
  height: 65vh;
  width: 55vh;
}
</style>