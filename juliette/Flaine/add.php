<?php 
	$possesseurs = array("Tous", "Maman", "Adèle", "Juliette");

	if ( !isset($_GET['personne']) || empty($_GET['personne']) ||  !in_array($_GET['personne'], $possesseurs) )
	{
		$personne = "Tous";
	}
	else {
		$personne = $_GET['personne'];
	}
	
    include 'fonctions.php';

    if ( !isset($_POST['objet']) || empty($_POST['objet']) )
	{
		echo "erreur";
		return;
	}

	$objet = str_replace("'", "\'", $_POST['objet']);;

	insert($objet, $personne);

?>

<!DOCTYPE HTML>

<html>
	<head>
		<title>Flaine</title>
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
						<a href="https://www.debono.fr/juliette/Flaine/index.php"><span class="logo"><img src="./images/logo.png" height="200" width="200" alt="" /></span></a>
						<h1>Flaine</h1>
						<p>Les affaires de <?php echo htmlspecialchars($personne); ?> à Flaine</p>
					</header>

					<!-- Nav -->
					<nav id="nav">
						<ul>
							<li><a href="https://www.debono.fr/juliette/Flaine/index.php?personne=Tous#intro" class="active">Tous</a></li>
							<li><a href="https://www.debono.fr/juliette/Flaine/index.php?personne=Maman#intro" class="active">Maman</a></li>
							<li><a href="https://www.debono.fr/juliette/Flaine/index.php?personne=Adèle#intro" class="active">Adèle</a></li>
							<li><a href="https://www.debono.fr/juliette/Flaine/index.php?personne=Juliette#intro" class="active">Juliette</a></li>
						</ul>
					</nav>



					<!-- Main -->
					<div id="main">
						<!-- Introduction -->
							<section id="intro" class="main">
								<div class="spotlight">
									<div class="content">
										<header class="major">
											<h2><?php echo htmlspecialchars($personne); ?></h2>
										</header>
						                <form method="post" action="<?php echo "https://www.debono.fr/juliette/Flaine/add.php?personne=$personne";?>#intro">
							                <table>
							                	<tr>
											        <th>Ajouter un objet</th>
											        <th></th>
											    </tr>
											    <tr>
											        <td><input type="text" name="objet" placeholder="objet à ajouter"/></td>
											        <td><input class="button" type="submit" value="Ajouter" title="Add"/></td>
											    </tr>
										    </table>
										</form>

										<form method="post" action="<?php echo "https://www.debono.fr/juliette/Flaine/del.php?personne=$personne";?>#intro">

										    <?php
										    try {
							                	tout_objets($personne);
							                	}
							                catch (Exception $e)
												{
												  die('Erreur : ' . $e->getMessage());
												}

							            	?>

							            	<input class="button" type="submit" value="Supprimer" title="Del"/>

						                </form>
									</div>
								</div>
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