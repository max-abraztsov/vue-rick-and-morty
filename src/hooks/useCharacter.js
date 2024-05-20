import axios from 'axios';
import {ref} from 'vue';

export function useCharacter(){
    const characters = ref([]);
    const totalPages = ref(0);
    const isCharacterLoading = ref(true);

    const fetchingCharacters = async (page) => {
        try{
            isCharacterLoading.value = true;
            const response = await axios.get('https://rickandmortyapi.com/api/character?page=' + page);
            totalPages.value = response.data.info.pages;
            characters.value = response.data.results;
            console.log(characters.value);
        }catch (e){
            alert('Ошибка получения данных!');
        }finally{
            isCharacterLoading.value = false;
        }
    }

    return {
        characters,
        totalPages,
        isCharacterLoading,
        fetchingCharacters,
    }
}