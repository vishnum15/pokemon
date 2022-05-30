<template>
  <v-container>
 
 <v-row>
    <v-col cols="12" sm="3" md="4" v-for="(pokemon, index) in pokemonlist" :key="index" >
       <!-- <pokemon-card :pokemonName="pokemon.name" :pokemonURL="pokemon.url"/> -->
       <v-card
    class="mx-auto my-12"
    max-width="374"
  >
<!-- <p>{{pokemonData}}</p> -->

    <img
      height="250"
      :alt="pokemon.name"
     :src="pokemon.sprites.other['official-artwork'].front_default"
    ></img>
    

    <v-card-title >{{pokemon.name}}</v-card-title>
    <v-divider class="mx-4"></v-divider>
    <v-card-title>List of abilities</v-card-title>
    <v-card-text>
      <v-chip-group
       
      >
        <v-chip pill :ripple="false"  color="primary" v-for="item in pokemon.abilities" :key="item.ability">{{item.ability.name}}</v-chip>

      
      </v-chip-group>
    </v-card-text>

  </v-card>
  

    </v-col>
     <v-pagination
        v-model="page"
        :length="pokemonlist.length"
      ></v-pagination>
</v-row>
  </v-container>
</template>

<script>
//import PokemonCard from './PokemonCard.vue';

  export default {
  components: {  },
    name: 'PokemonList',
    
    computed: {
     pokemonlist() {
            return this.$store.getters.GET_POKEMON_LIST;
        },
  },
    mounted(){
      this.$store.dispatch('FETCH_POKEMONS',this.limit);
    },
    data: () => ({
      page:1,
      limit: 500

    }),
  }
</script>
