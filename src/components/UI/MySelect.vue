<template>
    <select :value="value" @change="updateValue" class="select">
        <option disabled value="">Choose smth</option>
        <option 
            v-for="option in options" 
            :key="option.value" 
            :value="option.value" 
        >
            {{ option.name }}
        </option>
    </select>
</template>

<script>
import { defineComponent, ref, watch } from 'vue';

export default defineComponent({
    name: "MySelect",
    props: {
        modelValue: {
            type: String,
        },
        options: {
            type: Array,
            default: () => []
        },
    },
    setup(props, { emit }) {
        const value = ref(props.modelValue);

        const updateValue = (event) => {
            value.value = event.target.value;
            emit('update:modelValue', event.target.value);
        };

        // Watcher to update the internal value if props.modelValue changes
        watch(() => props.modelValue, (newValue) => {
            value.value = newValue;
        });

        return {
            value,
            updateValue,
        };
    },
});
</script>

<style scoped>
    .select{
        font-family: Rubik;
        font-size: inherit;
        background-color: #f4f2f2;
        border: none;
        color: #646464;
        padding: 0.7rem 1rem;
        border-radius: 30px;
        width: 300px;
        transition: all ease-in-out 0.5s;
        appearance: none; 
        -webkit-appearance: none;
        margin: 5px;
    }

    .select:hover, .select:focus {
        box-shadow: 0 0 1em #00000013;
    }

    .select:focus {
        outline: none;
        background-color: #f0eeee;
    }
</style>
