<?php include 'fonctions.php'; ?>

<!DOCTYPE HTML>
<html>
    <head>
        <title>AbsINThe semaine</title>
        <?php include 'head.php'; ?>
    </head>
    <body class="is-preload">
        <div id="page-wrapper">

            <!-- Header -->
                <header id="header">
                    <?php include 'logo.php'; ?>
                    <nav id="nav">
                        <ul>
                            <li><a href="http://www.debono.fr/juliette/Absinthe/index.php">Calendrier</a></li>
                            <li><a href="http://www.debono.fr/juliette/Absinthe/redo.php">Réinitialiser</a></li>
                        </ul>
                    </nav>
                </header>

            <!-- Main -->
                <div id="main" class="wrapper style1">
                    <div class="container">
                        <header class="major">
                            <h2>AbsINThe</h2>
                            <p>Mettre à jour les tenues de la semaine</p>
                        </header>

                        <!-- Content -->
                        <section id="content">
                            <form method="post" action="http://www.debono.fr/juliette/Absinthe/nouveau_del.php">
                                <input type="text" name="data" id="data" placeholder="jour/mois/annee/nb_jour" />
                                <p></p>
                                <input class="button" type="submit" value="Réinitialiser" title="Del"/>
                            </form>
                            <form method="post" action="http://www.debono.fr/juliette/Absinthe/nouveau_add.php">
                                <input class="button" type="submit" value="Mettre à jour" title="Update"/>
                                <p></p>
                                <div class="scrollWrapper">
                                    <table>
                                    <?php
                                        tableau_semaine_a_remplir();
                                    ?>
                                    </table>
                                </div>
                                <input class="button" type="submit" value="Mettre à jour" title="Update"/>
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
