import {ref} from 'vue';

export function useFilter(array){
    const searchQuery = ref('');
    const selectedSort = ref('All');
    const sortedCharacters = ref([]);

    const filterByName = (array) => {
        return array.value.filter( item =>
            item.name.toLowerCase().includes(searchQuery.value.trim().toLowerCase())
        );
    };

    const filterByStatus = (array) => {
        return array.sort((a, b) => {
            if (selectedSort.value === 'Alive') {
                return a.status === 'Alive' ? -1 : 1;
            } else if (selectedSort.value === 'Dead') {
                return a.status === 'Dead' ? -1 : 1;
            } else if (selectedSort.value === 'unknown') {
                return a.status === 'unknown' ? -1 : 1;
            } else {
                return 0;
            }
        });
    }
  
    const applySorting = () => {
        let filtered = filterByName(array);
        if (selectedSort.value !== 'All') {
          filtered = filterByStatus(filtered);
        }
        sortedCharacters.value = filtered;
    };

    return {
        applySorting,
        sortedCharacters,
        selectedSort,
        searchQuery,
    }
}