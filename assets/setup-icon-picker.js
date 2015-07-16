(function($) {
    $('.icp-auto').entwine({
        onmatch: function(){
            $('.icp-auto').iconpicker();
            this._super();
        },
        onunmatch: function() {
            this._super();
        }
    });
})(jQuery);