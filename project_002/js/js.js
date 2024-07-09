
$(document).ready(function(){

    // top버튼을 클릭하면 맨 위로
    $('.top_btn').click(function() {
        $('html, body').animate({ scrollTop: 0 }, 500);
        return false;
    })

    // 스크롤하면 연혁 나오게
    $(window).scroll(function(){

        var sc = $(this).scrollTop();

        if(sc>=300 && sc<=550){
            $('.history_title').addClass('on')
        }
        if(sc>=551 && sc<=1050){
            $('.left1').css({'left':0})
        }

        if(sc>=1051 && sc<=1550){

            $('.right1').css({'right':0})
        }

        if(sc>=1551 && sc<=2050){

            $('.left2').css({'left':0})
        }

        if(sc>=2051 && sc<=2500){

            $('.right2').css({'right':0})
        }

        if(sc>=2501 && sc<=2900){

            $('.left3').css({'left':0}) 
        }
        if(sc>=2901 && sc<=3000){

            $('.history_end').addClass('on')
        }


    })
    
//  iceCream li에 마우스를 올리면 circle의 li가 아래에서 위로 올라온다.
    $('.iceCream li').mouseenter(function(){
        var ii = $(this).index()
        $('.circle li').eq(ii).css({'opacity':1})
        $('.circle li').eq(ii).find('img').css({'bottom':'-25px'})
        
    })

// iceCream li에서 마우스가 나오면 circle의 li가 아래로 내려간다.
    $('.iceCream li').mouseleave(function(){
        var up = $(this).index()
        $('.circle li').eq(up).css({'opacity':0})
        $('.circle li').eq(up).find('img').css({'bottom':'-220px'})

    })


//.heart를 클릭하면 이미지가 .heart2로 바뀐다.
    $('.heart').click(function(){

        var ht = $(this).index()
        $('.heart2').eq(ht)

    })
    // btn_area를 클릭하면 warning p이 보인다.
    $('.btn_area').click(function(e){
        e.preventDefault()
        $('.warning').css({'opacity':1})
    })



    // 각각의 sub_box1 li를 클릭했을때 sub_box1 em의 배경색이 바뀌어라
    $('.sub_box1 li').click(function(){

        var pr = $(this).index()
        $('.sub_box1 em').eq(pr).css({'background-color':'#C4E7F3'})
    })



    // util cart를 클릭했을때, popUp이 보이고 .popUp_inner는 오른쪽에서 천천히 나와라

    $('.util .cart').click(function(e){
        e.preventDefault()
       
      
        $('.popUp').stop().fadeIn(200)
        $('.popUp_inner').addClass('on')

    })



    // popUp span을 클릭했을때 popUP이 닫혀라
    $('.popUp span').click(function(){

        $('.popUp').hide();
        $('.popUp_inner').removeClass('on')

    })

    // product li를 클릭했을때, 메인이 안보이고 서브가 보여라 

    $('.product li').click(function(e){
        e.preventDefault()

        $('.main').css({'display':'none'});
        $('.detail_page').css({'display':'block'})
    })



    // util log를 클릭했을때, 메인과 서브가 안보이고 logIn 창이 보여라
    
    $('.util .log').click(function(e){
        e.preventDefault()

        $('.main').css({'display':'none'});
        $('.detail_page').css({'display':'none'});
        $('.logIn').css({'display':'block'})
    })


    // 각각의 container small_img li를 클릭했을때 container big_img가 바뀌어라
    $('.small_img li').click(function(){

        var ig = $(this).index()
        console.log(ig);

        $('.big_img li').show()
        $('.big_img li').eq(ig).hide()
    })

})