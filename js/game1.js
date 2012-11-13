var gL = '<div class="chessboard">';

for(var i=0; i < 64; i++) {
    gL=gL+'<div class="field"></div>';
}

gL = gL + '</div>';

var gMML = '<div class="chessboard">';

for(var i=0; i < 64; i++) {
    if(i==0) {
        gMML=gMML+'<div class="field starting"></div>';
    } else if(i==27) {
        gMML=gMML+'<div class="field"><div class="pawn"></div></div>';
    } else if(i==28 || i==34 || i==35 || i==36) {
        gMML=gMML+'<div class="field possible"></div>';
    } else if(i==63) {
        gMML=gMML+'<div class="field winning"></div>';
    } else {
        gMML=gMML+'<div class="field"></div>';
    }
}

gMML = gMML + '</div>';

var gMML0 = '<div class="chessboard">';

for(var i=0; i < 64; i++) {
    if(i==0) {
        gMML0=gMML0+'<div class="field starting"><div class="pawn"></div></div>';
    } else {
        gMML0=gMML0+'<div class="field"></div>';
    }
}

gMML0 = gMML0 + '</div>';

var gMML1 = '<div class="chessboard">';

for(var i=0; i < 64; i++) {
    if(i==27) {
        gMML1=gMML1+'<div class="field"><div class="pawn"></div></div>';
    } else if(i==28 || i==34 || i==35 || i==36) {
        gMML1=gMML1+'<div class="field possible"></div>';
    } else {
        gMML1=gMML1+'<div class="field"></div>';
    }
}

gMML1 = gMML1 + '</div>';

var gMML2 = '<div class="chessboard">';

for(var i=0; i < 64; i++) {
    if(i==63) {
        gMML2=gMML2+'<div class="field winning"><div class="pawn"></div></div>';
    } else {
        gMML2=gMML2+'<div class="field"></div>';
    }
}

gMML2 = gMML2 + '</div>';

var game1 = {name: 'Pawn On a Chessboard',
             gameMainMenuLayout: gMML,
             gameIntro: ["Starting from the green field..."+gMML0, "...and making one of the possible moves..."+gMML1, "...you have to reach the red field before opponent."+gMML2],
             gameText: ["Your move!", "Your opponent's move..."],
             gameLayout: gL,
             gameIntroLayout: function() {
                 mainLayout(appName+': '+game1.name, "Please read the instructions, then click Play",
                     '<div id="intro"></div><div id="introbuttons"><input id="introback" type="button" value="Back" /><input id="intronext" type="button" value="Next" /></div>',
                     '<input id="playgame" type="button" value="Play" />');

                 var indexIntro = 0;

                 $('#intro').empty().append(game1.gameIntro[indexIntro]);

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

                 $('#playgame').click(function() {
                     game1.gameGameLayout();
                 });

             },
             gameGameLayout: function() {
                 var move = 0;
                 var position = 0;

                 mainLayout(appName+': '+game1.name, game1.gameText[move%2],
                     '<div id="game"></div>',
                     '<div id="gamebuttons"><input id="backmenu" type="button" value="Back to Menu" /><input id="backintro" type="button" value="Back to Intro" /><input id="finish" type="button" value="Finish game" /></div>');

                 $('#game').empty().append(game1.gameLayout);

                 $('.field:eq('+0+')').append('<div class="pawn"></div>');

                 $('.field:eq('+0+')').addClass("starting");
                 $('.field:eq('+1+')').addClass("possible");
                 $('.field:eq('+8+')').addClass("possible");
                 $('.field:eq('+9+')').addClass("possible");
                 $('.field:eq('+63+')').addClass("winning");

                 $('.possible').click(function() {

                     var offset = $(this).offset();
                     var offsetPawn = $('.pawn').offset();
                     var pushRight = (offset.left-offsetPawn.left+5);
                     var pushDown = (offset.top-offsetPawn.top+5);

                     $('.pawn').animate({left: '+='+pushRight+'px', top: '+='+pushDown+'px'}, "slow");

                 });

                 $('#backmenu').click(function() {
                     mainMenuLayout();
                 });

                 $('#backintro').click(function() {
                     game1.gameIntroLayout();
                 });

                 $('#finish').click(function() {
                     game1.gameFinishLayout();
                 });

             },
             gameFinishLayout: function() {
                 mainLayout(appName+': '+game1.name, "This is (almost) the end!");
             }};
