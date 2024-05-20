import {ref, computed} from 'vue';

export function usePagination(page, totalPages){
    const paginatedPages = computed(() => {
        const total = totalPages.value;
        const current = page.value;
        const delta = 2;
        const range = [];
        const rangeWithDots = [];
        let last;
  
        for (let i = current - delta; i <= current + delta; i++) {
          if (i >= 1 && i <= total) {
            range.push(i);
          }
        }
  
        if (!range.includes(1)) range.unshift(1);
        if (!range.includes(total)) range.push(total);
  
        for (let i of range) {
          if (last && i - last > 1) {
            rangeWithDots.push('...');
          }
          rangeWithDots.push(i);
          last = i;
        }
  
        return rangeWithDots;
    });

    return {
        paginatedPages,
    }
}