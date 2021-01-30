import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class home extends Vue {
  @Prop() private msg!: string;
}