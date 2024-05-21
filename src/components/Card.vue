<template>
    <div class="character-card">
        <div class="character-card__image">
            <img :src="character.image" :alt="character.name" class="character__image">
        </div>
        <div class="character__info">
            <h2 class="character__name">{{ character.name }}</h2>
            <h3 class="character__status">{{ character.species }} - {{ character.status }}</h3>
            <h3 class="character__gender">{{ character.gender }}</h3>
        </div>
    </div>
</template>

<script>
    import { defineComponent } from 'vue';
    export default defineComponent({
        props: {
            character : {
                type: Object,
                required: true,
            }
        }
    });
</script>

<style scoped>
    .character-card{
        display: flex;
        font-family: Rubik;
        background-color: #3C3E44;
        border-radius: 10px;
        overflow: hidden; 
        max-height: 200px;
        width: 400px;
        margin: 10px;
    }
    .character-card__image{
        width: 50%;
        object-fit: contain;
        overflow: hidden;
        height: 200px;
    }
    .character__image{
        width: 100%;
        object-fit: contain;
        height: 100%;
    }
    .character__info{
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 50%;
    }
    .character__name{
        color: white;
        font-size: 20px;
        text-align: center;
        margin-bottom: 10px;
    }
    .character__status{
        color: white;
        font-size: 18px;
        text-align: center;
        margin-bottom: 10px;
    }
    .character__gender{
        color: white;
        font-size: 18px;
        text-align: center;
    }
    @media (max-width: 440px){
        .character-card{
            max-height: 150px;
            width: 300px;
            margin: 5px;
        }
        .character-card__image{
            height: 150px;
        }
        .character__name{
            font-size: 16px;
        }
        .character__status{
            font-size: 14px;
        }
        .character__gender{
            font-size: 14px; 
        }
    }
</style>