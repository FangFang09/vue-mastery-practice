const app = Vue.createApp({
  data() {
    return {
      cart: 0,
      product: "Socks",
      image: "./assets/images/socks_blue.jpg",
      inStock: true,
      details: ["50% cotton", "30% wool", "20% polyester"],
      variants: [
        { id: 2234, color: "green", image: "./assets/images/socks_green.jpg" },
        { id: 2235, color: "blue", image: "./assets/images/socks_blue.jpg" },
      ],
    };
  },
  methods: {
    addToCart() {
      this.cart += 1;
    },
    minusToCart() {
      this.cart -= 1;
    },
    updateImage(variantImage) {
      this.image = variantImage;
    },
  },
});

// try 改成composition api版
// const { createApp, ref, reactive } = Vue;

// createApp({
//   setup() {
//     const cart = ref(0);
//     const product = ref("Socks");
//     const image = ref("./assets/images/socks_blue.jpg");
//     const inStock = ref(true);
//     const details = ref(["50% cotton", "30% wool", "20% polyester"]);
//     const variants = ref([
//       { id: 2234, color: "green", image: "./assets/images/socks_green.jpg" },
//       { id: 2235, color: "blue", image: "./assets/images/socks_blue.jpg" },
//     ]);

//     function addToCart() {
//       cart.value += 1;
//     }

//     function minusToCart() {
//       cart.value -= 1;
//     }

//     function updateImage(variantImage) {
//       image.value = variantImage;
//     }

//     return {
//       cart,
//       product,
//       image,
//       inStock,
//       details,
//       variants,
//       addToCart,
//       minusToCart,
//       updateImage,
//     };
//   },
// }).mount("#app");
