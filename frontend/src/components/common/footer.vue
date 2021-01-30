<template>
  <div>
    <footer class="bg-light fixed-bottom text-center text-lg-start">
      <!-- Copyright -->
      <div class="text-center p-3" style="background-color: rgba(0, 0, 0, 0.2)">
        © 2020 Copyright |
        <a class="text-dark" target="_blank" href="https://www.instagram.com/__im.vishu04/">@__im.vishu04</a>
      </div>
      <!-- Copyright -->
    </footer>
  </div>
</template>
<script>
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class Footer extends Vue {
  // @Prop() private msg!: string;
}
</script>