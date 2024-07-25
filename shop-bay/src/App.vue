<script>
import ProductList from './views/ProductList.vue';
import ShoppingCart from './views/ShoppingCart.vue';
import smartphoneImage from '@/components/icons/latest_phone.png';
import laptopImage from '@/components/icons/laptop.png';
import headphonesImage from '@/components/icons/Headphones.png';
import smartwatchImage from '@/components/icons/Smartwatch.png';
import cameraImage from '@/components/icons/Camera.png';
import gamingConsoleImage from '@/components/icons/Gaming_Console.png';
import tabletImage from '@/components/icons/Tablet.png';
import bluetoothSpeakerImage from '@/components/icons/Bluetooth_Speaker.png';
import smartTvImage from '@/components/icons/Smart_TV.png';
import wirelessMouseImage from '@/components/icons/Wireless_Mouse.png';
import keyboardImage from '@/components/icons/Keyboard.png';
import externalHardDriveImage from '@/components/icons/External_Hard_Drive.png';
import fitnessTrackerImage from '@/components/icons/Fitness_Tracker.png';
import eReaderImage from '@/components/icons/e-Reader.png';
import droneImage from '@/components/icons/drone.png';

export default {
  name: 'App',
  components: {
    ProductList,
    ShoppingCart
  },
  data() {
    return {
      cart: [],
      products: [
        { id: 1, name: 'Smartphone', description: 'Latest smartphone with advanced features.', price: 500, image: smartphoneImage },
        { id: 2, name: 'Laptop', description: 'High-performance laptop for all your needs.', price: 1200, image: laptopImage },
        { id: 3, name: 'Headphones', description: 'Noise-cancelling over-ear headphones.', price: 150, image: headphonesImage },
        { id: 4, name: 'Smartwatch', description: 'Stylish smartwatch with fitness tracking.', price: 200, image: smartwatchImage },
        { id: 5, name: 'Camera', description: 'DSLR camera with 24MP resolution.', price: 800, image: cameraImage },
        { id: 6, name: 'Gaming Console', description: 'Next-gen gaming console.', price: 400, image: gamingConsoleImage },
        { id: 7, name: 'Tablet', description: 'Portable tablet with 10-inch display.', price: 300, image: tabletImage },
        { id: 8, name: 'Bluetooth Speaker', description: 'Wireless speaker with high-quality sound.', price: 100, image: bluetoothSpeakerImage },
        { id: 9, name: 'Smart TV', description: '4K UHD Smart TV.', price: 900, image: smartTvImage },
        { id: 10, name: 'Wireless Mouse', description: 'Ergonomic wireless mouse.', price: 30, image: wirelessMouseImage },
        { id: 11, name: 'Keyboard', description: 'Mechanical keyboard with RGB lighting.', price: 60, image: keyboardImage },
        { id: 12, name: 'External Hard Drive', description: '1TB external hard drive for data storage.', price: 100, image: externalHardDriveImage },
        { id: 13, name: 'Fitness Tracker', description: 'Waterproof fitness tracker with heart rate monitor.', price: 50, image: fitnessTrackerImage },
        { id: 14, name: 'e-Reader', description: 'Compact e-Reader with adjustable backlight.', price: 120, image: eReaderImage },
        { id: 15, name: 'Drone', description: 'Drone with 4K camera and GPS.', price: 600, image: droneImage }
      ]
    };
  },
  methods: {
    addToCart(product) {
      const cartItem = this.cart.find(item => item.product.id === product.id);
      if (cartItem) {
        cartItem.quantity++;
      } else {
        this.cart.push({ product, quantity: 1 });
      }
    },
    removeFromCart(product) {
      this.cart = this.cart.filter(item => item.product.id !== product.id);
    },
    increaseQuantity(product) {
      const cartItem = this.cart.find(item => item.product.id === product.id);
      if (cartItem) {
        cartItem.quantity++;
      }
    },
    decreaseQuantity(product) {
      const cartItem = this.cart.find(item => item.product.id === product.id);
      if (cartItem && cartItem.quantity > 1) {
        cartItem.quantity--;
      } else if (cartItem) {
        this.removeFromCart(product);
      }
    }
  }
};
</script>

<template>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
    <nav class="navbar">
      <div class="navbar-brand">Shop-Bay</div>
           <div class="search">
                    <input style="padding: 0.8rem;" type="text" placeholder="Search..." class="search-input" />
                    <button class="search-button">
                        <font-awesome-icon :icon="['fas', 'search']" />
                    </button>
            </div>
      <ul class="nav-right" style="display: flex; gap: 0.5rem; list-style: none;">
        <li>
            <a href="#" class="nav-link">
                <i class="fas fa-question-circle"></i> Help
            </a>
        </li>
        <li>
            <a href="#" class="nav-link">
              <font-awesome-icon :icon="['fas', 'cart-shopping']" /> Cart
            </a>
        </li>
    </ul>
    </nav>
    <div id="app">
    <div class="container">
      <div class="products">
        <div  v-for="product in products" :key="product.id">
          <div class="card">
            <img :src="product.image" class="card-img-top" :alt="product.name">
            <div class="card-body">
              <h5 class="card-title">{{ product.name }}</h5>
              <p class="card-text">{{ product.description }}</p>
              <p class="card-text text-muted">${{ product.price }}</p>
              <button style="border: none; background-color: gainsboro; padding: 5px; margin: 5px;" @click="addToCart(product)" class="btn btn-primary">Add to Cart</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <ShoppingCart
      :cart="cart"
      @remove-from-cart="removeFromCart"
      @increase-quantity="increaseQuantity"
      @decrease-quantity="decreaseQuantity"
    />
  </div>
</template>

<style>
.navbar {
  position: fixed; /* Keep the navbar fixed at the top */
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #f8f9fa;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  z-index: 1000; /* Ensure the navbar stays above other content */
}

.navbar-brand {
  font-size: 1.5rem;
  font-weight: 700;
  color: #3ec20a;
}

.search {
    display: flex;
    align-items: center;
}

.search-input {
    padding: 5px;
    border: none;
    border-radius: 5px;
    outline: none;
}

.search-button {
    background-color: #4CAF50; /* Green background */
    color: #fff;               /* White text */
    border: none;
    padding: 5px 10px;
    border-radius: 5px;
    margin-left: 5px;
    cursor: pointer;
}

.search-button:hover {
    background-color: #45a049; /* Darker green on hover */
}
#app {
  padding: 20px;
}
.container{
  margin-top: 2rem;
}
.products{
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* Default 4 columns */
  gap: 20px;
  padding: 20px;
}
.card {
  height: 330px;
  width: 240px;
  margin-right: 3rem;
  margin-bottom: 1rem;
  padding: 1.5rem;
  background-color: #f1f5ef;
}
.card-img-top {
  height: 150px;
  padding-left: 12%;
  margin-top: -5%;
  object-fit: cover;
}
.card-title {
  color: chocolate;
  font-size: medium;
}
.card-body {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

@media (max-width: 992px) {
  .products {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .products {
    grid-template-columns: 1fr;
  }
}
</style>
