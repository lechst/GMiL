var appName = "Math & Logic Games";

function mainLayout(h,t,bo,bu) {
    $('body').empty().append('<div id="main"></div>');
    $('#main').append('<div id="header"></div>','<div id="text"></div>','<div id="box"></div>','<div id="buttons"></div>');
    $('#header').append(h);
    $('#text').append(t);
    $('#box').append(bo);
    $('#buttons').append(bu);
}

function mainMenu() {
    $('#text').append("Please select your game");
    $('#box').append('<select id="gamename"><option selected="selected"></option><option value="game1">'+game1.name+'</option></select><div id="gamebox"></div>');
    $('#buttons').append('<input id="playintro" type="button" value="Play" />');
}

function mainMenuLayout() {
    mainLayout(appName);

    mainMenu();

    $('#playintro').hide();

    $('#gamename').change(function() {
        $('#gamebox').empty();
        if($("#gamename").val() == '') {
            $('#playintro').hide();
        }
        else if($("#gamename").val() == 'game1') {
            $('#gamebox').append(game1.gameMainMenuLayout);
            $('#playintro').show();
        }
    });

    $('#playintro').click(function() {
        if($("#gamename").val() == 'game1') {
            game1.gameIntroLayout();
        } else {
            alert("Select your game!");
        }
    });
}

$(document).ready(function(){

    mainMenuLayout();

});
