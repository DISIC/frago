---
title: 'Renseigner un plan d’actions'
weight: 5
summary: 'Intégrer un plan d’actions par année'
---

Un plan d’actions consiste principalement à éditer la liste de actions engagées pour une année.

On doit l’éditer à l'avancée, c’est-à-dire pour l’année à venir, mais aussi le mettre à jour avec des nouvelles actions ainsi qu'indiquer leur état d'avancée (en cours, terminée, reportée…)

## Actions générales

### Architecture

Pour avoir un plan d’actions, il est nécessaire de créer un nouveau type de contenu qui se nomme : `plans`. Puis de créer des pages avec des années, ces pages n’auront pas de contenu, elles seront vides.

```
.
├── config.toml
└── content
    ├── audits
    │   ├── projet1
    │   │     ├── index.md // Ajouter un entête avec le titre de la démarche
    │   │     └── accessibility
    │   │          ├── 2020-10-15.csv
    │   │          ├── 2020-11-15.csv
    │   │          └── context.yml // Déclarer le contexte de chaque audit
    │   └── projet2
    │          ├── index.md // Ajouter un entête avec le titre de la démarche
    │          └── accessibility
    │              ├── 2020-10-15.csv
    │              ├── 2020-10-15.csv
    │              └── context.yml // Déclarer le contexte de chaque audit
    └── plans
        ├── 2021.md // Page du plan d’actions 2021, le nom du fichier doit comporter l’année
        ├── 2022.md // Page du plan d’actions 2022, le nom du fichier doit comporter l’année
        └── actions // Répertoire pour insérer les actions générales à tout l'organisme
            ├── 2021-01-15.csv // La date de création, la publication récupère la dernière date de mise à jour du fichier
            └── 2022-02-10.csv
```

### Format fichier d’actions (csv)

| Type               | Action                  | Détails                                 | Avancement |
|--------------------|-------------------------|-----------------------------------------|------------|
| Recensement        | Recensement             | Recensement de l’ensemble des sites     | En cours   |
| Organisation       | Évaluation              | Évaluation des besoins                  | En cours   |
| Communication      | Mise en place           | Mise en place d’action de communication | Terminée   |
| Audit              | Évaluation              | Évaluation rapide de 10 sites           | En cours   |
| Organisation       | Mise en place           | Procédure spécifique                    | 03-05      |
| Mise en conformité | Mise en conformité RGAA | Mise en conformité de 10 sites          | 05/05/2022 |

## Actions par service numérique

Il y a effectivement des actions générales à un organisme : formation, RH, mise en place du plan d’actions… mais il existe aussi des actions spécifiques à chaque démarche.

### Architecture

```
.
├── config.toml
└── content
    ├── audits
    │   ├── projet1
    │   │     ├── index.md // Ajouter un entête avec le titre de la démarche
    │   │     ├── accessibility
    │   │     │     ├── 2020-10-15.csv
    │   │     │     ├── 2020-11-15.csv
    │   │     │     └── context.yml // Déclarer le contexte de chaque audit
    │   │     └── actions // Répertoire pour insérer les actions
    │   │           ├── 2021-01-15.csv
    │   │           └── 2022-02-10.csv
    │   └── projet2
    │         ├── index.md // Ajouter un entête avec le titre de la démarche
    │         ├── accessibility
    │         │    ├── 2020-10-15.csv
    │         │    ├── 2020-10-15.csv
    │         │    └── context.yml // Déclarer le contexte de chaque audit
    │         └── actions // Répertoire pour insérer les actions
    │              ├── 2021-03-20.csv
    │              └── 2022-02-10.csv
    └── plans
        ├── 2021.md // Page du plan d’action 2021, le nom du fichier doit comporter l’année
        ├── 2022.md // Page du plan d’action 2022, le nom du fichier doit comporter l’année
        └── actions // Répertoire pour insérer les actions générales à tout l'organisme
            ├── 2021-01-15.csv // La date importe peut
            └── 2022-02-10.csv
```

## Résultat

Au final on obtient un tableau des actions avec les actions par services numériques. La date du plan d’actions correspond à la dernière date de modification d’un fichier concerné par cette année en particulier.

Dans le plan d’actions, on affiche en dessous la liste des derniers audits réalisés par services numérique. A développer, la possibilité d'ajouter un audit vierge à une démarche (avec une date) pour le considérer comme un audit planifié dans le plan d’actions.

| Démarches                                        | Type               | Action                  | Détails                                 | Avancement              |
|--------------------------------------------------|--------------------|-------------------------|-----------------------------------------|-------------------------|
| Contributions Indirectes En Ligne (CIEL)         | Recensement        | Recensement             | Recensement de l’ensemble des sites     | En cours                |
| Contributions Indirectes En Ligne (CIEL)         | Organisation       | Évaluation              | Évaluation des besoins                  | En cours                |
| Détaxe électronique pour les touristes (PABLO-I) | Communication      | Mise en place           | Mise en place d’action de communication | Terminée                |
| Détaxe électronique pour les touristes (PABLO-I) | Audit              | Évaluation              | Évaluation rapide de 10 sites           | En cours                |
| Général                                          | Organisation       | Mise en place           | Procédure spécifique                    | De mars à mai 2022      |
| Général                                          | Mise en conformité | Mise en conformité RGAA | Mise en conformité de 10 sites          | Le 5 mai 2022           |

