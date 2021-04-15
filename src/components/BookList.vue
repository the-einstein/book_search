<template>
  <main>
    <table v-if="books" id="table">
      <tr>
        <th id="thumbnail">Thumbnail</th>
        <th id="title">Title</th>
        <th id="author">Author</th>
        <th id="action">Action</th>
      </tr>
      <tr v-for="book in books.items" :key="book.id">
        <td><img :src="book.volumeInfo.imageLinks.smallThumbnail" alt=""></td>
        <td>{{book.volumeInfo.title}}</td>
        <td>{{book.volumeInfo.authors}}</td>
        <td><Button /></td>
      </tr>
    </table>
  </main>
</template>

<script>
import Button from "@/components/Button";
export default {
  name: "BookList",
  components: {Button},
  props: [
      'books'
  ]
}
</script>

<style scoped>
#table{
  width: 100%;
}
th{
  width: 25%;
}
</style>