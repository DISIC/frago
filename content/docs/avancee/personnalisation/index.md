---
title: Personnalisation du thème
---

Hugo permet de surcharger les fichiers présents dans le thème, la condition est de respecter la même arborescence. Ainsi pour surcharger un thème avec :

 * Sa police
 * Son logo
 * Ses couleurs
 *…

Il suffit de créer tous ces fichiers dans le répertoire `static`. Le thème appelle automatiquement les polices contenues dans le répertoire `static/assets/fonts` (à la place de la police Marianne).

```
static
└── assets
    ├── css
    │   ├── fonts.css
    │   └── main.css
    ├── favicons
    │   ├── android-chrome-192x192.png
    │   ├── android-chrome-512x512.png
    │   ├── apple-touch-icon.png
    │   ├── favicon-16x16.png
    │   ├── favicon-32x32.png
    │   ├── favicon.ico
    │   └── site.webmanifest
    ├── fonts
    │   ├── open-sans-bold.woff2
    │   └── open-sans-regular.woff2
    └── images
        ├── logo.svg
        └── logodark.svg
```

## Arborescence

### Architecture simplifiée

```
.
├── config.toml
└── content
    ├── _index.md // page d’accueil du site :: ⚠️ Ajouter `type: projects` dans l'entête du fichier en cas de mono projet => va afficher directement la page de synthèse de tous les audits
    ├── audits // Type de contenu audits, les projets doivent être dans un répertoire avec le nom audits
    │     ├── projet1
    │     │    ├── index.md // ⚠️  Page intermédiaire qui liste les sous rapports (accessibilité, performance…)
    │     │    ├── accessibility
    │     │    │   ├── 2020-10-15.csv
    │     │    │   ├── 2020-11-15.csv
    │     │    │   └── context.yml // Déclarer le contexte ce chaque audit
    │     │    ├── lighthouse
    │     │    │   ├── 2020-10-15.json
    │     │    │   └── 2020-11-15.json
    │     │    └── quality
    │     │        ├── 2020-10-15.yml
    │     │        └── 2020-11-15.yml
    │     │
    │     └── projet2
    │          ├── index.md
    │          ├── accessibility
    │          │   ├── 2020-10-15.csv
    │          │   ├── 2020-11-15.csv
    │          │   └── context.yml // Déclarer le contexte ce chaque audit
    │          ├── lighthouse
    │          │   ├── 2020-10-15.json
    │          │   └── 2020-11-15.json
    │          └── quality
    │              ├── 2020-10-15.yml
    │              └── 2020-11-15.yml
    ┋
    ┋ ⚠️ Autre choix d’arborescence avec un seul projet ⚠️
    ┋
    └── audits // Les pages pour afficher les audits (accessibilité, qualité, performance…)
          ├── index.md
          ├── accessibility
          │   ├── 2020-10-15.csv
          │   └── 2020-11-15.csv
          │   └── context.yml // Déclarer le contexte ce chaque audit
          ├── lighthouse
          │   ├── 2020-10-15.json
          │   └── 2020-11-15.json
          └── quality
              ├── 2020-10-15.yml
              └── 2020-11-15.yml
```

### Architecture complète (⚠️ Ancienne présente une architecture alternative, elle doit évoluer pour correspondre à tous les types de contenus)

> Attention dans ce cas de figure: ⚠️ Le nom des pages projets `content/projects/projets1.md`, des répertoires projets `static/projet1/` et des répertoires des pages d’audits `content/audits/projets1/accessibility.md` doivent bien comporter la même clef ou slug, ici : `projet1`. ⚠️
> Un script devrait permettre de créer ces fichiers automatiquement à partir du moment un répertoire dans `static` est créé, mais il n’existe pas encore. La création doit se faire manuellement.

