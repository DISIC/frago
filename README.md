# Génération de rapports de synthèse pour le suivi et l’amélioration de l’accessibilité web.

> FRAGO : French governmental Reports for Accessibility compliance with goHugo

---

<p align="center">
  <img width="243" height="272" src="/images/frago.png">
</p>

## Présentation

Le thème Frago a pour objectif d’aider à la génération de synthèses pour l’amélioration des démarches en ligne du gouvernement français..

> Attention, goHugo est très sensible à l’architecture des contenus. Si les contenus sont absents ou présentent des erreurs le site peut planter. Si l’architecture du thème change, de même, il n’est plus possible d’utiliser les dernières versions du thème (sans modifier l’architecture de contenu).

## Démarrage (Configuration simplifiée)

### Architecture de contenu

Exemple d'architecture d'un projet avec `goHugo`, voir : [L'exemple d'architecture](/exampleSite/)

```
.
├── config.toml
└── content
    └── audits
         ├── projet1
         │     ├── index.md // Ajouter un entête avec le titre de la démarche
         │     └── accessibility
         │          ├── 2020-10-15.csv
         │          ├── 2020-11-15.csv
         │          └── context.yml // Déclarer le contexte de chaque audit
         └── projet2
                ├── index.md // Ajouter un entête avec le titre de la démarche
                └── accessibility
                    ├── 2020-10-15.csv
                    ├── 2020-10-15.csv
                    └── context.yml // Déclarer le contexte de chaque audit
```

### Configuration

#### Ajouter le fichier : `config.toml`

Télécharger le thème sur votre dépôt dans `themes`: `themes/frago`.

Note : Si vous le téléchargez, il ne sera pas synchronisé avec le dépôt GitHub, il faudra le mettre à jour à la main. Pour le mettre à jour, écraser le thème déjà présent est suffisant.

```toml
title = "Mon administration" # Ce qui s'affiche sur le site.
theme = "frago"

[params]
  organisation = "Le nom complet de mon administration" # Utilisé dans la déclaration pour déclarer l’organisme
```

#### Appeler le thème Hugo pour synchronisation et mise à jour automatiques (avec un submodule)

```bash
git submodule add https://github.com/DISIC/frago.git/ themes/frago && git submodule update --init --recursive
```

#### Appeler le thème Hugo pour synchronisation et mise à jour automatiques (avec le système de module `Go`)

⚠️ - Le langage Go doit être installé sur le système. Existant sur MacOS, mais difficile à installer sur Windows sans les droits administrateurs.

```toml
[module]
  [[module.imports]]
    path = "github.com/disic/frago"

title = "Mon administration"
theme = "frago"

[params]
  organisation = "Le nom complet de mon administration"
```

##### Créer le fichier `go.mod` (commande dans le terminal)

```bash
hugo mod init github.com/disic/frago
```

