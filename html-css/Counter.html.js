<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>0</h1>
    <button id="inc">Increase</button>
    <button id="dec">Decrease</button>
</body>
</html>
<script>
    var counter=localStorage.getItem("countNumber");
    
    document.getElementById("inc").addEventListener("click",incFunction)
    function incFunction(){
    
        counter++;
        console.log(counter);
        document.querySelector("h1").innerText=counter;
        localStorage.setItem("countNumber",counter);
     }
     document.getElementById("dec").addEventListener("click",decFunction)
     function decFunction(){
        counter--;
        console.log(counter);
        var a=document.querySelector("h1").innerText=counter;
        localStorage.setItem("countNumber",counter);
     }
   
</script>
