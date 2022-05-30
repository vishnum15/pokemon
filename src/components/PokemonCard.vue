<template>
<v-card
    class="mx-auto my-12"
    max-width="374"
  >
<!-- <p>{{pokemonData}}</p> -->

    <img
      height="250"
      :alt="pokemonName"
     :src="pokemonData.sprites.other['official-artwork'].front_default"
    ></img>
    

    <v-card-title >{{pokemonName}}</v-card-title>
    <v-divider class="mx-4"></v-divider>
    <v-card-title>List of abilities</v-card-title>
    <v-card-text>
      <v-chip-group
       
      >
        <v-chip pill :ripple="false"  color="primary" v-for="item in pokemonData.abilities" :key="item.ability">{{item.ability.name}}</v-chip>

      
      </v-chip-group>
    </v-card-text>

  </v-card>
 
</template>

<script>
import axios from "axios"
  export default {
    name: 'PokemonCard',
props:{
  pokemonName:String,
  pokemonURL:String
},
    data() {
    return {
      pokemonData:{}
    }
  },
    mounted(){
      
       this.getDataPromise()
.then(res => this.pokemonData = res);

        
        


        
    },
    methods:{
      getDataPromise() {
    return axios({
            url: this.pokemonURL,
            method: 'get',
            headers: {
                'Content-Type': 'application/json',
            }
        })
       .then(res => res.data)
       .catch (err => console.error(err))
    },

      getImg(img){
        //console.log(img);
      }
    }
  }
</script>
<style scoped>

</style>

