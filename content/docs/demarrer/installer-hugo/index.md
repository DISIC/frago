---
title: 'Installer Hugo'
weight: 1
---

Comprendre comment installer goHugo sur sa machine ou le configurer sur un système de déploiement automatisé.

## Installer

### Installer goHugo

 * <https://gohugo.io/getting-started/installing/>
 * <https://learn.netlify.app/fr/basics/installation/>
 * [Howto: Install Hugo on Windows](https://discourse.gohugo.io/t/howto-install-hugo-on-windows/741)

## Héberger

#### Héberger avec Github

Consulter la page [Host on GitHub](https://gohugo.io/hosting-and-deployment/hosting-on-github/) pour plus d‘informations.

Github utilise son système interne GitHub Action. Un exemple de fichier de configuration est disponible : [gh-pages.yml](/frago/exampleSite/exampleFiles/.github/workflows/gh-pages.yml).

#### Héberger avec Gitlab

Consulter la page [Host on Gitlab](https://gohugo.io/hosting-and-deployment/hosting-on-gitlab/) pour plus d‘informations

Github utilise son système interne Gitlab CI. Un exemple de fichier de configuration est disponible : [.gitlab-ci.yml](/frago/exampleSite/exampleFiles/.gitlab-ci.yml).

#### Héberger sans GO

Il est possible que votre plateforme de génération ne supporte pas Go (ou une version de goHugo non « extended »). Vous pouvez ajouter le répertoire `themes` à votre `.gitignore` pour ne pas le pousser dans votre dépôt `.git` de contenu.

Au moment de la génération en `production`, vous appeler le thème grâce à un submodule (ce sera fait à chaque génération).

```bash
git submodule add https://github.com/disic/frago.git/ themes/frago -f && git submodule update --init --recursive && hugo --gc --minify --buildFuture --templateMetrics
```
