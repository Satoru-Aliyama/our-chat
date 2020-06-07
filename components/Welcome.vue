<template>
  <div>
    <Header></Header>

    <div class="welcome container">
      <div class="card">
        <div class="card-content center-align">
          <h2 class="teal-text">Welcome</h2>
          <form @submit.prevent="enterChat">
            <label for="name">
              Enter Your Name.
            </label>
            <input type="text" name="name" id="name" v-model="name">
            <p v-if="feedback" class="red-text">{{this.feedback}}</p>
            <button class="btn teal">Enter Chat</button>
          </form>
        </div>
      </div>
    </div>

    <Footer></Footer>
  </div> 
</template>

<script>
import Header from './Header'
import Footer from './Footer'
export default {
  name: 'Welcome',
  data() {
    return {
      name: null,
      feedback: null
    }
  },
  components: {
    Header,
    Footer,
  },
  methods: {
    enterChat() {
      if(this.name) {
        this.$router.push({ name: 'Chat', params: {name: this.name}})
        this.feedback = null;
      } else {
        this.feedback ="You must enter a name to join."
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .welcome{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    max-width: 400px;

    & .header {
      position:  fixed;
      top: 0%;
      left: 0%;
      text-align: center;
      color: #fff;
      z-index: 100;
    }
    & h2 {
      font-size: 3em;
    }
    & button {
      margin: 30px auto;
      box-shadow: 3px 3px 3px rgba(1, 48, 41, 0.932);
      &:hover {
        box-shadow: none;
        transform: translate(3px, 3px);
      }
    }
  }
</style>
<!-- Add "scoped" attribute to limit CSS to this component only -->