Modifier le contenu du fichier `go.mod` (Ajouter https://) :  
`module github.com/disic/frago => module https://github.com/disic/frago`

##### Créer le fichier `go.sum`  (commande dans le terminal)

```bash
hugo mod get
```

#### Génération du site (mise en ligne)

Ligne de commande pour lancer le serveur en local sur votre machine

```bash
hugo serve
```

Ligne de commande pour construire les pages du site.

```bash
HUGO_ENV="production" hugo --buildFuture --gc --minify --cleanDestinationDir
```

  * `HUGO_ENV="production"` lance l'environnement de production (sans les outils de dev, peut être lancé avec le mode serve).
  * `--buildFuture` Publier des éléments avec une date future. Ex: [phase](#phases) (optionnel) ou plan d’actions.
  * `--gc` met à jour le cache de goHugo.
  * `--cleanDestinationDir` nettoie le répertoire de génération du code (au cas où du code d’une précédente génération serait encore présent).
  * `--minify` permet ¨de compresser le code `HTML` en ligne.

### Audits

#### Accessibilité

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

  * [Grille critères RGAA 4 vierge](/exampleSite/exampleFiles/grille-criteres-rgaa.csv)
  * [Grille tests RGAA 4.0 vierge](/exampleSite/exampleFiles/grille-tests-rgaa4.0.csv)
  * [Grille tests RGAA 4.1 vierge](/exampleSite/exampleFiles/grille-tests-rgaa4.1.csv)

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

---

## Contenus

### Accueil

La page d’accueil présente la liste de tous les projets existants dans `content/audits`.

![Accueil](/images/accueil.png)

### Projet

La page de projet présente un aperçu de tous les audits de la démarche.

![Projets](/images/projets.png)

### Audit

Les audits de *conformité* sont présents dans le répertoire `content/audits/nomdelademarche/accessibility/`.

L’audit d’*accompagnement* a pour but de lister tous les types d’erreurs afin de faire un suivi des éléments à corriger avec une équipe de développement. Il sera présent dans le répertoire `content/audits/nomdelademarche/quality/`.

#### Accessibilité

Éditer : `content/audits/nomdelademarche/accessibility/YYYY-MM-JJ.csv`

L'audit accessibilité est généré à partir d‘un `.csv` (fichier à plat). Les données relatives au test (optionnelles) peuvent être indiquées dans le fichier `content/audits/nomdelademarche/accessibility/context.yml`.

```yaml
website: "amendes.gouv.fr"
contacts:
    email: stap-amendes@dgfip.finances.gouv.fr
    address : 139 rue de Bercy, 75572 Paris, Cedex 12
audits:
    2021-03-05: # ⚠️ bien respecter la date de chaque fichier csv d’audit déjà présent dans `content/audits/nomdelademarche/accessibility/`
      guidelines: "RGAA 4.1"
      condition: "Auto-évaluation"
      technologies: ["HTML", "CSS", "JS", "PDF"]
      tools: ["Wave", "AXE", "Web Developper","Usability Hike","Heading Maps"]
      environment: ["MacOS", "Firefox", "Chrome", "ChromeVox"]
    2020-10-12:
      guidelines: "RGAA 4.0"
      condition: "Auto-évaluation"
      technologies: ["HTML", "CSS", "JS", "PDF"]
      tools: ["Wave", "AXE", "Web Developper","Usability Hike","Heading Maps"]
      environment: ["MacOS", "Firefox", "Chrome", "ChromeVox"]
```

![Accessibilite](/images/accessibilite.png)

#### Qualité

Affiche les données du fichier plus récent dans content/audits/nomdelademarche/quality/YYYY-MM-JJ.yml. 

Le fichier de recommandation est fastidieux à remplir, mais permet de suivre des corrections de manière sereine avec une synthèse disponible sous format `HTML` et plus dans une `.doc`

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

![Qualité](/images/qualite.png)


#### Performance

L’audit de performance apporte une complémentarité à l’audit d’accessibilité en listant de manière automatique des éléments à optimiser. Il peut être reproduit de manière régulière. Le dernier test vient surcharger les autres sur la page projet. Il n’existe pas encore de gabarits abouti d’analyse graphique dans le temps.

Note : Lancer un audit `Lighthouse` à ma même date qu’un audit accessibilité

Éditer : `content/audits/nomdelademarche/lighthouse/YYYY-MM-JJ.json`

![Performance](/images/performance.png)


## Administration système

### Héberger

##### Héberger avec Github

Consulter la page [Host on GitHub](https://gohugo.io/hosting-and-deployment/hosting-on-github/) pour plus d‘informations.

Github utilise son système interne GitHub Action. Un exemple de fichier de configuration est disponible : [gh-pages.yml](exampleSite/exampleFiles/.github/workflows/gh-pages.yml).

##### Héberger avec Gitlab

Consulter la page [Host on Gitlab](https://gohugo.io/hosting-and-deployment/hosting-on-gitlab/) pour plus d‘informations

Github utilise son système interne Gitlab CI. Un exemple de fichier de configuration est disponible : [.gitlab-ci.yml](exampleSite/exampleFiles/.gitlab-ci.yml).

### Utiliser ce module comme thème d’un projet

Site officiel :
https://gohugo.io/hugo-modules/use-modules/#use-a-module-for-a-theme

1. Initialiser votre projet pour utiliser les modules hugo :
`$ hugo mod init [MON_GESTIONNAIRE_DE_DEPOT]/[MON_COMPTE]/[MON_PROJET]`
par exemple :
`$ hugo mod init github.com/disic/frago`

2. Importer ce module dans le fichier `config.toml`:
```toml
[module]
  [[module.imports]]
    path = "github.com/disic/frago"
```

3. C’est installé ?
  - En mode dev, lancer `hugo server`. Mais préférer : `HUGO_ENV=production hugo server --buildFuture`, pour le mode production.
  - Mettre à jour le thème, lancer: `hugo mod get -u github.com/disic/frago/` ou juste `hugo mod get -u`.
  - L’appel de thème n’est pas possible avec Netlify, il est nécessaire d’indiquer cette commande dans l’interface `git submodule add https://github.com/disic/frago.git/ themes/frago -f && git submodule update --init --recursive && hugo --gc --minify --buildFuture --templateMetrics`

## Licence

Le code source de ce dépôt est publié sous licence [MIT](https://opensource.org/licenses/mit-license.php).

La marque d’État est à usage exclusif des acteurs de la sphère étatique. En particulier, la typographie Marianne© est protégée par le droit d’auteur.  
Lire [les explications](https://www.gouvernement.fr/charte/charte-graphique-les-fondamentaux/la-typographie) sur le site de la marque d’État.

Le thème Frago utilise cette liste de bibliothèques :

  1. Frappe Charts ([MIT](https://github.com/mermaid-js/mermaid/blob/develop/LICENSE)) : <https://github.com/frappe/charts> - <https://github.com/frappe/charts>
  2. Mermaid ([MIT](https://github.com/mermaid-js/mermaid/blob/develop/LICENSE)) : <https://github.com/mermaid-js/mermaid>
  3. Highlight.js ([MIT](https://github.com/highlightjs/highlight.js/blob/main/LICENSE)) : <https://github.com/highlightjs/highlight.js>
  4. simplelightbox ([MIT](https://github.com/andreknieriem/simplelightbox/blob/master/LICENSE)) : <https://github.com/andreknieriem/simplelightbox>
  5. Van11y accessible tabs panel system ([MIT](https://github.com/nico3333fr/van11y-accessible-tab-panel-aria/blob/master/LICENSE)) : <https://github.com/nico3333fr/van11y-accessible-tab-panel-aria>
  6. Checka11y.css ([MIT](https://github.com/jackdomleo7/Checka11y.css/blob/master/LICENSE)) : <https://github.com/jackdomleo7/Checka11y.css>

## Auteur

2019-2020, Bertrand Keller pour la direction interministérielle du numérique.  
2020-2021, Bertrand Keller pour le ministère de l’économie, des Finances et de la Relance.
