<template>
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
    import { inject, defineComponent } from 'vue';
    export default defineComponent({
        props: {
            paginatedPages: {
                type: Array,
                required: true,
            },
            page: {
                type: Number,
                required: true,
            }
        },
        setup(props){
            const changePage = inject('changePage');

            return {
                changePage,
            };
        }
    });
    
</script>

<style scoped>
    .page__wrapper{
        display: flex;
        margin: 30px 0;
    }
    .page{
        display: flex;
        align-items: center;
        justify-content: center;
        font-family: Rubik;
        width: 40px;
        height: 40px;
        cursor: pointer;
        font-size: 20px;
        color: white
    }
    .current-page{
        border: 1px solid white;
        border-radius: 6px;
    }
    @media (max-width: 500px){
        .page{
            width: 30px;
            height: 30px;
            font-size: 16px;
        }
    }
</style>