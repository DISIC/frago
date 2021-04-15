---
title: Organigrammes
description: "Nature du défi « amendes » : ministères des finances, relation entre ministères, acteurs du défi…"
date: 2020-10-12
tags:
  - amendes
phases:
  - Phase 2
---
<section class="text-center">
<h2>Acteurs - Paiement des amendes</h2>
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
<h2>Moyens de paiement d’une amende</h2>
<h3>En ligne</h3>
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
<h3>Sur place</h3>
{{< mermaid >}}
    graph TD
      A(Je suis interpellé)
      A --> B{Je paye une amende}
      B --> |Carte Bancaire| F(Site web)
      B --> |Carte Bancaire| J(Application)
      B --> |Chèque/Espèce/CB| H(Agent)
{{< /mermaid >}}
</section>
