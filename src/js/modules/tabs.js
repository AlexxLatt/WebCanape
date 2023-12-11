function tabs (){
    const bd = [
        [{
            textInfo: [
                "57 500",
                "213 000",
                "123 123",
                "123 900"
            ],
            textInfoSecond: [
                "Сотрудники в различных странах",
                "Лучшие сотрудники года",
                "Разнообразные рабочие места",
                "Высококвалифицированные специалисты"
            ]
        }],
        [{
            textInfo: [
                "175 000",
                "696 366",
                "116 266",
                "236 466"
            ],
            textInfoSecond: [
                "Годовая статистика процедур",
                "Высокий уровень медицинской практики",
                "Множество видов медицинских вмешательств",
                "Рекордное количество успешных операций"
            ]
        }],
        [{
            textInfo: [
                "175 000",
                "626",
                "111 266",
                "26 666"
            ],
            textInfoSecond: [
                "Годовая статистика процедур",
                "Высокий уровень медицинской практики",
                "Множество видов медицинских вмешательств",
                "Рекордное количество успешных операций"
            ]
        }],
        [{
            textInfo: [
                "13,4 млн",
                "717 111",
                "77 007",
                "723 111"
            ],
            textInfoSecond: [
                "Обслуживание множества абонентов",
                "Постоянные клиенты и подписчики",
                "Широкополосный доступ в интернет",
                "Высокая степень удовлетворенности клиентов"
            ]
        }],
        [{
            textInfo: [
                "50 000",
                "322 311",
                "122",
                "233"
            ],
            textInfoSecond: [
                "Стратегические поставки оборудования",
                "Оборудование для региональных рынков",
                "Множество инновационных технологий",
                "Эффективные поставки современного оборудования"
            ]
        }]
    ];
    
  

    const upArrow = document.querySelectorAll(".aboutPartners__wrapper-information__upArrow");
    const downArrow = document.querySelectorAll(".aboutPartners__wrapper-information__douwnArrow");  
    let text = document.querySelectorAll(".aboutPartners__wrapper-information__text");
    let textSecond = document.querySelectorAll(".aboutPartners__wrapper-information__text-second");
    let index = 0;

    text.forEach((text,i)=>{text.innerText = bd[i][0].textInfo[0]});
    textSecond.forEach((text,i)=>{text.innerText = bd[i][0].textInfoSecond[0]});

  


    const cardIndexes = Array(bd.length).fill(0); // Инициализация индексов для каждой карточки

    upArrow.forEach((item, dataIndex) => {
        item.addEventListener("click", () => handleArrowClick(dataIndex, true));
    });

    downArrow.forEach((item, dataIndex) => {
        item.addEventListener("click", () => handleArrowClick(dataIndex, false));
    });

    function handleArrowClick(dataIndex, isUp) {
        const correspondingTextElement = document.querySelectorAll(".aboutPartners__wrapper-information__text")[dataIndex];
        const correspondingTextSecondElement = document.querySelectorAll(".aboutPartners__wrapper-information__text-second")[dataIndex];

        if (isUp) {
            cardIndexes[dataIndex]++;
            if (cardIndexes[dataIndex] === bd[dataIndex][0].textInfo.length) {
                cardIndexes[dataIndex] = 0;
            }
        } else {
            cardIndexes[dataIndex]--;
            if (cardIndexes[dataIndex] < 0) {
                cardIndexes[dataIndex] = bd[dataIndex][0].textInfo.length - 1;
            }
        }

        correspondingTextElement.innerText = bd[dataIndex][0].textInfo[cardIndexes[dataIndex]];
        correspondingTextSecondElement.innerText = bd[dataIndex][0].textInfoSecond[cardIndexes[dataIndex]];
    }

    


}
export default tabs;