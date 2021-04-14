<template>
<div id="home">
  <SearchBar :onChange="getBooks"/>
  <BookList />
</div>
</template>

<script>
import SearchBar from "@/components/SearchBar";
import BookList from "@/components/BookList";
import getBooks from "@/api/query";
//TODO: add some state management write less code

export default {
  name: "Home",
  props: {
    msg: String
  },
  components: {
    SearchBar,
    BookList
  },
  data: function () {
    return {
      books: {}
    }
  },
  methods: {
     async getBooks(query) {
       this.books = await getBooks(query);
    }
  }
}
</script>

<style scoped>
#home{
  width: 100%;
  height: 100%;
}
</style>