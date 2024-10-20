<template>
    <div class="container2">
        <div class="image__form">
            <div class="main__logo">
                <img class="image" src="https://img.posterstore.com/zoom/wb0096-8rickandmortyspaceship50x70.jpg" alt="">
            </div>
            <div class="main__form">
                <h2 class="title">If you have found an error in the information - please report it to us!</h2>
                <form id="feedbackForm" @submit.prevent="submit">
                    <MyInput id="characterName" v-model="form.name" placeholder="Character name" @input="(e) => changeInput(e, 'name')" pattern="^[A-Za-zА-Яа-яЁё\s]+$" title="W imieniu można wprowadzić tylko litery i spacje" required/>
                    <MySelect v-model="selectedSort" :options="sortOptions"/>
                    <MyInput placeholder="Affiliation" id="characterAffiliation" pattern="^[A-Za-z]+$" v-model="form.affiliation" @input="(e) => changeInput(e, 'affiliation')" title="W Affiliation można wprowadzić tylko litery i spacje" required/>
                    <textarea v-model="form.description" placeholder="Description" id="characterDescription" @input="(e) => changeInput(e, 'description')" required></textarea>
                    <MyButton id="button" type="submit">Apply</MyButton>
                </form>
            </div>
        </div>
        <div>
            <div class="main__description">
                <h2 class="title">Information</h2>
                <p class="description">Rick and Morty is an American adult animated science fiction sitcom created by Justin Roiland and Dan Harmon for Cartoon Network's nighttime programming block Adult Swim. The series follows the misadventures of Rick Sanchez, a cynical mad scientist, and his good-hearted but fretful grandson Morty Smith, who split their time between domestic life and interdimensional adventures that take place across an infinite number of realities, often traveling to other planets and dimensions through portals and on Rick's flying saucer. The general concept of Rick and Morty relies on two conflicting scenarios: domestic family drama and a misanthropic grandfather dragging his grandson into hijinks.
                    Roiland voiced both Rick and Morty, with Chris Parnell as Jerry (Rick's son-in-law and Morty's father), Spencer Grammer as Summer (Rick's granddaughter and Morty's sister), and Sarah Chalke as Beth (Rick's daughter and Morty's mother). The series originated from an animated short parody film of Back to the Future created by Roiland for Channel 101, a short-film festival cofounded by Harmon. Since its debut, the series has received critical acclaim for its screenplay, originality, creativity, and humor. It has been nominated for three Primetime Emmy Awards for Outstanding Animated Program and won the award in 2018 and 2020. The series has also received two Annie Awards. At times, the series has been the most viewed television comedy for adults between 18 and 24. The popularity of Rick and Morty has made it a hundred-million dollar merchandising and media franchise.
                    A seventh season was confirmed as part of a long-term deal with Cartoon Network that ordered 70 new episodes, which renewed the series through to a tenth season. Adult Swim cut ties with Roiland in 2023 amid allegations of domestic abuse and recast his roles with soundalike actors in season 7, which premiered on October 15, 2023.</p>
    
                <h2 class="title">Premise and main characters</h2>
                <p class="description">The show revolves around the adventures of the members of the Smith household, which consists of parents Jerry and Beth, their children Summer and Morty, and Beth's father, Rick Sanchez, who lives with them as a guest. The family lives in a suburb in the American Midwest.[3] The adventures of Rick and Morty, however, take place across an infinite number of realities, with the characters traveling to other planets and dimensions through portals and Rick's flying saucer.
    
                    Rick is an eccentric and alcoholic mad scientist, who eschews many ordinary conventions such as school, marriage, love, and family. He frequently goes on adventures with his 14-year-old grandson, Morty, a kind-hearted but easily distressed boy, whose naïve but grounded moral compass plays counterpoint to Rick's Machiavellian ego.[5][6] Morty's 17-year-old sister, Summer, is a more conventional teenager who worries about improving her status among her peers and sometimes follows Rick and Morty on their adventures.[7] The kids' mother, Beth, is a generally level-headed person and assertive force in the household, though self-conscious about her professional role as a horse surgeon. She is dissatisfied with her marriage to Jerry, a simple-minded and insecure person, who disapproves of Rick's influence over his family.[8]
                    Different versions of the characters inhabit other dimensions throughout the show's multiverse and their personal characteristics can vary from one reality to another.[9] The show's original Rick identifies himself as "Rick Sanchez of Earth Dimension C-137", in reference to his original universe, but this does not apply to any other member of the Smith household.[10] For instance, in the first-season episode "Rick Potion #9", after turning the entire world population into monsters, Rick and Morty move to a different dimension, leaving the original Summer, Beth and Jerry behind.</p>
            </div>
        </div>
        
    </div>
</template>

<script>
    import { provide, ref, watch, defineComponent } from 'vue';
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
            const form = ref({
                name: "",
                status: selectedSort,
                affiliation: "",
                description: "",
            })

            const changeInput = (e, fieldName) => {
                e.preventDefault();
                
                
                form[fieldName] = e.target.value;
            }

            const submit = (e) => {
                e.preventDefault();
                if (form.name){
                    console.log(localStorage);
                    localStorage.setItem( "Zgloszenie", JSON.stringify(form) );
                    console.log(localStorage);
                }
            }

            return {                        
                characters, 
                sortOptions,
                selectedSort,
                changeInput,
                form,
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
        padding-bottom: 40px;
        
    }
    .title{
        font-family: Rubik;
        font-size: 20px;
        font-weight: 700;
        display: inline-block;
        margin-top: 20px;

    }
    .description{
        font-family: Rubik;
        font-size: 16px;
        font-weight: 400;
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
        .image__form{
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
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