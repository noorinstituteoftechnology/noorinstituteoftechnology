const code = document.getElementById("code");
const codeBox = document.getElementById("codeBox");
const runCode = document.getElementById("runCode");
runCode.addEventListener('click', event => {
	document.body.innerHTML = code.innerText;
});


/*
const code = document.getElementById("code");
const keyCodes = {
	"&lt;": "<",
	"&gt;": ">",
}
Array.from(document.querySelectorAll("#keyboardNav>button")).forEach(button => {
	button.addEventListener('click', event => {
		const unParsedkey = event.target.innerHTML;
		const key = Object.keys(keyCodes).includes(unParsedkey)?keyCodes[unParsedkey]:unParsedkey;
		const selection = window.getSelection();
		const cursorPosition = selection.anchorOffset;
		console.log(key);
		code.innerHTML = code.innerHTML.slice(0,cursorPosition) + key + code.innerHTML.slice(cursorPosition,code.length);
		code.focus();

		let range = document.createRange();
		range.setStart(code.firstChild, cursorPosition);
		range.setEnd(code.firstChild, cursorPosition);
		selection.removeAllRanges();
		selection.addRange(range);

		//console.log(window.getSelection().anchorOffset);
		//console.log(window.getSelection().anchorOffset);
	});
	//console.log(button);
});
*/


/*document.getElementById("active").addEventListener('click', event => {
	event.target.className = "unactive";
});*/

/*
Array.from(document.getElementsByClassName("active")).forEach(activeElement => {
	activeElement.addEventListener('click', event => {
		event.currentTarget.className = "unactive";
	});
});
Array.from(document.getElementsByClassName("unactive")).forEach(activeElement => {
	activeElement.addEventListener('click', event => {
		event.currentTarget.className = "active";
	});
});
*/

/*
toggleClass("active","unactive");
toggleClass("unactive","active");

function toggleClass(classA, classB, callback) {
	Array.from(document.getElementsByClassName(classA)).forEach(activeElement => {
		activeElement.addEventListener('click', event => {
			event.currentTarget.className = classB;
		});
	});
}
*/

/*
document.uerySelectorAll("main>article>.active").forEach(activeElement => {
	activeElement.addEventListener('click', event => {
		event.target.className = "unactive";
	});
})
*/
