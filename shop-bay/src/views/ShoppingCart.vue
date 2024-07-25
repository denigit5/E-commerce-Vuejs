
<template>
  <div class="shopping-cart">
    <h2>Shopping Cart</h2>
    <div v-if="cart.length === 0">Your cart is empty</div>
    <div v-else>
      <div v-for="item in cart" :key="item.product.id" class="cart-item">
        <img :src="item.product.image" class="cart-item-image" :alt="item.product.name">
        <div class="cart-item-details">
          <p class="cart-item-name">{{ item.product.name }}</p>
          <p class="cart-item-price">${{ item.product.price }} x {{ item.quantity }}</p>
          <button style="border: none; background-color: gainsboro; padding: 5px; margin: 5px; margin-right: 3rem; margin-left: 20%;" @click="removeFromCart(item.product)">Remove</button>
          <button style="margin-right: 3px;" @click="increaseQuantity(item.product)">+</button>
          <button @click="decreaseQuantity(item.product)">-</button>
        </div>
      </div>
      <p style="background-color: #4CAF50; color: white; padding: 8px; border-radius: 5px;">Total: ${{ totalPrice }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ['cart'],
  computed: {
    totalPrice() {
      return this.cart.reduce((total, item) => total + item.product.price * item.quantity, 0);
    }
  },
  methods: {
    removeFromCart(product) {
      this.$emit('remove-from-cart', product);
    },
    increaseQuantity(product) {
      this.$emit('increase-quantity', product);
    },
    decreaseQuantity(product) {
      this.$emit('decrease-quantity', product);
    }
  }
};
</script>

<style scoped>
body {
  overflow-x: hidden;
}
.cart-item {
  display: flex;
  align-items: center;
  margin: 10px 0;
  margin-bottom: 1.5rem;
  border: 1px rgb(61, 60, 60);
  background-color: rgb(238, 241, 239);
  border-radius: 5px;
  padding: 1rem;
}
.cart-item-image {
  width: 80px;
  height: auto;
  margin-right: 1rem;
}
.cart-item-details {
  flex: 1;
}
.cart-item-name {
  font-weight: bold;
}
.cart-item-price {
  margin: 5px 0;
}
.shopping-cart {
  margin-top: 2.5rem;
  margin-left: 1%;
  margin-right: auto;
  padding: 2rem;
  text-align: center;
  width: 300px;
  height: 100vh;
  box-shadow: 1px 0 8px rgba(194, 243, 194, 0.5), 1px 0 8px rgba(194, 243, 194, 0.5);
  border: none;
}
</style>
