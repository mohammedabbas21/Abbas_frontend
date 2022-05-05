<template>
    <!--div v-if="book.published == false"-->
<div class='format' :class="student.published ? 'green': 'red' ">
    <div :class="student.published ? 'green': 'red' ">
        
            <h1>Student Name: {{student.name}}</h1>
            <h2>Student ID: {{student.id}} </h2>
            <h2>Marks secured: {{student.grade}} </h2>
            <h4>Enrollment Year: {{student.year}}</h4>
        
    </div>
    <div class='image' :class="student.published ? 'green': 'red' ">
                <img :src=student.image />
    </div>


    <!-- </div> -->
</div>
</template>

<script>

export default{
    name: 'Book',
    props:{
        student: Array
    }
}
</script>

<style scoped>

.format{
    width: 600px;
    height: 600px;
    box-sizing: border-box;
}


h4{
    margin: 2px;
}

div{
    background-color: #ffb89e;
    color: black;
    padding: 1em;
}

.green{
    background-color: #F038FF;
}
.red{
/* background-color: orangered !important; */
    background-color: #A6ECE0
}

img{
    width:525px;
    height:350px;
}

</style>