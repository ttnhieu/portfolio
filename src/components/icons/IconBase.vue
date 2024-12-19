<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component
export default class IconBase extends Vue {
  @Prop({ default: 'box' }) iconName: string;
  @Prop({ default: '1em' }) width: string | number;
  @Prop({ default: '1em' }) height: string | number;
  @Prop({ default: 'currentColor' }) iconColor: string;
}
</script>
<style scoped>
.c-icon {
  font-size: 20px;
  line-height: 20px;
  height: auto;
  display: inline-block;
}
</style>
