import {postData} from "../services/services";

function forms(){
 console.log("Привет");

 let btns = document.querySelectorAll("#button__form");
 let exit = document.querySelector(".modal__close");
 let modal = document.querySelector(".modal__show");
 let modalDialog = document.querySelector(".modal__dialog")
 let form = document.querySelector("form")
 const message = { // эти текста будут выводиться на сайт при нажатии на кнопку и при разном расскладе загрузки данных
    success : 'Спасибо мы скоро с вами свяжемся!',
    failure : 'Что-то пошло не так...',
    null : " "
};
 console.log(btns);

    btns.forEach(btn => {
        btn.addEventListener("click", (event) => {
            console.log("Ты нажал на кнопку!!");
            document.body.style.overflow = 'hidden';
            modal.classList.remove("hide")
            modal.classList.add("show");
            modalDialog.classList.add("show");
            modalDialog.classList.remove("hide");

        });
    });

    exit.addEventListener("click", (event)=>{
        modal.classList.add("hide");
        modal.classList.remove("show");
        document.body.style.removeProperty("overflow");
    });

    form.addEventListener("submit", (e)=>{

        e.preventDefault();
        const formData = new FormData(form); // сделали из нашей формы тип FormData благодяря этому можно эти данные сразу отправить 
                                                 // !ВАЖНО В форме в input-(ах) должны быть поля name иначе будет ошибка 
            const json = JSON.stringify(Object.fromEntries(formData.entries()));


            postData('http://localhost:3000/requests', json)//Метод postData (url, данные из объекта)      
            .then(data => {// если все сработает то мы выводим форму с success текстом  
                console.log(data);
                showThanksModal(message.success);
            
            }).catch((error) => {
                console.error('Error during request:', error);
                showThanksModal(message.failure);
            }).finally(() => {//здесь мы очищаем форму
                form.reset();
            });

            
        
    });


    function showThanksModal(message){
        const prevModalDialog = document.querySelector(".modal__dialog")// это элемент 1 модального окна с 2 input-(ами)
        let modalSecond = document.createElement("div");
        prevModalDialog.classList.add('hide');// мы прячем его тк мы не хотим его видеть после нажатия на кнопку 
        prevModalDialog.classList.remove("show");//при повторном внесении данных что бы окно не оставалось
        
        modalSecond.classList.add("modal__dialog");
        modalSecond.innerHTML=` 
        <div class="modal__content">
          <div class="modal__close" data-close>&times;</div>
            <div class="modal__title">${message}</div>
        
        </div>

    
    `;
        modalSecond.addEventListener('click', (e) => {
            if (e.target.getAttribute('data-close') === '') {
                modalSecond.classList.add("hide");
                modalSecond.classList.remove("show");
                modal.classList.remove("show");
                document.body.style.removeProperty("overflow");
                modalSecond.remove();
            }
        });
        document.querySelector('.modal__show').append(modalSecond);// Добавляем новое окно в наш родительский класс для модальных окон
    }
 


}
export default forms;