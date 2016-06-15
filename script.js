
		var window_height = $(window).height();
		var menuBarHeight = $('#header').height();
		var conatinerHeight = window_height - menuBarHeight;
		$('.codeContainer').height(conatinerHeight + "px");

		$('.toggle').click(function(){
		$(this).toggleClass('selected');

		var activeDiv = $(this).html();
		//alert(activeDiv);
		$("#show_"+activeDiv).toggle();

		var showingDivs = $('.codeContainer').filter(function(){
			return ($(this).css('display') != 'none');
		}).length;

		//alert($showingDivs);
		var width = (100/showingDivs);
		$('.codeContainer').width(width+"%");
	});

		$('#runButton').click(function(){
			$(this).toggleClass('buttonColour');
			$("iframe").contents().find('html').html('<style>'+$('#cssCode').val()+'</style>'+$('#htmlCode').val());

			document.getElementById('resultFrame').contentWindow.eval($('#jsCode').val());
		});


