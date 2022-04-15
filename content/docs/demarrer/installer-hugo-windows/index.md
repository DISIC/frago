---
title: 'Installer Hugo sur windows'
weight: 2
---

Il est possible d’installer `goHugo` sur une machine sans droits administrateurs.

Voici une liste d’étapes indicatives pour installer goHugo sur une machine windows.

## Les étapes :

### Créer les répertoires de démarrage à la racine

 1. Ouvrir le gestionnaire de fichiers
 1. Aller sur le disque `C:` (`Windows (C:)`)
 1. Créer un répertoire `hugo`
 1. Créer un répertoire `bin`

### Installer goHugo

 1. Ouvrir le répertoire `bin`
 1. Ouvrir la page <https://github.com/gohugoio/hugo/releases>
 1. Télécharger la dernière version : `hugo_0.XX.0_Windows-64bit.zip`.
 1. Dézipper le fichier et déplacer le fichier `hugo.exe` dans `c:\hugo\bin`

### Créer la structure de fichiers

 1. Ouvrir le répertoire `hugo`
 1. Créer un répertoire `sites` => ouvrir le répertoire `sites`
 1. Créer un répertoire, ex: `monprojet`
 1. Créer la structure de fichiers
   (télécharger: https://github.com/DISIC/frago/archive/refs/heads/content.zip)
1. Télécharger le thème FRAGO (<https://github.com/DISIC/frago/>) dans le répertoire `c:\hugo\sites\monprojet\themes`

### Télécharger VSCode

  1. Télécharger VSCode à l'adresse : <https://code.visualstudio.com/>
  1. Ouvrir le répertoire `Téléchargement`
  1. Installer VSCode (double cliquant dessus)

### Lancer le projet

  1. Ouvrir VSCode
  1. Dans VSCode, Allez dans `File > Open Folder` puis sélectionner `c:\hugo\sites\monprojet`
  1. Allez dans `View > Terminal` ou utilisez le raccourci clavier `Ctrl+ù`
  1. Dans le terminal. Lancer la commande `c:\Hugo\bin\hugo`

Dans cet exemple, il faut installer le thème en le téléchargeant. La mise à jour du thème se fait en supprimant le répertoire `c:\hugo\sites\monprojet\themes\frago`. Et en re-téléchargeant le thème.
