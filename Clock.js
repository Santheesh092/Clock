<!DOCTYPE html>

<html>

<head>

    <meta http-equiv="X-UA-Compatible" content="IE=edge">

	<meta name="viewport" content="width=device-width, initial-scale=1">	<title>Working Clock</title>

    <link rel="stylesheet" type="text/css" href="Clock.css">

</head>

<body>

   <h1>Digital</h1>

       <div id="showTimeHere" class="clock_outlook"></div>

   <h1>Clock</h1>

      <marquee>

        <img src="images/slide.jpg"><img src="images/slide1.jpg">

        <img src="images/slide2.jpg"><img src="images/slide3.jpg">

        <img src="images/slide5.jpg"><img src="images/slide6.jpg">

        <img src="images/slide4.jpg"><img src="images/slide7.jpg">

      </marquee>

 <script type="text/javascript">

	  function clockEngine(){

		 var currentTime = new Date();

		 var meridium = "AM";

		 var h = currentTime.getHours();

		 var m = currentTime.getMinutes();

		 var s = currentTime.getSeconds();

		if (h==0){

			h = 12;

 		}

		else if(h > 12){

			h = h - 12;

			meridium = "PM";

		}

		if (h < 10){

			h= "0" + h;

		}

		if(m < 10){

			m = "0" + m;

		}

		if(s < 10){

			s = "0" + s;

		}

		var digClock = document.getElementById('showTimeHere');

        digClock.innerText = h + ":" + m + ":" + s + ":" + " " + meridium;

        setTimeout('clockEngine()', 1000);

    }

	clockEngine();

</script>

<P id="footer">Powered By Tony Cletus</P>

</body>

</html>
