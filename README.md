# Test_AngularJS

Test AngularJS pour l'entreprise GROUPE AVANTAGE

## Intitulé : 

Écrivez une application AngularJS qui récupère le fichier JSON fourni et qui affiche ses données sous forme d'arborescence.

Le JSON fourni est construit selon une structure en arbre, si la clé ''child'' est présente, alors elle contient le ou les éléments enfant.

Côté vue, le résultat doit ressembler à quelque chose comme ceci :

1. Dossier 1

1.1. Dossier 1.1

1.2. Dossier 1.2

1.2.1. Fichier 1.2.1

2. Dossier 2

etc.

Pour ce faire, vous utiliserez une (ou plusieurs) directive.

J'attire votre attention sur la numérotation au début de chaque ligne, celle-ci doit être créée à partir de la donnée ''id'', vous devrez donc le mettre en forme à l'aide d'un filter.

La donnée ''name'' des items a changé également : les items ne contenant pas d'enfant sont renommés en tant que ''fichier'' tandis que ceux ayant des enfants sont renommés ''dossier''.

Pour simuler une requête GET sur le fichier JSON, procédez comme ceci :

$http.get('content.json')

Votre requête HTTP doit être ''wrappée'' dans une factory, vous devrez également modifier le champ ''name'' dans cette même factory.

### Preview : https://plnkr.co/edit/TswmomLnpfi4YHS0m55P?p=preview 
