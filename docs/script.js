$(document).ready(function() {
   window.addEventListener('resize', checkMediaQuery);

   function checkMediaQuery(){  
    let positionImg = ($('main')[0].offsetWidth / 2) - 120;//(width of image woman / 2)

   if (window.innerWidth <= 900) { 
    $('.images').css({'height':'100px', 'left': positionImg+'px'});
    return true;
  } else {
    $('.images').css({'height':'auto', 'left': '0'}) 
    return false;
  } 
   }
   
   $('button').on('click', onButtonClick)

   function onButtonClick(e){
   const className = e.target.nextElementSibling.className;
   let p = $('.'+className);
   let innerTextP = p.text();
  
   $('p').text('')
   $('p').css({'padding-top':'0px', 'padding-left':'0px'})
   $('button').removeClass('bold rotate');
   $('li').css({'padding-top':'15px', 'padding-bottom':'15px'})

   if(innerTextP.length === 0){
    if(!checkMediaQuery()){
        $('li').css({'padding-top':'5px', 'padding-bottom':'5px'})
    } else{
        $('li').css({'padding-top':'10px', 'padding-bottom':'10px'})
    }
    
    p.parent().css({'padding-top':'15px', 'padding-bottom':'15px'})
    p.text(answers[className])
    p.css({'padding-top':'15px', 'padding-left':'5px'})
    e.target.className = 'bold rotate';
   } 

   }

   var answers = {
       'team-members': "You can invite up to 2 additional users on the Free plan. There is no limit on team members for the Premium plan.",
       'max-size-file': "No more than 2GB. All files in your account must fit your allotted storage space.",
       'reset-password': "Click “Forgot password” from the login page or “Change password” from your profile page. A reset link will be emailed to you.",
       'subscription': 'Yes! Send us a message and we’ll process your request no questions asked.',
       'support': 'Chat and email support is available 24/7. Phone lines are open during normal business hours.'
   }
});