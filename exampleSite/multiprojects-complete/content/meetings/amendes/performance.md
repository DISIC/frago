---
description: Analyse automatisées de la performance du site.
date: 2020-09-29
type: performance
datafile: amendes
tags:
  - amendes
phases:
  - Phase 1
---

## GTmetrix - <small>https://gtmetrix.com/reports/amendes.gouv.fr/KuMF8hmf/</small>

<div style="max-width: 960px; margin:auto;">
  <img src="/amendes/documents/amendes-performances.png" alt="">
</div>

## Extrait du chargement des assets

<div style="margin:auto;">
  <img src="/amendes/documents/amendes-performances-thread.png" alt="">
</div>

<div class="d-none">
## Test commande terminal
```
lighthouse https://www.amendes.gouv.fr --max-wait-for-load "100000" --config-path="scripts/lighthouse-config.js" --chrome-flags="--headless" --output json --output-path data/audits/amendes/lighthouse/2020-10-15.json
```
</div>
