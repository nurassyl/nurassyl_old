(function(){console.log('App started in "production" mode.'),$(".ellipse__button").on("click",function(){return alert("Button of the header ellipse was clicked!")}),function(o){if($(window).width()<=767)o.addClass("owl-carousel"),o.addClass("owl-theme"),o.owlCarousel({nav:!1,loop:!0,items:1,touchDrag:!1,mouseDrag:!1,autoplay:!0,autoplayTimeout:7e3,autoplayHoverPause:!0})}($(".main__sections")),$(window).resize(function(){return location.reload()})}).call(this);