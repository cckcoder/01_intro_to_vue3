app.component('product-details', {
  props: {
    details: {
      type: Array,
      require: true
    }
  },
  template:
  `<ul>
    <li v-for="detail in details">{{ detail }}</li>
  </ul>`
})
