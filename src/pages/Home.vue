<template>
<div id="home">
  <SearchBar />
  <BookList />
</div>
</template>

<script>
import SearchBar from "@/components/SearchBar";
import BookList from "@/components/BookList";
import getBooks from "@/api/query";

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
     getBooks: async (query) => {
       await getBooks(query);
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