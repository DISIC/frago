# Hugo theme for Commando UX

> Generate accessibility audit reports and much more

## Présentation

Le thème Commando a pour objectif d’aider à la génération de synthèses pour la documentation du suivi d’amélioration des démarches en ligne du gouvernement français.

Le thème a été conçu pour être multi-projets. Pourquoi ? Parce que dans le cadre d’un commando, l’équipe peut être amenée à travailler sur des sujets connexes, des interfaces intermédiaire/liées sur lesquelles il est nécessaire de fournir un audit en particulier… de plus le projet peut aider à suivre aussi plusieurs défis en parallèle.  
Au choix.

> Attention, Hugo est très sensible à l’architecture des contenus. Si les contenus sont absents ou présentent des erreurs le site peut planter. Si l’architecture du thème change il n'est plus possible de mettre à jour le thème (sans modifier l'architecture de contenu).

### Architecture de contenu

Les différents types de contenus servent à la publication d’audits, l’analyse de résultats ou la présentation de la démarche UX. L’objectif est de synthétiser de l'information technique pour des personnes éloignées du développement de sites web.

#### Arborescence

> Attention : ⚠️  Le nom des pages projets `content/projects/projets1.md`, des répertoires projets `static/projet1/` et des répertoires des pages d’audits `content/audits/projets1/accessibility.md` doivent bien comporter la même clef ou slug, ici : `projet1`. ⚠️   
> Un script devrait permettre de créer ces fichiers automatiquement à partir du moment un répertoire dans static est créé, mais il n'existe pas encore. La création doit se faire manuellement.

```
.
├── config.toml
├── content
│   ├── audits // Les pages pour afficher les audits (accessibilité, qualité, performance…) pour chaque projet
│   │    ├── projet1 // Doit reprendre le nom du répertoire donné au projet dans `static`
│   │    │     ├── accessibility.md
│   │    │     ├── quality.md
│   │    │     └── performance.md
│   │    └── projet2 // Doit reprendre le nom du répertoire donné au projet dans `static`
│   │          ├── accessibility.md
│   │          ├── quality.md
│   │          └── performance.md
│   ├── meetings
│   │    ├── _index.md // liste les réunions
│   │    └── 2020-10-22-reunion1.md // On indique la date dans le nom de fichier pour ranger les fichiers visuellement, il faut la répéter dans l’entête YML du fichier pour afficher les réunions sur la page dans un ordre par date.
│   ├── personas
│   │    ├── _index.md // Liste tous les personas :: Ne fonctionne pas en mono projet
│   │    ├── simon.md  // Ne fonctionne pas en mono projet
│   │    ├── annie.md  // Ne fonctionne pas en mono projet
│   │    └── projet1
│   │         ├── _index.md // liste tous les personas
│   │         ├── simon.md
│   │         └── annie.md
│   ├── projects // Les pages d’accueil des différents projets
│   │    ├── _index.md // optionnel, liste tous les projets
│   │    ├── projet1.md // Doit reprendre le nom du répertoire donné au projet dans `static`
│   │    └── projet2.md // Doit reprendre le nom du répertoire donné au projet dans `static`
│   └── _index.md // page d’accueil du site
├── static
│   ├── projet1
│   │    ├── accessibility
│   │    │    ├── 2020-10-15.csv
│   │    │    └── 2020-11-15.csv
│   │    ├── lighthouse
│   │    │    ├── 2020-10-15.json
│   │    │    └── 2020-11-15.json
│   │    ├── quality // Pas de prise en compte de nom d’image d‘illustration avec le nom du fichier pour plusieurs rapports qualité dans le même répertoire
│   │    │    ├── 2020-10-15.yml
│   │    │    └── 2020-11-15.yml
│   │    ├── testapic
│   │    │    ├── test1.json
│   │    │    └── test2.json
│   │    ├── backlinks.json
│   │    ├── personas.json
│   │    └── similary.json
│   ├── projet2
┋   ┋
┋   ┋ ⚠️ Autre choix d’arborescence avec un seul projet ⚠️
┋   ┋
│   ├── accessibility // Si 1 seul projets
│   │    ├── 2020-10-15.csv
│   │    └── 2020-11-15.csv
│   ├── quality // Ne fonctionne pas complètement en mono projet
│   │    ├── 2020-10-15.yml
│   │    └── 2020-11-15.yml
│   ├── testapic // Ne fonctionne pas en mono projet
│   │    ├── test1.json
│   │    └── test2.json
│   ├── directory.json // Annuaire de contacts
│   └── images
│        ├── projet1 // Doit reprendre le nom du répertoire donné au projet dans `static`
│        │    └── benchmark
│        │    │    ├── image1.png // nommage précis disponible sur la page rapport générée par Hugo
│        │    │    └── image2.png // nommage précis disponible sur la page rapport générée par Hugo
│        │    └── quality
│        ├── projet2
│        └── personas
└── index.html
```

