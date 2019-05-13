//滚动 第二种方法
// $(".navbar a").on('click',function(e){
//     console.log(this.hash);
//     if(this.hash !== ''){
//         e.preventDefault();
//         const hash = this.hash;

//         $('html,body').animate({
//             scrollTop:$(hash).offset().top
//         },800);
//     }
// })


//插件  第三种方法

const scroll = new SmoothScroll(".navbar a[href*='#']",{
    speed:500
})

