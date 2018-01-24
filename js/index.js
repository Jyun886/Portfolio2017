//滑動離開頂部時就取消at_top的class
$(window).scroll(function(e){
  if ($(window).scrollTop()<=0)
    $(".navbar,.explore").addClass("at_top");
  else
    $(".navbar,.explore").removeClass("at_top");
});
//-----------
//緩慢滑動
// $(document).on('click', 'a', function(event){
//     event.preventDefault();
//     $('html, body').animate({
//         scrollTop: $( $.attr(this, 'href') ).offset().top
//     }, 500);
// });


//滑鼠移動時觸發的事件
$(window).mousemove(function(evt){
  var pagex=evt.pageX;
  var pagey=evt.pageY;
  $(".mountain").css("transform","translateX("+(pagex/-20+50)+"px)")
  $(".bg_design_01").css("transform","translateX("+(pagey/-20)+"px)")
  $(".bg_design_02").css("transform","translateX("+(pagey/-12)+"px)")
  $(".bg_design_03").css("transform","translateX("+(pagey/-8+150)+"px)")
  $(".bg_design_04").css("transform","translateX("+(pagey/-10+150)+"px)")
  $(".bg_l_01").css("transform","translateX("+(pagex/-10)+"px)")
  $(".bg_l_02").css("transform","translateX("+(pagex/-20)+"px)")
});

//vue監看物件
var vm = new Vue({
  el: "#app",
  data: {
    works: []
  },
  mounted: function(){
    var vobj=this;
    $.ajax({
      url: "https://awiclass.monoame.com/api/command.php?type=get&name=projects",
      success: function(res){
        vobj.works=JSON.parse(res);
      }
    });
  }
  
});

//----
$(document).ready(function() {

  var owl = $("owl-demo");

  $(".owl-demo").owlCarousel({
      items : 3,
      itemsDesktop : [420,3],
      navigation : true, // Show next and prev buttons
      slideSpeed : 300,
      paginationSpeed : 400,
      singleItem: true,

  
  });
  $(".next").click(function(){
    $(".owl-demo").trigger("owl.next");
  })
});