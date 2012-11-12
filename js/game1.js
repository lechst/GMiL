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
             gameIntro: ["Strona 1"+gMML, "Strona 2"+gMML, "Strona 3"+gMML],
             gameIntroLayout: function() {
                 mainLayout(appName+': '+game1.name, "Please read the instructions, then click Play",
                     '<div id="intro"></div><div id="introbuttons"><input id="introback" type="button" value="Back" /><input id="intronext" type="button" value="Next" /></div>',
                     '<input id="playgame" type="button" value="Play" />');

                 var indexIntro = 0;

                 $('#intro').append(game1.gameIntro[indexIntro]);

                 $('#introback').hide();

                 $('#intronext').click(function() {
                     indexIntro = indexIntro + 1;
                     $('#introback').show();
                     if(indexIntro == (game1.gameIntro.length - 1)) {
                         $('#intronext').hide();
                     }
                     $('#intro').empty().append(game1.gameIntro[indexIntro]);
                 });

                 $('#introback').click(function() {
                     indexIntro = indexIntro - 1;
                     $('#intronext').show();
                     if(indexIntro == 0) {
                         $('#introback').hide();
                     }
                     $('#intro').empty().append(game1.gameIntro[indexIntro]);
                 });

             }};
