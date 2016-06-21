function main_slider(){
      'use strict';
      
      var banner = $('.ban'),
          banLi = banner.find('li'),
          banLiFirst = banner.find('li').first(),
          banLiWid = parseInt(banLi.width()),
          banLihei = banner.find('li').height(),
          
          ind = $('.ind'),
          indLi = ind.find('li'),
          indLiFirst = ind.find('li').first(),
          l_btn = $('.l_btn'),
          r_btn = $('.r_btn'),
          
          
          slideTime = 1200, // 배너 움직이는 시간
          settingTime = 5000; // 슬라이가 작동 되게 하는 시간(버튼)
      
      
      // 인디게이터 크기 활성화
      indLiFirst.addClass('indWidth');
      
      // 인디게이터 위치 맞게 변경
//      var bannerMarginCut = Math.abs( parseInt(banner.css('margin-left') ) ) / banLiWid;
//      console.log(bannerMarginCut);
//      indLi.eq(bannerMarginCut - 1).addClass('indWidth');
//      var inTest = indLi.eq(-bannerMarginCut + 1);
      
      // 첫번째 이미지 보이기
        banLi.last().clone().prependTo('.ban'); // banLi 배너 내부의 li(하나의 배너부분)
        indLi.last().clone().prependTo('.ind');  // indLi 인디케이터의 하나
      
      // 인디게이터 표시 및 위치 이동
      indLi.on('click', function(){
       var $this = $(this),
           index = $this.index(),
           indexPlus = index - 1,
           banLi = banner.find('li'),
           banLiWid = banner.find('li').width();
           
          $this.addClass('indWidth').siblings().removeClass('indWidth');
          banner.stop().animate({'margin-left':-banLiWid*index},slideTime,function(){
        });
      });
      
      // slidebtn 버튼클릭
      l_btn.on('click', function(){
          var bannerML = parseInt(banner.css('margin-left'));
          if(bannerML == -banLiWid){
            banner.stop().delay(100).animate({'margin-left':"+="+banLiWid},slideTime, function(){
              banner.css({'margin-left':-banLiWid*5});
            });
            $('.ind li').last().addClass('indWidth').siblings().removeClass('indWidth');
          }else{
            banner.stop().delay(100).animate({'margin-left':"+="+banLiWid},slideTime);
            var bannerMarginCut = Math.abs( parseInt($('.ban').css('margin-left') ) ) / $('.ban').find('li').width();
             $('.ind li').eq(bannerMarginCut-1).addClass('indWidth').siblings().removeClass('indWidth');
            console.log(bannerMarginCut);
          }
        });
      var rightBtn = function(){
        r_btn.on('click', function(){
            var bannerML = parseInt(banner.css('margin-left'));
            if(bannerML <= -banLiWid*5){
              banner.css({'margin-left':0}).stop().delay(100).animate({'margin-left':"-="+banLiWid},slideTime);
            }else{
              banner.stop().delay(100).animate({'margin-left':"-="+banLiWid},slideTime);
            }
          var bannerMarginCut = Math.abs( parseInt($('.ban').css('margin-left') ) ) / $('.ban').find('li').width();
           $('.ind li').eq(bannerMarginCut+1).addClass('indWidth').siblings().removeClass('indWidth');
          console.log(bannerMarginCut);
        });
      };
      rightBtn();
      
      
      indLi = ind.find('li').eq(0);
      indLi.first().css({'display':'none'});
   
    // 자동움직임
      // var timer;
      // 일정한 시간간격을 두고 움직이는기능 : setInterval
      function startBtn(){ settingTime = setInterval('$(".r_btn").click()', 3500) };
      //setInterval 취소시키는 기능: clearInterval
      function stopBtn(){	clearInterval( settingTime )};
      startBtn();
      $('.banner_box').on({mouseenter:stopBtn ,mouseleave:startBtn});
            // startBtn = 함수, settingTime = 변수 => 함수는 실행하는 것, 변수는 값을 저장만 하고 있는 것
    }