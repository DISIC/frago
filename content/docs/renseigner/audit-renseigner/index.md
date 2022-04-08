---
title: 'Renseigner un audit d’accessibilité'
weight: 3
summary: 'Renseigner un audit d’accessibilité avec FRAGO'
---

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

![Accessibilite](/frago/images/accessibilite.png)
