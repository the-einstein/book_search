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
        <td><img v-if="book.volumeInfo.imageLinks" :src="book.volumeInfo.imageLinks.smallThumbnail" alt=""></td>
        <td>{{book.volumeInfo.title}}</td>
        <td><span v-if="book.volumeInfo.authors">{{book.volumeInfo.authors[0]}}</span></td>
        <td><Button :book="book"/></td>
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
  /*#table{*/
  /*  width: 100%;*/
  /*}*/
th, td{
  width: 25%;
}
table {
  margin: auto;
  border-collapse: collapse;
  width: 80%;
}

th, td {
  padding: 8px;
  text-align: left;
  border-bottom: 1px solid #ddd;
}

tr:hover {background-color:#f5f5f5;}
</style>