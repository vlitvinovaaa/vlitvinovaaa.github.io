// Slider // 
$(function(){
  $('#thumbs a').click(function(){ 
    var images = $(this).find('img');
    var imgSrc = images.attr('src');
 
    $("#large-img").attr({ src: imgSrc });
    $(this).siblings('a').removeClass('active-img');
    images.parent().addClass('active-img');  
    return false;
  });
 
  $('.nav-prev').click(function(){ 
    var count = $('#thumbs a').length;  
    var n = parseInt($('#thumbs a').index($('.active-img')) + 1); 
    var activeImg = $('#thumbs .active-img');  
 
    if (count != n){
      nextSrc = activeImg.next().find('img').attr('src')
      $('#thumbs .active-img').removeClass('active-img');
      activeImg.next().addClass('active-img');  
    }else{   
      nextSrc = $('#thumbs a').first().find('img').attr('src');
      $('#thumbs .active-img').removeClass('active-img'); 
      $('#thumbs a').first().addClass('active-img'); 
    }
    $('#large-img').attr({ src: nextSrc });
    return false;
  });
 
 
  $('.nav-next').click(function(){
    var count = $('#thumbs a').length; 
    var n = parseInt($('#thumbs a').index($('.active-img')) + 1); 
    var activeImg = $('#thumbs .active-img');
    var prevSrc;
 
    if (n != 1){                   
      prevSrc = activeImg.prev().find('img').attr('src');         
      $('#thumbs .active-img').removeClass('active-img'); 
      activeImg.prev().addClass('active-img');
    }else{ 
      prevSrc = $('#thumbs a:last').find('img').attr('src'); 
      $('#thumbs .active-img').removeClass('active-img'); 
      $('#thumbs a:last').addClass('active-img');
    }
    $('#large-img').attr({ src: prevSrc });
    return false;
  });
})

// Scroll Function //
$(document).ready(function() {
    $(".main-menu").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 800);
    });
});

// Highlight Function //
jQuery(window).scroll(function(){
         var $section = $('.section-wrp');
    $section.each(function(i,el){
        var top  = $(el).offset().top-100;
        var bottom = top +$(el).height();
        var scroll = $(window).scrollTop();
        var id = $(el).attr('id');
        if( scroll > top && scroll < bottom){
            $('a.active-menu-item').removeClass('active-menu-item');
            $('a[href="#'+id+'"]').addClass('active-menu-item');
        }
    })
 });
// Burger Menu Toggler //
$(document).ready(function() {
    $("#burger-btn").on("click", function() {
        $(".main-menu").show().addClass("mob-main-menu");
        $(".main-menu_item").show().addClass("mob-main-menu_item");
        $("#burger-btn").hide();
        $("#cross").show();
    })
})
$(document).ready(function() {
    $("#cross").on("click", function() {
        $(".main-menu").hide().removeClass("mob-main-menu");
        $(".main-menu_item").hide().removeClass("mob-main-menu_item");
        $("#burger-btn").show();
        $("#cross").hide();
    })
})

// Expand Text //
 $(document).ready(function() {
    $(".lab-expand-btn").on("click", function() {
        $(".lab-info").removeClass("lab-info");
        $(".lab-info").addClass(".lab-expand-info");
        $(this).hide();
    })
 })

// Modal PopUp //
$(document).ready(function() {
    $('.modal-btn').click( function(event){
        event.preventDefault();
        $('.modal-overlay').fadeIn(400,
            function(){
                $('.modal-main') 
                    .css('display', 'block')
                    .animate({opacity: 1, top: '20%'}, 200);
        });
    });
 
    $('.modal-cross, .modal-overlay').click( function(){
        $('.modal-main')
            .animate({opacity: 0, top: '45%'}, 200,
                function(){
                    $(this).css('display', 'none');
                    $('.modal-overlay').fadeOut(400);
                }
            );
    });
 
});

