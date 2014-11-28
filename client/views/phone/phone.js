Template.document_ready.rendered = function(){
    board = _.first(Boards.getDemo());
    zones = Zones.allZonesOfABoard(board._id);

    $('.carousel').carousel({
      interval: false
    })
    $('.carousel').carousel('pause')

    var car = document.getElementById('carousel-example-generic');
    var hammerswipe = new Hammer(car); 
    hammerswipe.get('swipe').set({direction: Hammer.DIRECTION_ALL})

    hammerswipe.on('swipeleft', function(){
        $('.carousel').carousel('next'); 
    });

    hammerswipe.on('swiperight', function(){
        $('.carousel').carousel('prev'); 
    });
}