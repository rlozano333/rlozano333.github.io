$(document).ready(function () {
	//add IE9 class
	 if ($.browser.msie && $.browser.version == 9) {
		$('body').addClass('ie9');
	 }
	 
	//add class to fix Main Slideshow caption background
	$(".cycleTitle:empty, .cycleDesc:empty").closest(".cycleItemCaption").addClass("noBackground");
	
	//Open / close Extra Navigation submenus
	$('.page_links li').has( "ul" ).prepend('<span class="expandPageLinks"></span>')
	
	$('.page_links .expandPageLinks').click(function(e) {
		$(this).siblings( "ul" ).slideToggle( "slow", function() {
			
		});
	});
	
	//Quick Links
	$( ".quickLinks h4" ).click(function(e) {
		$(this).toggleClass('qlClicked');
		$(this).siblings( "ul" ).slideToggle( "slow", function() {
			
		});
	});

	$('.railNav a').each(function () {
        var link = $(this);
        var href = link.attr('href');
        var url = window.location.href;
		var hrefLength = href.length + 5;
		var urlLength = url.length;

        if (url.match(href) && hrefLength == urlLength) {
            link.addClass('on');
        }
    });
	
	$(".faq .expandable").hide();
	$(".faq .question").click(function (e) {
	e.preventDefault();
	$(this).parent().siblings('.expandable').slideToggle('slow');
	});

	var hmtabs = "#hmtab_trigger_wrpr";
	$(hmtabs).hmTabsGN({ target: "#hmtab_target_wrpr" });

	var menu = $('.mainNav .mainMenu'),
	    menuContainer = menu.closest(".mainNav"),
        searchMenu = $('.search_wrpr'),
	    searchMenuContainer = searchMenu.closest(".search_flex");

	menu.find("a").each(function(){
		if ( $(this).siblings(".subMenu").length > 0 ){
			$(this).addClass("hasSub");
		}
	});
	
	$(".mainNav .subMenu .columns").children("li").children("a").addClass("cattegoryNoLink");
	$(".mainNav .subMenu .columns").children("li").children("a").click(function(e){
		e.preventDefault();		
	});
	

	menu.each(function(){
		$(this).on("click", "a", function (e) {
			var currAnchor = $(this),
			    parentLi = currAnchor.closest("li"),
			    siblingUl = currAnchor.siblings(".subMenu, ul"),
			    isMainTier = currAnchor.siblings().hasClass("subMenu");

			if (isMainTier && siblingUl.length > 0) {
				// Prevent other handlers
				e.preventDefault();

				$("body").off("click", menuHandler);

				// Toggle close when clicking and open link
				if (parentLi.hasClass("clicked")) {
					parentLi.removeClass("clicked").find(".subMenu").slideUp();
				} else {
					// Otherwise Open submenu and attach body click handler
					// Close any other open menus
					menu.find(".subMenu").slideUp().closest(".clicked").removeClass("clicked");

					// Open this menu
					parentLi.addClass("clicked").find(".subMenu").slideDown();

					$("body").on("click", menuHandler);
				}
			}
		});
	});
	
	function menuHandler(e){
		if ($(e.target).parents(".mainNav").length <= 0 && e.originalEvent) {
			menu.find(".subMenu").slideUp().closest(".clicked").removeClass("clicked");

			$("body").off("click", menuHandler);
		}
	}

	menuContainer.on("click", ".menuLink", function (e) {
	    menuClickHandler(e, this);
	});

	searchMenuContainer.on("click", ".trigger", function (e) {
	    menuClickHandler(e, this);
	});

	function menuClickHandler(e, self) {
	    e.preventDefault();
	    if ($(self).hasClass("active")) {
	        $("body").off("click", toggleMenuHandler);

	        $(self).removeClass("active");

	        $(self).next().slideUp();

	    } else {
	        if ($(".hdr_m_tools .active").length) {
	            $(".hdr_m_tools .active").removeClass("active");
	            menu.slideUp();
	            searchMenu.slideUp();
	        }
	        $(self).addClass("active");

	        $(self).next().slideDown();
	        $("body").on("click", toggleMenuHandler);
	    }
	}

	function toggleMenuHandler(e) {
	    if (($(e.target).parents(".mainNav").length <= 0 && $(e.target).parents(".search_flex").length <= 0) && e.originalEvent) {
	        $(".hdr_m_tools .active").trigger("click");
	        $("body").off("click", toggleMenuHandler);
	    }
	}

	
	/* Old method 
	var ta="#mobileControl a",tb="#mainNavWrpr",tc="mainNavWrprPlay",td="active",te="afterMod",
	fm=function(f,e,c,d) {
		$(e).stop(false,true);
		if (f) {
			$(e).animate(
				{height:"show"},
				{duration:"slow",easing:"easeOutCubic",queue:true,complete:function(){$(this).addClass(c);}}
			);
			$(ta).addClass(te);
		} else {
			$(e).animate(
				{height:"hide"},
				{duration:"slow",easing:"easeOutQuint",queue:true,complete:function(){$(this).removeClass(c).removeAttr('style');$(ta).removeClass(te);}}
			);
		}
	}
	$(ta).on({
		click:function(e){
			e.preventDefault();
			$(this).toggleClass(td).hasClass(td)?fm(true,tb,tc,ta,te):fm(false,tb,tc,ta,te);
		}
	});
    $(window).load(function(){
	if($.browser["msie"])$("#search_wrpr input.text").val(function(i,v){return(v);});
});
	*/

    //Show / Hide Search
    $(".header-search a").click(function () {
        $(this).parent(".search_wrap").toggleClass("collapsed");
    });

    window.onload = function () {
        document.getElementById('gsc-i-id1').placeholder = '';
        document.getElementById('gsc-i-id2').placeholder = 'Search the City of El Paso';
    }

    $(".topLink").click(function () {
        window.location = $(this).find("a").attr("href");
        return false;
    });

    $(".callout").click(function () {
        window.location = $(this).find("a").attr("href");
        return false;
    });

    $(".electBox,.electBoxBlank").click(function () {
        window.location = $(this).find("a").attr("href");
        return false;
    });

	$("#page_links").pageLinksGN();
});
