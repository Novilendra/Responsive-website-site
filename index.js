
$(document).ready(function(){
        function showWindow()
    {
        $('#main').show();

        $('html body').css('overflow', 'hidden');
        setTimeout(hideWindow,3000);
    }

    function hideWindow()
    {
        $('#main').hide();

        $('html body').css('overflow', 'scroll');
    }
    setTimeout(showWindow);
})
