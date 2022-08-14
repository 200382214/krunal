    import $ from 'jquery'
    $(document).ready(function() {

        $('a.btn-gallery').on('click', function(event) {
            event.preventDefault();
            var galler = $(this).attr('href');
            alert('magnific');
            $(galler).magnificPopup({
          delegate: 'a',
                type:'image',
                gallery: {
                    enabled: true
                }
            }).magnificPopup('open');
        });
        
    });