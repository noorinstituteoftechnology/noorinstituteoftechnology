var editor = ace.edit("mycode");
ace.config.set('basePath', "https://unpkg.com/ace-builds@1.4.6/src-noconflict")
editor.setTheme("ace/theme/monokai");
editor.session.setMode("ace/mode/html");

window.onload = () => {
	const code = editor.getValue();
	editor.setValue(localStorage.getItem("code") || code, -1);
	editor.session.on('change', ()=>{
		document.getElementById("mainOutput").setAttribute("srcdoc", editor.getValue());
	});
	document.getElementById("presetCode").addEventListener('change', event=>{
		editor.setValue(presets[event.target.value]);
	});
}
function toggleEditorView() {
	const codeBox = document.getElementById("codeBox");
	const lessonBox = document.getElementById("lessonBox");
	codeBox.style.display = codeBox.style.display !== "none" ? "none" : "flex"; 
	lessonBox.style.flex = codeBox.style.display === "none" ? "2" : "1"; 
}
function downloadFile() {
  	const element = document.createElement('a');
	const code = editor.getValue();
	element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(code));
  	element.setAttribute('download', 'myWebpade.html');
  	element.click();
}
function viewFile() {
	const code = editor.getValue();
	const tab = window.open();
	tab.document.write(code);
}
function saveFile() {
	const code = editor.getValue();
	localStorage.setItem("code", code);
}

