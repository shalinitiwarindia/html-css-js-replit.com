
  
var likes=0;
function likeFunction(){
  likes++;
  document.getElementById("heading").innerText=likes;
}
 function unlikeFunction(){
   likes--;
   document.getElementById("heading").innerText=likes;
 } 
