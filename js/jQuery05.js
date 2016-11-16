    function myFunc() {
        //alert($("[type=checkbox]:checked + span").text());
        $("[type=checkbox]:checked").parent().remove();
    }
