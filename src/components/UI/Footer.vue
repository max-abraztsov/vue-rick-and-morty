<template>
    <div class="footer">
        <div class="footer__logo" @click="$router.push('/')"><img class="logo" src="https://image.tmdb.org/t/p/original/g6z3xEHsJp2sKMRZn3or5ZuL0X3.svg" alt="logo"></div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style>
    .footer{
        height: 50px;
        background: white;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 15px;
    }
    .footer__logo{
        width: 90px;
        height: 50px;
    }
    .logo{
        width: 90px;
        height: 50px;
    }
</style>