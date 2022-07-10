<?php

$personnes = ['Tous' => 0, 'Maman' => 1, 'Adèle' => 2, 'Juliette' => 3, "À_apporter" => 4];

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

function get_id($personne){
  $bdd = $GLOBALS['bdd'];
  $personnes = $GLOBALS['personnes'];
  $id_pers = $personnes[$personne];

  $insert_requete = $bdd->query("SELECT max(id) FROM FLAINE WHERE Possesseur = $id_pers");
  $id = $resultat_requete->fetch();
  $insert_requete->closeCursor();
  return $id;
}

function delete($id){
  $bdd = $GLOBALS['bdd'];
  $delete_requete = $bdd->query("DELETE FROM FLAINE WHERE id = $id");
  $delete_requete->closeCursor();

}

function insert($objet, $personne){
  $bdd = $GLOBALS['bdd'];
  $personnes = $GLOBALS['personnes'];

  $id_pers = $personnes[$personne];

  $insert_requete = $bdd->query("INSERT INTO FLAINE (id, Objet, Possesseur) VALUES (NULL, '$objet', '$id_pers')");
  $insert_requete->closeCursor();

}

function tout_objets($personne)
{
  $bdd = $GLOBALS['bdd'];
  $personnes = $GLOBALS['personnes'];
  $id_pers = $personnes[$personne];

  $resultat_requete = $bdd->query("SELECT * FROM FLAINE WHERE Possesseur = $id_pers ORDER BY Objet");

  echo "<table>
                                                <tr>
                                                    <th>Liste des objets</th>
                                                </tr>
                                            ";

  while ($ligne = $resultat_requete->fetch())
  {
    $id = $ligne["id"];
    $objet = $ligne["Objet"];
    echo "    <tr>
                                                    <td><input type=\"checkbox\" name=\"objet$id\" id=\"objet$id\" /> <label for=\"objet$id\"><strong>$objet</strong></label><br />
                                                </tr>
                                            ";
  }

  echo "</table>
  ";
  $resultat_requete->closeCursor();
}

?>