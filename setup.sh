#!/bin/bash

red=`tput setaf 1`
green=`tput setaf 2`
reset=`tput sgr0`

echo ""
echo "${red} ~~~~~~~~~~~~~~~~~~~~~~~${red}"
echo "${red} ~~ Initialiser Frago ~~${red}"
echo "${red} ~~~~~~~~~~~~~~~~~~~~~~~${reset}"
echo ""

projectname="monnouveauprojet"
pwd=pwd

echo "${bold}${green}A. RÉPERTOIRE DE TRAVAIL${reset}"
echo "${red}C’est ici que vont être installés les fichiers FRAGO - ⚠️${reset}"
echo "$PWD ${green}<= Vous êtes dans ce répertoire sur votre machine${reset}"

echo ""
echo "${bold}${green}B. CHOIX DU REPERTOIRE DE TRAVAIL${reset}"

PS3='Faites un choix: '
options=("Créer un nouveau répertoire" "Vous êtes déjà dans le répertoire de travail" "Abandonner")
select opt in "${options[@]}"
do
    case $opt in
        "Créer un nouveau répertoire")
            echo ""
            read -p "${green}=>Choisissez un nom de projet : ${reset}" projectname
            break
            ;;
        "Vous êtes déjà dans le répertoire de travail")
            projectname="."
            break
            ;;
        "Abandonner")
            break
            ;;
        *) echo "Choix non pertinent $REPLY";;
    esac
done


echo ""

echo "${bold}${green}C. VALIDER INSTALLATION${reset}"
echo "$PWD/$projectname ${red}<= À cet endroit${reset}"

read -p "Êtes vous sûrs ? (O pour OUI) : " -n 1 -r
echo    # (optional) move to a new line
if [[ $REPLY =~ ^[Oo]$ ]]; then
  echo ""
  echo "${bold}${green}D. INSTALLATION${reset}"
  if [ ! -f $projectname ] && [ $projectname != "." ]; then
    mkdir $projectname
  fi
  cd ${projectname}
  echo "${green}1. Récupération du code sur https://github.com/DISIC/frago/archive/refs/heads/content.zip${reset}"
  curl -s -L -O https://github.com/DISIC/frago/archive/refs/heads/content.zip
  echo "${green}2. Écriture des fichiers : ${reset}"
  bsdtar --strip-components=1 -xvf content.zip
  echo "${green}3. Suppression de content.zip${reset}"
  rm -rf content.zip
else
  echo ""
  echo "---"
  echo ""
  echo "${bold}${red}Opération abandonnée${reset}"
fi

echo ""
echo "${bold}${green}E. FIN${reset}"
