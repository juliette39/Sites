<!DOCTYPE HTML>

<html>
    <head>
        <title>Poème - Aide</title>
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
                            <li><a href="https://www.debono.fr/juliette/Poème/index.php" class="active">Générateur</a></li>
                        </ul>
                    </nav>

                <!-- Main -->
                    <div id="main">                         
                        <section id="intro" class="main">
                            <div class="spotlight">
                                <div class="content">
                                    <p>
                                        <?php
                                            include 'fonctions.php';
                                            syllabes_aide($bdd);
                                        ?>
                                     </p>

                                </div>

                            </div>
                        </section>
                    </div>

                <?php include 'footer.php';?>

            </div>
        <!-- Scripts -->
            <script src="assets/js/jquery.min.js"></script>
            <script src="assets/js/jquery.scrollex.min.js"></script>
            <script src="assets/js/jquery.scrolly.min.js"></script>
            <script src="assets/js/browser.min.js"></script>
            <script src="assets/js/breakpoints.min.js"></script>
            <script src="assets/js/util.js"></script>
            <script src="assets/js/main.js"></script>
    </body>
</html>