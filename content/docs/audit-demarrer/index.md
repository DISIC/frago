---
title: 'Démarrer un audit d’accessibilité'
weight: 3
---

## Accessibilité

Le thème interprète un fichier d’audit `csv` avec une structure fixe et imposée. Les intitulés de colonnes doivent respecter un nommage précis (Thématiques, Critères, Tests… puis le titre de chaque page).

Note : Le titre d’une page peut être suivi de l’URL de la page ; titre et URL séparés par le caractère `|`.

**Exemple d’un tableau avec uniquement la prise en compte des critères**

| Thématiques | Critères | Accueil।https://monsite.fr |
| :---------: | :------: | :------------------------: |
|      1      |    1     |              nc            |
|      1      |    2     |              c             |
|      1      |    3     |              na            |
|      1      |    4     |              nt            |
|      …      |    …     |              …             |
|      13     |    12    |              nc            |

**Liste des fichiers exemples à télécharger**

  * [Grille critères RGAA 4 vierge](https://github.com/DISIC/frago/tree/master/exampleSite/exampleFiles/grille-criteres-rgaa.csv)
  * [Grille tests RGAA 4.0 vierge](https://github.com/DISIC/frago/tree/master/exampleSite/exampleFiles/grille-tests-rgaa4.0.csv)
  * [Grille tests RGAA 4.1 vierge](https://github.com/DISIC/frago/tree/master/exampleSite/exampleFiles/grille-tests-rgaa4.1.csv)

*Dans chacun de ces fichiers figurent des numéros qui correspondent aux notions d’audit rapide (25 critères), complémentaire (50 critères), intermédiaire (81 critères).*
*Exemple, pour un audit rapide, ne traiter que les cellules avec le numéro **25**.*

## Configuration détaillée

#### Configuration

*Exemple de fichier de configuration : `config.toml`*

```toml
title = "Mon administration"
theme = "frago"

[params]
  organisation = "Le nom complet de mon administration"
  [params.strategy]
    schema = "https://www.monadministration.gouv.fr/schema_pluriannuel_2020-2022.pdf" // Optionnel
    plan = "https://www.monadministration.gouv.fr/plan_annuel_2020.pdf" // Optionnel
```
