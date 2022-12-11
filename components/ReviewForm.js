app.component('review-form', {
  template:
  `<form class="review-form" @submit.prevent="onSubmit">
    <h3>Leave a review</h3>
    <label for="name">Name</label>
    <input id="name" type="text" v-model="name">

    <label for="review">review</label>
    <textarea id="review" v-model="review"></textarea>
    
    <label for="review">Rating:</label>
    <select id="rating" v-model.number="rating">
      <option>5</option>
      <option>4</option>
      <option>3</option>
      <option>2</option>
      <option>1</option>
    </select>

    <input class="button" type="submit">
  </form>`,
  data() {
    return {
      name: '',
      review: '',
      rating: null,
    }
  },
  methods: {
    onSubmit() {
      let productReview = {
        name: this.name,
        review: this.review,
        rating: this.rating
      }

      this.$emit('review-submitted', productReview)
    }
  }
})
