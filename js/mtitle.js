/****************************************************
 * Card Designer Bric
 * Made for Blocs app for Mac
 * Author: Whittfield Holmes
 * Last Modified Date: January 27, 2020 8:00pm CST
*****************************************************/
jQuery(document).ready(function(){
  $('.cd-swiper-slide').removeClass('preview');
  $('.cd-container').on("mresize",function(){
      var $this=$(this);
      w= parseInt($this.width());
      var cd = $this.find(".card-designer");
      var capl = parseInt($this.find('.cd-caption').text().length);
      var title = $this.find(".cd-title");
      var link = $this.find(".cd-title a");
      var size = parseInt($this.attr("data-title-size"));
      var line = parseInt($this.attr("data-line-height"));
      if(w>350){
          cd.removeClass("md sm").addClass("lg");
          if($this.attr('data-responsive-title') == '1'){
              title.css({"font-size": size+"px"}).removeClass("sm md").addClass("lg");
              link.css({"line-height": line+"px"});
          }
      } else if(w>=250 && w<=350){
          cd.removeClass("sm lg").addClass("md");
          if($this.attr('data-responsive-title') == '1'){
              title.css({"font-size":""}).removeClass("lg sm").addClass("md");
              link.css({"line-height":""});
          }
      } else if(w<250){
          cd.removeClass("md lg").addClass("sm");
          if($this.attr('data-responsive-title') == '1'){
              title.css({"font-size":""}).removeClass("lg md").addClass("sm");
              link.css({"line-height":""});
          }
      }
      $this.find(".cd-output").first().html($this.width()+"x"+$this.height());
  }).trigger("mresize").throttle=0;
});
