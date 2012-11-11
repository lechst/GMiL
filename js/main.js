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
    $('#box').append('<select id="gamename"><option selected="selected"></option><option value="game1">'+game1.name+'</option></select><div id="game"></div>');
    $('#buttons').append('<input id="play" type="button" value="Play" />');
}

$(document).ready(function(){

    var appName = "Math & Logic Games";

    mainLayout(appName);

    mainMenu();

    $('#play').hide();

    $('#gamename').change(function() {
        $('#game').empty();
        if($("#gamename").val() == '') {
            $('#play').hide();
        }
        else if($("#gamename").val() == 'game1') {
            $('#game').append('Your choice is: '+game1.name+'.');
            $('#play').show();
        }
    });

    $('#play').click(function() {
        if($("#gamename").val() == 'game1') {
            alert(game1.name);
        } else {
            alert("Select your game!");
        }
    });

});
