<?php
include 'fonctions.php';
update();
?>

<!DOCTYPE HTML>
<html>
	<head>
		<title>AbsINThe calendrier</title>
		<?php include 'head.php'; ?>
	</head>
	<body class="is-preload">
		<div id="page-wrapper">

			<!-- Header -->
				<header id="header">
					<?php include 'logo.php'; ?>
					<nav id="nav">
                        <ul>
                            
                            <li>
								<a href="#">Privé</a>
								<ul>
									<li><a href="http://www.debono.fr/juliette/Absinthe/acces1.php">Réinitialiser</a></li>
                    				<li><a href="http://www.debono.fr/juliette/Absinthe/acces2.php">Semaine</a></li>
								</ul>
							</li>
                        </ul>
                    </nav>
				</header>

			<!-- Main -->
				<div id="main" class="wrapper style1">
					<div class="container">
						<header class="major">
							<h2>AbsINThe</h2>
							<p>Calendrier de la semaine</p>
						</header>

						<!-- Content -->
						<section id="content1">
							<p></p>
							<div class="scrollWrapper">
								<table>
						        <?php
							        semaine();
								?>
								</table>
							</div>
						</section>

						<header class="major">
							<h2>&nbsp;</h2>
							<p>Disponbilités des membres</p>
						</header>

						<!-- Content -->
						<section id="content2">
							<p>Attention à bien enregistrer les modifications</p>
							<form method="post" action="http://www.debono.fr/juliette/Absinthe/index.php">
								<input class="button" type="submit" value="Enregistrer" title="Update"/>
								<p></p>
								<div class="scrollWrapper">
									<table>
							        <?php
								        affiche();
									?>
									</table>
								</div>
								<input class="button" type="submit" value="Enregistrer" title="Update"/>
        					</form>
						</section>

					</div>
				</div>

			<!-- Footer -->
			<?php include 'footer.php'; ?>

		</div>

		<!-- Scripts -->
			<script src="assets/js/jquery.min.js"></script>
			<script src="assets/js/jquery.scrolly.min.js"></script>
			<script src="assets/js/jquery.dropotron.min.js"></script>
			<script src="assets/js/jquery.scrollex.min.js"></script>
			<script src="assets/js/browser.min.js"></script>
			<script src="assets/js/breakpoints.min.js"></script>
			<script src="assets/js/util.js"></script>
			<script src="assets/js/main.js"></script>

	</body>
</html>