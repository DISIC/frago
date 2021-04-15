---
title: Audit de performance
description: Analyse automatisées de la performance du site.
date: 2020-09-29
type: performance
datafile: amendes
tags:
  - amendes
phases:
  - Phase 1
---

<div class="d-none">
## Test commande terminal
```
lighthouse https://www.amendes.gouv.fr --max-wait-for-load "100000" --config-path="scripts/lighthouse-config.js" --chrome-flags="--headless" --output json --output-path content/audits/amendes/lighthouse/2020-10-15.json
```
</div>
