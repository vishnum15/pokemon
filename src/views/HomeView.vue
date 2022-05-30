<template>
 <pokemon-list/>
</template>

<script>
  import PokemonList from '../components/PokemonList';

  export default {
    name: 'Home',

    components: {
      PokemonList,
    },
  }
</script>
