<template>
<div id="book">
  <div id="info">
    <h1 id="title">{{book.volumeInfo.title}}</h1>
    <h3 id="description" v-html="book.searchInfo.textSnippet"></h3>

    <div id="authors" v-if="book.volumeInfo.authors">
      <h4>Authors</h4>
      <span v-for="author in book.volumeInfo.authors" :key="author">{{author}}, </span>
    </div>
  </div>
  <div id="image">
    <img id="thumbnail" :src="book.volumeInfo.imageLinks.thumbnail" alt="">
  </div>
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

  align-items: center;
}
#info, #image{
  padding: 3vh;
}
img{
  height: 65vh;
  width: 55vh;
}
#authors{
  padding: 5vh;
  text-align: left;
}
</style>