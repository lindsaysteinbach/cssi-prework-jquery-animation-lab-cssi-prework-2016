$(document).ready(function(){
    //pig appears when button with id=showPig is pressed
    $("#showPig").click(function(){
        $("#pig").show();
    });

    //pig disappears when button with id=hidePig is pressed
    $("#hidePig").click(function(){
        $("#pig").hide();
    });
    //add a third button that makes the pig exit to the right when the new button is clicked
    $("#flyPig").click(function(){
        $("#pig").animate({left: '+2000px'}, "fast");
    });

    //add a new event handler that causes the pig to slide up and down 3 times when the pig is clicked
    //(hint: use a loop and relative values (-= or +=))
    $("#pig").click(function(){
        for (i=0; i<3; i++) {
            $("#pig").animate({top: '+=10px'}, "slow");
            $("#pig").animate({top: '-=10px'}, "slow");
        }
    });   

    //STRETCH add a new pig that flies away once the first pig has exited the screen.
    //(hint: You will have to put the animation of the second pig inside a callback function.)
    $("#flyBoth").dblclick(function(){
        $("#pig").animate({left: '+2000px'}, "fast", pigRightFly);
    });

    function pigRightFly(){
        $("#pigRight").animate({left: '+2000px'}, "fast");
    }

});
