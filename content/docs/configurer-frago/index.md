---
title: 'Configurer FRAGO'
weight: 2
---

Comprendre comment configurer FRAGO pour la génération de rapports de synthèse pour le suivi et l’amélioration de l’accessibilité web.


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


