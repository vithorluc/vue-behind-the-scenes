const app = Vue.createApp({
  data() {
    return {
      currentUserInput: '',
      message: 'Vue is great!',
    };
  },
  methods: {
    saveInput(event) {
      this.currentUserInput = event.target.value;
    },
    setText() {
      //this.message = this.currentUserInput;
      //$refs it's a vue provided propriety (retrive elements from the dom element)
      this.message = this.$refs.userText.value
      //console.log(this.$refs.useText)
    },
  },
});

app.mount('#app');

// how vue works under the hoods
const data = {
  message: 'Hello!',
  longMessage: 'Hello! World!'
}

const Handler = {
  set(target, key, value) {
    console.log(key, value)
    if(key === 'message') {
      target.longMessage = value + "World"
    }
    target.message = value
  }
}

const proxy = new Proxy(data, Handler)

proxy.message = 'Hello!!!!'

console.log(proxy.longMessage)
