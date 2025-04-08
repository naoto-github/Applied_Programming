import { createApp, ref } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js'

const CharacterAlbum = {
  template: `
    <div class="album" v-bind:style="{background: color}">
      <div style="width:500px">
        <h1>{{ name }}</h1>
        <h2>{{ description }}</h2>
      </div>
      <div>
        <img v-bind:src="image">
      </div<
    </div>
  `,
  props: ["name", "description", "image", "color"],
  setup(props){
    return{
      title: props["name"],
      description: props["description"],
      image: props["image"],
      color: props["color"]
    };
  }
}

createApp({
  components: {
    "album": CharacterAlbum
  }
}).mount("#app");