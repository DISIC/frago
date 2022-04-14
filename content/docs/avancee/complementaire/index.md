---
title: Contenus complémentaires
---

Quelques contenus complémentaires qui peuvent être utilisés pour agrémenter le suivi de projet.

## Annuaire

Lister les personnes contactées pendant la durée du défi de mise en conformité. Cet annuaire permet de partager les contacts dans le temps de l’amélioration de la démarche.

Éditer : `static/directory.json`

### Recueil de tests utilisateurs

Les tests utilisateurs de type quantitatifs consistent à poser des questions similaires à un panel important d’usagers. Pour le service *usertests*, il existe une mise en forme pour l’analyse rapide de ces résultats.

Fonctionne à partir d’un JSON, mais pourrait marcher avec du CSV directement (Ici, penser à convertir le CSV en JSON).

Éditer : `static/nomdelademarche/usertests/nometude.json` (à faire évoluer)

Ajouter à l’entête du fichier de contenu :

```yaml
---
type: usertests // appel le gabarit usertests
datafilename: etudiants // appelle le fichier nommé etudiants :: dans static/nomdelademarche/usertests/etudiants.json
---
```

![usertests](/DISIC/frago/raw/master//images/usertests.png)

### Personas

Définir des personas et les afficher sur une même page pour les partager à l’équipe projet. On peut sélectionner les profils retenus pour les tests.

> Hugo nécessite de créer les pages correspondantes pour chaque persona ; si on veut afficher les personas en détail. Créer les pages dans  `content/personas/nomdelademarche/prenom-nom.md`.

Éditer : `static/nomdelademarche/personas.json`

![Personas](/DISIC/frago/raw/master/images/personas.png)

## Parcours

Ajouter un parcours type par persona pour fournir une base visuelle à l’équipe projet de ce qui est testé. Le gabarit permet de partir d’un élément parent unique puis de développer autant de sous branches possibles dans la limite de 4 niveaux de profondeur (compatible mobile).

Éditer : `static/nomdelademarche/personas.json`

![Parcours](/DISIC/frago/raw/master/images/parcours.png)

## Composants

#### Scores

![Scores](/DISIC/frago/raw/master/images/scores.png)

### Phases

Nécessite d’ajouter un type de catégorie dans le `config.toml` ; et d’ajouter le *tag* dans chacun des contenus qu’on souhaite voir afficher dans une phase.

Les contenus listés sont donc hétérogènes.

![Phases](/DISIC/frago/raw/master/images/phases.png)

## Shortcodes

### Galerie de capture écrans

Afficher une liste de captures d’écran pour illustrer une étude comparative.

```go
{{"{{"}} < benchmark datafile="amendes" src="-explications" >{{"}}"}}{{"{{"}}< /benchmark >{{"}}"}}
```

#### Sites similaires

Afficher la liste des sites similaires à la démarche (action de benchmarking). Les sites sont rangés par pays.

Éditer : `static/nomdelademarche/similary.json`

```go
{{"{{"}}< similary project="amendes" >{{"}}"}}{{"{{"}}< /similary >{{"}}"}}
```

### Diagrammes

Appel de la librairie *mermaid.JS*. Ajouter la syntaxe *Mermaid* dans le contenu du shortcode.

```go
{{"{{"}}< mermaid >{{"}}"}}
    graph TD
      A(Je reçois un avis)
      A --> B{Je paye une amende}
      B --> |Carte Bancaire| C(Site web)
      B --> |Carte Bancaire| D(Application)
      B --> |Chèque| E(Courrier)
      B --> |Chèque/Espèce/CB| F(Buraliste)
      B --> |Carte Bancaire| G(Téléphone)
      B --> |Chèque/Espèce/CB| H(Trésor Public)
      B --> |Virement pour étrangers| I(Site web)
{{"{{"}}< /mermaid >{{"}}"}}
```

![graphiques](/DISIC/frago/raw/master/images/diagramme.png)

### Graphiques

Petit aide pour l’affichage de graphiques. Passer les données dans le contenu du *shortcode*. Choisir le titre et le type de graphique à afficher : bar, line, donut…

```go
{{"{{"}}< graphic title="Ventilation des paiements dans l’année (en milliers)" type="bar">{{"}}"}}
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
{{"{{"}}< /graphic >{{"}}"}}
```
![graphiques](/DISIC/frago/raw/master/images/graphiques.png)

## Personas

Afficher les personas sur la page de son choix en fonction du projet de son choix.

```go
{{"{{"}}< personas project="amendes" >{{"}}"}} {{"{{"}}< /personas >{{"}}"}}
```

## Parcours

Afficher les parcours sur la page de son choix en fonction du projet de son choix.

```go
{{"{{"}}< parcours project="amendes" >{{"}}"}} {{"{{"}}< /parcours >{{"}}"}}
```