#### Configuration

*Exemple de fichier de configuration : `config.toml`*

```toml
baseURL = ""

title = "DGFIP"
theme = "overgo"
paginate = "10"

languageCode = "fr-FR"
defaultContentLanguage = "fr"
defaultContentLanguageInSubdir = false
enableInlineShortcodes = true
removePathAccents = true

[taxonomies]
  category = "categories"
  tag = "tags"
  phase = "phases"

[params]
  organisation = "La Direction Générale des Finances Publiques"
  logo = "DGFIP <small>suivi de la conformité de démarches en ligne</small>"
  env = "development"
  style = "default"
  description = "Suivi de la conformité de démarches en ligne"
  copyright = "&copy;2020 MEFR"
  [params.strategy]
    schema = "https://www.impots.gouv.fr/portail/files/media/8_transverse/accessibilite/dgfip_schema_pluriannuel_2020-2022.pdf"
    plan = "https://www.impots.gouv.fr/portail/files/media/8_transverse/accessibilite/dgfip_plan_annuel_2020.pdf"

[markup]
  defaultMarkdownHandler = "blackfriday"
  [markup.tableOfContents]
    endLevel = 2
    ordered = false
    startLevel = 2

```

### Contenus

#### Accueil

La page d’accueil présente la liste de tous les projets existants dans `content/projects`. Si le défi ne présente qu’un seul projet, et que la type de la page d'accueil est `type: "projects"`, alors la page affiche la page de résumé du projet.

![Accueil](/images/accueil.png)

#### Projets

La page de projets doit servir à présenter l’état de la démarche, puis le planning d’avancée du commando et enfin lister éventuellement des liens vers des billets de types : réunions ou actions (à insérer dans dans `content/meetings` et `content/actions`).

![Projets](/images/projets.png)

#### Audit

L’audit d’accessibilité peut être de *conformité* ou d’*accompagnement*. L’audit de conformité peut-être unique (évoluera au cours du projet) ou daté (ex: `2021-03-12.cv`) et présent dans le répertoire `static/accessibility/`. 

L’audit d’*accompagnement* a pour but de lister tous les types d’erreurs afin de faire un suivi des éléments à corriger avec une équipe de développement.

##### Accessibilité

Éditer : `static/nomdudéfi/accessibility/YYYY-MM-JJ.csv`

L'audit accessibilité est généré à partir d‘un `.csv` (fichier à plat). Les données relatives au test (optionnelles) peuvent être indiquées dans l’entête du fichier `.md` de l’audit dans `content/audit/nomdudéfi/accessibility.md`.

