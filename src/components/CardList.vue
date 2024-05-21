<template>
    <div class="cards">
        <Card 
            v-for="character in characters" 
            :key="character.id" 
            :character="character"
        />
    </div>
</template>

<script>
    import Card from './Card.vue';
    import { defineComponent } from 'vue';
    export default defineComponent({
        components: {
            Card,
        },
        props: {
            characters: {
                type: Array,
                required: true,
            },
        },
    });
</script>

<style scoped>
    .cards{
        display: flex;
        flex-wrap: wrap;
        max-width: 1680px;
    }
    @media (max-width: 1690px){
        .cards{
            max-width: 840px;
        }
    }
    @media (max-width: 880px){
        .cards{
            max-width: 420px;
        }
    }
    @media (max-width: 860px){
        .cards{
            max-width: 420px;
        }
    }
    @media (max-width: 440px){
        .cards{
            max-width: 300px;
        }
    }
</style>