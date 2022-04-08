---
title: 'Renseigner des recommandations'
weight: 4
summary: 'Renseigner des préconisations et les affecter à des lots de correction'
---

Affiche les données du fichier plus récent dans `content/audits/nomdelademarche/quality/YYYY-MM-JJ.yml`.

Le fichier de recommandation est fastidieux à remplir, mais permet de suivre des corrections de manière sereine avec une synthèse disponible sous format `HTML` et plus dans une `.doc`

## Exemple de fichier

```yaml
- pages:
  - name: Global au site
    blocks:
    - name: Gabarit
      errors:
      - name: Adresse de navigation # Titre de l’erreur
        description: L’adresse de navigation ne change pas en fonction des pages.
      - name: Code invalide
        description: "Le code comporte des erreurs quand on passe le validateur : https://validator.w3.org/." # Description longue
        criterion: 8.2, 8.4 # Critères RGAA concernées :: si erreur lié à un critère, l'erreur sera reporté dans la déclaration générée
        status: moindre # Criticité : critique, important, moindre
        delivery: lot 1 # Possibilité de regrouper des erreurs dans les lots en haut de page (l'intitulé du champ est libre)
      - name: Titre invalide
        description: Les titres (`<title>`) de page ne changent pas en fonction des pages et ne sont pas pertinents.
        criterion: 8.6
        delivery: lot 1 # Lot 1
      - name: Hiérarchie des titres
        description: Il n’existe parfois aucun titre dans les pages. Passer certains titres (haut de page)`<h3>` en `<h1>` ou ajouter des `<h1>` à toutes les pages.
        criterion: 9.1
        status: important # Criticité : critique, important, moindre
        delivery: lot 2 # Lot 2
    - name: Saisie de la déclaration # Nom de la page
      - name: Formulaire # Titre du bloc
        errors:
        - name: Label
          path: /html/body/div[2]/div[2]/div/div/div/div/div/div[3]/table/tbody[1]/tr/td[3]/div/input
          description: Certains champs `input` n’ont pas de `label`.
        - name: Label + Input liés
          path: /html/body/div[2]/div[2]/div/div/div/div/div/div[5]/div/div/div/div/div[2]/div[6]/label # Xpath
          description: Aucun champs `input` n'est relié avec son `label` avec une attribut `for`.
          delivery: lot 3 # Lot 3
          status: critique # Criticité : critique, important, moindre
          criterion: 11.1
          checked: true # Si l'erreur est corrigée
          codebefore: |- # Code présent sur le site audité
            <div class="form-group">
              <label class="col-md-2 control-label">Année (AAAA) </label>
              <div class="col-lg-1 col-md-2"><input type="text" class="form-control"></div>
            </div>
          codeafter: |- # Proposition de code pour que le critère soit conforme
            <div class="form-group">
              <label class="col-md-2 control-label" for="year">Année (AAAA) </label>
              <div class="col-lg-1 col-md-2"><input type="text" class="form-control" id="year"></div>
            </div>
```

![Qualité](https://raw.githubusercontent.com/DISIC/frago/master/images/qualite.png)
