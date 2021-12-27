document.writeln("<script type='module' src='https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js'></script>");
document.writeln("<script type='nomodule' src='https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js'></script>");



var mq = window.matchMedia( "(max-width: 820px)" );
       
        let currentScroolPosition = 0;
        let scroolAmount = 320;

        const sCont = document.querySelector(".storys-container")
        const hScroll = document.querySelector(".horizontal-scroll")
        const btnScrollLeft = document.querySelector("#btn-scroll-left")
        const btnScrollRight = document.querySelector("#btn-scroll-right")


        btnScrollLeft.style.opacity = "0"


        let maxScroll = -sCont.offsetWidth + hScroll.offsetWidth;

        function scrollHorizontally(val){
            currentScroolPosition += ( val * scroolAmount );

            if(currentScroolPosition > 0){
                currentScroolPosition = 0;
                btnScrollLeft.style.opacity = "0"
            }else{
                btnScrollLeft.style.opacity = "1"

            }

            if(currentScroolPosition < maxScroll){
                currentScroolPosition = maxScroll;
                btnScrollRight.style.opacity = "0"
            }else{
                btnScrollRight.style.opacity = "1"

            }


            sCont.style.left = currentScroolPosition + "px";
        }

           





                var delay = ( function() {
                    var timer = 0;
                    return function(callback, ms) {
                        clearTimeout (timer);
                        timer = setTimeout(callback, ms);
                    };
                })();


                const liveBroadcastBox = document.querySelector("#main-content-post-box-live-broadcast")

                function liveBroadcastClick(){

                    
                    liveBroadcastBox.style.boxShadow = "0px 0px 30px rgba(255, 38, 38, 0.3)";
                    liveBroadcastBox.style.transition = "0.5s"
                    delay(function(){
                        liveBroadcastBox.style.boxShadow = "0px 20px 30px rgba(0, 0, 0, 0.1)";// do stuff
                    }, 2000 ); // end delay
                }



                const videoBox = document.querySelector("#main-content-post-box-video")

                function liveVideoClick(){

                    
                    videoBox.style.boxShadow = "0px 0px 30px rgba(25, 157, 233, 0.3)";
                    videoBox.style.transition = "0.5s"
                    delay(function(){
                        videoBox.style.boxShadow = "0px 20px 30px rgba(0, 0, 0, 0.1)";// do stuff
                    }, 2000 ); // end delay
                }


                const zoomBox = document.querySelector("#main-content-post-box-zoom")

                function liveZoomClick(){

                    
                    zoomBox.style.boxShadow = "0px 0px 30px rgba(25, 157, 233, 0.3)";
                    zoomBox.style.transition = "0.5s"
                    delay(function(){
                        zoomBox.style.boxShadow = "0px 20px 30px rgba(0, 0, 0, 0.1)";// do stuff
                    }, 2000 ); // end delay
                }



                

                const calendarBox = document.querySelector("#main-content-post-box-events")

                function liveCalendarClick(){

                    
                    calendarBox.style.boxShadow = "0px 0px 30px rgba(91, 218, 227, 0.3)";
                    calendarBox.style.transition = "0.5s"
                    delay(function(){
                        calendarBox.style.boxShadow = "0px 20px 30px rgba(0, 0, 0, 0.1)";// do stuff
                    }, 2000 ); // end delay
                }


                const announcementBox = document.querySelector("#main-content-post-box-announcement")

                function liveAnnouncementClick(){

                    
                    announcementBox.style.boxShadow = "0px 0px 30px rgba(245, 182, 46, 0.3)";
                    announcementBox.style.transition = "0.5s"
                    delay(function(){
                        announcementBox.style.boxShadow = "0px 20px 30px rgba(0, 0, 0, 0.1)";// do stuff
                    }, 2000 ); // end delay
                }




                const pollBox = document.querySelector("#main-content-post-box-poll")

                function livePollClick(){

                    
                    pollBox.style.boxShadow = "0px 0px 30px rgba(106, 0, 250, 0.3)";
                    pollBox.style.transition = "0.5s"
                    delay(function(){
                        pollBox.style.boxShadow = "0px 20px 30px rgba(0, 0, 0, 0.1)";// do stuff
                    }, 2000 ); // end delay
                }

                const mobileMenu = document.querySelector('#mobile-menu-content');
                const mobileMenuBtn = document.querySelector('#mobileMenuClick');
                const mobileMenuBackSpace = document.querySelector('#main-content-header')



                let sayac = 0;
                if (mq.matches) {    

                    mobileMenuBtn.addEventListener('click', function(event){
                        sayac++;
                        if(sayac%2==1){
                            mobileMenuBackSpace.style.marginTop = '100px';
                            mobileMenuBackSpace.style.transition = '0.5s'
                            mobileMenu.style.transition = '0.5s'
                            mobileMenu.style.display = 'flex';
    
                        }
                            
                        else if(sayac%2==0){
                            mobileMenuBackSpace.style.marginTop = '20px';
                            mobileMenuBackSpace.style.transition = '0.5s'
                            mobileMenu.style.display = 'none';



                            
                        }
        
                    });

                }
                else {
                    // window width is greater than 570px
                }


                

            const sun = document.querySelector(".sun")
            const night = document.querySelector(".moon")
            const welcomeText = document.querySelector("#welcomeMessage")            




                date = new Date()
                var hours = date.getHours();
                var minutes = date.getMinutes();
                var ampm = hours >= 12 ? 'pm' : 'am';
                hours = hours % 12;
                hours = hours ? hours : 12; // the hour '0' should be '12'
                minutes = minutes < 10 ? '0'+minutes : minutes;
                var strTime =  ampm;
                console.log(strTime);

                //gece : am
                //gündüz : pm
              

              if(


              (ampm == 'am') && (hours == 1 ) || (ampm == 'am') && (hours == 2 ) ||
              (ampm == 'am') && (hours == 3 ) || (ampm == 'am') && (hours == 4 ) ||
              (ampm == 'am') && (hours == 5 ) || (ampm == 'am') && (hours == 12 ) 



              )
              { 
                  welcomeText.innerHTML = "Hey Sinan , Goodnight!"
                  night.style.display = "flex";
              } else if(

                (ampm == 'pm') && (hours == 8 ) ||
                (ampm == 'pm') && (hours == 9 ) || (ampm == 'pm') && (hours == 10 ) ||
                (ampm == 'pm') && (hours == 11 )


              ){
                welcomeText.innerHTML = "Hey Sinan , Good Evening!"
                  night.style.display = "flex";

              }
              else 
              {
                  
                  welcomeText.innerHTML = "Hey Sinan , Good Morning"
                  sun.style.display = "flex";
  
              }



            new Vue({
                el : "#galleryPopup-frame",
                data : {
                    username : "beykentymk",
                    image : './img/beykentLogo.png',
                    description : 'image post description'
                },
            })





            
            //!POPUP
            const popUp = document.querySelector("#galleryPopup")
            const photoClick = document.querySelector("#photoClickBtn")
            const content = document.querySelector("#galleryPopup-frame")

            function photoClickf(){
                popUp.style.display = "flex";
                popUp.style.transition = "0.5s"

            }



            popUp.addEventListener('click', function(){
                popUp.style.cssText = `
                display: none; 
                transition: 0.5s;

                `;

                

              });
              
              content.addEventListener('click', function(e){
                e.stopPropagation()
                //clicked inner div
              });







             


            
              function photoClickf2(){
                popUp2.style.display = "flex";
                popUp2.style.transition = "0.5s"

            }
            
             
            new Vue({
                el : "#galleryPopup-frame-2",
                data : {
                    username : "beykentymk",
                    image : './img/beykentLogo.png',
                    description : 'image post description 2'
                },
            })
 
            const popUp2 = document.querySelector("#galleryPopup-2")
            const content2 = document.querySelector("#galleryPopup-frame-2")

            popUp2.addEventListener('click', function(){
              popUp2.style.cssText = `
              display: none; 
              transition: 0.5s;

              `;

              

            });
            
            content2.addEventListener('click', function(e){
              e.stopPropagation()
              //clicked inner div
            });

            