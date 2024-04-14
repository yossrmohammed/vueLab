<template>

  <table class="table table-bordered table-striped" >
                <thead>
                    <tr>
                        <th>title</th>
                        <th>Author</th>
                        <th>pages</th>
                        <th>price</th>
                        <th>language</th>
                    </tr>
                    <tbody>
                        <tr v-for="book in wishlist" :key="book.id">
                        <td>{{book.title}}</td>
                        <td>{{book.author}}</td>
                        <td>{{book.pages}}</td>
                        <td>{{book.price}}</td>
                        <td>{{book.language}}</td>
                        <td><button  class="btn btn-danger" @click="removeFromWishlist(book)" >Remove from  wishlist</button></td>
                        </tr>
                    </tbody>
                </thead>
            </table>
</template>

<script>
export default {
  props: ["wishlist", "formatPrice", "removeFromWishlist"],
};
</script>
