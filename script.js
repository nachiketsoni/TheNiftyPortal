(function loco() {
    gsap.registerPlugin(ScrollTrigger);

    const locoScroll = new LocomotiveScroll({
        el: document.querySelector("#main"),
        smooth: true
    });
    
    locoScroll.on("scroll", ScrollTrigger.update);

    ScrollTrigger.scrollerProxy("#main", {
        scrollTop(value) {
            return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
        },
        getBoundingClientRect() {
            return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
        },
        pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
    });
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    ScrollTrigger.refresh();

})();
var rail = document.querySelectorAll(".topbarIN")
rail.forEach(function(rails){
    gsap.to(rails,{
        scrollTrigger:{
            scroller:"#main",
            trigger:rails,
            start: "top% 30%",
            end:"5% 0%",
            scrub:2,
            // markers:true
        },
        x:-150,
        ease:Linear.easeInOut   
    })
})   
var rail2 = document.querySelectorAll(".a")
rail2.forEach(function(rails){
    gsap.to(rails,{
        scrollTrigger:{
            scroller:"#main",   
            trigger:rails,
            start: "-1500% 70%",
            end:"5% 15%",
            scrub:2,
            // markers:true
        },
        x:-150,
        ease:Linear.easeInOut   
    })
})   



gsap.to(".first .portal svg",{
   
    strokeDashoffset: 0,
    ease:Expo.easeInOut,
    duration:1,
})
gsap.to(".first .portal svg",{
    
    fill:"#EBE4CB",
    delay:1,
    ease:Expo.easeInOut,
    duration:1,
})


gsap.to(".fourth .portal svg",{
    
    scrollTrigger:{
        scroller:"#main",
        trigger:".fourth .portal svg",
        toggleActions:"restart reset restart reset",
        start: "-80% 80%",
        end:"180% 80%",

    },
    strokeDashoffset: 0,
    ease:Expo.easeInOut
})
gsap.to(".fourth .portal svg",{
    
    scrollTrigger:{
        scroller:"#main",
        trigger:".fourth .portal svg",
        toggleActions:"restart reset restart reset",
        start: "-80% 80%",
        end:"180% 80%",
        // markers:true,

    },
    fill:"#EBE4CB",
    delay:2,
    
})

var time = document.querySelector("#time");
(function showTime() {
    var today = new Date()
    var hour = today.getHours()
    var min = today.getMinutes()
    var sec = today.getSeconds()

    time.innerHTML = `<h1 id="time" ><span>${addZero(hour)}</span> : <span>${addZero(min)}</span> : <span>${addZero(sec)}</span></h1>`
    function addZero(n) {
        return (Math.floor(n, 10) < 10 ? '0' : '') + n
    };
    setTimeout(showTime, 1000);
})();

var triangle= document.querySelectorAll(".tangl img")
triangle.forEach(function(elem){
    gsap.to(elem,{
        scrollTrigger:{

            scroller:"#main",
            trigger:elem,
            start: "top 70%",
            
            scrub:.1,
        },
        rotate:360

    })

})

// var cursor=document.querySelector(".cursor")

// document.addEventListener("mousemove",function(e){
//     cursor.style.top=e.pageY + 'px'
//     cursor.style.left=e.pageX + 'px'
//     if(e.path==="div.scnbl"){
//         cursor.style.display='flex'
//     }
//     console.log(e)

// })

var circle= document.querySelectorAll(".circle")

    for(var i=0;i<circle.length;i+=2){
        var tl = gsap.timeline()
        tl
        
        .to(circle[i],{
            scrollTrigger:{
    
                scroller:"#main",
                trigger:circle[i],
                start: "top 70%",
                end:"bottom 40%",
                scrub:2,
            },
            rotationY:360,
            ease:Linear.easeInOut
        })
        
}
for(var i=1;i<circle.length;i+=2){
    var tl = gsap.timeline()
    tl
    
    .to(circle[i],{
        scrollTrigger:{

            scroller:"#main",
            trigger:circle[i],
            start: "top 70%",
            end:"bottom 40%",
            scrub:2,
        },
        rotationX:360,

        ease:Linear.easeInOut
    })
    
}
gsap.to(".rect",{
    scrollTrigger:{
        scroller:"#main",
        trigger:".rect",
        start: "top 70%",
        end:"30% 60%",
        scrub:2,
        // markers:true,

    },
    rotationY:360,
    ease:Linear.easeInOut
})

gsap.to(".scndbl img",{
    scrollTrigger:{
        scroller:"#main",
        trigger:".scndbl img",
        start: "top 70%",
        end:"bottom 40%",
        scrub:1,
    },
    rotationY:360,
})
// gsap.to("video",{
//     scrollTrigger:{
//         scroller:"#main",
//         trigger:"video",
//         start: "top 70%",
//         scrub:2,
//     },
//     scale:1.1,
// })
var tri= document.querySelectorAll(".btm .left .tangl")
var count =18
for(var i=0;i<tri.length;i++){

    tri[i].style.height=count-- +'vw';

}
var count =12
for(var i=1;i<circle.length;i++){

    circle[i].style.height=count-- +'vw';
    circle[i].style.width=count-- +'vw';

}