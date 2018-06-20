/*
    HERO-SLIDER.JS - Last updated: 17.04.18
*/
//-----------------------------------------------------------------
// LAUNCH SLIDER
//-----------------------------------------------------------------

function launchSlider() {
    $('[data-hero-slider]').each(function() {

        var $this       = $(this);
        var $slider     = $('.lv-hero', $this);
        var $captions   = $('.lv-hero-item-caption', $this);
        var slideCount  = $('.lv-hero-item', $slider).length;
        var $prevArrow  = $('.lv-hero-slider-prev-btn', $this);
        var $nextArrow  = $('.lv-hero-slider-next-btn', $this);

        //==================================================
        // CHECK FOR SLIDES
        //==================================================

        if (slideCount > 1) {

            //==================================================
            // ARROWS
            //==================================================

            $prevArrow.on('click', function() {
                $slider.flickity('previous');
            });

            $nextArrow.on('click', function() {
                $slider.flickity('next');
            });

            //==================================================
            // RE-TRIGGER CSS TRANSITIONS
            //==================================================

            $slider.on('ready.flickity change.flickity', function() {
                if ($(window).width() > 576) {
                    $captions.hide();

                    setTimeout(function(){
                        $captions.show();
                    }, 500);
                }
            })
        }
    //--
    });
}

launchSlider();

//-----------------------------------------------------------------
//
//-----------------------------------------------------------------
//==================================================
//
//==================================================