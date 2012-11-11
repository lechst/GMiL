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
             gameIntroLayout: function() {
                 mainLayout(appName+': '+this.name);
             }};
