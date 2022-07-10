<!DOCTYPE HTML>

<html>
	<head>
		<title>Poème</title>
		<meta charset="utf-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
		<link rel="stylesheet" href="assets/css/main.css" />
		<link rel="icon" type="image/png" sizes="16x16" href="images/logo.png">
	</head>
	<body class="is-preload">

		<!-- Wrapper -->
			<div id="wrapper">

					<!-- Header -->
					<header id="header" class="alt">
						<a href="https://www.debono.fr/juliette/Poème/index.php"><span class="logo"><img src="images/logo.png" height="200" width="200" alt="" /></span></a>
						<h1>Poème</h1>
						<p>Générateur de poème aléatoire avec le choix des rimes et et des pieds.</p>
					</header>

					<!-- Nav -->
					<nav id="nav">
						<ul>
							<li><a href="#intro" class="active">Générateur</a></li>
							<li><a href="#first">Informations</a></li>
							<li><a href="#cta">Application</a></li>
						</ul>
					</nav>

					<?php 
					    include 'fonctions.php';
					    $forme =  $_POST['forme'];
		          		$syllabes =  $_POST['syllabes'];
		          		$phonetique =  $_POST['phonetique'];
					?>

					<!-- Main -->
					<div id="main">
						<!-- Introduction -->
							<section id="intro" class="main">
								<div class="spotlight">
									<div class="content">
										<header class="major">
											<h2>Générateur</h2>
										</header>
										<a href="https://www.debono.fr/juliette/Poème/aide.php" target="_blank">Aide phonétique</a>
						                <form method="post" action="https://www.debono.fr/juliette/Poème/index.php#poeme">
						                <p>
						                  <label for="forme">Forme (ABBA ABAB …) : </label>
						                  <input type="text" name="forme" id="forme" placeholder="forme du poème" 
						                  value="<?php echo $forme; ?>" required autofocus/>
						                </p>

						                <p>
						                    <label for="syllabes">Syllabes (1=12, 4=8) : </label>
						                    <input type="text" name="syllabes" id="syllabes" placeholder="nombre de syllabes" 
						                    value="<?php echo $syllabes; ?>" />
						                </p>

						                <p>
						                    <label for="phonetique">Phonétique (A=t@t, B=se …) : </label>
						                    <input type="text" name="phonetique" id="phonetique" placeholder="phonetique" 
						                    value="<?php echo $phonetique; ?>" />
						                </p>

						                <input class="button" type="submit" value="Générer" title="Générer le poème"/>

						                <?php 
						                  if ($forme != "" && $forme != "syllabes") {
						                    $poeme = traiter_valeur($forme, $syllabes, $phonetique);
						                  }
						                  else {
						                    $poeme = "Veuiller entrer des valeurs";
						                  }
						                  echo "<p id=poeme>";
						                  echo "<br />";
						                  echo $poeme;
						                  echo "<br />";
											echo $_SERVER['SERVER_ADDR'];
											echo ":";
											echo $_SERVER['SERVER_PORT'];
						                  echo "</p>";
						                ?>
						                </form>
										
									</div>
									<span class="image"><img src="images/plume.png" alt="image plume" /></span>
								</div>
							</section>

							<section id="first" class="main special">
								<header class="major">
									<h2>Informations</h2>
									<p>Attention : Le temps pour générer un poème pouvant être assez long, ne rechargez pas la page avant la fin du chargement.</p>
									<p>Utilisation du générateur de poème :<br/>Pour générer le poème, il faut donner sa forme (un sonnet est ABBA CDDC EEF GGF), vous pouver aussi donner les pieds de chaque vers (par défaut 12 pieds), et imposer des rimes spéciales (vous pouvez accéder à l'ensemble des rimes possible vers la page <a href="https://www.debono.fr/juliette/Poème/aide.php" target="_blank">Aide phonétique</a>).<br/>Veuillez bien respecter la mise en forme.</p>
								</header>
							</section>

						<!-- Get Started -->
							<section id="cta" class="main special">
								<header class="major">
									<h2>Application</h2>
									<p>Vous souhaitez utiliser Poème hors ligne ? C'est possible avec l'application pour ordinateurs !</p>
								</header>
								<footer class="major">
									<ul class="actions special">
										<li><a href="https://www.debono.fr/juliette/Poème/app.php" class="button primary" title="Page application">Application</a></li>
									</ul>
								</footer>
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