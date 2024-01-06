$('.portfolio-button').mousedown(function(){
    timeout = setInterval(function(){
        window.scrollBy({
            top: 100,
            left: 100,
            behavior: "smooth",
        }); // May need to be -1 to go down
    }, 1); // Play around with this number. May go too fast

    return false;
});


