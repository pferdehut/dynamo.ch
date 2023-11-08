var svg = document.getElementById("morph");
var s = Snap(svg);

var background = s.rect(0, 0, 200, 200);
var morphOne = s.select('#morphOne');
var morphTwo = s.select('#morphTwo');
var morphOnePoints = morphOne.attr('d');
var morphTwoPoints = morphTwo.attr('d');

var pattern = s.select("pattern");

var blur = s.filter(Snap.filter.shadow(0, 0, 4, 'rgb(213,64,172)', 0.8));


morphTwo.attr({
    opacity: "0"
});

background.attr({
    fill: pattern
});

var shadow = morphOne.use();

shadow.attr({
    fill: "#fff"
});

morphOne.attr({
    filter: blur,
    stroke: "#fff"
})

var toFancy = function(){
    morphOne.animate({ d: morphTwoPoints }, 3000, mina.linear, toSimple);  
}
var toSimple = function(){
    morphOne.animate({ d: morphOnePoints }, 3000, mina.linear, toFancy); 
}
toSimple();

background.attr({
    mask: shadow
});

window.addEventListener("scroll",() =>{
    var location = `${window.pageYOffset}`;
    s.transform('t'+(location/5)+','+(-location/5)+'s'+(1-(location/500)));
}, false);