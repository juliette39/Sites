<?php

// Connexion base de données
try
{
  $PARAM_hote='debonobdd.mysql.db';
  $PARAM_nom_bd='debonobdd';
  $PARAM_utilisateur='debonobdd';
  $PARAM_mot_passe='Juliette1';
  $bdd = new PDO('mysql:host=' . $PARAM_hote . ';dbname=' . $PARAM_nom_bd . ';charset=utf8', $PARAM_utilisateur, $PARAM_mot_passe);
}
catch (Exception $e)
{
  die('Erreur : ' . $e->getMessage());
}

function les_dates($jour, $mois, $annee, $nb_jours) {
    // [del_semaine() | redo_table()]
    // Donne les dates avec noms des jours pour la durée indiquée
    $week_name = array("Sunday" => "Dimanche", "Monday" => "Lundi", "Tuesday" => "Mardi", "Wednesday" => "Mercredi", "Thursday" => "Jeudi", "Friday" => "Vendredi", "Saturday" => "Samedi");
    $month_name= array("","Janvier","Février","Mars","Avril","Mai","Juin","Juillet","Août", "Septembre","Octobre","Novembre","Décembre");

    setlocale (LC_TIME, 'fr_FR.utf8','fra'); 
    $nom_jour = array();

    for ($i = 0; $i < $nb_jours; $i++){
        $day = mktime(0, 0, 0, $mois  , $jour+$i, $annee);
        $nom_jour[] = $week_name[date('l', $day)] . date(' d ', $day) . $month_name[(int) date('m', $day)];
    }
    
    return $nom_jour;
}

function bon_select($i, $personne, $key){
    // [affiche()]
    // renvoie les select selon les disponibilités indiquées dans la base de données
    switch ($i) {
    case "-1":
        return "<select name=\"$personne $key\">
            <option value=\"Vide\" selected>Vide</option>
            <option value=\"Oui\">Oui</option>
            <option value=\"Si\">Si besoin</option>
            <option value=\"Non\">Non</option>
        </select>";
    case "0":
        return "<select name=\"$personne $key\">
            <option value=\"Vide\">Vide</option>
            <option value=\"Oui\">Oui</option>
            <option value=\"Si\">Si besoin</option>
            <option value=\"Non\" selected>Non</option>
        </select>";
    case "1":
        return "<select name=\"$personne $key\">
            <option value=\"Vide\">Vide</option>
            <option value=\"Oui\" selected>Oui</option>
            <option value=\"Si\">Si besoin</option>
            <option value=\"Non\">Non</option>
        </select>";
    case "2":
        return "<select name=\"$personne $key\">
            <option value=\"Vide\">Vide</option>
            <option value=\"Oui\">Oui</option>
            <option value=\"Si\" selected>Si besoin</option>
            <option value=\"Non\">Non</option>
        </select>";
    }
}

$membres = ["Alexandre", "Andrea", "Baptiste", "Gwendal", "Hugo", "Juliette", "Marilou", "Niels", "Stéphan", "Sylvain"];

function affiche(){
    // [index.php]
    // Affiche les disponibilitées des membres
    $bdd = $GLOBALS['bdd'];
    $membres = $GLOBALS['membres'];

    $dates = array();
    $tab = ["Alexandre" => array(), "Andrea" => array(), "Baptiste" => array(), "Gwendal" => array(), "Hugo" => array(), "Juliette" => array(), "Marilou" => array(), "Niels" => array(), "Stéphan" => array(), "Sylvain" => array()];
    $state = ["Non", "Oui", "Si besoin"];

    $resultat_requete = $bdd->query("SELECT * FROM DISPO_ABSINTHE");

    while ($jour = $resultat_requete->fetch())
    {
        $dates[] = $jour["la_date"];
        foreach ($membres as $key => $value) {
            $tab[$value][] = $jour[$value];
        }
    }
    $resultat_requete->closeCursor();

    // Affichage tableau

    echo "<tr><th>Membres</th>";
    foreach ($dates as $key => $value) {
        echo "<th>$value</th>";
    }
    echo "</tr>";

    
    foreach ($tab as $personne => $tab_personne){
        echo "<tr><td>$personne</td>";
        foreach ($tab_personne as $key => $value) {
            $switch = bon_select($value, $personne, $key);
            echo "<td>$switch</td>";
        }
        echo "</tr>";
    }
}

