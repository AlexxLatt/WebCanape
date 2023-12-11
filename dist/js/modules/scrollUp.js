function scrollUp(){

    let scroll = document.querySelector(".scrollUp");
    window.addEventListener('scroll', function() {
        if (window.pageYOffset + document.documentElement.clientHeight >= 3500 ) // высота прокрутки сайта + количество пикселей, которые видны на экране без прокрутки >= высоты всей страницы, включая ту часть, которая не видна из-за прокрутки
        {
            scroll.classList.add("active");

        }
        if (window.pageYOffset + document.documentElement.clientHeight <= 2500 ) // высота прокрутки сайта + количество пикселей, которые видны на экране без прокрутки >= высоты всей страницы, включая ту часть, которая не видна из-за прокрутки
        {
            scroll.classList.remove("active");

        }
    });
    let scrollSecond = document.querySelector(".scrollUp__btn");

    scrollSecond.addEventListener("click",(event)=>{
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
}
 export default scrollUp;