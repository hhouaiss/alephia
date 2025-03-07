---
layout: ../layouts/MarkdownLayout.astro
title: À propos d'Alephia - Notre mission et nos valeurs
---

import Icon from '../components/shared/Icon.astro';
import ValuesSection from '../components/sections/ValuesSection.astro';

<div class="prose prose-lg max-w-4xl mx-auto">

# À propos d'Alefia

## Notre mission

Chez Alefia, nous avons une mission claire : **démocratiser l'accès à l'intelligence artificielle pour les entreprises françaises tout en garantissant la souveraineté des données**.

Fondée en 2023 par une équipe d'experts en IA et en cybersécurité, Alefia est née d'un constat simple : les solutions d'IA actuelles obligent souvent les entreprises à faire un choix impossible entre performance et confidentialité.

## Notre vision

Nous croyons fermement que l'avenir de l'IA en entreprise doit être :

- **Souverain** : vos données restent sous votre contrôle, en France
- **Performant** : des modèles d'IA de pointe adaptés à vos besoins
- **Accessible** : des solutions abordables pour toutes les tailles d'entreprise
- **Éthique** : une IA responsable, transparente et conforme au RGPD

</div>

<ValuesSection />

<div class="prose prose-lg max-w-4xl mx-auto mt-16">

## Notre équipe

Alefia réunit des experts passionnés par l'IA et engagés pour la souveraineté numérique française :

- **Thomas Dubois** - CEO & Co-fondateur  
  Expert en IA avec 15 ans d'expérience dans le déploiement de solutions d'entreprise

- **Sophie Martin** - CTO & Co-fondatrice  
  Docteure en Machine Learning, anciennement chercheuse au CNRS

- **Marc Lefevre** - Responsable Cybersécurité  
  Certifié CISSP avec une expertise en protection des données sensibles

- **Émilie Rousseau** - Directrice des Opérations  
  Spécialiste en transformation digitale des PME françaises

## Nos partenaires technologiques

Nous collaborons avec les meilleurs acteurs français et européens pour vous offrir des solutions d'IA souveraines :

- **Mistral AI** - Modèles de langage français de pointe
- **OVHcloud** - Hébergement 100% français
- **ANSSI** - Conformité aux standards de sécurité

## Notre engagement pour la souveraineté numérique

Dans un monde où les données sont devenues le nouvel or noir, nous pensons que les entreprises françaises doivent pouvoir bénéficier des avancées de l'IA sans compromettre leur indépendance technologique.

C'est pourquoi nous avons développé une approche unique :

1. **Hébergement 100% français** de tous nos modèles d'IA
2. **Aucune donnée partagée** avec des serveurs étrangers
3. **Conformité totale au RGPD** et aux réglementations européennes
4. **Transparence complète** sur le fonctionnement de nos modèles

</div>

{/* CTA Final Section */}
<section class="bg-primary text-white py-20 mt-20">
  <div class="container mx-auto px-4 text-center">
    <h2 class="text-3xl font-bold mb-6">Prêt à transformer votre entreprise ?</h2>
    <p class="text-xl mb-8">Obtenez votre audit IA gratuit et découvrez votre potentiel d'optimisation</p>
    <button 
      type="button"
      onclick="openModal()"
      class="bg-secondary hover:bg-secondary-light text-primary font-semibold px-8 py-4 rounded-lg transition-colors text-lg"
    >
      Démarrer mon audit gratuit
    </button>
    <p class="text-sm mt-4 text-gray-300">Déploiement en 72h - Formation incluse</p>
  </div>
</section>