function les_dates_db($table){
    // [update() | tableau_semaine_a_remplir() | del_semaine() | update_semaine() | semaine()]
    // Renvoie les dates entrées dans la base de données $table
    $bdd = $GLOBALS['bdd'];
    $resultat_requete = $bdd->query("SELECT * FROM $table");
    $dates = array();

    while ($jour = $resultat_requete->fetch())
    {
        $dates[] = $jour["la_date"];
    }
    $resultat_requete->closeCursor();
    return $dates;
}

function update() {
    // [index.php]
    // Met la base de données à jour suivant les select dans la page
    $bdd = $GLOBALS['bdd'];
    $membres = $GLOBALS['membres'];
    $etats = ["Vide" => "-1", "Non" => "0", "Oui" => "1", "Si" => "2"];
    
    if ( count($_POST) == 0  )
    {
        return;
    }

    $les_jours = les_dates_db("DISPO_ABSINTHE");
    
    for ($i=0; $i < count($les_jours); $i++) {
        $jour = $les_jours[$i];
        foreach ($membres as $personne => $value) {
            $switch_val = $_POST[$value . "_$i"];
            $state = $etats[$switch_val];
            $update_requete = $bdd->query("UPDATE DISPO_ABSINTHE SET $value = '$state' WHERE la_date = '$jour'");
            $update_requete->closeCursor();
        }
    }
    return;
}

function tableau_semaine_a_remplir(){
    // [nouveau.php]
    // Tableau pour modifier les tenues de la semaine

    $bool = check_dates_correspondent();

    $dates = les_dates_db("SEMAINE_ABSINTHE");
    $bdd = $GLOBALS['bdd'];
    $membres = $GLOBALS['membres'];
    
    echo "<tr><th>Membres</th>";
    foreach ($dates as $key => $value) {
        echo "<th>$value</th>";
    }
    echo "</tr>";

    foreach ($membres as $id => $personne){
        echo "<tr><td>$personne</td>";
        foreach ($dates as $key => $date) {
            
            $check0 = "";
            $check1 = "";

            $select_requete = $bdd->query("SELECT * FROM SEMAINE_ABSINTHE WHERE la_date = '$date' AND 22h01h LIKE '%" . $personne . "%';");
            if ($select_requete->fetch()) {
                $check0 = "checked";
            }
            $select_requete->closeCursor();

            $select_requete = $bdd->query("SELECT * FROM SEMAINE_ABSINTHE WHERE la_date = '$date' AND 01h03h LIKE '%" . $personne . "%';");
            if ($select_requete->fetch()) {
                $check1 = "checked";
            }
            $select_requete->closeCursor();

            $nom = "$personne" . "_$key";

            if ($bool) {
                $OUI_requete = $bdd->query("SELECT * FROM DISPO_ABSINTHE WHERE la_date = '$date' AND $personne = '1';");
                $SI_requete = $bdd->query("SELECT * FROM DISPO_ABSINTHE WHERE la_date = '$date' AND $personne = '2';");

                if ($OUI_requete->fetch()) {
                    echo "<td>
                    <input type=\"checkbox\" id=\"$nom 0\" name=\"$nom 0\" $check0 ><label for=\"$nom 0\"> </label>
                    <input type=\"checkbox\" id=\"$nom 1\" name=\"$nom 1\" $check1 ><label for=\"$nom 1\"> </label>
                    </td>";
                }

                else if ($SI_requete->fetch()) {
                    echo "<td>
                    <input type=\"checkbox\" id=\"$nom 0\" name=\"$nom 0\" $check0 ><label for=\"$nom 0\"> </label>
                    </td>";
                }

                else {
                    echo "<td></td>";
                }

                $select_requete->closeCursor();
            }

            else {
                echo "<td>
                <input type=\"checkbox\" id=\"$nom 0\" name=\"$nom 0\" $check0 ><label for=\"$nom 0\"> </label>
                <input type=\"checkbox\" id=\"$nom 1\" name=\"$nom 1\" $check1 ><label for=\"$nom 1\"> </label>
                </td>";
            }

        }
        echo "</tr>";
    }

}

