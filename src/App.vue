<template>
   <h1 class='h1'>Welcome to my final project!</h1>
   <div class='aclass'>
      <a href='https://mycharger.newhaven.edu/' target='_blank'>Link to University Website</a>
   </div>
    <div class="container">
   
   
    <Header bookName="Student Details" 
      authorName="Spring 2022" />


    <Bookbox :students="students"/>




    </div>
</template>
<script>



//import HelloWorld from './components/HelloWorld.vue'
// 1
import Header from './components/Header.vue'
import Bookbox from './components/Bookbox.vue'


// data url: http://localhost:7674/books , this might be different for you
export default {
  name: 'App',
  components: {
    // 2 register the component 
    Header,
    Bookbox
  },

  data(){
    return {
      students: []
    }
  },
  methods: {
    // promises

      async fetchBooks(){
         const res= await fetch('https://mohammedabbas.herokuapp.com/api')
         const data= await res.json().catch(()=>console.log('Error in getting json data'))
         console.log(data.students)
         return data.students
        
      }

  },

  async created(){
    this.students = await this.fetchBooks()
    console.log('Inside created')
  }
}


</script>










<style>


@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300&display=swap');
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: 'Montserrat', sans-serif;
  background-color:#93B5C6
}
.container {
  max-width: 80%;
  margin: 30px auto;
  overflow: auto;
  min-height: 300px;
  border: 0.3em solid black;
  padding: 30px;
  border-radius: 5px;
  background-color:#BD4F6C
}

div{
  margin-bottom: 0.5em;
}

.h1{
  margin-top:2%;
  text-align:center
}

a{
  align-item:center;
  text-decoration:none
}

.aclass{
  text-align:center;
  font-size:2rem;
}

</style>


