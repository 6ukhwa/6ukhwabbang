
$(document).ready(function(){


$('#loader').removeClass('loaded');
$('#loader').addClass('loaded');


// 브라우저의 높이값
let winht = $(window).height()


// 화면이 리사이징 될때마다 브라우저 화면높이를 찾아라
$(window).resize(function(){

    let winth2 = $(window).height()
})


$('article').height(winht)
console.log(winht)





// 화면에서 스크롤했을때 스크롤top값을 찾아라
$(window).scroll(function(){

    let sc = $(this).scrollTop()
    let sht = $(window).height()
    $('h1').text(sc)

    

    for(var a=0; a<=3; a++){
        if(sc>=sht*a && sc<sht*(a+1)) {
            $('.gnb li').removeClass('on');
            $('.gnb li').eq(a).addClass('on')
        }
    }

    if (sc >= 936 && sc < 1872) {
        $('.sl_inner').stop().animate({'left':-sc},600)
       console.log('dd');
    //    $('.slide').css({'position':'fixed'})
    }
          
    
})


// gnb li를 클릭할때 순번을 찾고 article의 높이값에 곱해서 스크롤top을 움직여라
$('.gnb li').click(function(){

    let ht = $('article').height();

    let i = $(this).index()
    console.log(i);
    $('html,body').animate({'scrollTop':ht*i},1000)

    $('.gnb li').removeClass('on');
    $(this).addClass('on')
})



//아티클에서 마우스휠했을때 화면이 움직인다.
$('article').mousewheel(function(event,delta){
    event.preventDefault()
    if(delta>0){
    // 마우스를 올리면 이전 화면으로 움직이고 
    let prev = $(this).prev().offset().top
    $('html,body').stop().animate({'scrollTop':prev},1000)
    }

    if(delta<0){
    // 마우스를 내리면 다음 화면으로 움직인다.
    let next = $(this).next().offset().top;
    
    $('html,body').stop().animate({'scrollTop':next},1000)
    }
})




// figure을 클릭하면 3번째 섹션의 light의 on이 생기고 btn1이 숨겨진다.

$('figure').click(function(){

    $('.btn1').toggleClass('on')
    $('.light').toggleClass('on')
    $('.darkness').toggleClass('on')
    
    $('.sign').toggleClass('on')
})



//마우스가 움직이때마다 각 박스의 이미지가 커서값을 받아서 움직인다.
// $('article').mousemove(function(e){

//     var posX = e.pageX;
//     var posY = e.pageY;

//     $('.tk1').css({'top':20-(posY/30),'right':20-(posX/30)})
//     $('.tk2').css({'top':20-(posY/30),'right':20-(posX/30)})
//     $('.tk3').css({'bottom':20-(posY/30),'right':20-(posX/30)})
// })


$('section>article:nth-child(4) li').click(function() {
    var mt = $(this).index();
    console.log(mt);
    // 모든 동영상을 숨김
    $('.movie').hide();

    // 클릭한 순번의 동영상을 보여주고 재생
    $('.movie').eq(mt).show().find('video').get(0);
    //재생시간 지점
    vid.currentTime=0
    vid.play()

  
})













})