<template>
  <div id="todo-app">
    <Header/>
    <Home/>
    <Footer/>
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <!-- <router-view /> -->
  </div>
</template>

<script>
import {Component, Prop ,Vue} from 'vue-property-decorator'
import Header from '@/components/common/header.vue'
import Home from '@/components/home/home.vue'
import Footer from '@/components/common/footer.vue'


@Component({
  components: {
    Header,
    Home,
    Footer

  }
})
export default class App extends Vue {
  name = 'App'

}

</script>
