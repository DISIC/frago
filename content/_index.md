---
title: Accueil
outputs:
  - html
  - json
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
- _target:
    path: /audits/**/_index.md
  outputs:
    - html
    - json
    - declaration
    - declarationpage
- _target:
    path: /audits/_index.md
  outputs:
    - html
    - json
    - accessibility
    - quality
    - performance
    - accessibilitypage
    - qualitypage
    - performancepage
- _target:
    path: /audits/index.md
  type: "audits"
---
