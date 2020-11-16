---
title: Analyse statistique du paiement des amendes
description: Reprise des chiffres fournies concernant le paiement des amendes.
date: 2020-11-06
tags:
  - amendes
phases:
  - Phase 3
---

## Ventilation des paiements dans l’année

|            |  Vitesse  | PV électronique | Feux rouges |   Total   |
| ---------- | :-------: | :------------------------: | :---------: | :-------: |
| Internet   | 3 351 455 |          2 482 227         |    85 205   | 5 918 887 |
| Smartphone |  492 863  |           497 456          |    12 840   | 1 003 159 |

{{< graphic title="Ventilation des paiements dans l’année (en milliers)" type="bar">}}
{
    labels: ["Vitesse", "PV électronique", "Feux rouges"],
    datasets: [
      {
        name: "Internet",
        values: [3351, 2482, 85],
      },
      {
        name: "Smartphone",
        values: [492, 497, 12]
      }
    ]
}
{{< /graphic >}}


## Part des applications sur total des encaissements en télépaiement

{{< graphic title="Répartition applications par années (sans stationnement)" type="line">}}
{
    labels: ["2015", "2016", "2017", "2018", "2019"],
    datasets: [
      {
        name: "Mobile",
        values: [4.49, 7.3, 8.1, 10.93, 15.20],
      },
      {
        name: "amendes.gouv",
        values: [76.7, 74.7, 75.2, 74.18, 70.49]
      },
      {
        name: "Intranet",
        values: [5.75, 4.9, 4.2, 3.99, 4.04]
      },
      {
        name: "Point de vente",
        values: [7.14, 8, 7.9, 7.61, 7.17]
      },
      {
        name: "Téléphone",
        values: [5.89, 5.05, 4.52, 3.28, 3.07]
      }
    ]
}
{{< /graphic >}}

<div hidden>
{{< graphic title="Répartition applications par années" type="line">}}
{
    labels: ["2015", "2016", "2017", "2018", "2019"],
    datasets: [
      {
        name: "Mobile",
        values: [4.49, 7.3, 8.1, 10.1, 13.6],
      },
      {
        name: "amendes.gouv",
        values: [76.7, 74.7, 75.2, 68.7, 63.2]
      },
      {
        name: "Intranet",
        values: [5.75, 4.9, 4.2, 3.7, 3.63]
      },
      {
        name: "Point de vente",
        values: [7.14, 8, 7.9, 7.05, 6.44]
      },
      {
        name: "Téléphone",
        values: [5.89, 5.05, 4.52, 3.04, 2.76]
      },
      {
        name: "stationnement.gouv",
        values: [0, 0, 0, 7.35, 10.2]
      }
    ]
}
{{< /graphic >}}
</div>

### 2015

|                                            |  Part  | Variation N-1 |
| ------------------------------------------ | :----: | :-----------: |
| Application mobile (TAM)                   |  4,49% |               |
| Paiement des amendes sur l'intranet (PAI)  |  5,75% |    -18,09%    |
| Point de vente agrée (PVA)                 |  7,14% |    +14,10%    |
| Serveur vocal intéractif (SVI)	5,89%       | 5,89%  |    -5,98%    |
| Site internet amendes.gouv.fr (TAI)        | 76,73% |     -4,64%    |
| Site internet stationnement.gouv.fr (TFI)  |  0,00% |               |

### 2016

|                                           |  Part  | Variation N-1 |
| ----------------------------------------- | :----: | :-----------: |
| Application mobile (TAM)                  |  7,32% |    +63,02%    |
| Paiement des amendes sur l'intranet (PAI) |  4,91% |    -14,60%    |
| Point de vente agrée (PVA)                |  8,02% |    +12,29%    |
| Serveur vocal intéractif (SVI)            |  5,05% |    -14,23%    |
| Site internet amendes.gouv.fr (TAI)       | 74,70% |     -2,65%    |
| Site internet stationnement.gouv.fr (TFI) |  0,00% |               |