// Calculator //
$("a[data-toggle=next]").click(function (e) {
        e.preventDefault();
        $(".calc-box.show-box").removeClass('show-box').next().addClass('show-box');
        $(".step-line .step.active").removeClass('active').next().addClass('active');
        $(".line-active").css('width', $(".step-line .step.active").attr('data-size')+'%');
        $("a[data-toggle=prev]").show();
        var cur=$(".show-box").attr('id');
        if (cur=='b6'){
            $("a[data-toggle=next]").hide();

            var type=$("input[name=type]:checked").val();
            var children=$("#children").html();
            var parent=$("#parent").html();
            var animator=$("input[name=animator]:checked").val();
            var ex=$("input[name=ex]:checked").val();
            var show=[];
            $("input[name=shou]:checked").each(function () {
                show.push($(this).val());
            });

            $("#p1").html($("input[name=type]:checked").attr('data-value'));
            $("#p2 #c-children").html(children);
            $("#p2 #c-parent").html(parent);
            $("#p3").html("Аниматор: "+$("input[name=animator]:checked").attr('data-value'));
            $("#p4").html("Екскурсія: "+$("input[name=ex]:checked").attr('data-value'));
            var txx='';
            $("input[name=shou]:checked").each(function () {
                txx+=$(this).attr('data-value')+', ';
            })
            $("#p5").html(txx);

            $.ajax({
                url: '/site/calc',
                type: 'post',
                data: {type: type, childred: children, parent: parent, animation: animator, ex: ex, show: show, '_csrf-frontend': $("meta[name=csrf-token]").attr('content')},
                success: function (res) {
                    $(".price span").html(res);
                    $("#price").val(res);
                }
            })
        }
    })

    $("a[data-toggle=prev]").click(function (e) {
        e.preventDefault();
        var cur=$(".show-box").attr('id');
        if (cur=='b2'){
            $("a[data-toggle=prev]").hide();
        }
        $(".show-box").removeClass('show-box').prev().addClass('show-box');
        $(".step-line .step.active").removeClass('active').prev().addClass('active');
        $(".line-active").css('width', $(".step-line .step.active").attr('data-size') + '%');
        $("a[data-toggle=next]").show();

    });

    $(".count .plus").click(function () {
        $(this).prev().html(Number($(this).prev().html())+1);
    })

    $(".count .minus").click(function () {
        if (Number($(this).next().html())>0) {
            $(this).next().html(Number($(this).next().html()) - 1);
        }
    })
    $("a[data-toggle=next]").click(function (e) {
        e.preventDefault();
        $(".calc-box.show-box").removeClass('show-box').next().addClass('show-box');
        $(".step-line .step.active").removeClass('active').next().addClass('active');
        $(".line-active").css('width', $(".step-line .step.active").attr('data-size')+'%');
        $("a[data-toggle=prev]").show();
        var cur=$(".show-box").attr('id');
        if (cur=='b6'){
            $("a[data-toggle=next]").hide();

            var type=$("input[name=type]:checked").val();
            var children=$("#children").html();
            var parent=$("#parent").html();
            var animator=$("input[name=animator]:checked").val();
            var ex=$("input[name=ex]:checked").val();
            var show=[];
            $("input[name=shou]:checked").each(function () {
                show.push($(this).val());
            });

            $("#p1").html($("input[name=type]:checked").attr('data-value'));
            $("#p2 #c-children").html(children);
            $("#p2 #c-parent").html(parent);
            $("#p3").html("Аниматор: "+$("input[name=animator]:checked").attr('data-value'));
            $("#p4").html("Екскурсія: "+$("input[name=ex]:checked").attr('data-value'));
            var txx='';
            $("input[name=shou]:checked").each(function () {
                txx+=$(this).attr('data-value')+', ';
            })
            $("#p5").html(txx);

            $.ajax({
                url: '/site/calc',
                type: 'post',
                data: {type: type, childred: children, parent: parent, animation: animator, ex: ex, show: show, '_csrf-frontend': $("meta[name=csrf-token]").attr('content')},
                success: function (res) {
                    $(".price span").html(res);
                    $("#price").val(res);
                }
            })
        }
    })

    $("a[data-toggle=prev]").click(function (e) {
        e.preventDefault();
        var cur=$(".show-box").attr('id');
        if (cur=='b2'){
            $("a[data-toggle=prev]").hide();
        }
        $(".show-box").removeClass('show-box').prev().addClass('show-box');
        $(".step-line .step.active").removeClass('active').prev().addClass('active');
        $(".line-active").css('width', $(".step-line .step.active").attr('data-size') + '%');
        $("a[data-toggle=next]").show();

    });

    $(".count .plus").click(function () {
        $(this).prev().html(Number($(this).prev().html())+1);
    })

    $(".count .minus").click(function () {
        if (Number($(this).next().html())>0) {
            $(this).next().html(Number($(this).next().html()) - 1);
        }
    })
