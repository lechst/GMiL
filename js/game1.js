var gMML = '<div class="chessboard">';

for(var i=0; i < 64; i++) {
    if(i==27) {
        gMML=gMML+'<div class="field field'+i+'"><div class="pawn"></div></div>';
    } else {
        gMML=gMML+'<div class="field field'+i+'"></div>';
    }
}

gMML = gMML + '</div>';

var gMML0 = '<div class="chessboard">';

for(var i=0; i < 64; i++) {
    if(i==0) {
        gMML0=gMML0+'<div class="field field'+i+'"><div class="pawn"></div></div>';
    } else {
        gMML0=gMML0+'<div class="field"></div>';
    }
}

gMML0 = gMML0 + '</div>';

var gMML1 = '<div class="chessboard">';

for(var i=0; i < 64; i++) {
    if(i==27) {
        gMML1=gMML1+'<div class="field field'+i+'"><div class="pawn"></div></div>';
    } else if(i==28 || i==34 || i==35 || i==36) {
        gMML1=gMML1+'<div class="field field'+i+'"></div>';
    } else {
        gMML1=gMML1+'<div class="field"></div>';
    }
}

gMML1 = gMML1 + '</div>';

var gMML2 = '<div class="chessboard">';

for(var i=0; i < 64; i++) {
    if(i==63) {
        gMML2=gMML2+'<div class="field field'+i+'"><div class="pawn"></div></div>';
    } else {
        gMML2=gMML2+'<div class="field"></div>';
    }
}

gMML2 = gMML2 + '</div>';

var game1 = {name: 'Pawn On a Chessboard',
             gameMainMenuLayout: gMML,
             gameIntro: ["Starting from the green field..."+gMML0, "...and making one of the possible moves..."+gMML1, "...you have to reach the red field before opponent."+gMML2],
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
