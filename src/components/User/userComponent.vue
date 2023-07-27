<script>
export default {
  data() {
    return {
      username: "Hello from MyComponent!",
      email: 25,
    };
  },
  methods: {
    sayHello() {
      console.log("Hello!");
    },
    doubleAge() {
      this.age *= 2;
    },
  },
};
</script>