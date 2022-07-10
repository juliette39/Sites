# Converti un fichier sql de DB Browser for SQLite en un fichier sql lisible par PhpMyAdmin

import re
path = "MOTS.sql"
path2 = "MOTS2.sql"
text = ""

with open(path, 'r') as f:
    ligne = f.readline() # On enlève la première ligne : "BEGIN TRANSACTIONS" car la commande n'est pas reconnu
    ligne = f.readline()
    i = 0
    while ligne != "COMMIT;\n": # On enlève la dernière ligne : "COMMIT" car la commande n'est pas reconnu
        ligne = re.sub(r"([a-z])''", r"\1\\'", ligne) # On remplace les '' dans les mots avec apostrophe par des \'
        text += ligne.replace('"', '') # On enlève les "" autour des noms de tables
        if i%1000 == 0:
            print("ligne {}".format(i)) # On affiche pour savoir à quele ligne on est
        ligne = f.readline()
        i += 1

# On écrit le résultat dans un nouveau fichier
with open(path2, 'w') as f:
    f.write(text)