//页面加载完成后，init页面元素
$(document).ready(function () {
    initHeader();
    githubMenuInit();
    initBgAnimate();

})


//获取浏览器窗口宽度
var window_width = $(window).width();
//github链接按钮的left,屏幕宽度-260
var boxLeft = window_width - 260;
//github按钮
var githubBtn = $(".githubHerfBox");
var headerTitleBoxLeft = 0;


//浏览器窗口大小变化时重置页面元素属性
$(window).resize(function () {
    initHeader();
    headerContainerInit();
    githubMenuInit();
    


});


var headerTitleBoxLeft = 0;
//header容器自适应
function headerContainerInit() {
    window_width = $(window).width();
    boxLeft = window_width - 260;
  
    if (window_width < 751) {
        headerTitleBoxLeft = 0;
        boxLeft = window_width - 225;
        $(".headerTitleBox").css("width", window_width+"px");

        $(".githubHerfBox").css({
            "height": "40px",
            "left": boxLeft + "px"
        });
        $(".githubHerfMenu").css({
            "height": "20px",
            "margin-top": "5px",
        });
        $("#githubSpan").css({
            "font-size": "10px",
        });
        $(".headerContent").css({
            "border": "none",
        });
        $(".titleTopFont").css({
            "font-size": "50px",
        });
        $(".titleBotFont").css({
            "font-size": "22px",
        });
        //set page1 box's width=window's with
        $(".page1-box").css({
            "width":window_width+"px" ,
        });

    } else if (window_width < 360) {
        alert("1")
        $(".titleTopFont").css({
            "font-size": "32px",
        });
        $(".titleBotFont").css({
            "font-size": "22px",
        });
    } else {
        $(".headerTitleBox").css("width", "755px");
        $(".titleTopFont").css({
            "font-size": "60px",
        });
        $(".githubHerfMenu").css({
            "height": "50px",
            "margin-top": "7px",
        });

        headerTitleBoxLeft = (window_width - 750) / 2;
    }
    $(".githubHerfBox").css({
        "top": "60px",
        "left": boxLeft + "px"
    });
    $(".headerTitleBox").css("left", headerTitleBoxLeft + "px");
    //初始化header的高度=屏幕的高度
    $(".header-z1").css("height", $(window).height());
    $(".header-z2").css("height", $(window).height());
    $(".header-z3").css("height", $(window).height());
    $(".header-z4").css("height", $(window).height());

}

//github链接按钮init
function githubMenuInit() {
    window_width = $(window).width();
    boxLeft = window_width - 260;
    if (window_width < 751) {
        boxLeft = window_width - 140;
        $(".githubHerfBox").css({
            "height": "34px",
            "width": "180px",
            "left": boxLeft + "px",
            "top": "35px"
        });
        $(".githubHerfMenu").css({
            "height": "20px",
            "margin-top": "5px",
            "line-height": "15px"
        });
        $("#githubSpan").css({
            "font-size": "10px",
        });
    } else if (window_width < 360) {
        $(".titleTopFont").css({
            "font-size": "32px",
        });
        $(".titleBotFont").css({
            "font-size": "18px",
            "font-weight":"bold"
        });
    }else {
       

        $(".githubHerfBox").css({
            "height": "50px",
            "width": "350px",
            "left": boxLeft + "px",
            "top": "65px"
        });
        $(".githubHerfMenu").css({
            "border-top": "2px dashed #e6dbdb;",
            "border-bottom": "2px dashed #e6dbdb;",
            "height": "62%",
            "margin-top": "7px",
            "line-height": "30px"
        });
        $(".titleTopFont").css({
            "font-size": "50px"
        });
        $("#githubSpan").css({
            "font-size": "23px"
        });
        $(".titleBotFont").css({
            "font-size": "28px",
        });
    }

}


//初始化背景动画
function initBgAnimate() {
    $("#particles").particleground({
        dotColor: '#FFF',
        lineColor: '#FFF'
    });
}

//init page:1 skill list's lever
function initSkill(){
    var levers = ['60','90','80','70','65','88','98']
    for(var i=0;i<7;i++){
            $("#skill-"+i).animate({
                width:levers[i]+"%"
            },800)
    }
}


//header容器init
function initHeader() {
    window_width = $(window).width();
    //初始化body的宽度=屏幕的宽度
    $("body").css("width", window_width);
    //初始化header的高度=屏幕的高度
    $(".header-z1").css("height", $(window).height());
    $(".header-z2").css("height", $(window).height());
    $(".header-z3").css("height", $(window).height());
    $(".header-z4").css("height", $(window).height());
    $(".page1").css("height", $(window).height());
    $(".page2").css("height", $(window).height());
    $(".bot").css("height", $(window).height());


    if (window_width < 751) {
        headerTitleBoxLeft = 0;
        $(".headerTitleBox").css("width", window_width+"px");


    } else if (window_width < 500) {
        $(".headerTitleBox").css("width", window_width+"px");
        $(".titleTopFont").css({
            "font-size": "32px",
        });
        $(".titleBotFont").css({
            "font-size": "18px",
        });
    } else {
        $(".headerTitleBox").css("width", "755px");
        $(".titleTopFont").css({
            "font-size": "55px",
        });
        $(".titleBotFont").css({
            "font-size": "28px",
        });

        headerTitleBoxLeft = (window_width - $(".headerTitleBox").width()) / 2;
    }
    $(".headerTitleBox").css("left", headerTitleBoxLeft + "px");

}