```
.
├── config.toml
├── content
│   ├── _index.md // page d’accueil du site :: ⚠️ Ajouter `type: projects` dans l’entête du fichier en cas de mono projet => va afficher directement la page de synthèse de tous les audits
│   ├── audits // Les pages pour afficher les audits (accessibilité, qualité, performance…) pour chaque projet
│   │    ├── projet1 // Doit reprendre le nom du répertoire donné au projet dans `static`
│   │    │     └── index.md // ⚠️  pour avoir lister les pages sur l’accueil et avoir la page intermédiaire qui liste tous les rapports
│   │    └── projet2 // Doit reprendre le nom du répertoire donné au projet dans `static`
│   │          └── index.md
│   ├── meetings
│   │    ├── _index.md // liste les réunions
│   │    └── 2020-10-22-reunion1.md // On indique la date dans le nom de fichier pour ranger les fichiers visuellement, il faut la répéter dans l’entête YML du fichier pour afficher les réunions sur la page dans un ordre par date.
│   ├── personas // ⚠️ Ne fonctionne pas en mono projet
│   │    ├── _index.md // Liste tous les personas
│   │    ├── simon.md
│   │    ├── annie.md
│   │    └── projet1
│   │         ├── _index.md // liste tous les personas
│   │         ├── simon.md
│   │         └── annie.md
┋   ┋
┋   ┋ ⚠️ Autre choix d’arborescence avec un seul projet ⚠️
┋   ┋
│   └── audits // Les pages pour afficher les audits (accessibilité, qualité, performance…)
│         └── index.md
└── static
    ├── projet1
    │    ├── accessibility
    │    │    ├── 2020-10-15.csv
    │    │    └── 2020-11-15.csv
    │    ├── lighthouse
    │    │    ├── 2020-10-15.json
    │    │    └── 2020-11-15.json
    │    ├── quality
    │    │    ├── 2020-10-15.yml
    │    │    └── 2020-11-15.yml
    │    ├── usertests
    │    │    ├── test1.json
    │    │    └── test2.json
    │    ├── backlinks.json
    │    ├── personas.json
    │    └── similary.json
    ├── projet2
    │    └── accessibility
    │         ├── 2020-10-15.csv
    │         └── 2020-11-15.csv
    ┋
    ┋ ⚠️ Autre choix d’arborescence avec un seul projet ⚠️
    ┋
    ├── accessibility
    │    ├── 2020-10-15.csv
    │    └── 2020-11-15.csv
    ├── quality // Ne fonctionne pas complètement en mono projet
    │    ├── 2020-10-15.yml
    │    └── 2020-11-15.yml
    ├── usertests // Ne fonctionne pas en mono projet
    │    ├── test1.json
    │    └── test2.json
    ├── directory.json // Annuaire de contacts
    └── images
         ├── projet1 // Doit reprendre le nom du répertoire donné au projet dans `static`
         │    ├── benchmark
         │    │    ├── titresiteweb-titreelementacomparer.png // nommage précis disponible sur la page rapport générée par Hugo
         │    │    ├── ojdcourtsepay.tylerhost.net-navigation-step.png
         │    │    ├── pages.fivepointpayments.com-navigation-step.png
         │    │    └── finepayment.saskatchewan.ca-navigation-step.png
         │    └── quality
         │         └── 2020-10-16 // Les titres formant les noms d’images doivent correspondre à des termes existant dans le fichier `.yml`
         │             ├── titrepage-[before ou after].png
         │             ├── titrepage-titrebloc-titreerreur-[before ou after].png
         │             ├── accueil-before.png
         │             ├── accueil-after.png
         │             ├── accueil-banniere-titres-before.png
         │             └── accueil-banniere-titres-after.png
         ├── projet2
         └── personas

```

### API

La configuration de l’API est contenue dans le fichier `config.toml` du thème. Il existe une configuration par défaut qui peut-être surchargée en fonction de la structure de fichier. Pour la structure simplifiée, il n’y a rien à ajouter.

L’idée est d’éviter de créer des pages uniquement pour avoir une URL (pour accessibility.html, quality.html et performance.html) lors du build du site (seul défaut, un export de page peut-être vide si l’audit correspondant n’existe pas ; et on perd les `pretty` url pour les exports `HTML`).

Cette API permet d’obtenir des fichiers `json` de type :

 * https://monurl.com/index.json
 * https://monurl.com/audits/monprojet/index.json
 * https://monurl.com/audits/monprojet/accessibility.json
 * https://monurl.com/audits/monprojet/quality.json
 * https://monurl.com/audits/monprojet/performance.json

Mais aussi des affichages de pages de type :

 * https://monurl.com/audits/monprojet/accessibility.html
 * https://monurl.com/audits/monprojet/quality.html
 * https://monurl.com/audits/monprojet/performance.html
 * https://monurl.com/audits/monprojet/declaration.html
 * https://monurl.com/audits/monprojet/declaration.txt

