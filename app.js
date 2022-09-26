const currentDisplay = document.querySelector(".current-display")
const preDisplay = document.querySelector(".pre-display")

//the function that clears everything on display and result Array
const allClear = (btn)=>{
    if(btn.innerText =="AC"){
        result = []
        preDisplay.innerText = ""
        currentDisplay.innerText = ""
    }
}

// the function that makes number negative or positive
const negPos = (btn)=>{
    if(btn.innerText =="±" && currentDisplay.innerText){
        currentDisplay.innerText = parseFloat(currentDisplay.innerText) * -1
    }
}
// the function that adds a comma if number hasn't already one
const comma = (btn)=>{
    if(btn.innerText == ","){
        if (currentDisplay.innerText.split("").includes(".")){
            return 
        }else if(currentDisplay.innerText == ""){
            currentDisplay.innerText += "0."
        }else{
            currentDisplay.innerText += "."
        }
    }
}
// the function that calculates percentages
const percentage = (btn) =>{
    if(btn.innerText == "%" && currentDisplay.innerText){
        currentDisplay.innerText = (parseFloat(currentDisplay.innerText) * 0.01)
    }
}


let result = []
document.querySelector(".buttons").addEventListener("click", (e)=>{
    if (e.target.matches(".num") && (currentDisplay.innerText.split("").length < 10)){
        currentDisplay.innerText += e.target.innerText
    }
    else if(e.target.matches(".operator")){
        result.push(parseFloat(currentDisplay.innerText))
        result.push(e.target.innerText)
        
        
        preDisplay.innerText += currentDisplay.innerText + e.target.innerText 
        currentDisplay.innerText = ""
        
        
        calculate(e.target)
    }else if (e.target.matches(".function") || e.target.matches(".comma") ){
        allClear(e.target)
        negPos(e.target)
        percentage(e.target)
        comma(e.target)
    }
    console.log(result)
    
})


const calculate = (btn) =>{
    
    if(btn.matches(".equal")){
        

        let preDisplayWithoutEqual = preDisplay.innerText.split("")
        preDisplayWithoutEqual.pop()
        preDisplay.innerText = `${preDisplayWithoutEqual.join("")}\n` 

        result.forEach((item, i) =>{
            if(item == "÷"){
                result[i+1] = result[i-1] / result[i+1]
            }else if(item == "x"){
                result[i+1] = result[i-1] * result[i+1]
            }else if(item == "-"){
                result[i+1] = result[i-1] - result[i+1]
            }else if(item == "+"){
                result[i+1] = result[i-1] + result[i+1]
            
            }
            console.log(result)
        })
        
        if(!isNaN(result[result.length - 2])){
            currentDisplay.innerText = result[result.length - 2]
        }    

    }
}








