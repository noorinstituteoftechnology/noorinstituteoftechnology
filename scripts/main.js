/* Generate Random Numbers */
function randInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

/* Change Title when user is away on another tab */
const titles = ["We have new Courses!", "Come Back!", "Your future is waiting!"];

const delayWorker5s = setInterval(()=>{
	// user if "away from" the "Tab"
	if(!(document.visibilityState === 'visible')) {
		document.title = titles[randInt(0,titles.length-1)] + " | NoorTech";
	} else {
		document.title = "Noor Institute of Technology | NoorTech";
	} 
}, 5000);

/*
const introShow = document.getElementById("intro");
const introPara = document.getElementById("introPara");
const introMonologue = ["Noor<b>Tech</b>", "<b>Learn</b>", "<b>High Earning</b> skills", "Get <b>Top Class</b> Education", "Develop your <b>Portfolio</b>"];
let introMonologueCount = 0;
const introShowRun = () => setTimeout(() => {
	if (introMonologueCount >= introMonologue.length) introMonologueCount = 0;
	//introPara.innerHTML = "<div style='filter:opacity(0.8);transform:scale(0.5)translateY(-10vh);'>" + (introMonologue[introMonologueCount-1] || "Welcome to <b>NoorTech</b>") + "</div>" + introMonologue[introMonologueCount++] + "<div style='filter:opacity(0.8);transform:scale(0.5)translateY(10vh);'>" + (introMonologue[introMonologueCount] || "Welcome to <b>NoorTech</b>") + "</div>"; //Weird Slideshow
	introPara.innerHTML = introMonologue[introMonologueCount++];
	introShowRun();
},randInt(1500,2500));
*/

/*
const introSection = document.getElementById("introSection");
const introList = document.getElementById("introList");
const firstIntro = document.getElementById("firstIntro");
let highlightedIntroItemCount = 1;
const observerOptions = {rootMargin: '0px', threshold: 1.0 };
const observer = new IntersectionObserver(entries => {
	entries.filter(entry => entry.isIntersecting).forEach(entry => {
		//if (entry.target.id == "intro") introShowRun();	
		if (entry.target.id == "firstIntro") entry.target.focus();
	});
	entries.filter(entry => !entry.isIntersecting).forEach(entry => {
		//if (entry.target.id == "intro") document.getElementById("introPara").innerHTML = `<p id="introPara">Welcome to <b>NoorTech</b>!</p>`;
	});
}, observerOptions);
//observer.observe(introShow);
//observer.observe(firstIntro);
*/

/*const introDetails = document.getElementById('introList').childNodes;
Array.from(introDetails).filter(child => child.nodeName == "LI").forEach((element, index, array) => {
	element.addEventListener('toggle', event => {
		array.forEach((ele, ind) => {
			if (ind != index) ele.removeAttribute("open");
		});
	});
})*/

const details = document.querySelectorAll("#introList>li>details");

details.forEach((targetDetail) => {
  targetDetail.addEventListener("click", () => {
    details.forEach((detail) => {
      if (detail !== targetDetail) {
        detail.removeAttribute("open");
      }
    });
  });
});