**Exemple de configuration de l’API (Voir la Documentation goHugo sur les Output Format).**

## Contenus complémentaires

### Annuaire

Lister les personnes contactées pendant la durée du défi de mise en conformité. Cet annuaire permet de partager les contacts dans le temps de l’amélioration de la démarche.

Éditer : `static/directory.json`

#### Recueil de tests utilisateurs

Les tests utilisateurs de type quantitatifs consistent à poser des questions similaires à un panel important d’usagers. Pour le service *usertests*, il existe une mise en forme pour l’analyse rapide de ces résultats.

Fonctionne à partir d’un JSON, mais pourrait marcher avec du CSV directement (Ici, penser à convertir le CSV en JSON).

Éditer : `static/nomdelademarche/usertests/nometude.json` (à faire évoluer)

Ajouter à l’entête du fichier de contenu :

```yaml
---
type: usertests // appel le gabarit usertests
datafilename: etudiants // appelle le fichier nommé etudiants :: dans static/nomdelademarche/usertests/etudiants.json
---
```

![usertests](/DISIC/frago/raw/master//images/usertests.png)

#### Personas

Définir des personas et les afficher sur une même page pour les partager à l’équipe projet. On peut sélectionner les profils retenus pour les tests.

> Hugo nécessite de créer les pages correspondantes pour chaque persona ; si on veut afficher les personas en détail. Créer les pages dans  `content/personas/nomdelademarche/prenom-nom.md`.

Éditer : `static/nomdelademarche/personas.json`

![Personas](/DISIC/frago/raw/master/images/personas.png)

### Parcours

Ajouter un parcours type par persona pour fournir une base visuelle à l’équipe projet de ce qui est testé. Le gabarit permet de partir d’un élément parent unique puis de développer autant de sous branches possibles dans la limite de 4 niveaux de profondeur (compatible mobile).

Éditer : `static/nomdelademarche/personas.json`

![Parcours](/DISIC/frago/raw/master/images/parcours.png)

### Composants

##### Scores

![Scores](/DISIC/frago/raw/master/images/scores.png)

#### Phases

Nécessite d’ajouter un type de catégorie dans le `config.toml` ; et d’ajouter le *tag* dans chacun des contenus qu’on souhaite voir afficher dans une phase.

Les contenus listés sont donc hétérogènes.

![Phases](/DISIC/frago/raw/master/images/phases.png)

### Shortcodes

#### Galerie de capture écrans

Afficher une liste de captures d’écran pour illustrer une étude comparative.

```go
{{"{{"}} < benchmark datafile="amendes" src="-explications" >{{"}}"}}{{"{{"}}< /benchmark >{{"}}"}}
```

#### Sites similaires

Afficher la liste des sites similaires à la démarche (action de benchmarking). Les sites sont rangés par pays.

Éditer : `static/nomdelademarche/similary.json`

```go
{{"{{"}}< similary project="amendes" >{{"}}"}}{{"{{"}}< /similary >{{"}}"}}
```

#### Diagrammes

Appel de la librairie *mermaid.JS*. Ajouter la syntaxe *Mermaid* dans le contenu du shortcode.

```go
{{"{{"}}< mermaid >{{"}}"}}
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
{{"{{"}}< /mermaid >{{"}}"}}
```

![graphiques](/DISIC/frago/raw/master/images/diagramme.png)

#### Graphiques

Petit aide pour l’affichage de graphiques. Passer les données dans le contenu du *shortcode*. Choisir le titre et le type de graphique à afficher : bar, line, donut…

```go
{{"{{"}}< graphic title="Ventilation des paiements dans l’année (en milliers)" type="bar">{{"}}"}}
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
{{"{{"}}< /graphic >{{"}}"}}
```
![graphiques](/DISIC/frago/raw/master/images/graphiques.png)

### Personas

Afficher les personas sur la page de son choix en fonction du projet de son choix.

```go
{{"{{"}}< personas project="amendes" >{{"}}"}} {{"{{"}}< /personas >{{"}}"}}
```

### Parcours

Afficher les parcours sur la page de son choix en fonction du projet de son choix.

```go
{{"{{"}}< parcours project="amendes" >{{"}}"}} {{"{{"}}< /parcours >{{"}}"}}
```
