"use strict";$(".nav-list>.nav-item").each(function(e,n){e<=6&&$(n).hover(function(){$.ajax({url:"/json/header-menu".concat(e+1,".json"),type:"get",dataType:"json",cache:!1,async:!1,success:function(e){$.each(e,function(e,n){$(".header-nav-menu li").eq(e).find("img").attr("src",n.img),$(".header-nav-menu li").eq(e).find(".title").html(n.title),$(".header-nav-menu li").eq(e).find(".price").text(n.price)})}}),$(".header-nav-menu").stop(),$(".header-nav-menu").slideDown(300)},function(){$(".header-nav-menu").stop(),$(".header-nav-menu").slideUp(300)})}),$(".header-nav-menu").hover(function(){$(".header-nav-menu").stop(),$(".header-nav-menu").slideDown(300)},function(){$(".header-nav-menu").stop(),$(".header-nav-menu").slideUp(300)});