---
title: "Speechy"
description: "Le projet Speechy est un projet qui permet d'enrengistrer la voix et de faire une transcription de ce qui a été dit ainsi qu'un résumé avec les points clés abordés."
pubDate: "Mar 28 2024"
lang: "fr"
heroImage: "/portfolio/speechy.webp"
badge: "PERSONNEL"
tags: ["Azure", "IA", "LLM", "Nuxt", "TypeScript"]
---

Ce projet est encore en cours de développement.

## Liens

## Besoin
Ce projet a été mené durant mon temps libre pour mes propres besoins. Au cours de mon cursus en alternance, j'ai découvert un élément très important dans mon travail : la prise de notes. En effet, en tant qu'alternant j'avais de longues periodes sans ecoles et inversement de longues periodes sans entreprises. Ainsi, quand je revenais à l'école ou en entreprise je me suis très vite rendu compte que se rappeler de tête tout ce que j'ai fait et ce sur quoi j'était en train de travailler était impossible. 

J'ai ainsi commencer à prendre des notes et à documenter tout ce que je faisais et tout ce que j'apprenais que ce soit à l'école ou au travail. J'ai commencer ne utilisant Google Docs et je suis ensuite passé sur Notion que j'utilise toujours d'ailleurs. Cependant, après quelques années je me suis rendu compte que lorsque je terminais une réunion par exemple et que je mettais en forme mes notes j'ommetais certains choses car je voulais à la fois étoffer mais aussi reformuler mes notes. Je perdais donc un peu d'informations. 

Puis un jour j'ai essayer un outil sur internet qui permettait de faire une transcription de ce que je disais et cela m'a permis de ne rien omettre de la réunion que je venais d'avoir. De plus, j'ai trouvé cette façon de faire utile lorsque je réflechis pour un projet par exemple. Cela étant dit, il me fallait une plateforme personnel pour faire cela et la connecter à mon notion (où je garde toutes mes traces écrites.)

## Objectifs
L'objectif est donc de créer un site web qui permet de faire une transcription de l'enrengidstrement vocal et de fournir un résumé et les points clés de cet enrengistrement. 

Un autre objectif était d'utiliser de l'IA dans un projet réel afin de découvrir la puissance de ces outils.


## Methodologie


## Technologies Utilisés
Je suis encore en pleine reflexion. En effet, j'ai commencé un POC en utilisant whisper d'open ai et gpt pour résumer et avoir les points clés cependant je me suis rendu compte qu'en termes de cout cela allait très vite couté chère. 

Je me suis ensuite tourné vers les modèles open source plus légers que je pouvais faire tourner en local (pour le traitement après transcription). Cela marchait (un peu moins bien que whisper certes car les modèles sont plus lègers) et m'evitait de payer énormément pour rien. Cependant, je veux pouvoir utiliser ce projet n'importe sans forcément faire tourner un llm sur chaque pc que je veux utiliser. 

Ainsi, je commence à refléchir de faire herberger ce modèle sur Azure. Cela me fera économiser beaucoup d'argent comparer a utiliser une llm via l'api de open ai par exemple. Je pourais de plus utiliser des functions afin de limiter encore plus les couts.

* Azure
* Nuxt
* Shadcn/ui


## Results
A voir

## Conclusion
A voir
