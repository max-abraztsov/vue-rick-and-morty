<template>
  <div v-if="isCharacterLoading">Loading...</div>
  <div v-else>
    <div class="cards">
      <Card v-for="character in characters" :key="character.id" :character="character"/>
    </div>
  </div>
  <div class="page__wrapper">
    <div 
        class="page" 
        v-for="pageNumber in totalPages" 
        :key="pageNumber" 
        :class="{'current-page': page === pageNumber}"
        @click="changePage(pageNumber)"
    >{{pageNumber}}</div>
</div>
</template>

<script>
import Card from './components/Card.vue';
import { useCharacter } from './hooks/useCharacter';
export default {
  components:{
    Card,
  },
  data(){
    return {
      page: 1,
    }
  },
  methods: {
    
  },
  setup(props){
    const {characters, totalPages, isCharacterLoading, fetchingCharacters} = useCharacter();

    fetchingCharacters(1);

    const changePage = (page) => {
      fetchingCharacters(page);
    }

    return {
      characters, 
      totalPages, 
      isCharacterLoading,
      changePage,
    }
  }
}
</script>

<style scoped>
  .cards{
    display: flex;
    flex-wrap: wrap;
  }

  .page__wrapper{
    display: flex;
  }
  .page{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 20px;
    border: 1px solid teal;
    cursor: pointer;
  }
</style>
