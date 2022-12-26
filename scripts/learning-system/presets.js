const presets = {
	"default": `<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta content="width=device-width, initial-scale=1" name="viewport" />
	<title></title>
	<style></style>
</head>
<body>
	
<script></script>
</body>
</html>`,
	"basicLayout":`<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta content="width=device-width, initial-scale=1" name="viewport" />
	<title></title>
	<style>
	    body {
	        margin:0px;
	    }
	    header {
	        position:fixed;
	        top:0px;
	        left:0px;
	        background-color:#5959ff;
	        padding:20px;
	        color:white;
	        font-size:16pt;
	        font-weight:bold;
	        width:100vw;
	        z-index:100;
	    }
	    
	    nav {
	        position:fixed;
	        top:0px;
	        right:0px;
	        background-color:#292959;
	        width:30vw;
	        height:100vh;
	        z-index:99;
	    }
	    
	    main {
	        background-color:#dfdfdf;
	        min-height:90vh;
	        width:100vw;
	    }
	    
	    footer {
	        background-color:#191919;
	        min-height:20vh;
	        width:100vw;
	    }
	</style>
</head>
<body>
	<header>My Website</header>
	<main></main>
	<nav></nav>
	<footer></footer>
</body>
<script></script>
</html>`,
	"cssTransition": `<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta content="width=device-width, initial-scale=1" name="viewport" />
	<title></title>
	<style>
	    #box1 {
	        width:100px;
	        height:100px;
	        color:white;
	        border-radius:10px;
	        padding:20px;
	        background-color:red;
	        transition:background-color 1s;
	    }
	    
	    body:hover > #box1 {
	        background-color:blue;
	    }
	</style>
</head>
<body>
	<div id="box1">box</div>
<script></script>
</body>
</html>`,
}

