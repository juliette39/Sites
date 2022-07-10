<?php

//include 'fonctions.php';

//$mess = "Veuillez entrer des arguments";

?>

<!DOCTYPE HTML>
<html>
    <head>
        <title>AbsINThe réinitialiser</title>
        <?php include 'head.php'; ?>
        <script>
            function alert() {
                alert("La table à été mise à jour");
            }
        </script>
    </head>
    <body class="is-preload">
        <div id="page-wrapper">

            <!-- Header -->
                <header id="header">
                    <?php include 'logo.php'; ?>          
                    <nav id="nav">
                        <ul>
                            <li><a href="http://www.debono.fr/juliette/Absinthe/index.php">Calendrier</a></li>
                            <li><a href="http://www.debono.fr/juliette/Absinthe/nouveau.php">Semaine</a></li>
                        </ul>
                    </nav>
                </header>

            <!-- Main -->
                <div id="main" class="wrapper style1">
                    <div class="container">
                        <header class="major">
                            <h2>AbsINThe</h2>
                            <p>Mettre la table à zéro</p>
                        </header>

                        <!-- Content -->
                        <section id="content">
                            <p><?php //echo $mess; ?></p>
                            <form method="post" action="http://www.debono.fr/juliette/Absinthe/redo_del.php">
                                <input type="text" name="data" id="data" placeholder="jour/mois/année/nombre de jours"/>
                                <br/>
                                <input class="button" type="submit" onclick="alert();" value="Mettre à jour" title="Update"/>
                            </form>
                        </section>

                    </div>
                </div>

            <!-- Footer -->
            <?php include 'footer.php'; ?>

        </div>

        <!-- Scripts -->
        <?php include 'script.php'; ?>

    </body>
</html>
