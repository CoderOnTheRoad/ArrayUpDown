let btn=document.getElementById("submit-btn");
let input=document.getElementById("input");
let output=document.getElementById("output");

btn.addEventListener("click",()=>{
    let inputValue= input.value;
    let accArr=inputValue.split(",");
    let decArr=inputValue.split(",");
    // console.log(arr);
    accArr.sort(function(a, b){return b - a});
    decArr.sort(function(a, b){return a - b});
    let numEle = accArr.length;
    let out =[];
    let count =0;
    let iter=0;
    while(count<numEle){
        if(count<numEle){
            out.push(accArr[iter]);
            count++;

        }
        if(count<numEle){
            out.push(decArr[iter]); 
            count++;
        }
        iter++;
        
    }
    
   output.innerText=out;
})
