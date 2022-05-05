<template>
    
     <div class="bookbox">
         
        <div v-for="student in students" :key="student.id" >
                
                <Book :student="student"/>
        </div>

        

     </div>

</template>

<script>

import Book from "./Book.vue"
export default{

    name: 'Bookbox',
    components: {
        Book
    },
    props: {
        students: Array
    }

}

</script>


<style>
body{
    background-color:gray;
}
.bookbox{

    background-color: bisque;
    padding: 1em;
    color: gray;
    display: flex;
    align-items: center;
    justify-content: space-around;
    box-sizing:border-box;
    flex-wrap:wrap;
    flex-direction:row;
}
</style>