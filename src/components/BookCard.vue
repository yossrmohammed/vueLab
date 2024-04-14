<template>
  <div class="card my-1" style="width: 18rem;">
    <img :src="book.imageLink" :title="book.title">
    <div class="card-body ">
      <h5 class="card-title">{{book.title}}</h5>
      
        <div>
          <p class="card-text">Author: {{ book.author }}</p>
          <p class="card-text"> pages: {{book.pages}}</p>
        </div>
        <div>
          <div :class="{'more': book.price>200 , 'less': book.price<300}">
            <p> price: {{Intl.NumberFormat("ar-SA", {style: "currency",currency: "SAR",}).format(book.price)}}</p>
          </div>
          <p class="card-text"> pages: {{book.pages}}</p>

        </div>
      
      <button @click.prevent class="btn btn-primary" @click="addToWishlist(book)">Add to Wish List</button>
    </div>
  </div>
  
</template>

<script>
export default {
  props: ["book", "addToWishlist", "formatPrice"],
  mounted() {
    console.log(this.book.image);
  },
};
</script>
