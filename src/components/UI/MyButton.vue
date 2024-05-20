<template>
    
    <button 
        class="button"
    >
        <slot></slot>   
    </button>
    
</template>

<script>
    export default {
        name: "MyButton",
    }
</script>

<style scoped>
.button{
    padding:5px 15px;
    border: 1px solid teal;
    background: white;
    color: teal;
}
</style>