window.onload = function() {
    //获取元素
    var page1 = document.getElementById("page1");
    var page2 = document.getElementById("page2");
    var page3 = document.getElementById("page3");
    var lantern = document.getElementById("p1-lantern");

    var music = document.getElementById("music");
    var audio = document.getElementsByTagName("audio")[0];
  

    //当音乐播放完毕停止的时候，自动停止光盘旋转效果
    audio.addEventListener("ended", function(event) {
        music.setAttribute("class","");
    }, false)
    // //点击音乐图标，控制音乐播放效果
     music.addEventListener("touchstart",function() {
      if(audio.paused){
            audio.play();
            this.setAttribute("class","play");
         }else{
             audio.pause();
             this.setAttribute("class","");
         }
     }, false);
     //点击灯笼事件 实现跳转
    lantern.addEventListener("click", function() {
        page1.style.display = "none";
        page2.setAttribute("class", "page");
        page2.style.display = "block";

        setTimeout(function() {
            page2.style.display = "block";
            page3.style.top = "100%";
            page2.setAttribute("class", "page fadeOut");
            page3.setAttribute("class", "page fadeIn");
        }, 5500)
    }, false);
    //点击第一页事件 实现跳转  此事件替代前面的灯笼事件
    page1.addEventListener("touchstart",function(event) {
        page1.style.display = "none";
        page2.style.display = "block";
        page3.style.display ="block";
        page3.style.top     = "100%"
        setTimeout(function(){
            page2.setAttribute("class","page fadeOut");
            page3.setAttribute("class","page fadeIn");
        }, 5500);
    }, false);
};