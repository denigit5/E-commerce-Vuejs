<template>
    <div class="product-list">
      <h2>Products</h2>
      <div v-for="product in products" :key="product.id" class="product">
        <p>{{ product.name }} - ${{ product.price }}</p>
        <button @click="addToCart(product)">Add to Cart</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        products: [
          { id: 1, name: 'Product 1', price: 10 },
          { id: 2, name: 'Product 2', price: 20 },
          { id: 3, name: 'Product 3', price: 30 }
        ]
      };
    },
    methods: {
      addToCart(product) {
        this.$emit('add-to-cart', product);
      }
    }
  };
  </script>
  
  <style scoped>
  .product {
    margin: 10px 0;
  }
</style>
  