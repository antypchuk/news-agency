$(function(){
	$(function(){
    //7556a4a9e24d262b95e2bdc7193a5b65
    $('button').click(function(){
    $.get('http://data.fixer.io/api/latest', 
        {'access_key': '7556a4a9e24d262b95e2bdc7193a5b65'}, 
        function(response){
        console.log(response);
    });  
    });
});
    
    $(function(){
        $('#menu-li')
    });
    const disableScroll = function()
    {
    	$('html, body').on('mousewheel', function(){
           return false;
    	});
    }

    const enableScroll = function()
    {
    	$('html, body').off('mousewheel', function(){
           return false;
    	});
    }

	$('#changeButton')
	.css({
		'margin-left': '20px',
		'margin-bottom': '40px'
	})
	.click(function(){
		$('#popup-container').fadeIn(400, disableScroll);
		$('#popup').animate({
            width: '200px',
            height: '300px'
		}, 400);
	});
	$('#popup-container').click(function(event){
		if (event.target == this) {
		$(this).fadeOut(750, enableScroll);
		$('#popup').animate({
            width: '0',
            height: '0'
		}, 400);
	    }
	})
});
