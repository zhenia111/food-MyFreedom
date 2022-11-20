
window.addEventListener("DOMContentLoaded", () => {

    const menuItems = [
        {
            id: 1,
            img: 'img/tabs/vegy.jpg',
            alt: 'vegy',
            title: 'Меню "Фитнес"',
            descr: 'Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!',
            price: '229'
        },
        {
            id: 2,
            img: 'img/tabs/elite.jpg',
            alt: 'elite',
            title: 'Меню “Премиум”',
            descr: 'В меню “Премиум” мы используем не только красивый дизайн упаковки, но и качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!',
            price: '550'
        },
        {
            id: 3,
            img: 'img/tabs/post.jpg',
            alt: 'post',
            title: 'Меню "Постное"',
            descr: 'Меню “Постное” - это тщательный подбор ингредиентов: полное отсутствие продуктов животного происхождения, молоко из миндаля, овса, кокоса или гречки, правильное количество белков за счет тофу и импортных вегетарианских стейков.',
            price: '430'
        },
    ]

    const menuConteiner = document.querySelector('.menu__field .container');

    insertMenuItems();

    function insertMenuItems() {
        let menuItemsHTML ='';

        menuItems.forEach(item => {
            menuItemsHTML += `
            <div class="menu__item">
                    <img src="${item.img}" alt="${item.alt}">
                    <h3 class="menu__item-subtitle">${item.title}</h3>
                    <div class="menu__item-descr">${item.descr}</div>
                    <div class="menu__item-divider"></div>
                    <div class="menu__item-price">
                        <div class="menu__item-cost">Цена:</div>
                        <div class="menu__item-total"><span>${item.price}</span> грн/день</div>
                    </div>
                </div>
            `;
        })
        menuConteiner.innerHTML = menuItemsHTML;
    }


    //task 2

    const calculatingWrapper = document.querySelector('.calculating__field');

    const genderWrapper = document.querySelector('#gender');
    const genderItems = document.querySelectorAll('#gender .calculating__choose-item');
    
    const activityWrapper = document.querySelector('.calculating__choose_big');
    const activity = document.querySelectorAll('.calculating__choose_big .calculating__choose-item');
    
    const inputHeight = document.querySelector('#height');
    const inputWeight = document.querySelector('#weight');
    const inputAge = document.querySelector('#age');
    const calculatingResult = document.querySelector('.calculating__result span');

    calculatingWrapper.addEventListener('input', () => {
        coinTotalCalories();
        console.log(inputAge.value);
        console.log(inputHeight.value);
        console.log(inputWeight.value);
        
    })

    genderWrapper.addEventListener('click', (event) => {
        if (event.target.classList.contains('calculating__choose-item')) {
            chooseGender(event.target.getAttribute('id'));
        }
         coinTotalCalories();
    })

    activityWrapper.addEventListener('click', (event) => {
        if (event.target.classList.contains('calculating__choose-item')) {
            chooseActivity(event.target.getAttribute('id'));
        }
         coinTotalCalories();
    })

    function chooseActivity(id) {
        activity.forEach(item => {
            if (item.getAttribute("id") == id) {
                item.classList.add('calculating__choose-item_active');
            } else {
                item.classList.remove('calculating__choose-item_active');
            }
        })
    };

    function chooseGender(id) {
        genderItems.forEach(item => {
            if (item.getAttribute('id') == id) {
                item.classList.add('calculating__choose-item_active');
            } else {
                item.classList.remove('calculating__choose-item_active');
            }
        })
    }

    function coinTotalCalories() {
        let calories = 0;
        if (inputHeight.value == 0 || inputWeight.value == 0 || inputAge.value == 0) {
            calories = 0;
            calculatingResult.innerHTML = calories;
            return;
        }

        let selectGenderCount = 0;
        let selectActivityCount = 0;
         
        for( let i =0; i< genderItems.length; i++) {
            if(genderItems[i].classList.contains('calculating__choose-item_active')){
                selectGenderCount = genderItems[i].getAttribute('data-count') ;
                break;  
            } 
        }

        for(let i = 0; i < activity.length; i++){
            if(activity[i].classList.contains('calculating__choose-item_active')){
                selectActivityCount = activity[i].getAttribute('data-count');
                break;
            }
        }

        calories  = Math.floor(((10 * inputWeight.value + 6.25 * inputHeight.value - 5 * inputAge.value -161)*selectGenderCount)*selectActivityCount);
        calculatingResult.innerHTML = calories;
        
    }

});