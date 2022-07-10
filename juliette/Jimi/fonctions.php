<?php

function send_mess($message)
{
  $url = "http://10.42.3.115:8888/index.py?question=";

  $message = str_replace(" ","_", $message);
  $url .= $message;

  $resultat = file_get_contents($url);

  return $resultat;//str_replace("\n","<br/>", $resultat);
}

?>