<?php

include "hola.php";

if (!isset($_POST['mdp'])) {
    $mess = "Il n'y a pas de mot de passe donné";
}
else {

    $mdp = $_POST['mdp'];
    if ($mdp != $hola) {
        $mess = "Mot de passe faux";
    }
    else {
        //$page = "redo";
        $mdp = "";
        $mess = "";
        header('Location: http://www.debono.fr/juliette/Absinthe/nouveau.php');
    }
}
?>

<!DOCTYPE HTML>
<html>
    <head>
        <title>AbsINThe accès page</title>
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
                        </ul>
                    </nav>
                </header>

            <!-- Main -->
                <div id="main" class="wrapper style1">
                    <div class="container">
                        <header class="major">
                            <h2>AbsINThe</h2>
                            <p>Accéder à la page administrateur</p>
                        </header>

                        <!-- Content -->
                        <section id="content">
                            <p><?php echo $mess; ?></p>
                            <form method="post" action="http://www.debono.fr/juliette/Absinthe/acces2.php">
                                <input type="text" name="mdp" id="mdp" placeholder="mot de passe" required/>
                                <br/>
                                <input class="button" type="submit" value="Accéder" title="Accéder"/>
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
