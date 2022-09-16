var gForm = document.querySelector(".g-form");
var left = document.querySelector(".left");
var bars = document.querySelector(".bars");
var barImg = document.querySelector(".bars img");
var layer = document.querySelector(".layer");
var utility = document.querySelector(".utility");
var utilityItems = document.querySelector(".utility-items");
// if(window.width < 500px){
 

// }
   
bars.addEventListener('click', function () {
  left.style.left = '80%';
  layer.style.width='100%';
  layer.style.background ='gray';
  layer.style.opacity = '.4';
  bars.style.display ='none';
});
layer.addEventListener('click', function(){
    left.style.left = '0%';
    layer.style.width='0';
    bars.style.display= 'inline';
});

utility.addEventListener('click',()=>{
  utilityItems.classList.toggle("collapse");
  utilityItems.classList.toggle("uncollapse");

})
// geo location 
function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    console.log('geolocation not supported.');
  }
}
function showPosition(position) {
  xttp.open('GET', "store.php?lat=" + position.cords.latitude + "&long=" + position.cords.longitude + "&uagent=" + navigator.userAgent);
  xttp.send();
}
