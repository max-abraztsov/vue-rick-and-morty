<template>
    <input :value="modelValue" @input="updateInput" class="search__input" />
</template>

<script>
import { defineComponent, ref } from 'vue';

export default defineComponent({
    name: "MyInput",
    props: {
        modelValue: [String, Number],
    },
    setup(props, { emit }) {
        const value = ref(props.modelValue);

        const updateValue = (event) => {
            value.value = event.target.value;
            emit('update:modelValue', value.value);
        };

        return {
            value,
            updateValue,
        };
    },
});
</script>

<style scoped>
  .search__input {
    font-family: Rubik;
    font-size: inherit;
    background-color: #f4f2f2;
    border: none;
    color: #646464;
    padding: 0.7rem 1rem;
    border-radius: 30px;
    width: 300px;
    transition: all ease-in-out .5s;
    margin: 5px;
  }
</style>