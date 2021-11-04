---
title: Accueil
outputs:
  - html
  - json
  - declaration
  - schema
  - declarationpage
cascade:
- _target:
    path: /audits/**/index.md
  outputs:
    - html
    - json
    - declaration
    - declarationpage
    - accessibility
    - quality
    - performance
    - accessibilitypage
    - qualitypage
    - performancepage
---
