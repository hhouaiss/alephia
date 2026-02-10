# Alefia - Votre IA Privée et Souveraine

## À propos d'Alefia

Alefia est une agence française spécialisée dans l'implémentation d'intelligence artificielle souveraine pour les PME françaises. Notre mission est de démocratiser l'accès à l'IA tout en garantissant la sécurité, la confidentialité et la conformité RGPD.

### Notre proposition de valeur

- **IA 100% souveraine** : Hébergement en France, données jamais exposées à l'internet
- **Sécurité maximale** : Chiffrement AES-256, conformité RGPD garantie
- **Performance mesurable** : +40% de productivité, 250h gagnées par mois en moyenne
- **Support local** : Formation et assistance en français

### Partenaires technologiques

- **Mistral AI** : Modèles de langage français de pointe
- **Meta** : Technologies open source (Llama)
- **OVH** : Hébergement souverain français

## Secteurs d'activité

Nous proposons des solutions IA adaptées à différents secteurs :

1. **Artisanat** : Automatisation des devis (gain de 15h/mois/artisan)
2. **Commerce** : Analyse prédictive des stocks (30% de réduction du surstockage)
3. **Services** : Tri automatique des emails (90% de temps gagné)
4. **Industrie** : Maintenance prédictive (25% d'augmentation de durée de vie des machines)
5. **Santé** : Classification des documents médicaux (50% de réduction des erreurs)

## Impact mesurable

- **147h/mois** : Temps moyen gagné par entreprise
- **68%** : Réduction des erreurs manuelles
- **40k€/an** : Économies moyennes constatées

## Structure du projet

```
/
├── public/                 # Assets statiques (images, logos)
├── src/
│   ├── components/        # Composants réutilisables
│   │   ├── blog/         # Composants spécifiques au blog
│   │   ├── layout/       # Header, Footer, Navigation
│   │   ├── sections/     # Sections de pages (UseCases, Values)
│   │   └── shared/       # Composants partagés (Cards, Forms, Icons)
│   ├── layouts/          # Layouts de pages
│   ├── pages/            # Pages du site
│   │   ├── blog/        # Articles et catégories blog
│   │   ├── services/    # Pages de services
│   │   └── index.astro  # Page d'accueil
│   └── styles/           # Styles globaux
├── scripts/              # Scripts utilitaires
└── package.json
```

## Technologies utilisées

- **Framework** : Astro 5.2.5 (SSR)
- **Styling** : TailwindCSS + Typography plugin
- **UI Components** : React 19
- **Hébergement** : Vercel (avec Analytics et Speed Insights)
- **Base de données** : Supabase
- **Email** : Nodemailer
- **Optimisation images** : Sharp

## Commandes de développement

| Commande                    | Action                                           |
| :-------------------------- | :----------------------------------------------- |
| `npm install`               | Installer les dépendances                        |
| `npm run dev`               | Démarrer le serveur local sur `localhost:4321`   |
| `npm run build`             | Compiler le site pour la production (`./dist/`)  |
| `npm run preview`           | Prévisualiser le build en local                  |
| `npm run optimize-images`   | Optimiser les images du dossier public           |

## Pages principales

- `/` : Page d'accueil avec présentation, statistiques, cas d'usage
- `/about` : À propos d'Alefia
- `/services` : Nos services détaillés
- `/services/implementation-ia` : Service d'implémentation IA
- `/blog` : Blog avec articles sur l'IA
- `/contact` : Formulaire de contact
- `/demos` : Démonstrations de nos solutions
- `/careers` : Opportunités de carrière

## Fonctionnalités clés

### Formulaire d'audit IA
Modal en deux étapes permettant aux prospects de :
1. Renseigner leurs informations (email, entreprise, secteur)
2. Décrire leurs besoins spécifiques

### Blog
- Articles catégorisés (IA, Productivité, Sécurité, etc.)
- Composants riches (InfoBox, ComparisonTable, CTABox)
- Posts recommandés

### Sections interactives
- Statistiques clés
- Cas d'usage par secteur
- Valeurs fondamentales
- Partenaires stratégiques

## Configuration

### Variables d'environnement (.env)
```
SUPABASE_URL=votre_url_supabase
SUPABASE_KEY=votre_clé_supabase
EMAIL_USER=votre_email
EMAIL_PASS=votre_mot_de_passe
```

## Déploiement

Le site est déployé automatiquement sur Vercel à chaque push sur la branche principale.

### Optimisations Vercel
- Web Analytics activé
- Speed Insights activé
- Service d'images optimisé
- Rendu côté serveur (SSR)

## Guidelines pour les agents IA

### Ton et style
- **Professionnel mais accessible** : Nous parlons aux PME, pas aux experts tech
- **Centré sur la valeur** : Toujours mettre en avant les bénéfices concrets
- **Rassurant** : Insister sur la sécurité, la souveraineté et la conformité
- **Pédagogique** : Expliquer l'IA de manière simple et démystifier la technologie

### Valeurs à respecter
1. **Souveraineté** : Données hébergées en France, contrôle total
2. **Sécurité** : RGPD, chiffrement, confidentialité
3. **Accessibilité** : Rendre l'IA accessible aux PME françaises
4. **Transparence** : Métriques réelles, communication claire
5. **Excellence** : Technologies de pointe, partenaires reconnus

### Sujets à privilégier
- Cas d'usage concrets et ROI mesurable
- Comparaison avec solutions cloud américaines (coût, sécurité, souveraineté)
- Formation et accompagnement des équipes
- Conformité réglementaire (RGPD, HDS pour la santé)
- Open source et modèles français (Mistral)

## Contact

Pour toute question sur le projet ou l'agence Alefia, consultez notre site ou contactez-nous via le formulaire d'audit.

---

**Alefia** - L'IA qui vous appartient
