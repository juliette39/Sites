<?php

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

$count_error = 0;
$motPossible = array();
$nouvelle_requete = $bdd->query('SELECT DISTINCT ortho FROM MOTS');

// On affiche chaque entrée une à une
while ($mot = $nouvelle_requete->fetch())
{
    $motPossible[] = $mot['ortho'];
}

$nouvelle_requete->closeCursor(); //Termine le traitement de la requête

function syllabes_aide($bdd)
{
  $syllabes_totales = $bdd->query('SELECT courant, dersyll, API, count(*) as nboccurence FROM SYLLABES, MOTS WHERE SYLLABES.id = MOTS.iddersyll GROUP BY iddersyll HAVING COUNT(iddersyll) >= 10 ORDER BY LOWER(courant) ASC');

  echo "<p>Veuillez n'utiliser que ces symboles (Syllabes ou API), sinon la page crash.";

  echo "<table>";
  echo "<tr>";
  echo "<td>Courant</td>";
  echo "<td>Syllabes</td>";
  echo "<td>API</td>";
  echo "<td>Occurence</td>";
  echo "</tr>";

  while ($syllabe = $syllabes_totales->fetch())
  {
    echo "<tr>";
    echo "<td>" . $syllabe['courant'] . "</td>";
    echo "<td>" . $syllabe['dersyll'] . "</td>";
    echo "<td>" . $syllabe['API'] . "</td>";
    echo "<td>" . $syllabe['nboccurence'] . "</td>";
    echo "</tr>";
  }

  echo "</table>";

  $syllabes_totales->closeCursor();
}

function print_b($bool)
{
  if ($bool)
    {echo "TRUE";}
  else
    {echo "FALSE";}
}

function str_find($pattern, $str)
{
  return strpos($str, $pattern) !== false;
}

