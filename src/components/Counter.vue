<template>
  <h2>{{ customTitle }}</h2>
 
  <p>{{ counter }} <sup>2</sup> = {{ squareCounter }}</p>  

    <div>
        <button @click="increase">+1</button>
        <button v-on:click="decrease">-1</button>
    </div>

</template>

<script>
export default {
    // Existen doferentes formas de definir las props.
    //props: ['title','start'],
    props: {
        title: String,
        start: {
            type: Number,
            default: 100,
            //required: true
            validator( value ) {
                return value >= 0
            }
        }
    },
    data(){
        return {
            counter: this.start
        }
    },
    methods: {
        getSquareValue() {
            //console.log('getSquareValue')
            return this.counter * this.counter
        },
        increase(){
            console.log('increase')
            return this.counter++          
        },
        decrease(){
            console.log('decrease')
            return this.counter--
        }
    },
    // LAS PROPIEDADES COMPUTADAS SE GUARDAN EN CACHE LO QUE PERMITE QUE SEAN MAS RAPIDOS
    computed: {
        squareCounter() {
            //console.log('Computed squered counter')
            return this.counter * this.counter
        },
        customTitle() {
            return this.title || 'Counter'
            // if ( this.title !== undefined) {
            //     return this.title            
            // } else {
            //     return 'Counter'
            // }            
        }
    }
}
</script>

<style>
    button{
        background-color: #64BB87;
        border-radius: 5px;
        border: 1px solid white;
        color: white;
        cursor: pointer;
        margin:0 5px;
        padding: 5px 15px;
        transition: 0.3s ease-in-out;       
    }

    button:hover {
        background-color: #5aa67b;
        transition: 0.3s ease-out;
    }

</style>