function check_dates_correspondent(){
    // [tableau_semaine_a_remplir()]
    // Si les dates sont celles des disponiblités
    return les_dates_db("DISPO_ABSINTHE") == les_dates_db("SEMAINE_ABSINTHE");
}

function del_semaine(){
    // [nouveau_del.php]
    // Met à jour la table d'édition des tenues suivant les jours indiqués
    $bdd = $GLOBALS['bdd'];
    
    if (!isset($_POST["data"]) || empty($_POST["data"]) || substr_count($_POST["data"], '/') != 3 ) {
        $les_jours = les_dates_db("DISPO_ABSINTHE");
    }
    else {
        $infos = explode("/", $_POST["data"]);
        $les_jours = les_dates($infos[0], $infos[1], $infos[2], $infos[3]);
    }

    $delete_requete = $bdd->query("DROP TABLE SEMAINE_ABSINTHE");
    $delete_requete->closeCursor();

    $req = "CREATE TABLE SEMAINE_ABSINTHE (
      la_date text NOT NULL,
      22h01h text NOT NULL,
      01h03h text NOT NULL)
    ENGINE=InnoDB DEFAULT CHARSET=latin1;
    COMMIT;";

    $create_requete = $bdd->query($req);
    $create_requete->closeCursor();

    foreach ($les_jours as $key => $jour) {
        $insert_requete = $bdd->query("INSERT INTO SEMAINE_ABSINTHE (la_date, 22h01h, 01h03h) VALUES ('$jour', '', '')");
        $insert_requete->closeCursor();
    }
    return;
    
}

function update_semaine() {
    // [nouveau_del.php | nouveau_add.php]
    // Met à jour la base de données suivant les tenues inscrites

    $bdd = $GLOBALS['bdd'];
    $membres = $GLOBALS['membres'];

    $les_jours = les_dates_db("SEMAINE_ABSINTHE");
    $les_tenues = array();

    foreach ($les_jours as $id => $jour) {
        $les_tenues[$jour] = array("", "");
    }
    
    for ($i=0; $i < count($les_jours); $i++) {
        $jour = $les_jours[$i];
        foreach ($membres as $id => $personne) {
            if (isset($_POST[$personne . "_$i" . "_0"])) {
                $les_tenues[$jour][0] .= $personne . ", ";
            }
            if (isset($_POST[$personne . "_$i" . "_1"])) {
                $les_tenues[$jour][1] .= $personne . ", ";
            }
        }
        $les_tenues[$jour][0] = substr($les_tenues[$jour][0], 0, -2);
        $les_tenues[$jour][1] = substr($les_tenues[$jour][1], 0, -2);
    }

    foreach ($les_tenues as $jour => $value) {
        $personnes_en_tenues_0 = $value[0];
        $personnes_en_tenues_1 = $value[1];
        $insert_requete = $bdd->query("UPDATE SEMAINE_ABSINTHE SET 22h01h = '$personnes_en_tenues_0', 01h03h = '$personnes_en_tenues_1' WHERE la_date = '$jour'");
        // "INSERT INTO SEMAINE_ABSINTHE (la_date, 22h01h, 01h03h) VALUES ('$jour', '$personnes_en_tenues_0', '$personnes_en_tenues_1')"
        // "UPDATE SEMAINE_ABSINTHE SET 22h01h = '$personnes_en_tenues_0', 01h03h = '$personnes_en_tenues_1' WHERE la_date = '$jour'"
        $insert_requete->closeCursor();
    }
}