### 2017

|                                           |  Part  | Variation N-1 |
| ----------------------------------------- | :----: | :-----------: |
| Application mobile (TAM)                  |  8,10% |    +10,60%    |
| Paiement des amendes sur l'intranet (PAI) |  4,20% |    -14,46%    |
| Point de vente agrée (PVA)                |  7,94% |     -1,02%    |
| Serveur vocal intéractif (SVI)            |  4,52% |    -10,52%    |
| Site internet amendes.gouv.fr (TAI)       | 75,24% |     +0,73%    |
| Site internet stationnement.gouv.fr (TFI) |  0,00% |               |

### 2018

|                                           |  Part  | Variation N-1 |
| ----------------------------------------- | :----: | :-----------: |
| Application mobile (TAM)                  | 10,13% |    +25,02%    |
| Paiement des amendes sur l'intranet (PAI) |  3,70% |    -11,84%    |
| Point de vente agrée (PVA)                |  7,05% |    -11,16%    |
| Serveur vocal intéractif (SVI)            |  3,04% |    -32,83%    |
| Site internet amendes.gouv.fr (TAI)       | 68,73% |     -8,66%    |
| Site internet stationnement.gouv.fr (TFI) |  7,44% |               |

### 2018 (sans stationnement.gouv.fr)

|                                           |  Part  | Variation N-1 |
| ----------------------------------------- | :----: | :-----------: |
| Application mobile (TAM)                  | 10,93% |    +34,02%    |
| Paiement des amendes sur l'intranet (PAI) |  3,99% |        -5%    |
| Point de vente agrée (PVA)                |  7,61% |     -4,16%    |
| Serveur vocal intéractif (SVI)            |  3,28% |    -27,83%    |
| Site internet amendes.gouv.fr (TAI)       | 74,18% |     -1,40%    |

### 2019

|                                           |  Part  | Variation N-1 |
| ----------------------------------------- | :----: | :-----------: |
| Application mobile (TAM)                  | 13,64% |    +34,75%    |
| Paiement des amendes sur l'intranet (PAI) |  3,63% |     -1,87%    |
| Point de vente agrée (PVA)                |  6,44% |     -8,67%    |
| Serveur vocal intéractif (SVI)            |  2,76% |     -9,10%    |
| Site internet amendes.gouv.fr (TAI)       | 63,25% |     -7,98%    |
| Site internet stationnement.gouv.fr (TFI) | 10,28% |    +39,74%    |

### 2019 (sans stationnement.gouv.fr)

|                                           |  Part  | Variation N-1 |
| ----------------------------------------- | :----: | :-----------: |
| Application mobile (TAM)                  | 15,20% |    +39,06%    |
| Paiement des amendes sur l'intranet (PAI) |  4,04% |      1,25%    |
| Point de vente agrée (PVA)                |  7,17% |     -5,78%    |
| Serveur vocal intéractif (SVI)            |  3,07% |     -6,4%     |
| Site internet amendes.gouv.fr (TAI)       | 70,49% |     -4,97%    |


## Ventilation des appels téléphonique

|          | Contrôle automatisé | PV électronique | FPS usagers | Contestation | Étrangers | Collectivités territoriales |  AFD  |
| -------- | :-----------------: | :-------------: | :---------: | :----------: | :-------: | :-------------------------: | :---: |
| Appels   |       810 798       |      438 151    |    71 326   |     62 593   |   39 302  |           21 834            | 11 645|


{{< graphic title="Ventilation des appels téléphonique (en milliers)" type="bar">}}
{
    labels: ["Contrôle automatisé", "PV électronique", "FPS usagers","Contestation","Étrangers","Collectivités territoriales","AFD"],
    datasets: [
      {
        name: "Appels",
        values: [811,438,71,63,40,22,12],
      }
    ]
}
{{< /graphic >}}
