(function ($) {
    $(document).ready(function () {

        if (!String.prototype.repeatt) {
            String.prototype.repeatt = function (count) {

                var text = "";
                for (var i = 0; i < count; i++) {
                    text += this;
                }
                return text;
            }
        }
        var output = document.getElementById("container");
        output.innerHTML = "hej ".repeatt(3);


    });
})(jQuery);