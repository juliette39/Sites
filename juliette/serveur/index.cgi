#! /usr/bin/python3
# coding: utf-8

# droits : 755

import cgi
import sys

form = cgi.FieldStorage()
print("Content-type: text/html; charset=utf-8\n")

from __future__ import print_function
import sys
import mysql.connector
from mysql.connector.constants import ClientFlag

host='debonobdd.mysql.db'
database='debonobdd'
user='debonobdd'
password='Juliette1'
port=3306

config = {
    'user':user,
    'password':password,
    'host':host,
    'port':port
}

cnx = mysql.connector.connect(**config)
cur = cnx.cursor(buffered=False)
cur.execute("SHOW GLOBAL STATUS LIKE 'Ssl_cipher'")
print(cur.fetchone())
cur.close()
cnx.close()