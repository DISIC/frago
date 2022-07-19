---
title: Audits
outputs:
  - html
  - json
disableKinds:
  - RSS
  - taxonomy
  - taxonomyTerm
cascade:
- _target:
    path: /audits/**/index.md
  outputs:
    - html
    - json
    - declaration
    - declarationpage
    - accessibility
    - ecoconception
    - quality
    - recommendation
    - performance
    - accessibilitypage
    - ecoconceptionpage
    - qualitypage
    - recommendationpage
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
    - declaration
    - accessibility
    - ecoconception
    - quality
    - recommendation
    - performance
    - accessibilitypage
    - ecoconceptionpage
    - qualitypage
    - recommendationpage
    - performancepage
- _target:
    path: /audits/index.md
  type: "audits"
---
