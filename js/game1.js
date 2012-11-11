var gMML = '<div class="chessboard">';

for(var i=0; i < 64; i++) {
    gMML=gMML+'<div class="field"></div>'
}

gMML = gMML + '</div>';

var game1 = {name: 'Pawn On a Chessboard',
             gameMainMenuLayout: gMML,
             gameIntroLayout: function() {
                 mainLayout(appName+': '+this.name);
             }};
