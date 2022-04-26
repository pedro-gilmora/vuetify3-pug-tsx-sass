import { Vue } from "vue-property-decorator";
import { VAutocomplete, VTextField } from "vuetify/components";

export default class Greet extends Vue {
  text = 'Prueba'
  render() {
    return <>
      {this.text} 
      <VTextField label="Input some text" prepend-inner-icon="mdi-map-marker" v-model={this.text}/>
      <VTextField label="Input some other text" prepend-inner-icon="mdi-map-marker" v-model={this.text} />
    </>
  }
};
