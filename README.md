# FronEnd-Training
Repository with web exercises.

# Get window total scroll pixels:

window.addEventListener('resize', function(){
   if(window.devicePixelRatio <= 1){
      console.log(document.documentElement.scrollHeight)
   }
   else{
      console.log(document.documentElement.scrollHeight * window.screen.height / window.innerHeight)
   }
})
