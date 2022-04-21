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
