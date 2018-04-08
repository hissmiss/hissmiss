$(document).ready(function(){

	console.log($('.navlist li'));

/************************ to highlight on which section you are ****************/

	$(".navlist li").click(function(){
		$(this).addClass("iamselected");
		$(".navlist li").not(this).removeClass("iamselected");  
	});

/********************* highlight active link when scrolled **************************/

	$(window).scroll(function(){
		console.log( $(this).scrollTop());
		$('.page').each(function(){
			var sectionoffset = $(this.hash).offset().top;   // saves dist of that hash trom top
			if(sectionoffset <= $(this).scrollTop()){
				$(this).addClass('iamselected');
			}			

		});
	});


/**************** to change from trans to black when scrolled *************/

	console.log( $(document).scrollTop() );

	$(document).scroll(function(){
		if( $(document).scrollTop() > 95 )
		{
			$('.navwrapper').addClass("notonhomepage");
			$('.logo').addClass("hideme");
		}
		else{
			$('.navwrapper').removeClass("notonhomepage");
			$('.logo').removeClass("hideme");
		}

	});
/******************** hide n show nav *************************/

	$('.toggleMenu').click(function(){
		$('.sidemenu').addClass("showmenu");
		$('.toggleMenu').addClass("changeopacity");
	});

	$('.cross').click(function(){
		$('.sidemenu').removeClass("showmenu");
		$('.toggleMenu').removeClass("changeopacity");
	});

/************************* menu scales when scrolled ****************************/
	$(document).scroll(function(){
		if( $(document).scrollTop() > 250 )
		{
			$('.mobilelogo').addClass("hideme");
			$('.toggleMenu').css('padding','9px 12px 9px 9px');
            
            $('.logo').removeClass("hidemetoo");
            
		}
		else{
			$('.mobilelogo').removeClass("hideme");
			$('.toggleMenu').css('padding','15px 20px 15px 15px');
            
                        
            $('.logo').addClass("hidemetoo");

		}

	});


    var animationData = {"v":"5.1.1","fr":29.9700012207031,"ip":0,"op":53.0000021587343,"w":1920,"h":1080,"nm":"Comp 1","ddd":0,"assets":[{"id":"image_0","w":1920,"h":1080,"u":"images/","p":"img_0.png"}],"layers":[{"ddd":0,"ind":1,"ty":2,"nm":"snakefixed.png","cl":"png","refId":"image_0","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"n":["0p833_0p833_0p167_0p167"],"t":0,"s":[0],"e":[720]},{"t":53.0000021587343}],"ix":10},"p":{"a":0,"k":[1012,516,0],"ix":2},"a":{"a":0,"k":[1021.614,545.369,0],"ix":1},"s":{"a":0,"k":[77.992,79.259,100],"ix":6}},"ao":0,"ip":0,"op":900.000036657751,"st":0,"bm":0}],"markers":[{"tm":0.06012017779156,"cm":"1","dr":0}]};
    var params = {
        container: document.getElementById('lottie'),
        renderer: 'svg',
        loop: true,
        autoplay: true,
        animationData: animationData
    };

    var anim;

    anim = lottie.loadAnimation(params);







var viewer       = document.querySelector('.viewer'),
    frame_count  = 9,
    offset_value = 100;

// init controller
var controller = new ScrollMagic.Controller({
  globalSceneOptions: {
    triggerHook: 0,
    reverse: true
  }
});

// build pinned scene
new ScrollMagic.Scene({
  triggerElement: '#sticky',
  duration: (frame_count * offset_value) + 'px',
  reverse: true
})
.setPin('#sticky')
//.addIndicators()
.addTo(controller);

// build step frame scene
for (var i = 1, l = frame_count; i <= l; i++) {
  new ScrollMagic.Scene({
      triggerElement: '#sticky',
      offset: i * offset_value
    })
    .setClassToggle(viewer, 'frame' + i)
    //.addIndicators()
    .addTo(controller);
}
    });