# Guide de déploiement - Portfolio sur GitHub et Vercel

## 📦 Étape 1 : Créer le repository sur GitHub

1. Allez sur [GitHub.com](https://github.com) et connectez-vous
2. Cliquez sur le bouton **"+"** en haut à droite → **"New repository"**
3. Configurez votre repository :
   - **Repository name** : `portfolio` (ou un nom de votre choix)
   - **Description** : "Portfolio professionnel - Élève Ingénieur en Informatique"
   - **Visibilité** : Public (recommandé pour un portfolio)
   - ⚠️ **NE COCHEZ PAS** "Add a README file" (on en a déjà un)
   - ⚠️ **NE COCHEZ PAS** "Add .gitignore" (on en a déjà un)
4. Cliquez sur **"Create repository"**

## 🚀 Étape 2 : Connecter votre projet local à GitHub

Une fois le repository créé, GitHub vous donnera des commandes. Utilisez celles-ci :

```bash
cd /Users/benagouzlaneadil/Downloads/porteflow

# Remplacez "adil-bnz" par votre nom d'utilisateur GitHub si différent
git remote add origin https://github.com/adil-bnz/portfolio.git

# Ou si vous préférez SSH (si vous avez configuré une clé SSH)
# git remote add origin git@github.com:adil-bnz/portfolio.git

git branch -M main
git push -u origin main
```

## 🌐 Étape 3 : Déployer sur Vercel

### Option A : Via l'interface web Vercel (Recommandé)

1. Allez sur [vercel.com](https://vercel.com)
2. Cliquez sur **"Sign Up"** ou **"Log In"**
3. Connectez-vous avec votre compte **GitHub**
4. Cliquez sur **"Add New..."** → **"Project"**
5. Sélectionnez votre repository `portfolio`
6. Vercel détectera automatiquement Next.js
7. Cliquez sur **"Deploy"**
8. Attendez 1-2 minutes... 🎉 Votre portfolio sera en ligne !

### Option B : Via la CLI Vercel

```bash
# Installer Vercel CLI
npm i -g vercel

# Dans le dossier du projet
cd /Users/benagouzlaneadil/Downloads/porteflow

# Lancer le déploiement
vercel

# Suivez les instructions à l'écran
```

## ✅ Après le déploiement

Vercel vous donnera une URL comme : `https://votre-portfolio.vercel.app`

Votre portfolio sera automatiquement mis à jour à chaque fois que vous poussez sur GitHub ! 🚀

## 📝 Notes importantes

- Le portfolio sera accessible publiquement
- Les mises à jour sur GitHub déclenchent automatiquement un nouveau déploiement
- Vous pouvez ajouter un nom de domaine personnalisé dans les paramètres Vercel

