/*window.addEventListener('load', (event) => {
  localStorage.removeItem("userName");
  localStorage.removeItem("studentId");
  localStorage.removeItem("courseKey");
  localStorage.removeItem("courseName");
});*/

const studentId = document.getElementById("studentID");
//const password = document.getElementById("password");
const courseKey = document.getElementById("courseKey");
const mainSection = document.getElementsByName("descpSec");
const imageSection = document.getElementById("imageSec");
const titleSection = document.getElementById("titleSec");
const title = document.getElementById("titleData");
const courseNameDropDown = document.getElementById("courseName");
const courseInfo = document.getElementById("courseInfo"); 
const logOutButton = document.getElementById("logOut");
const logInButton = document.getElementById("login");
//const courseButtons = document.querySelectors("#courseInfo");

document.getElementById("linkList").addEventListener('click', () => {
	document.getElementById("descpSec").innerHTML = `
		<a href="https://codepen.io/" target="_blank" style="margin:10px;" id="codepen">CodePen</a><br><label for="codepen">Front-End Tool</label><br>
		<a href="https://developer.mozilla.org/en-US/" target="_blank" style="margin:10px;" id="codepen">Mozilla Developer Network Web Docs</a><br><label for="codepen">The best Documentation on Internet</label><br>
	`;
});

logOutButton.addEventListener("click", () => {
  //localStorage.removeItem("password");
  localStorage.removeItem("studentId");
  localStorage.removeItem("courseKey");
  localStorage.removeItem("courseName");
  window.location.reload();
});

logInButton.addEventListener('click', ()=>{
	//localStorage.setItem("password", password.value);
	localStorage.setItem("studentId", studentId.value);
	localStorage.setItem("courseKey", courseKey.value);
	localStorage.setItem("courseName", courseNameDropDown.value);
	renderUserProfile();
});

/* Render Profile is local storage already has form Info */

function renderUserProfile() {
	const studentId = localStorage.getItem("studentId");
	//const password = localStorage.getItem("password");
	const courseKey = localStorage.getItem("courseKey");
	const courseName = localStorage.getItem("courseName");
	title.innerHTML = courseName; 
	courseNameDropDown.remove();

	document.getElementById("descpSec").innerHTML = (courseList[courseName] || {courseInfo: "Course Coming Soon!"}).courseInfo;
	document.getElementById("descpSec").className = "lesson";

	document.getElementById("contactInstitute").innerHTML = "<button id='goBack'><img src='../assets/list-alt.svg'/></button>";
	document.getElementById("goBack").addEventListener('click', event => {
		// back button not working
		document.getElementById("descpSec").innerHTML = (courseList[courseName] || {courseInfo: "Course Coming Soon!"}).courseInfo;
		document.getElementById("descpSec").className = "";
		addContentToButtons(courseName, courseKey);	
	});




	/* Do encrypted Auth Here, only with passkey can do it */
	/* If the user has passkey for the course they can watch its elements, otherwise it throwas an error*/
	//courseInfo.style.visibility = "visible";
	//courseInfo.style.position = "static";
	//document.getElementById("mainDes").style.visibility = "hidden";
	//document.getElementById("mainDes").style.position = "absolute";
	//document.getElementById("loginForm").style.visibility = "hidden";
	//document.getElementById("loginForm").style.position = "absolute";
	
	addContentToButtons(courseName, courseKey);	
}

const decryptData = (data, key) => CryptoJS.AES.decrypt(data, key).toString(CryptoJS.enc.Utf8);
function addContentToButtons(courseName, courseKey) {
	document.querySelectorAll("#descpSec>ul>li>button").forEach(button => {
		button.addEventListener("click", event => {
			const lessonName = event.target.innerHTML.split(" #").join("").toLowerCase();
			if (!(lessonName.includes("quiz"))) document.getElementById("descpSec").innerHTML =  decryptData(courseList[courseName][lessonName], courseKey);
			else document.getElementById("descpSec").innerHTML =  courseList[courseName][lessonName];
		});
	});
}



/* Encryption Stuff */
//const encryptData = (data, key) => CryptoJS.AES.encrypt(data, key);
//const decryptData = (data, key) => CryptoJS.AES.decrypt(data, key).toString(CryptoJS.enc.Utf8);

