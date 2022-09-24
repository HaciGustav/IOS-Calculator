document.addEventListener("click", (e)=>{
    if(e.target.className == "surprise"){
        e.target.remove()
    }
})




const container = document.querySelector(".container")
const current = document.querySelector(".current-display")
let result = []
container.addEventListener("click", (e)=>{
    let click = e.target
    // let num = Number(click.innerText)
    if (click.classList.contains("num")) {
        
        current.innerText += e.target.innerText
    }
    if (!click.classList.contains("num") 
    && ((!click.classList.contains("buttons"))
    &&!click.classList.contains("container"))){
        
        let input = current.innerText
        result.push(Number(input))
        result.push(click.innerText)
        current.innerText = ""

        console.log(input)
        console.log(result)
    }
    if(click.innerText == "="){
        result.forEach((item, i) =>{
            let total = 0
            
            if(item == "+"){
                
                total = result[i+1]   
                console.log(total)
            }
        })
    }



    
    
    
    
    
})


