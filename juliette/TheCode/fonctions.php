<?php 
  function modifSecurite($longueur, $base)
  {
    $nb_carac = strlen($base);
    if ($nb_carac == 0) 
      {$bits = 0;}
    else
      {$bits = (int) round(log((float)pow($nb_carac,$longueur), $base = 2.0));}

    if ($bits == 0) 
      {$secure = " Aucune ";
       $couleur = "#FE0101";}
    elseif ($bits < 64)
      {$secure = " Très faible ";
       $couleur = "#FE0101";}
       elseif ($bits < 80)
      {$secure = " Faible ";
       $couleur = "#FE4501";}
       elseif ($bits < 100)
      {$secure = " Moyenne ";
       $couleur = "#FE7601";}
       elseif ($bits < 126)
      {$secure = " Forte ";
       $couleur = "#53FE38";}
       else
      {$secure = " Très forte ";
       $couleur = "#1CD001";}

    return array($secure . (string) $bits . " bits", $couleur, $bits);
  }
  function dec2base($i, $base)
  {
    $l = (string) strlen($base);

    $result = $base[(int) bcmod($i, $l)];
    $i = bcadd(bcdiv($i, $l), "-1");

    while (bccomp($i, "-1") == 1)
    {
      $result = $base[(int) bcmod($i, $l)] . $result;
      $i = bcadd(bcdiv($i, $l), "-1");
    }
    return $result;
  }

  function modifBase($min, $maj, $sym, $chi)
  {
    $base = "";
    if ($min)
      {$base = $base . "portezcviuxwhskyajgblndqfm";}
    if ($maj)
      {$base = $base . "THEQUICKBROWNFXJMPSVLAZYDG";}
    if ($sym)
      {$base = $base . "@#&!)-%;<:*$+=/?>(";}
    if ($chi)
      {$base = $base . "567438921";}
    return $base;
  }

  function bchexdec($hex)
  {
    $dec = 0;
    $len = strlen($hex);
    for ($i = 1; $i <= $len; $i++) 
    {
      $dec = bcadd($dec, bcmul(strval(hexdec($hex[$i - 1])), bcpow('16', strval($len - $i))));
    }
  return $dec;
  }

  function modifie($long, $site, $clef, $min, $maj, $sym, $chi)
  {
    if ($site == "" or $clef == "" or ($min == 0 and $maj == 0 and $sym == 0 and $chi == 0)) {
      return array("", "", "", 126);
    }

    $base = modifBase($min, $maj, $sym, $chi);
    //$hash = bin2hex(mhash(MHASH_SHA256, $site.$clef)); // Obsolète

    $hash = hash('sha256', $site . $clef); // À partir de PHP 5
    $resultint = bchexdec($hash);

    list($securite, $couleur, $bits) = modifSecurite($long, $base);

    $mdp = dec2base($resultint, $base);
    $mdp = substr($mdp, 0, $long);
    
    return array($mdp, $securite, $couleur, $bits);
  }
?>