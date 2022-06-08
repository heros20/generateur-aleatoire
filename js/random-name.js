
var names = ["Raisel", "Iô", "Aylin", 
"Demonic", "Evette", "Tasnim", "Eirlys", 
"Melantha","Marzanna", "Takara", "Akira", "Deep", 
"Even","Kaoru", "Namika", "Eira", "Sorin", "Arcane", "Misun", 
"Squashed", "Curved", "Hilly", 
"Jagged", "Mayumi", "Shallow", "Liling", "Steep", "Straight", 
"Thick", "Thin", 
"Deafening", "Faint", "Harsh", "Laerke", "Cerridwen", 
"Hushed", "Husky", "Loud", 
"Xy", 
"Xylia", "Mute", "Môr", "Quiet", "Raspy", 
"Médée", "Shrill", "Silent", "Jona", 
"Asdis", "Laleh", "Skadi", "Jord", 
"Devi","Elyxia","Tamaris","Neollia","Karma","Kynra","Amaya","Linessia","Octavia"
,"Lyne","Merry","Phenial","Jill","Tetsu","Akira","Dante","Djim","Jake","Kero","Lavi"
,"Jeriko","Nine","Zero"] 


var surnames = ["Angegné", "Firefury", "Stoutstrike", "Mossstrike", 
"Goresnow", "Lightshield", "Dragonflare", "Dragon",
 "Frostore", "Fourwhisk", "Farsinger", 
"Fogwood", "Flameglow", "Pyreriver", "Abadras", 
"HairClip", "SunEater", "flescht", "Truthhell", 
"Nosepelt"]
// var list;

function generator() {
 document.getElementById("name").innerHTML = names[Math.floor(Math.random() * names.length)] + " " + surnames[Math.floor(Math.random() * surnames.length)];;;
}




