const value=10

const add=()=>{
    return{
        value:20,
        getvalue:function(){
            return this.value
        }

}
}

const result=add().getvalue()
console.log(result)