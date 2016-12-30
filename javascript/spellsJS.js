var spells = angular.module("spells",[]);
spells.controller("spellsCtrl",function($scope){
    $scope.query = {}
    $scope.queryBy = '$'
    $scope.spellsList = [
      {
      "name" : "Accio",
      "description" : "Summons an object"
      },
      {
      "name" : "Aguamenti",
      "description" : "Shoots water from wand"
      },
      {
      "name" : "Alohomora",
      "description" : "Opens locked objects"
      },
      {
      "name" : "Anapneo",
      "description" : "Clears the airway of a target"
      },
      {
      "name" : "Aparecium",
      "description" : "Reveals invisible ink"
      },
      {
      "name" : "Avifors",
      "description" : "Turns small objects into birds"
      },
      {
      "name" : "Avis",
      "description" : "Launches birds from your wand"
      },
      {
      "name" : "Colloportus",
      "description" : "Magically locks door"
      },
      {
      "name" : "Confringo",
      "description" : "Explode Flames on target"
      },
      {
      "name" : "Confundus",
      "description" : "Used to confuse opponent"
      },
      {
      "name" : "Conjunctivitis",
      "description" : "Damages opponents eyesight"
      },
      {
      "name" : "Crucio",
      "description" : "Tortures opponent Unforgivable"
      },
      {
      "name" : "Defodio",
      "description" : "Dig out materials"
      },
      {
      "name" : "Deletrius",
      "description" : "Counters 'Prior Incatato'"
      },
      {
      "name" : "Densaugeo",
      "description" : "Enlarges Teeth"
      },
      {
      "name" : "Deprimo",
      "description" : "Wind damaging spell"
      },
      {
      "name" : "Diffindo",
      "description" : "Splits seams"
      },
      {
      "name" : "Dissendium",
      "description" : "Opens 'one-eyed witch' hump"
      },
      {
      "name" : "Duro",
      "description" : "Makes Objects Hard"
      },
      {
      "name" : "Engorgio",
      "description" : "Enlarges and item"
      },
      {
      "name" : "Ennervate",
      "description" : "Counters Stupefy"
      },
      {
      "name" : "Episkey",
      "description" : "Heals minor injuries"
      },
      {
      "name" : "Erecto",
      "description" : "Erects things"
      },
      {
      "name" : "Expelliarmus",
      "description" : "Disarms your opponent"
      },
      {
      "name" : "Expulso",
      "description" : "Makes Objects Explode"
      },
      {
      "name" : "Ferula",
      "description" : "Creates bandages"
      },
      {
      "name" : "Fidelius",
      "description" : "Hides a secret within someone"
      },
      {
      "name" : "Flagrate",
      "description" : "Allows user to write on objects"
      },
      {
      "name" : "Flipendo",
      "description" : "Knocks an object backwards"
      },
      {
      "name" : "Furnunculus",
      "description" : "Produces boils on opponent"
      },
      {
      "name" : "Geminio",
      "description" : "Duplicates an Object"
      },
      {
      "name" : "Glisseo",
      "description" : "Turns stairs into ramps"
      },
      {
      "name" : "Homorphus",
      "description" : "Werewolf 'cure' by Lockhart"
      },
      {
      "name" : "Immobulus",
      "description" : "Renders target immobile"
      },
      {
      "name" : "Impedimenta",
      "description" : "Slows an advancing object"
      },
      {
      "name" : "Imperio",
      "description" : "Controls a person Unforgivable"
      },
      {
      "name" : "Impervius",
      "description" : "Makes an object repel water"
      },
      {
      "name" : "Incarcerous",
      "description" : "Ties someone up"
      },
      {
      "name" : "Incendio",
      "description" : "Starts a fire"
      },
      {
      "name" : "Langlock",
      "description" : "Glues tongue of opponent to roof of mouth"
      },
      {
      "name" : "Legilimens",
      "description" : "Allows the caster to delve into the mind of the victim"
      },
      {
      "name" : "Levicorpus",
      "description" : "Hangs victim upside down by feet"
      },
      {
      "name" : "Liberacorpus",
      "description" : "Counterspell"
      },
      {
      "name" : "Lumos",
      "description" : "Creates light at wand tip"
      },
      {
      "name" : "Mobiliarbus",
      "description" : "Moves objects with wand"
      },
      {
      "name" : "Mobilicorpus",
      "description" : "Moves unconscious bodies"
      },
      {
      "name" : "Morsmorde",
      "description" : "Conjures the Dark Mark"
      },
      {
      "name" : "Muffliato",
      "description" : "Prevents nearby people from listening to conversations"
      },
      {
      "name" : "Nox",
      "description" : "Counter to Lumos"
      },
      {
      "name" : "Obliviate",
      "description" : "Erases memories"
      },
      {
      "name" : "Obscuro",
      "description" : "Blindfolds the victim"
      },
      {
      "name" : "Oppugno",
      "description" : "Makes conjured items attack"
      },
      {
      "name" : "Orchideous",
      "description" : "Conjures a bunch of flowers"
      },
      {
      "name" : "Pack",
      "description" : "Packs a trunk (suitcase)"
      },
      {
      "name" : "Protego",
      "description" : "Cause spells to reflect back to the sender"
      },
      {
      "name" : "Quietus",
      "description" : "Counter spell for Sonorus"
      },
      {
      "name" : "Reducio",
      "description" : "Returns items to original size. Counters Engorgio"
      },
      {
      "name" : "Reducto",
      "description" : "Blasts solid objects aside"
      },
      {
      "name" : "Relashio",
      "description" : "Releases user from binding"
      },
      {
      "name" : "Rennervate",
      "description" : "Cures unconsciousness"
      },
      {
      "name" : "Reparo",
      "description" : "Repairs Things"
      },
      {
      "name" : "Rictusempra",
      "description" : "Tickles opponent"
      },
      {
      "name" : "Riddikulus",
      "description" : "Use this spell and laugh to defeat a boggart"
      },
      {
      "name" : "Scruge",
      "description" : "Destroys ectoplasm (remains of ghosts)"
      },
      {
      "name" : "Sectumsempra",
      "description" : "Causes wounds as if slashed by a sword"
      },
      {
      "name" : "Serpensortia",
      "description" : "Produces Snake"
      },
      {
      "name" : "Silencio",
      "description" : "Silences victim"
      },
      {
      "name" : "Sonorus",
      "description" : "Amplifies voice"
      },
      {
      "name" : "Stupefy",
      "description" : "Knocks out opponent"
      },
      {
      "name" : "Tarantallegra",
      "description" : "Forces opponent to dance"
      },
      {
      "name" : "Tergeo",
      "description" : "Cleans up messes"
      },
      {
      "name" : "Waddiwasi",
      "description" : "Unsticks an object"
      }
    ];
    $scope.orderProp="name";                
});
