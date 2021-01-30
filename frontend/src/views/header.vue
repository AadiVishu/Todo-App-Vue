<template>
  <div>
    <h2>This is header components</h2>
  </div>
</template>

<script lang="ts">
// import { Component, Prop, Vue } from 'vue-property-decorator';

// @Component
// export default class header extends Vue {
//   @Prop() private msg! : string;
// }

import { Component, Prop, Vue } from 'vue-property-decorator';
@Component
export default class header extends Vue {
  @Prop() private msg!: string;
}
</script>
