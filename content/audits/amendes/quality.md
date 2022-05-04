---
description: Etude de la qualité générales des pages du site.
type: quality
note: |-
  Cette page liste des erreurs diverses relevées sur l’ensemble du site. Elles peuvent être de tout types (visuel, code, structure, textuel), ainsi que présenter des critères permettant de les classer sous forme de listes spécifiques (status, lots de correction, criticités…).

  Ces erreurs sont organisées en fonction de leur présence sur les pages du site : par page puis par bloc.

  Ce rapport est destiné à la relation avec des équipes exécutives ayant pour objectif : d’estimer le temps de développement, créer des tâches, distribuer les tâches, corriger les erreurs,… Il est évolutif et sert de base discussion pour les questions stratégiques entre MOA et MOE.

  Il n’y a de lien direct entre la correction d’une erreur et l’évolution du [taux de conformité RGAA](/audits/amendes/accessibility/). Même si les 2 rapports se recoupent.
---

### Corrections non complètes

  * Placeholder : doit reprendre le format de l'entrée (type de données) pas l'intitulé du label.

### Régressions

  * La structure de titre est cassée (hiérarchie h1 puis h3) :: à revoir.
  * Une chaîne de caractère n'est pas traduite : "You wish to pay the balance due for your fixed fine, which is currently at the reduced rate of € {{AMOUNT}}, or make a partial payment."
  * La zone `class="montant-info"` devrait avoir une `id` est être reliée à une autre zone par un `aria-labelledby`.
  * Justificatif de paiement - Historique des règlements, pourrait être un tableau, aucune sémantique présente pour les données. Ou ajouter des aria-label avec le type de champ `<div aria-label="Montant de 600,00 €">`.
  * Pas de listes des différents paiements différés dans l'impression PDF.

### À améliorer

  * Le cadenas en dessous du bouton de validation (accueil) n'est pas aligné
  * Les tableaux ne sont pas stylés
