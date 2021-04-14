<template>
<div>
  <SearchBar />
<h1>{{msg}}</h1>
</div>
</template>

<script>
import SearchBar from "@/components/SearchBar";

export default {
  name: "Home",
  props: {
    msg: String
  },
  components: {
    SearchBar
  }
}
</script>

<style scoped>

</style>