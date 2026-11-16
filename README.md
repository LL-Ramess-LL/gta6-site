# VICE / VI — site fan communautaire

## Tester
Ouvrir `index.html` (les titres externes peuvent nécessiter un serveur HTTP local : `python -m http.server 8000`).

## Publier gratuitement
1. Créer un dépôt GitHub et y déposer **le contenu** de ce dossier, en conservant `.github/workflows/news.yml`.
2. Dans Settings > Pages, choisir Deploy from a branch, `main`, dossier `/ (root)`.
3. Dans Settings > Actions > General, autoriser les workflows et les permissions d'écriture nécessaires si l'organisation les restreint.
4. Dans Actions, lancer « Actualiser les titres GTA VI » une première fois (workflow_dispatch).
5. Le flux d'articles est ensuite rafraîchi environ toutes les 6 heures selon la disponibilité des tâches GitHub. Les liens RSS sont des titres externes non validés, et ne doivent pas être présentés comme des confirmations officielles.

## Communauté
Le formulaire actuel est une **démo locale** : les tips sont stockés uniquement dans le navigateur du visiteur. Pour recevoir et modérer des contributions publiques, il faut une base de données, une authentification, une protection anti-spam et une interface de modération. Ne pas publier de coordonnées privées.

## Notes
Ce site est non officiel. Aucun accès automatique au compte GitHub, aucun hébergement ni nom de domaine n'est configuré dans cette archive. Les guides sont des rubriques préparées, pas des guides inventés avant la sortie.
