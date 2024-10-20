<template>
    <div class="navbar">
        <div class="nav__logo" @click="$router.push('/')"><img class="logo" src="https://image.tmdb.org/t/p/original/g6z3xEHsJp2sKMRZn3or5ZuL0X3.svg" alt="logo"></div>
        <div class="navbar__btns">
            <span class="navbar__link" @click="$router.push('/')">Home</span>
            <span class="navbar__link" @click="$router.push('/characters')">Characters</span>
            <span class="navbar__link" @click="$router.push('/application')">App</span>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style>
    .navbar{
        height: 50px;
        background: white;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 15px;
    }
    .navbar__link{
        font-family: Rubik;
        font-size: 18px;
        display: inline-block;
        margin-right: 20px;
        font-weight: 500;
    }
    .nav__logo{
        width: 90px;
        height: 50px;
    }
    .logo{
        width: 90px;
        height: 50px;
    }
</style>