```
---
type: accessibility // appel le gabarit accessibility :: static/nomdudéfi/accessibility/YYYY-MM-JJ.csv (fichier le plus récent)
accessibility:
  website: "amendes.gouv.fr"
  guidelines: "RGAA 4.0"
  condition: "Auto-évaluation" // ou audit externe avec le nom de la structure qui a procédé à l’audit
  technologies: ["HTML", "CSS", "JS"]
  tools: ["Wave", "AXE", "MOZ DevTools"]
  environment: ["MacOS", "Chrome", "ChromeVox"]
  contact:
    email: stap-amendes@dgfip.finances.gouv.fr
    address : 139 rue de Bercy, 75572 Paris, Cedex 12
---
```

![Accessibilite](/images/accessibilite.png)

##### Qualité

```
---
type: quality // appelle le gabarit quality :: avec les données du fichier plus récent dans static/nomdudéfi/quality/YYYY-MM-JJ.yml
datafilename: YYYY-MM-JJ // appel le fichier avec la date correspondante
---
```

![Accessibilite](/images/qualite.png)

#### Annuaire

Lister les personnes contactées pendant la durée du défi. Cet annuaire permet de partager les contacts dans le temps de l’amélioration de la démarche.

Éditer : `static/directory.json`

![Annuaire](/images/annuaire.png)

#### Testapic

Les tests utilisateurs de type quantitatifs consistent à poser des questions similaires à un panel important d’usagers. Pour le service *Testapic*, il existe une mise en forme pour l’analyse rapide de ces résultats.

Fonctionne à partir d'une JSON, mais pourrait marcher avec du CSV directement (Ici, penser à convertir le CSV en JSON).

Éditer : `static/nomdudéfi/testapic/nometude.json` (à faire évoluer)

Ajouter à l'entête du fichier de contenu :

```
---
type: testapic // appel le gabarit testapic
datafilename: etudiants // appelle le fichier nommé etudiants :: dans static/nomdudéfi/testapic/etudiants.json
---
```

![Testapic](/images/testapic.png)

#### Performance

L’audit de performance apporte une complémentarité à l’audit d’accessibilité en listant de manière automatique des éléments à optimiser. Il peut être reproduit de manière régulière. Le dernier test vient surcharger les autres sur la page projet. Il n'existe pas encore de gabarits d'analyse graphique dans le temps.


Éditer : `static/nomdudéfi/lighthouse/YYYY-MM-JJ.json`

![Performance](/images/performance.png)

#### Personas

Définir des personas et les afficher sur une même page pour les partager à l'équipe projet. On peut sélectionner les profils retenus pour les tests.

> Hugo nécessite de créer les pages correspondantes pour chaque personas si on veut afficher les personas en détail. Créer les pages dans  `content/personas/nomdudéfi/prenom-nom.md`.

Éditer : `static/nomdudéfi/personas.json`

![Personas](/images/personas.png)

#### Parcours

Ajouter un parcours type par personas pour fournir une base visuelle à l'équipe projet de ce qui est testé. Le gabarit permet de partir d’un élément parent unique puis de développer autant de sous branches possibles dans la limite de 4 niveaux de profondeur (compatible mobile).

Éditer : `static/nomdudéfi/personas.json`

![Parcours](/images/parcours.png)

#### Composants

##### Scores

![Scores](/images/scores.png)

##### Phases

Nécessite d'ajouter un type de catégorie dans le `config.toml` ; et d’ajouter le *tag* dans chacun des contenus qu’on souhaite voir afficher dans une phase.

Les contenus listés sont donc hétérogènes.

![Phases](/images/phases.png)

#### Shortcodes

##### Galerie de capture écrans

Afficher une liste de captures d’écran pour illustrer une étude comparative.

```
{{< benchmark datafile="amendes" src="-explications" >}}{{< /benchmark >}}
```

##### Sites similaires

Afficher la liste des sites similaires à la démarche (action de benchmarking). Les sites sont rangés par pays.

Éditer : `static/nomdudéfi/similary.json`

```
{{< similary project="amendes" >}}{{< /similary >}}
```

##### Diagrammes

