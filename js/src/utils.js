NexT.utils=NexT.$u={wrapImageWithFancyBox:function(){$(".content img").not(":hidden").not(".group-picture img, .post-gallery img").each(function(){var e=$(this),i=e.attr("title"),t=e.parent("a");if(t.length<1){var n=e.attr("data-original")?this.getAttribute("data-original"):this.getAttribute("src");(t=e.wrap('<a data-fancybox="group" href="'+n+'"></a>').parent("a")).addClass("fancybox fancybox.image"),t.attr("rel","group")}i&&(t.append('<p class="image-caption">'+i+"</p>"),t.attr("title",i))}),$(".fancybox").fancybox({helpers:{overlay:{locked:!1}}})},lazyLoadPostsImages:function(){$("#posts").find("img").lazyload({effect:"fadeIn",threshold:0})},registerTabsTag:function(){var e=".tabs ul.nav-tabs ";$(function(){$(window).bind("hashchange",function(){var i=location.hash;""===i||i.match(/%\S{2}/)||($(e+'li:has(a[href="'+i+'"])').addClass("active").siblings().removeClass("active"),$(i).addClass("active").siblings().removeClass("active"))}).trigger("hashchange")}),$(e+".tab").on("click",function(e){if(e.preventDefault(),!$(this).hasClass("active")){$(this).addClass("active").siblings().removeClass("active");var i=$(this).find("a").attr("href");$(i).addClass("active").siblings().removeClass("active"),""!==location.hash&&history.pushState("",document.title,window.location.pathname+window.location.search)}})},registerESCKeyEvent:function(){$(document).on("keyup",function(e){27===e.which&&$(".search-popup").is(":visible")&&($(".search-popup").hide(),$(".search-popup-overlay").remove(),$("body").css("overflow",""))})},registerBackToTop:function(){var e=50,i=$(".back-to-top");function t(){i.toggleClass("back-to-top-on",window.pageYOffset>e);var t=$(window).scrollTop()/NexT.utils.getContentVisibilityHeight(),n=Math.round(100*t),o=n>100?100:n;$("#scrollpercent>span").html(o)}$(window).on("load",function(){t()}),$(window).on("scroll",function(){t()}),i.on("click",function(){$.isFunction($("html").velocity)?$("body").velocity("scroll"):$("html, body").animate({scrollTop:0})})},embeddedVideoTransformer:function(){var e=$("iframe"),i=new RegExp(["www.youtube.com","player.vimeo.com","player.youku.com","music.163.com","www.tudou.com"].join("|"));function t(e){return{width:e.width(),height:e.height()}}function n(e,i){return i/e*100}e.each(function(){var e,o=$(this),a=t(o);if(this.src.search(i)>0){var s=n(a.width,a.height);o.width("100%").height("100%").css({position:"absolute",top:"0",left:"0"});var r=document.createElement("div");if(r.className="fluid-vids",r.style.position="relative",r.style.marginBottom="20px",r.style.width="100%",r.style.paddingTop=s+"%",""===r.style.paddingTop&&(r.style.paddingTop="50%"),this.parentNode.insertBefore(r,this),r.appendChild(this),this.src.search("music.163.com")>0)((e=t(o)).width>a.width||e.height<a.height)&&(r.style.paddingTop=n(e.width,a.height)+"%")}})},hasMobileUA:function(){var e=window.navigator.userAgent;return/iPad|iPhone|Android|Opera Mini|BlackBerry|webOS|UCWEB|Blazer|PSP|IEMobile|Symbian/g.test(e)},isTablet:function(){return window.screen.width<992&&window.screen.width>767&&this.hasMobileUA()},isMobile:function(){return window.screen.width<767&&this.hasMobileUA()},isDesktop:function(){return!this.isTablet()&&!this.isMobile()},escapeSelector:function(e){return e.replace(/[!"$%&'()*+,./:;<=>?@[\\\]^`{|}~]/g,"\\$&")},displaySidebar:function(){!this.isDesktop()||this.isPisces()||this.isGemini()||$(".sidebar-toggle").trigger("click")},isMuse:function(){return"Muse"===CONFIG.scheme},isMist:function(){return"Mist"===CONFIG.scheme},isPisces:function(){return"Pisces"===CONFIG.scheme},isGemini:function(){return"Gemini"===CONFIG.scheme},getScrollbarWidth:function(){var e=$("<div />").addClass("scrollbar-measure").prependTo("body"),i=e[0],t=i.offsetWidth-i.clientWidth;return e.remove(),t},getContentVisibilityHeight:function(){var e=$("#content").height(),i=$(window).height();return e>i?e-i:$(document).height()-i},getSidebarb2tHeight:function(){return CONFIG.sidebar.b2t?$(".back-to-top").height():0},getSidebarSchemePadding:function(){var e="block"===$(".sidebar-nav").css("display")?$(".sidebar-nav").outerHeight(!0):0,i=$(".sidebar-inner"),t=i.innerWidth()-i.width(),n=CONFIG.sidebar.offset?CONFIG.sidebar.offset:12;return this.isPisces()||this.isGemini()?2*t+e+n+this.getSidebarb2tHeight():2*t+e/2}},$(document).ready(function(){function e(e){e=e||"auto",$(".site-overview, .post-toc").css("max-height",e)}!function(){var i;$(window).on("resize",function(){i&&clearTimeout(i),i=setTimeout(function(){e(document.body.clientHeight-NexT.utils.getSidebarSchemePadding())},0)});var t=NexT.utils.getScrollbarWidth();$(".site-overview-wrap").height()>document.body.clientHeight-NexT.utils.getSidebarSchemePadding()&&$(".site-overview").css("width","calc(100% + "+t+"px)"),$(".post-toc-wrap").height()>document.body.clientHeight-NexT.utils.getSidebarSchemePadding()&&$(".post-toc").css("width","calc(100% + "+t+"px)"),e(document.body.clientHeight-NexT.utils.getSidebarSchemePadding())}(),$("table").wrap('<div class="table-container"></div>')});