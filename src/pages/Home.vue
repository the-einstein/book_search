<template>
<div id="home">
  <SearchBar :onChange="getBooks"/>
  <BookList :books="books" />
</div>
</template>

<script>
import SearchBar from "@/components/SearchBar";
import BookList from "@/components/BookList";
import getBooks from "@/api/query";

//TODO: add some state management to write less code

export default {
  name: "Home",
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
    //TODO: change function names to understandable ones
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