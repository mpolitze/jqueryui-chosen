(function($){
	if(typeof $.fn.chosen != 'undefined'){
		var originalChosen = $.fn.chosen;
		$.fn.chosen = function(options){
		
			originalChosen.call(this, options);
			
			var $choser = this.next(".chzn-container");
			
			$choser
				.addClass("ui-chzn");
			
			$choser.children(".chzn-single")
				.addClass("ui-chzn-input ui-widget ui-corner-all ui-state-default")
				.mouseover(function(){
					$(this).addClass("ui-state-hover");
				})
				.mouseout(function(){
					$(this).removeClass("ui-state-hover");
				});	
				
			$choser.children(".chzn-single").next("div")
				.click(function(){
					$(this).prev().children("abbr").addClass("ui-icon ui-icon-close");		
				})
				.prev().children("abbr").addClass("ui-icon ui-icon-close");
				
			$choser.children(".chzn-choices")
				.addClass("ui-widget ui-corner-all ui-widget-content")
				.mouseover(function(){
					$(this).addClass("ui-state-hover");
				})
				.mouseout(function(){
					$(this).children("li:not(.search-field)").andSelf().removeClass("ui-state-hover");
				});	
			
			var multiChoiceSelect = $.proxy(function(){
				$selection = $(this).find("li:not(.search-field)");
				$selection.addClass("ui-widget ui-corner-all no-ui-widget-content ui-state-default");
				$selection.children("a").addClass("ui-icon ui-icon-close");
			}, $choser.children(".chzn-choices"));
			multiChoiceSelect();
			$choser.children(".chzn-choices").next("div")
				.bind("click.chzn-jqui", multiChoiceSelect);
				
			$choser.children(".chzn-drop")
				.addClass("ui-menu ui-widget-content ui-widget ui-corner-bottom");
				
			$choser.find(".chzn-single>div>b")
				.addClass("ui-icon ui-icon-triangle-1-s");
				
			$choser.find(".chzn-search>input")
				.addClass("ui-widget-content")
				.css("box-sizing", "border-box")
				.after("<span class='ui-icon ui-icon-search'/>").next()
					.css({"left": "auto", "right": "0.2em", "top": "0.3em"});
			
			$choser.find(".chzn-results>:not(.group-result)")
				.mouseover(function(){
					$(this).addClass("ui-state-focus ui-corner-all");
					$(this).css("font-weight", "inherit");
				})
				.mouseout(function(){
					$(this).removeClass("ui-state-focus ui-corner-all");
					$(this).css("font-weight", "");
				});
			
			$choser.find(".search-field")
				.keyup(function(event){
					if(event.which == 8){
						$(this).prev(".search-choice-focus").addClass("ui-state-active");
					}
				});
			
			$(document)
				.on("mouseover.chzn-jqui", ".chzn-choices li:not(.search-field)", function(){
					$(this).addClass("ui-state-hover");
				})
				.on("mouseout.chzn-jqui", ".chzn-choices li:not(.search-field)", function(){
					$(this).removeClass("ui-state-hover");
				});
					
			return this;
		};
	}
})(jQuery);