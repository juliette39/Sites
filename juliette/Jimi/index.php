<!DOCTYPE HTML>

<html>
	<head>
		<title>Chatbot</title>
		<meta charset="utf-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
		<link rel="stylesheet" href="assets/css/main.css" />
		<link rel="icon" type="image/png" sizes="16x16" href="./images/logo.png">
	</head>
	<body class="is-preload">

		<!-- Wrapper -->
			<div id="wrapper">

					<!-- Header -->
					<header id="header" class="alt">
						<a href="https://www.debono.fr/juliette/Chatbot/index.php"><span class="logo"><img src="./images/logo.png" height="200" width="200" alt="" /></span></a>
						<h1>Chatbot</h1>
						<p>Chatbot IA</p>
					</header>

					<!-- Nav -->
					<nav id="nav">
						<ul>
							<li><a href="#intro" class="active">Chatbot</a></li>
							<li><a href="#first">Informations</a></li>
						</ul>
					</nav>

					<?php 
					    include 'fonctions.php';
					    $message =  $_POST['message'];
					?>

					<!-- Main -->
					<div id="main">
						<!-- Introduction -->
							<section id="intro" class="main">
								<div class="spotlight">
									<div class="content">
										<header class="major">
											<h2>Chatbot</h2>
										</header>
						                <form method="post" action="https://www.debono.fr/juliette/Jimi/index.php">
						                <p>
						                  <label for="message">Send message:</label>
						                  <input type="text" name="message" id="message" placeholder="message" required autofocus/>
						                </p>

						                <input class="button" type="submit" value="Send" title="Send the message"/>

						                <?php 
						                  echo "<p id=poeme>";
						                  echo "Jimi: Ask me a question in english";
						                  if ($message != "") {
						                  	echo "<br/>";
						                  	echo "Me: " . $message;
				                  			echo "<br/>";
						                  	$answer = send_mess($message);
						                  	echo "Jimi: ";
						                  	echo $answer;
						                  }
						                  echo "</p>";
						                ?>
						                </form>
										
									</div>
									<span class="image"><img src="images/tete.png" alt="image tete" /></span>
								</div>
							</section>

							<section id="first" class="main special">
								<header class="major">
									<h2>Informations</h2>
									<p>Chatbot : parlez lui pour gérer ton agenda !</p>
								</header>
							</section>

					</div>

				<?php include 'footer.php';?>

			</div>

		<!-- Scripts -->
			<script src="assets/js/jquery.min.js"></script> <!--Logo ouverture-->
			<script src="assets/js/jquery.scrollex.min.js"></script> <!--Niveau ne reste pas en haut de la page-->
			<script src="assets/js/jquery.scrolly.min.js"></script> <!--Bouton glisse dans page-->
			<script src="assets/js/browser.min.js"></script> <!--Couleur niveau page change-->
			<script src="assets/js/breakpoints.min.js"></script> <!--Enlève tout-->
			<script src="assets/js/util.js"></script> <!--Enlève tout-->
			<script src="assets/js/main.js"></script> <!--Enlève tout-->

	</body>
</html>