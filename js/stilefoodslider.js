window.addEventListener("DOMContentLoaded", () => {

 const sliderWrapper = document.querySelector('.tabcontainer');

let foodSlides = [
    {
        id:'1',
        bookmarkTitle:'Фитнес',
        img:"img/tabs/vegy.jpg",
        description:'Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Для людей, которые интересуются спортом; активных и здоровых. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!'
    },
    {
        id:'2',
        bookmarkTitle:'Премиум',
        img:"img/tabs/elite.jpg",
        description:' Меню “Премиум” - мы используем не только красивый дизайн упаковки, но и качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!'
    },
    {
        id: '3',
        bookmarkTitle:'Постное',
        img: "img/tabs/post.jpg",
        description:'Наше специальное “Постное меню” - это тщательный подбор ингредиентов: полное отсутствие продуктов животного происхождения. Полная гармония с собой и природой в каждом элементе! Все будет Ом!'
    },
    {
        id:'4',
        bookmarkTitle:'Сбалансированное',
        img: 'img/tabs/vegy.jpg',
        description: 'Меню "Сбалансированное" - это соответствие вашего рациона всем научным рекомендациям. Мы тщательно просчитываем вашу потребность в к/б/ж/у и создаем лучшие блюда для вас.'
    }

];

getOnSite(foodSlides);

function getOnSite(arr){
    
    let slidesHTML ='';
    arr.forEach(item => {
        slidesHTML+=`
        <div data-id="${item.id}" class="tabcontent">
                    <img src="${item.img}" alt="vegy">
                    <div class="tabcontent__descr">
                        ${item.description}
                    </div>
                </div>
        `;
    });
    const tabHeaderWrapper = document.createElement("div");
    tabHeaderWrapper.classList.add('tabheader');
    const tabHeaderTitle = document.createElement('h3');
    tabHeaderTitle.innerHTML = 'Выберите стиль питания';
    const tabHeaderItems = document.createElement('div');
    tabHeaderItems.classList.add('tabheader__items');

    tabHeaderWrapper.append(tabHeaderTitle);
    tabHeaderWrapper.append(tabHeaderItems);
    let tabItems ='';

    arr.forEach(item => {
        tabItems+=`<div data-id='${item.id}' class="tabheader__item">${item.bookmarkTitle}</div>`;

    });
    //отрисовываем здесь и как результат получим 4 выведенных на экран 4 фото и описания и и 4 вида питания все вметсе на экране!!!!!!!!
    //получим tabHeaderItems элемент!!!
    tabHeaderWrapper.querySelector('.tabheader__items').innerHTML = tabItems;
    sliderWrapper.innerHTML = slidesHTML;
    sliderWrapper.append(tabHeaderWrapper);
    
};
//родитель куда вешается обработчик
const tabHeaderItems = document.querySelector('.tabheader__items');

currentSlide(1);

tabHeaderItems.addEventListener('click', (event) =>{
    if(event.target.classList.contains('tabheader__item')){
       currentSlide(event.target.getAttribute('data-id'))
        
    }
});

function currentSlide(id){
    const slides = document.querySelectorAll(".tabcontent");
    const menuItems = document.querySelectorAll('.tabheader__item');
    
    slides.forEach(item => {
        if(item.getAttribute("data-id") == id){
            item.classList.add('show');
            item.classList.remove('hide');
        }else {
            item.classList.add('hide');
            item.classList.remove('show');
        }
    });

    menuItems.forEach(item => {
        if(item.getAttribute("data-id") == id){
            item.classList.add('tabheader__item_active');
        }else {
            item.classList.remove('tabheader__item_active');
        }
    })
};



// 2 ой вариант
    




















});

















