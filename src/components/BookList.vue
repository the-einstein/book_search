<template>
  <main>
    <table id="table">
      <tr>
        <th id="thumbnail">Thumbnail</th>
        <th id="title">Title</th>
        <th id="author">Author</th>
      </tr>
      <tr v-for="book in books.items" :key="book.id">
        <td><img :src="book.volumeInfo.imageLinks.smallThumbnail" alt=""></td>
        <td>{{book.volumeInfo.title}}</td>
        <td>{{book.volumeInfo.authors}}</td>
      </tr>
    </table>
  </main>
</template>

<script>
export default {
  name: "BookList",
  props: [
      'books'
  ]
}
</script>

<style scoped>
#table{
  width: 100%;
}
</style>