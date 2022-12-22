window.onload = () => {
	if (localStorage.getItem("darkMode") === "true") document.getElementById("darkMode").click();
}

function toggle(id, imgSRCOn, imgSRCOff) {
	const imgEle = document.querySelector(id+">img");
	if (imgEle.getAttribute("src") === imgSRCOff) {
		imgEle.setAttribute("src", imgSRCOn);
		darkModeOn(true);
	} else {
		imgEle.setAttribute("src", imgSRCOff);
		darkModeOn(false);
	}
}

function darkModeOn(bool) {
	/* Save Selection */
	localStorage.setItem("darkMode", bool);
	/* Show/Hide Dark Mode */
	[{query:"main", darkClasses:["darken", "invert"]},
	 {query:"#bannarImage", darkClasses:["invert"]},
	 {query:"#topNav", darkClasses:["invert"]},
	 {query:"#topNav>*>span>.big", darkClasses:["invert"]},
	 {query:"#headerStudentCorner>.big", darkClasses:["invert"]},
	 {query:".cards", darkClasses:["invert"]},
	 {query:"header", darkClasses:["invert"]},
	 {query:"#logo", darkClasses:["invert"]},
	 {query:"#contactUs", darkClasses:["invert", "contactUs-dark-bg"]},
	 {query:"footer", darkClasses:["darkmode-footer"]}]
	.forEach(item => {
		(item.darkClasses || []).forEach(darkClass => {
			Array.from(document.body.querySelectorAll(item.query)).forEach(element => {element.classList[bool?"add":"remove"](darkClass)});
		});
	});
}

/*
const typeAnime = document.getElementById("typeAnime");
const typeAnimeArr = [
	"Full-Stack Enigneering",
	"Business & Marketing",
	"Web Design",
	"Finance",
	"Freelancing",
	"SEO",
	"Digital Marketing"
].map(item => {
	let response = [item.split("").map((x, i) => {
		const str = item.split("").splice(0,i+1).join("");
		return [str, str+"|"];
	}).flat(), ...(Array(10).fill([item+"&nbsp;", item+"|"]).flat())].flat();
	return [response.reverse(), response].flat();
}).flat();
console.log(typeAnimeArr);

let typeAnimeLoopCount = 0;

setInterval(()=>{
	document.getElementById("typeAnime").innerHTML = typeAnimeArr[typeAnimeLoopCount++]; 
	typeAnimeLoopCount = typeAnimeLoopCount >= typeAnimeArr.length ? 0 : typeAnimeLoopCount;
},200);
*/
