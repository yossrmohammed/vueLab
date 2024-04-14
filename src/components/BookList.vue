<template>
  <div>
   



    <h1 class="text-center">Book Store</h1>
    <div class="row justify-content-center">
      <div class="col-4 mb-4" v-for="book in books" :key="book.id">
        <BookCard
          :book="book"
          :addToWishlist="addToWishlist"
          :formatPrice="formatPrice"
        />
      </div>
    </div>
  </div>
</template>

<script>
import BookCard from "./BookCard.vue";

export default {
  components: {
    BookCard,
  },
  props: ["books", "addToWishlist", "formatPrice"],
};
</script>
