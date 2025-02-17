const app = Vue.createApp({
  data() {
    return {
      cart: 0,
      product: "Socks",
      brand: "Vue Mastery",
      image: "./assets/images/socks_blue.jpg",
      inStock: false,
      details: ["50% cotton", "30% wool", "20% polyester"],
      variants: [
        { id: 2234, color: "green", image: "./assets/images/socks_green.jpg" },
        { id: 2235, color: "blue", image: "./assets/images/socks_blue.jpg" },
      ],
      styles: {
        fontSize: "18px",
        fontWeight: "bold",
      },
    };
  },
  methods: {
    addToCart() {
      this.cart += 1;
    },
    updateImage(variantImage) {
      this.image = variantImage;
    },
  },
});

// // composition api

// const { createApp, ref, reactive } = Vue;

// const app = createApp({
//   setup() {
//     const cart = ref(0);
//     const product = ref("Socks");
//     const brand = ref("Vue Mastery");
//     const image = ref("./assets/images/socks_blue.jpg");
//     const inStock = ref(true);
//     const details = ref(["50% cotton", "30% wool", "20% polyester"]);
//     const variants = ref([
//       { id: 2234, color: "green", image: "./assets/images/socks_green.jpg" },
//       { id: 2235, color: "blue", image: "./assets/images/socks_blue.jpg" },
//     ]);
//     const styles = ref({
//       fontSize: "18px",
//       fontWeight: "bold",
//     });
//     function addToCart() {
//       cart.value += 1;
//     }
//     function updateImage(variantImage) {
//       image.value = variantImage;
//     }

//     return {
//       cart,
//       product,
//       brand,
//       image,
//       inStock,
//       details,
//       variants,
//       styles,
//       addToCart,
//       updateImage,
//     };
//   },
// });