Appel de la librairie *mermaid.JS*. Ajouter la syntaxe *Mermaid* dans le contenu du shortcode.

```
{{< mermaid >}}
    graph TD
      A(Je reçois un avis)
      A --> B{Je paye une amende}
      B --> |Carte Bancaire| C(Site web)
      B --> |Carte Bancaire| D(Application)
      B --> |Chèque| E(Courrier)
      B --> |Chèque/Espèce/CB| F(Buraliste)
      B --> |Carte Bancaire| G(Téléphone)
      B --> |Chèque/Espèce/CB| H(Trésor Public)
      B --> |Virement pour étrangers| I(Site web)
{{< /mermaid >}}
```

![graphiques](/images/diagramme.png)

##### Graphiques

Petit aide pour l’affichage de graphiques. Passer les données dans le contenu du *shortcode*. Choisir le titre et le type de graphique à afficher : bar, line, donut…

```
{{< graphic title="Ventilation des paiements dans l’année (en milliers)" type="bar">}}
{
    labels: ["Vitesse", "PV électronique", "Feux rouges"],
    datasets: [
      {
        name: "Internet",
        values: [3351, 2482, 85],
      },
      {
        name: "Smartphone",
        values: [492, 497, 12]
      }
    ]
}
{{< /graphic >}}
```
![graphiques](/images/graphiques.png)

#### Personas

Afficher les personas sur la page de son choix en fonction du projet de son choix.

```
{{< personas project="amendes" >}} {{< /personas >}}
```

#### Parcours

Afficher les parcours sur la page de son choix en fonction du projet de son choix.

```
{{< parcours project="amendes" >}} {{< /parcours >}}
```

## Utiliser ce module comme thème d'un projet

Site officiel :
https://gohugo.io/hugo-modules/use-modules/#use-a-module-for-a-theme

1. Initialiser votre projet pour utiliser les modules hugo :
`$ hugo mod init [MON_GESTIONNAIRE_DE_DEPOT]/[MON_COMPTE]/[MON_PROJET]`
par exemple :
`$ hugo mod init gitlab.com/toto_dev/mon_generateur_de_rapports`

2. Importer ce module dans le fichier `config.toml`:
```toml
[module]
  [[module.imports]]
    path = "gitlab.com/bertrandkeller/commando-hugo-template"
```

3. C'est installé ?
  - En mode dev, lancer `hugo server`. Mais préférer : `HUGO_ENV=production hugo server --buildFuture`, pour le mode production.
  - Mettre à jour le thème, lancer: `hugo mod get -u gitlab.com/bertrandkeller/commando-hugo-template` ou juste `hugo mod get -u`.

## Procéder à des modifications sur le thème.

Modifier la source dans `go.mod` :
```go
replace gitlab.com/bertrandkeller/commando-hugo-template => ~/workspace/dinum/commando-hugo-template
```

**Attention :**

Si difficultés avec un repo privé de Gitlab, c’est peut-être parce que `go get` utilise HTTPS.

Modifier le fichier `go.mod` à la racine du projet, ajouter `https://`:
```
module https://gitlab.com/bertrandkeller/commando-hugo-template // au lieu de : module gitlab.com/bertrandkeller/commando-hugo-template
```

Lire : https://golang.org/doc/faq#git_https

ou tenter de modifier `~/.gitconfig`:
```git
[url "ssh://git@gitlab.com/"]
	insteadOf = https://gitlab.com/
```

## Licence

Le code source de ce dépôt est publié sous licence [[https://opensource.org/licenses/mit-license.php][MIT]].

La marque d'État est à usage exclusif des acteurs de la sphère
étatique.  En particulier, la typographie Marianne© est protégée par
le droit d'auteur.  Lire [[https://www.gouvernement.fr/charte/charte-graphique-les-fondamentaux/la-typographie][les explications]] sur le site de la marque
d'État.

## Auteur

2020-2021, Bertrand Keller