function analyse($nbsyll, $dersyll)
{
  $bdd = $GLOBALS['bdd'];
  $count_erreurs = 0;
  $symboles = ",;:…./\&'§@#!()-_$*¥€%£?";
  if ($nbsyll < 2)
  {
    if ($dersyll == "")
    {
      $req = "AND iddersyll in (SELECT iddersyll FROM MOTS JOIN SYLLABES ON iddersyll = SYLLABES.id GROUP BY iddersyll HAVING COUNT(iddersyll) >= 10)";
    }
    else
    {
      $req = "AND SYLLABES.dersyll='". $dersyll ."'";
    }

    $nouvelle_req = 'SELECT ortho, dersyll FROM MOTS JOIN SYLLABES ON iddersyll = SYLLABES.id WHERE nbsyll = 1 AND length(ortho) > 3 ' . $req . ' ORDER BY RAND() LIMIT 1;';

    $resultat_requete = $bdd->query($nouvelle_req);
    $infos_nouveau_mot = $resultat_requete->fetch();

    $nouvelle_phrase = $infos_nouveau_mot[0];
    $dersyll = $infos_nouveau_mot[1];

    $resultat_requete->closeCursor();
  }

  else

  {
    if ($nbsyll > 12)
    {
      $nbsyll = 12;
    }


    $syllabe = $dersyll;

    $resultat_requete = $bdd->query("
    SELECT id, phrase
    FROM PHRASES
    WHERE nbsyllabe = ".$nbsyll."
    ORDER BY RAND() LIMIT 1");

    $infos_nouvelle_phrase = $resultat_requete->fetch();
    $id = $infos_nouvelle_phrase[0];
    $phrase = $infos_nouvelle_phrase[1];

    $resultat_requete->closeCursor();

    $phraselist = explode(" ", $phrase);
    $longueur_phrase = count($phraselist);
    $nouvelle_phrase = "";

    for ($i = 0; $i < $longueur_phrase; $i++)
    {

      $req = "";

      if (($i == ($longueur_phrase - 1)) and ($syllabe != ''))
      {
        $req = " AND SYLLABES.dersyll = '" . $syllabe . "'";
      }
      elseif ($i == ($longueur_phrase - 1))
      {
        $req = " AND iddersyll in (SELECT iddersyll
            FROM MOTS JOIN SYLLABES ON iddersyll = SYLLABES.id
            GROUP BY iddersyll
            HAVING COUNT(iddersyll) >= 10)";
      }

      $mot = strtolower($phraselist[$i]);

      if (str_find($mot, $symboles))
      {
        $nouvelle_phrase = $nouvelle_phrase . $mot . " ";
      }
      else
      {
        $condition = str_find(mb_substr($mot,-1,1,'UTF-8'), $symboles) and in_array(mb_substr($mot, 0, strlen($mot) - 1,'UTF-8'), $GLOBALS['motPossible']);

        if ($condition)
        {
          $punctInside = mb_substr($mot, -1, 1, 'UTF-8') . " ";
          $mot = mb_substr($mot, 0, strlen($mot) - 1, 'UTF-8');
        }
        else
        {
          $punctInside = " ";
        }

        $resultat_requete = $bdd->query("
          SELECT cgram, genre, nombre, nbsyll, verper, haspir, cvcv
          FROM MOTS
          WHERE ortho = '".$mot."'
          ORDER BY freqfilms DESC LIMIT 1");

        $infos_ancien_mot = $resultat_requete->fetch();
        $resultat_requete->closeCursor();

        if (strlen($mot) == 1 and $infos_ancien_mot["cvcv"][0])
        {
          $nouvelle_phrase = $nouvelle_phrase . $phraselist[$i] . "'";
          $punctInside = "";
        }
        elseif (substr($infos_ancien_mot["cgram"], 0, 3) == "ART" or substr($infos_ancien_mot[0], 0, 3) == "PRO" or $infos_ancien_mot["cgram"] == "ADJ:pos")
        {
          $nouvelle_phrase = $nouvelle_phrase . $phraselist[$i];
          $punctInside = " ";
        }

        elseif ((substr($infos_ancien_mot["cgram"], 0, 3) == "PRE" or $infos_ancien_mot["cgram"] == "CON") and strlen($mot) < 4)
        {
          $nouvelle_phrase = $nouvelle_phrase . $phraselist[$i];
          $punctInside = " ";
        }
        
        else
        {

          if (substr($infos_ancien_mot["cgram"], 0, 3) == "PRE" or $infos_ancien_mot["cgram"] == "CON")
          {
            $req = " AND length(ortho) > 3" . $req;
          }

          elseif (substr($infos_ancien_mot["cgram"], 0, 3) == "NOM" or substr($infos_ancien_mot["cgram"], 0, 3) == "ADJ" or substr($infos_ancien_mot["cgram"], 0, 3) == "VER")
          {

            if ($infos_ancien_mot["verper"] != "")
            {
              if (substr($mot, -1) == "s" and str_find('2s', $infos_ancien_mot[4]))
              {
                $info4 = "%2s%";
              }
              elseif ((substr($mot, -1) != "s") and (str_find('1s', $infos_ancien_mot["verper"]) or str_find('3s', $infos_ancien_mot["verper"])))
              {
                if (str_find('1s', $infos_ancien_mot["verper"]))
                {
                  $info4 = "%1s%";
                }
                else
                {
                  $info4 = "%3s%";
                }
              }
              else
              {
                $info4 = "%" . explode("-", $infos_ancien_mot["verper"])[0] . "%";
              }
              $infos_ancien_mot["verper"] = $info4;
            }

            $req = "AND cvcv LIKE '". substr($infos_ancien_mot["cvcv"], 0) ."%'" . $req;
            $req = "
                SELECT ortho, dersyll
                FROM MOTS JOIN SYLLABES ON iddersyll = SYLLABES.id
                WHERE cgram = '".$infos_ancien_mot["cgram"]."'
                AND genre = '".$infos_ancien_mot["genre"]."'
                AND nombre = '".$infos_ancien_mot["nombre"]."'
                AND nbsyll = ".$infos_ancien_mot["nbsyll"]."
                AND verper LIKE '".$infos_ancien_mot["verper"]."'
                AND haspir = ".$infos_ancien_mot["haspir"]."
                ".$req."
                ORDER BY RAND() LIMIT 1";

            $resultat_requete = $bdd->query($req);

            $infos_nouveau_mot = $resultat_requete->fetch();
            $resultat_requete->closeCursor();

            if (!$infos_nouveau_mot)
            {
              //Mot pas trouvé
              if ($GLOBALS['count_error'] < 10)
              {
                return analyse($nbsyll, $syllabe, $bdd);
              }
              else
              {
                return array("Il faut recommencer le poème", "dersyll");
              }
            }
            else
            {
              $nouveau_mot = $infos_nouveau_mot[0];
              $dersyll = $infos_nouveau_mot[1];

              if (ctype_upper(mb_substr($phraselist[$i],0,1,'UTF-8')))
              {
                $nouveau_mot = ucfirst($nouveau_mot);
              }

              $nouvelle_phrase = $nouvelle_phrase . $nouveau_mot;
            }

          }
        }
        $nouvelle_phrase = $nouvelle_phrase . $punctInside;
      }
    }
  }

  
  while (substr($nouvelle_phrase, -1) == " ") {
    $nouvelle_phrase = substr($nouvelle_phrase, 0, -1);
  }

  if (substr($nouvelle_phrase, 0, 1) == " ") {
    $nouvelle_phrase = strtoupper(substr($nouvelle_phrase, 1, 1)) . substr($nouvelle_phrase, 2);
  }
  else {
    $nouvelle_phrase = strtoupper(substr($nouvelle_phrase, 0, 1)) . substr($nouvelle_phrase, 1);
  }

  $resultat_requete = $bdd->query("SELECT PONCT
    FROM PONCTUATION
    WHERE freq > (SELECT abs(rand() / 10000000000000000000))
    ORDER BY rand()");

  $ponct_result = $resultat_requete->fetch();
  $resultat_requete->closeCursor();
  $ponct = $ponct_result[0];
  $nouvelle_phrase = $nouvelle_phrase . $ponct . "<br/>";

  return array($nouvelle_phrase, $dersyll);
}

function poeme_texte($rimes, $nbsyll)
{
  # Initialisations variables
  $dictsyll = array();
  $rimes = explode(" ", $rimes);
  $poeme = "";
  $i = 0;
  // Création poème
  foreach ($rimes as $paragraphe) {
    foreach (array_slice(explode("_", $paragraphe), 0, -1) as $verssyll) {      
      if (str_find(".", $verssyll)) {
        $phrase = analyse($nbsyll[$i], substr($verssyll, 0, -1));
      }
      elseif (array_key_exists($verssyll, $dictsyll)) {
        $phrase = analyse($nbsyll[$i], $dictsyll[$verssyll]);
      }
      else {
        $phrase = analyse($nbsyll[$i], "");
        $dictsyll[$verssyll] = $phrase[1];
      }

      $GLOBALS['count_error'] = 0;
      $poeme .= $phrase[0];
      $i += 1;
    }
    $poeme .= "<br/>";
  }
        
  // Fin poème : un point
  if (substr($poeme, -12, 1) == " ") {
    $poeme = substr($poeme, 0, -13) . ".";
  }
  else {
    $poeme = substr($poeme, 0, -11) . ".";
  }
  
  return $poeme;
}

function traiter_valeur($rimes, $nbsyll, $phonetique)
{
  // Création tableau associoation letter et phonétique
  $tousPhon = explode(", ", $phonetique);
  $phon_tab = array();
  foreach ($tousPhon as $chaquePhon) {
    $phon = explode("=", $chaquePhon);
    $phon_tab[$phon[0]] = $phon[1];
  }

  // Création forme compatible
  $chars = str_split($rimes);
  $vraies_rimes = "";
  foreach ($chars as $char) {
    if (array_key_exists($char, $phon_tab)) {
      $vraies_rimes .= $phon_tab[$char] . "._";
    }
    else if ($char == " ") {
      $vraies_rimes .= " ";
    }
    else {
      $vraies_rimes .= $char . "_";
    }
  }

  if ($nbsyll == "") {
    $nbsyll = "1=12";
  }

  if (substr($nbsyll, 0, 1) != "1") {
    $nbsyll = "1=12, " . $nbsyll;
  }

  // Création nombre de syllabes
  $toutes_syllabes = explode(", ", $nbsyll);
  //$syllabes_tab = array();

  $syll = explode("=", $toutes_syllabes[0]);
  $vrai_nbsyll = array($syll[1]);
  $ancienne_valeur = $syll[1];
  $i = (int) $syll[0];

  foreach ($toutes_syllabes as $chaque_syll) {
    $syll = explode("=", $chaque_syll);
    $key = (int) $syll[0] - 1;
    $value = $syll[1];
    if ($key > 0) {
      while ($i < $key) {
        $vrai_nbsyll[$i] = $ancienne_valeur;
        $i += 1;
      }
      $ancienne_valeur = $value;
    }
  }

  while ($i < substr_count($vraies_rimes,"_")) {
    $vrai_nbsyll[$i] = $ancienne_valeur;
    $i += 1;
  }

  return poeme_texte($vraies_rimes, $vrai_nbsyll);
}

?>