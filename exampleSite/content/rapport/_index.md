---
title: Rapport Commando UX
---


## Organigrammes
### Acteurs - Paiement des amendes

{{< mermaid >}}
    graph TD
      B(Ministère des finances)
      A(Ministère de l'intérieur)
      Z(Société Open)
      C(ANTAI)
      D(DGFIP)
      Y(Prestataire)
      B --> D
      A --> C
      Z --> Y
      C --> |Réalisation| E
      D --> |Définition du besoin| E
      Y --> |Développement| E
      E{Amendes}
      E --> |Contestation amendes| F(ANTAI)
      E --> |Consultation dossiers| G(ANTAI)
      E --> |Consultation permis| H(Intérieur)
{{< /mermaid >}}

<hr class="divider">

### Moyens de paiement d’une amende

{{< mermaid >}}
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
{{< /mermaid >}}

## Personas

{{< personas project="amendes" >}} {{< /personas >}}

## Parcours

{{< parcours project="amendes" >}} {{< /parcours >}}
