import { createApp, ref} from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js'
import axios from 'https://cdn.skypack.dev/axios'

createApp({
  setup(){
    let pokemon_name = ref("pikachu");
    let pokemon_image = ref("");
    let pokemon_sound = ref("");
    let get = async function fetchData() {
      const response = await axios.get("https://pokeapi.co/api/v2/pokemon/" + pokemon_name.value);
      pokemon_image.value = response.data["sprites"]["front_default"];
      pokemon_sound.value = response.data["cries"]["latest"];
    }
    return{
      pokemon_name,
      pokemon_image,
      pokemon_sound,
      get
    }
  }
}).mount('#app');