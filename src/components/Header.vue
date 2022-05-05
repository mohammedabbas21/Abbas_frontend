<template>
<div>
    <h1> {{bookName}} </h1>
    <h4> {{authorName}} </h4>
</div>
</template>

<script>

export default{
    name: 'Header',
    props:{
        bookName: String,
        authorName:String
    }
}

</script>

<style scoped>

div{
    text-align: center;
}

</style>