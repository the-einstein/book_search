<template>
<div id="home">
  <SearchBar />
  <BookList />
</div>
</template>

<script>
import SearchBar from "@/components/SearchBar";
import BookList from "@/components/BookList";

export default {
  name: "Home",
  props: {
    msg: String
  },
  components: {
    SearchBar,
    BookList
  }
}
</script>

<style scoped>
#home{
  width: 100%;
  height: 100%;
}
</style>