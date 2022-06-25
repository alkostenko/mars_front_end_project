const tabs=document.querySelectorAll(".tabs li");
const contents=document.querySelectorAll(".tab-content")

tabs.forEach((tab, index)=>{
    tab.addEventListener("click", ()=>{
       tabs.forEach(tab=>tab.classList.remove("checked"));
       tab.classList.add("checked");

       contents.forEach(content=>content.classList.remove("checked"))
       contents[index].classList.add("checked");
    })
})


var videos = document.querySelectorAll('video');
for(var i=0; i<videos.length; i++)
   videos[i].addEventListener('play', function(){pauseAll(this)}, true);


function pauseAll(elem){
	for(var i=0; i<videos.length; i++){
		if(videos[i] == elem) continue;
		if(videos[i].played.length > 0 && !videos[i].paused){
		  videos[i].pause();
		}
	}
  }