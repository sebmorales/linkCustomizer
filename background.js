<html>

<head>
	<meta charset="UTF-8">
	<title>Cuba Link</title>
	<script src="https://s3-us-west-2.amazonaws.com/p5js/CubaLink/libraries/p5.min.js" type="text/javascript"></script>
	<script language="javascript" type="text/javascript" src="https://s3-us-west-2.amazonaws.com/p5js/CubaLink/libraries/p5.dom.js"></script>
	<script src="https://s3-us-west-2.amazonaws.com/p5js/CubaLink/libraries/p5.dom.js" type="text/javascript" ></script>
	<!--script src="https://s3-us-west-2.amazonaws.com/p5js/CubaLink/sketch.js" type="text/javascript"></script-->
	<!--script src="/background.js" type="text/javascript"></script-->
	<script src="/sketch.js" type="text/javascript"></script>

	<style>
		#grad1 {
			z-index: -2;
			position: absolute;
			height: 100%;
			width: 100%;
			background: red;
			/* For browsers that do not support gradients */
			background: -webkit-linear-gradient( rgba(200, 200, 200, 0), rgba(170, 170, 170, 1));
			/*Safari 5.1-6*/
			background: -o-linear-gradient( rgba(200, 200, 200, 0), rgba(170, 170, 170, 1));
			/*Opera 11.1-12*/
			background: -moz-linear-gradient( rgba(190, 190, 190, 0), rgba(170, 170, 170, 1));
			/*Fx 3.6-15*/
			background: linear-gradient( rgba(190, 190, 190, 0), rgba(170, 170, 170, 1));
		}
		
		#grad2 {
			z-index: -1;
			position: absolute;
			height: 100%;
			width: 250px;
			background: linear-gradient( rgba(180, 180, 180, 1), rgba(120, 120, 120, 1));
			/*Standard*/
		}
		
		body {
			z-index=3;
			padding: 0;
			margin: 0;
		}
		
		canvas {
			z-index: 3;
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
		}
	</style>
</head>

<body>

	<div id="grad2" ></div>
	<div id="grad1"></div>

</body>

</html>