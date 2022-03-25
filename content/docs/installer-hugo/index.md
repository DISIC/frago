---
title: 'Installer Hugo'
weight: 2
---

Comprendre comment installer goHugo sur sa machine ou le configurer sur un système de déploiement automatisé.

## Héberger

#### Héberger avec Github

Consulter la page [Host on GitHub](https://gohugo.io/hosting-and-deployment/hosting-on-github/) pour plus d‘informations.

Github utilise son système interne GitHub Action. Un exemple de fichier de configuration est disponible : [gh-pages.yml](exampleSite/exampleFiles/.github/workflows/gh-pages.yml).

#### Héberger avec Gitlab

Consulter la page [Host on Gitlab](https://gohugo.io/hosting-and-deployment/hosting-on-gitlab/) pour plus d‘informations

Github utilise son système interne Gitlab CI. Un exemple de fichier de configuration est disponible : [.gitlab-ci.yml](exampleSite/exampleFiles/.gitlab-ci.yml).

## Utiliser ce module comme thème d’un projet

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


