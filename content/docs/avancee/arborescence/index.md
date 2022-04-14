---
title: Arborescence
---

## Architecture simplifiée

Arborescence avec génération des pages d’audit auto-générées. L'utilisateur n’a pas besoin de créer une page pour chaque type d’audit et par projet.

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