function semaine() {
    // [index.php]
    // Affiche les tenues de la semaine
    $bdd = $GLOBALS['bdd'];
    $les_jours = les_dates_db("SEMAINE_ABSINTHE");
    echo "<tr><th>Horaires</th>";
    foreach ($les_jours as $id => $jour) {
        echo "<th>$jour</th>";
    }
    echo "</tr><tr><th>22h-01h</th>";

    $resultat_requete = $bdd->query("SELECT * FROM SEMAINE_ABSINTHE");

    while ($jour = $resultat_requete->fetch())
    {
        $personnes_en_tenues = $jour["22h01h"];
        echo "<th>$personnes_en_tenues</th>";
    }
    echo "</tr><tr><th>01h-03h</th>";
    
    $resultat_requete->closeCursor();
    $resultat_requete = $bdd->query("SELECT * FROM SEMAINE_ABSINTHE");

    while ($jour = $resultat_requete->fetch())
    {
        $personnes_en_tenues = $jour["01h03h"];
        echo "<th>$personnes_en_tenues</th>";
    }

    $resultat_requete->closeCursor();
    echo "</tr>";
}

function redo_table(){
    // [redo.php]
    // Réinitialise la table ainsi que la base de données des disponibilités des membres
    $bdd = $GLOBALS['bdd'];

    if (!isset($_POST["data"]) || empty($_POST["data"]) || substr_count($_POST["data"], '/') != 3 ) {
        $les_jours = les_dates_db("DISPO_ABSINTHE");
    }
    else {
        $infos = explode("/", $_POST["data"]);
        $les_jours = les_dates($infos[0], $infos[1], $infos[2], $infos[3]);
    }

    $delete_requete = $bdd->query("DROP TABLE DISPO_ABSINTHE");
    $delete_requete->closeCursor();

    $req = "CREATE TABLE DISPO_ABSINTHE (
      la_date text NOT NULL,
      Alexandre int(11) NOT NULL DEFAULT '-1' COMMENT '-1=Vide, 0=Non, 1=Oui, 2=Si Besoin',
      Andrea int(11) NOT NULL DEFAULT '-1' COMMENT '-1=Vide, 0=Non, 1=Oui, 2=Si Besoin',
      Baptiste int(11) NOT NULL DEFAULT '-1' COMMENT '-1=Vide, 0=Non, 1=Oui, 2=Si Besoin',
      Gwendal int(11) NOT NULL DEFAULT '-1' COMMENT '-1=Vide, 0=Non, 1=Oui, 2=Si Besoin',
      Hugo int(11) NOT NULL DEFAULT '-1' COMMENT '-1=Vide, 0=Non, 1=Oui, 2=Si Besoin',
      Juliette int(11) NOT NULL DEFAULT '-1' COMMENT '-1=Vide, 0=Non, 1=Oui, 2=Si Besoin',
      Marilou int(11) NOT NULL DEFAULT '-1' COMMENT '-1=Vide, 0=Non, 1=Oui, 2=Si Besoin',
      Niels int(11) NOT NULL DEFAULT '-1' COMMENT '-1=Vide, 0=Non, 1=Oui, 2=Si Besoin',
      Stéphan int(11) NOT NULL DEFAULT '-1' COMMENT '-1=Vide, 0=Non, 1=Oui, 2=Si Besoin',
      Sylvain int(11) NOT NULL DEFAULT '-1' COMMENT '-1=Vide, 0=Non, 1=Oui, 2=Si Besoin')
    ENGINE=InnoDB DEFAULT CHARSET=latin1;
    COMMIT;";

    $create_requete = $bdd->query($req);
    $create_requete->closeCursor();

    foreach ($les_jours as $key => $value) {
        $req = "INSERT INTO DISPO_ABSINTHE (la_date, Alexandre, Andrea, Baptiste, Gwendal, Hugo, Juliette, Marilou, Niels, Stéphan, Sylvain) VALUES ('$value', '-1', '-1', '-1', '-1', '-1', '-1', '-1', '-1', '-1', '-1')";
        $insert_requete = $bdd->query($req);
        $insert_requete->closeCursor();
    }
    return "Base de données mise à jour";
}

?>