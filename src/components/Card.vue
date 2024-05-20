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
    export default {
        props: {
            character : {
                type: Object,
                required: true,
            }
        }
    }
</script>

<style scoped>
    .character-card{
        display: flex;
        background-color: lightgray;
        border-radius: 10px;
        overflow: hidden; 
        max-height: 200px;
        width: 400px;
        margin-top: 15px;
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
        width: 50%;

    }
    .character__name{

    }
    .character__status{

    }
    .character__gender{

    }
</style>