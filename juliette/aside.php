<?php 
date_default_timezone_set('Europe/Paris');
function age($annee, $date) { 
    $age = date('Y') - $annee;
    if (date('md') < date('md', strtotime($annee . $date))) { 
        return $age - 1; 
    }
    return $age; 
}
?>

<aside>
    <div id="ligne_titre">
        <h2>Juliette Debono &nbsp;</h2>
        <a href="https://www.linkedin.com/in/juliette-debono" class="linkedin" target="_blank"><img src="https://www.debono.fr/juliette/images/logo_linkedin.png" alt="logo linkedin" height="40" width="40" /></a>
    </div>

    <a href="https://www.debono.fr/juliette/images/photo.png"><img src="https://www.debono.fr/juliette/images/photo_med.jpg" alt="Ma Photo" height="200" width="200" id="ma_photo" /></a>
        <?php
            $date = age('2002', '-07-31');
            echo "<p>Étudiante en école d'ingénieur<br />".$date." ans | Permis B | PSC1</p>";
        ?>
    <nav>
        <ul>
            <li><a href="https://www.debono.fr/juliette">Accueil</a></li>
            <li><a href="https://www.debono.fr/juliette/CV/">CV</a></li>
            <li><a href="https://www.debono.fr/juliette/Projets">Projets</a></li>
            <li><a href="https://www.debono.fr/juliette/Contact">Contact</a></li>
        </ul>
    </nav>
</aside>