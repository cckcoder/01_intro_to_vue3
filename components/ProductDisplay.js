app.component('product-display', {
  props: {
    premium: {
      type: Boolean,
      required: true
    }
  },
  template:
  /*html*/
  `<div class="product-display">
    <div class="product-container">

      <div class="product-image">
        <img :src="image">
      </div>

      <div class="product-info">

        <h1>{{ title }}</h1>

        <p v-if="inStock">In Stock</p>
        <p v-else>Out of Stock</p>

        <p>Shipping: {{ shipping }}</p>

          <product-details :details=details></product-details>

          <div 
            v-for="(varian, index) in variants" 
            :key="varian.id" 
            @mouseover="updateVariant(index)"
            class="color-circle"
            :style="{ backgroundColor: varian.color }">
          </div>

          <button 
            class="button" 
            @click="addToCart" 
            :class="{ disabledButton: !inStock }"
            :disabled="!inStock"
          >
            Add to Cart
          </button>

          <button 
            class="button" 
            @click="deleteFromCart" 
            :class="{ disabledButton: !inStock }"
            :disabled="!inStock"
          >
            Remove
          </button>

      </div>

    </div>
    <review-form @review-submitted="addReview"> </review-form>
    <review-list v-if="reviews.length" :reviews="reviews"></review-list>
  </div>`,
  data() {
    return {
      product: 'Socks',
      brand: 'Vue Mastery',
      description: 'This is a great Socks',
      details: ['50% cotton', '30% wool', '20% polyester'],
      selectedVariant: 0,
      variants: [
        { id: 2234, color: 'green', image: './assets/images/socks_green.jpg', quantity: 50 },
        { id: 2235, color: 'blue' , image: './assets/images/socks_blue.jpg', quantity: 0},
      ],
      reviews: []
    }
  },
  methods: {
    addToCart() {
      this.$emit('add-to-cart', this.variants[this.selectedVariant].id)
    },
    deleteFromCart() {
      this.$emit('del-from-cart')
    },
    updateVariant(index) {
      this.selectedVariant = index
    },
    addReview(review) {
      this.reviews.push(review)
    }
  },
  computed: {
    title() {
      return this.brand + ' ' + this.product
    },
    image() {
      return this.variants[this.selectedVariant].image
    },
    inStock() {
      return this.variants[this.selectedVariant].quantity
    },
    shipping() {
      if (this.premium) {
        return 'Free'
      }
      return 2.99
    }
  }
})
