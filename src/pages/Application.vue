<template>
    <div class="container2">
        <div class="main__logo">
            <img class="image" src="https://img.posterstore.com/zoom/wb0096-8rickandmortyspaceship50x70.jpg" alt="">
        </div>
        <div class="main__form">
            <h2 class="title">Your application</h2>
            <form id="feedbackForm" @submit.prevent="submit">
                <MyInput id="characterName" v-model="application.name" placeholder="Character name" @input="(e) => changeInput(e, 'name')" pattern="^[A-Za-zА-Яа-яЁё\s]+$" title="W imieniu można wprowadzić tylko litery i spacje" required/>
                <MySelect v-model="selectedSort" :options="sortOptions"/>
                <MyInput placeholder="Affiliation" id="characterAffiliation" pattern="^[A-Za-z]+$" v-model="application.affiliation" @input="(e) => changeInput(e, 'affiliation')" title="W Affiliation można wprowadzić tylko litery i spacje" required/>
                <textarea v-model="application.description" placeholder="Description" id="characterDescription" @input="(e) => changeInput(e, 'description')" required></textarea>
                <MyButton id="button" type="submit">Apply</MyButton>
            </form>
        </div>
    </div>
</template>

<script>
    import { ref, defineComponent, onMounted, watch } from 'vue';
    import { useFilter } from '@/hooks/useFilter';

    export default defineComponent({
        setup(){
            const characters = ref([]);
            const {selectedSort} = useFilter(characters);
            const sortOptions = ref([
                {value: 'All', name: 'All'},
                {value: 'Alive', name: 'Alive'},
                {value: 'Dead', name: 'Dead'},
                {value: 'unknown', name: 'Unknown'},
            ]);
            const application = ref({
                name: '',
                affiliation: '',
                description: ''
            });

            const loadApplicationFromLocalStorage = () => {
                const savedApplication = localStorage.getItem("Zgloszenie");
                if (savedApplication) {
                    application.value = JSON.parse(savedApplication);
                }
            };

            const changeInput = (e, fieldName) => {
                e.preventDefault();                
                application.value[fieldName] = e.target.value;
            }

            const submit = (e) => {
                e.preventDefault();
                if (application.value.name){
                    localStorage.setItem("Zgloszenie", JSON.stringify(application.value));
                }
            }
           
            onMounted(() => {
                loadApplicationFromLocalStorage();
            });

            watch(
                () => localStorage.getItem("Zgloszenie"),
                (newVal) => {
                    if (newVal) {
                        application.value = JSON.parse(newVal);
                    }
                }
            );

            return {                        
                characters, 
                sortOptions,
                selectedSort,
                changeInput,
                application,
                submit
            }
        }
    })
</script>


<style scoped>
    *{
        color: white;
        
    }
    body{
        background-color: #040000;

    }
    .container2{
         
        width: 1200px;
        margin: 0 auto;
        display: flex;
        align-items:center;
        justify-content: center;
        padding-bottom: 40px;
        
    }
    .title{
        font-family: Rubik;
        font-size: 20px;
        font-weight: 700;
        display: inline-block;
        margin-top: 20px;

    }
    #feedbackForm{
        display: flex;
        flex-direction: column;
    }
    #characterDescription {
        font-family: Rubik;
        font-size: inherit;
        background-color: #f4f2f2;
        border: none;
        color: #646464;
        padding: 0.7rem 1rem;
        border-radius: 20px;
        width: 300px;
        transition: all ease-in-out .5s;
        margin: 5px;
      }
      #button{
        width: 310px;
      }
      .title{
        text-align: center;
        display: inline-block;
        margin-bottom: 10px;
      }
      .main__form{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    @media (max-width: 1300px){
        .container2{
            width: 900px;
            flex-direction: column;
        }
        .image__form{
            display: flex;
        }
    }

    @media (max-width: 940px){
        .container2{
            width: 720px;
            flex-direction: column;
        }

        .main__form{
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
        }
    }
    @media (max-width: 720px){
        .container2{
            width: 460px;
        }
        .main__logo{
            max-width: 460px;
        }
        .image{
            width: 100%;
        }
    }
    @media (max-width: 460px){
        .container2{
            width: 320px;
        }
        .main__logo{
            max-width: 320px;
        }
    }
</style>