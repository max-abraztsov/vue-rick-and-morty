<template>
    <div class="container">
      <div class="filters">
        <MyInput v-model="searchQuery" @input="inputSearch" placeholder="Search..."/>
        <MySelect v-model="selectedSort" :options="sortOptions"/>
      </div>
      <MyButton @click="applySorting">Apply</MyButton>
      <div v-if="isCharacterLoading">Loading...</div>
      <div v-else>
        <CardList :characters="sortedCharacters"/>
      </div>
      <Pagination :paginatedPages="paginatedPages" :page="page"/>
    </div>  
  </template>
  
  <script>
  import Card from '@/components/Card.vue';
  import CardList from '@/components/CardList.vue';
  import Pagination from '@/components/Pagination.vue';
  import { provide, ref, watch, defineComponent } from 'vue';
  import { useCharacter } from '@/hooks/useCharacter';
  import { useFilter } from '@/hooks/useFilter';
  import { usePagination } from '@/hooks/usePagination';
  export default defineComponent({
    components:{
      Card,
      CardList,
      Pagination,
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
  
      provide('changePage', changePage);
  
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
  });
  </script>
  
  <style>
    *{
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    body{
      background-color: #040000;
    }
    .container{
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 30px 10px;
    }
    .filters{
      display: flex;
    }
  
    @media (max-width: 680px){
      .filters{
        display: flex;
        flex-direction: column;
        align-items:center;
        justify-content: center;
        margin-bottom: 5px;
      }
    }
  </style>
  