<template>
  <MyInput
    v-model="searchQuery"
    @input="inputSearch"
    placeholder="Search..."
  />
  <MySelect
    v-model="selectedSort"
    :options="sortOptions"
  />
  <MyButton @click="applySorting">Применить</MyButton>
  <div v-if="isCharacterLoading">Loading...</div>
  <div v-else>
    <div class="cards">
      <Card v-for="character in sortedCharacters" :key="character.id" :character="character"/>
    </div>
  </div>
  <div class="page__wrapper">
    <div 
      class="page" 
      v-for="pageNumber in paginatedPages" 
      :key="pageNumber" 
      :class="{'current-page': page === pageNumber}"
      @click="changePage(pageNumber)"
    >
      {{ pageNumber }}
    </div>
  </div>
</template>

<script>
import Card from './components/Card.vue';
import { ref, watch } from 'vue';
import { useCharacter } from './hooks/useCharacter';
import { useFilter } from './hooks/useFilter';
import { usePagination } from './hooks/usePagination';
export default {
  components:{
    Card,
  },
  setup(){
    const page = ref(1);
    const {characters, totalPages, isCharacterLoading, fetchingCharacters} = useCharacter();
    const {applySorting, sortedCharacters, selectedSort, searchQuery} = useFilter(characters);
    const { paginatedPages } = usePagination(page,totalPages);
    const sortOptions = ref([
      {value: 'All', name: 'All'},
      {value: 'Alive', name: 'Alive'},
      {value: 'Dead', name: 'Dead'},
      {value: 'unknown', name: 'Unknown'},
    ]);

    const inputSearch = (e) => {
      searchQuery.value = e.target.value;
    }

    const changePage = (pageNumber) => {
      if (pageNumber !== "..."){
        page.value = pageNumber;
        fetchingCharacters(pageNumber);
      }
    }

    fetchingCharacters(1);

    watch(isCharacterLoading, (isLoading) => {
      if (!isLoading) {
        applySorting();
      }
    });


    return {
      characters, 
      totalPages, 
      isCharacterLoading,
      changePage,
      sortOptions,
      selectedSort,
      sortedCharacters,
      applySorting,
      inputSearch,
      paginatedPages,
      page,
      searchQuery,
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
