var menuBtn = document.querySelector(".menu-btn");
var sideDrawer = document.querySelector(".sideDrawer");
menuBtn.addEventListener("click", function(){
    console.log(sideDrawer.style.transform);
    if(sideDrawer.style.transform === "translateX(100vw)"){
        // sideDrawer.style.visibility = "auto";
        menuBtn.style.position ="fixed";
        menuBtn.style.right ="6%";
        sideDrawer.style.transform = "translateX(0)";
    }else{
        //  sideDrawer.style.visibility = "auto";
        menuBtn.style.position ="static";
        sideDrawer.style.transform = "translateX(100vw)";
    }
    
});
var scroll = new SmoothScroll('a[href*="#"]', {
	speed: 900,
	speedAsDuration: true
});