---
title: "FRAGO : outil pour suivre la mise en conformité des démarches"
date: 2022-03-25
---

## Découvrez FRAGO

**FRAGO**, pour **F**rench governmental **R**eports for **A**ccessibility compliance with **GO**, est un outil créé pour suivre les démarches de mise en conformité (RGAA) de services numériques.

Accéder au dépôt Github de FRAGO : <https://github.com/DISIC/frago/>

## Répondre à 3 problématiques

Le travail de compréhension de l’accessibilité, de compréhension du RGAA, de compréhension des contraintes légales, de communication des résultats… est extrêmement fastidieux.

La démarche de mise en conformité (**RGAA**) présente plusieurs obstacles qui amène à abandonner les développements pour la simplification des démarches pour nos usagers. Ces obstacles sont de plusieurs ordres notamment administratifs, je vous liste les 3 principaux :

1. L’archivage des audits ;
2. la collecte des données ;
3. la publication.

### 1. L'archivage des audits

La forme la plus courante rencontrée pour les audits d’accessibilité est celle du tableau `excel` envoyé par le moyen de la messagerie électronique. Un fichier « intangible » présent dans des boîtes de receptions, puis éventuellement stocké dans sur des serveurs partagés… et parfois oubliés.

**FRAGO** publie des audits à partir des données d’audits stockées dans des fichiers `csv` (de type tableur). Ces données sont stockées dans un dépôt `git`.

En utilisant un fichier au format ouvert `csv` et en le stockant sur un système distribué `git`. La pérennité des audits dans le temps est garantie, l'écriture devient collaborative et on peut construire un comparatif des taux de conformité dans le temps.

### 2. La collecte des données

Lorsqu’un organisme est sollicité pour transmettre ses résultats d’audits, un administrateur va aller demander à chaque responsable de services numérisés de lui envoyer les scores pour les collecter dans un nouveau fichier de type tableur. Ce fichier sera lui même transmis par messagerie électronique et stocké de la même manière que les audits, mais à un endroit différent et avec des chiffres dédoublés (les taux de conformité sont recopiés de fichiers en fichiers).

**FRAGO** publie des pages audits sous format HTML, lisibles dans de simples navigateurs web. Leur mise en ligne permet le partage des informations sans avoir à passer par des séries de mails. Les résultats sont certifiés comme étant les plus à jours (a priori).

**FRAGO** permet du suivi multi services numériques pour un organisme. Cela permet d'avoir en page d'accueil une vision synthétique des scores de tous les sites suivis (à partir des derniers audits). Voire de générer un rapport qui sera transmis à un organisme tiers.

### 3. La publication

La publication de la déclaration de conformité, ainsi que d'un schéma pluriannuel et d’un plan d’actions sont obligatoires. Un organisme se doit de publier de manière transparente le niveau d’accessibilité de ses services numériques, mais aussi de publier les actions et la politique mises en place pour améliorer l’accessibilité dans le temps (à base d’engagements à date).

**FRAGO** permet de la génération automatique de déclarations, plans d’actions, schéma pluriannuels,… à partir des scores d'audits et d’informations renseignées dans l’outil.

Cette génération n’est pas évidente car il existe des paragraphes informations qui peuvent être propres à chaque organisme (le principe de personnalisation n’a pas encore été intégré complètement). Mais cela donne une base de travail pour tous les paragraphes comportant des informations sur : les taux de conformité, les sites à charges, les contacts,…

Cela permet donc d’avoir à disposition des exemples de documents légaux comportant les recensements de toutes les données à jour.

Le bénéfice est très intéressant car il permet d’avoir une correspondance entre les données de collecte (fournies à un organisme tiers) et celles affichées sur le site.
