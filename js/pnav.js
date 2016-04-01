/* STEP 2a - DOM ready*/
            $(function(){
                alert("DOM ready");
            
				/* STEP 2b - script to add class to nav when header is scrolled off screen */
				// Persistent navigation
                //determine how far down the top of the nav is from top of viewport
                var navTop = $('#floatingbar').offset().top;
                console.log(navTop);
                
                //capture window scroll event
                $(window).scroll(function(){
                   
                    if($(window).scrollTop() > navTop){
                        //add the floater cass to invoke the css for persistant scrolling
                        $('#floatingbar').addClass('floater');
                        /* STEP 6c - sticky footer button appear */
                        $('footer a.top').fadeIn(200);
                    
                }
                else{
                    //remove the class
                    $('#floatingbar').removeClass('floater');
                    /* STEP 6d - sticky footer button dissappear */
                    $('footer a.top').fadeOut(200);
                }
                });
                
				//add additional necessary offset for Webkit
						
						
				/* STEP 6e - click handler to animate scroll to top */
                $('footer a.top').click(function(event){
                    /* stop default anchor behavior */
                    event.preventDefault();
                    $('body').animate({scrollTop: 0}, 300);
    //                 $("html, body").animate({
    //     scrollTop: $("body").scrollTop() == 0 ? 300 : 0
    // }, "slow", "easeOutBounce");
    // return false;
                });
					
				/* STEP 3 - script to duplicate pullquote text */
				// Pullquotes
                $('span.pullquote').each(function(){
                   var parentElem = $(this).parent('p');
                   
                   //clone the span element inside it, add a special class, insert a new paragraph before the parent P.
                   $(this).clone().addClass('pullquote2').prependTo(parentElem); 
                });
			});
			// end DOM ready