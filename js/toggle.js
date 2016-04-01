 var off;
        // jQuery - Set DOM ready
        $(document).ready(function(){
            // jQuery - Event handler for onclick
            $("#slider").click(function(event){
                // Add/remove CSS class that moves the button
                $("h1").text("On").fadeIn();
                    $("h1").toggleClass("on");
                    off = false;
                    $("p").animate({height: '300px', opacity: '0.4'}, "slow");
                    $("p").animate({width: '300px', opacity: '0.8'}, "slow");
                    $("p").animate({height: '100px', opacity: '0.4'}, "slow");
                    $("p").animate({width: '100px', opacity: '0.8'}, "slow");
                    // $("h1").text("Off").fadeIn();
                    // $("h1").toggleClass("off");
                    
                    
                    
                    
                    if(off == false){
                        animate_loop(); 
                        off = true;
                    }
                    else if(off == true){
                        $("body *").filter(":animated").stop();
                        off = false;
                    }
                    
                    
                    animate_loop = function animate_loop(){
                    $("p").animate({height: '300px', opacity: '0.4'}, "slow");
                    $("p").animate({width: '300px', opacity: '0.8'}, "slow");
                    $("p").animate({height: '100px', opacity: '0.4'}, "slow");
                    $("p").animate({width: '100px', opacity: '0.8'}, "slow");
                    }

                     

                
           }); 
        });