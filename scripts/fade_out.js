$(function() {            
    var documentEl = $(document),
        fadeElem = $('.image-and-blurb');
    
    
    documentEl.on('scroll', function() {
        var currScrollPos = documentEl.scrollTop();
        
        fadeElem.each(function() {
            var $this = $(this),
                elemOffsetTop = $this.offset().top;
            if (currScrollPos > elemOffsetTop) $this.css('opacity', 1 - (currScrollPos-elemOffsetTop)/400);
        }); 
    });
    
});
