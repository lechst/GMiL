var gMML = '<div class="chessboard">';

for(var i=0; i < 64; i++) {
    if(i==27) {
        gMML=gMML+'<div class="field field'+i+'"><div class="pawn"></div></div>';
    } else {
        gMML=gMML+'<div class="field field'+i+'"></div>';
    }
}

gMML = gMML + '</div>';

var game1 = {name: 'Pawn On a Chessboard',
             gameMainMenuLayout: gMML,
             gameIntro: ["Strona 1"+gMML, "Strona 2", "Strona 3"],
             gameIntroLayout: function() {
                 mainLayout(appName+': '+this.name, "Please read the instructions, then click Play",
                     '<div id="intro"></div><div id="introbuttons"><input id="introback" type="button" value="Back" /><input id="intronext" type="button" value="Next" /></div>',
                     '<input id="playgame" type="button" value="Play" />');
                 $('#intro').append(this.gameIntro[0]);
             }};
