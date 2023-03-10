$(document).ready(function(){
    $('.nav-button').click(function(){
        // toggleclass komak be hazf o ezafe kardan class mikone
        $('.nav-button').toggleClass('change')
    })
})


// select
$('.list-item').click(function(){
    $(this).addClass('active').siblings().removeClass('active');
   

})
