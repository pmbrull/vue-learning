var app = new Vue({ // Vue instance: Pass an Options object that will form the data
    el: '#app', // link from the script to the DOM by id
    data: {
        product: 'Socks',
        brand: 'My Brand',
        altText: 'my product image',
        link: 'https://www.amazon.com/s/ref=nb_sb_noss?url=search-alias%3Daps&field-keywords=socks',
        details: ['80% cotton', '20% polyester', 'Gender-neutral'],
        selectedVariant: 0,
        variants: [{
            variantId: 2234,
            variantColor: 'green',
            variantImage: './assets/vmSocks-green.jpg',
            variantQuantity: 10
        },
        {
            variantId: 2235,
            variantColor: 'blue',
            variantImage: './assets/vmSocks-blue.jpg',
            variantQuantity: 0
        }
    ],
    cart: 0
    },
    methods: {
        addToCart: function() {
            this.cart += 1
        },
        updateProduct: function(index) {
            this.selectedVariant = index
        }
    },
    computed: {
        title() {
            return this.brand + ' ' + this.product
        },
        image() {
          return this.variants[this.selectedVariant].variantImage  
        },
        inStock() {
          return this.variants[this.selectedVariant].variantQuantity
        }
    }
})