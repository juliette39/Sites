<!DOCTYPE HTML>

<html>
	<head>
		<title>TheCode</title>
		<meta charset="utf-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
		<link rel="stylesheet" href="assets/css/main.css" />
		<link rel="icon" type="image/png" sizes="16x16" href="images/logo.svg">
	</head>
	<body class="is-preload">

		<!-- Wrapper -->
			<div id="wrapper">

				<!-- Header -->
					<header id="header" class="alt">
						<a href="index.php"><span class="logo"><img src="images/logo.svg" height="200" width="200" alt="" /></span></a>
						<h1>TheCode</h1>
						<p>Générateur de mots de passe sécurisés dont vous n'avez pas à vous souvenir !</p>
					</header>

				<!-- Nav -->
					<nav id="nav">
						<ul>
							<li><a href="#intro" class="active">Générateur</a></li>
							<li><a href="#first">Exemple</a></li>
							<li><a href="#second">Informations</a></li>
							<li><a href="#cta">Application</a></li>
						</ul>
					</nav>

<?php 

    include 'fonctions.php';

    $clef =  $_POST['clef'];
    $site =  $_POST['site'];
    $long = (int) $_POST['longueur'];

    if ($long == 15) {$long = 14;}

    if ($_POST['minuscules'] == "on") 
      {$min = 1;} 
    else
      {$min = 0;}
    if ($_POST['majuscules'] == "on")
      {$maj = 1;} 
    else 
      {$maj = 0;}
    if ($_POST['symboles'] == "on")
      {$sym = 1;} 
    else 
      {$sym = 0;}
    if ($_POST['chiffres'] == "on")
      {$chi = 1;} 
    else
      {$chi = 0;}

    if ($long == 0)
      {
        $long = 20;
        $min = 1;
        $maj = 1;
        $chi = 1;
        $sym = 1;
      }
    
    list($mdp, $securite, $couleur, $bits) = modifie($long, $site, $clef, $min, $maj, $sym, $chi);
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
										<form method="post" action="index.php">
										    <fieldset>
										        <h3>Données</h3>

										        <p>
										        	<label for="clef">Clef :</label>
										        	<input type="text" name="clef" id="clef" placeholder="clef" 
										        	value="<?php echo $clef; ?>" required autofocus/>
										        </p>

										        <p>
										          	<label for="site">Site :</label>
										          	<input type="text" name="site" id="site" placeholder="nom du site" 
										          	value="<?php echo $site; ?>" required />
										        </p>
										      </fieldset>

										      <p></p>
										       
										    <fieldset>
										        <h3>Paramètres du mot de passe</h3>

										        <p>
										          	<label for="longueur">Longueur :</label>
										          	<input type="range" name="longueur" id="longueur" min="10" step="5" max="20" 
										          	value="<?php echo $long?>" list="tickmarks"/>

										          	<datalist id="tickmarks">
										            	<option value="10" label="10%">
										            	<option value="15" label="14%">
										            	<option value="20" label="20%">
										          	</datalist>

										        </p>

										        <p>
										          	Caractères :<br />
										          	<input type="checkbox" name="minuscules" id="minuscules" 
										          	<?php if ($min == 1) {echo "checked";}?>/> <label for="minuscules">Minuscules</label><br />
										          	<input type="checkbox" name="majuscules" id="majuscules" 
										          	<?php if ($maj == 1) {echo "checked";}?>/> <label for="majuscules">Majuscules</label><br />
										          	<input type="checkbox" name="symboles" id="symboles" 
										          	<?php if ($sym == 1) {echo "checked";}?> /> <label for="symboles">Symboles</label><br />
										          	<input type="checkbox" name="chiffres" id="chiffres" 
										          	<?php if ($chi == 1) {echo "checked";}?> /> <label for="chiffres">Chiffres</label>
										        </p>
										    </fieldset>

										    <p></p>

										    <input class="button" type="submit" value="Générer" title="Générer le mot de passe"/>

										    <p></p>

										    <fieldset>
										        <h3>Mot de passe</h3>

										        <p>
										          	<label for="mdp">Le mot de passe est :</label>
										          	<input type="text" name="mdp" id="mdp" placeholder="Données invalides" 
										          value = "<?php echo $mdp?>" readonly/>
										        </p>

										        <p>
										          	Sécurité : <span style="color:<?php echo $couleur;?>"> <?php echo $securite;?> </span>
										        </p>

										        <input type="range" name="secutite" id="securite" min="32" max="126" step="1" value = "<?php echo ((int) $bits)?>"/>

										    </fieldset>
										</form>
										
									</div>
									<span class="image"><img src="images/chaines.svg" alt="image chaines" /></span>
								</div>
							</section>

						<!-- First Section -->
							<section id="first" class="main special">
								<header class="major">
									<h2>Exemple</h2>
								</header>
								<ul class="features">
									<li>
										<span class="img_rond_ext"><span class="img_rond_int"><img src="images/bouclier.svg" alt=" image bouclier" /></span></span>
										<p></p>
										<h3>Créez votre mot de passe</h3>
										<p>Vous désirez changer le mot de passe de votre compte Google. Vous devez choisir entre une clef à se souvenir, puis entrer <em>google</em> dans <strong>nom du site</strong>, les caractères souhaités, la longueur du mot de passe, et le code sera généré.</p>
									</li>
									<li>
										<span class="img_rond_ext"><span class="img_rond_int"><img src="images/head.svg" alt="image tête" /></span></span>
										<p></p>
										<h3>Retrouvez le mot de passe</h3>
										<p>Pour le retrouver, vous n’avez qu’à reprendre l’application, toujours mettre <em>google</em> dans <strong>nom du site</strong>, les mêmes informations, et vous obtiendrez le même mot de passe.</p>
									</li>
									<li>
										<span class="img_rond_ext"><span class="img_rond_int"><img src="images/connexions.svg" alt="image connexions" /></span></span>
										<p></p>
										<h3>Utilisez-le sur tous vos comptes !</h3>
										<p>Maintenant, il ne vous reste plus qu'à utiliser ce générateur pour tous vos comptes !</p>
									</li>
								</ul>
							</section>

						<!-- Second Section -->
							<section id="second" class="main special">
								<header class="major">
									<h2>Informations</h2>
									<p>Attention, pour ne pas confondre les O et les zéros, il n'y a jamais de zéro dans les mots de passe générés.<br /><br />La sécurité des mots de passe en bits donne une idée de la force d'un mot de passe. Une sécurité supérieure à 80 est déjà bien pour une utilisation classique.</p>
								</header>
							
								<footer class="major">
									<ul class="actions special">
										<li><a href="https://www.ssi.gouv.fr/administration/precautions-elementaires/calculer-la-force-dun-mot-de-passe/" title="Site gouvernement ANSSI"class="button">En savoir plus</a></li>
									</ul>
								</footer>
							</section>

						<!-- Get Started -->
							<section id="cta" class="main special">
								<header class="major">
									<h2>Application</h2>
									<p>Vous souhaitez utiliser TheCode hors ligne ? C'est possible avec les applications pour ordinateurs ou mobiles !</p>
								</header>
								<footer class="major">
									<ul class="actions special">
										<li><a href="app.php" class="button primary" title="Page application">Application</a></li>
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
				