window.addEventListener("DOMContentLoaded", () => {

    const offerInfo = [
        {
            id: 1,
            img: 'img/slider/pepper.jpg',
            alt: "pepper"
        },
        {
            id: 2,
            img: 'img/slider/food-12.jpg',
            alt: "food"
        },
        {
            id: 3,
            img: 'img/slider/olive-oil.jpg',
            alt: "oil"
        },
        {
            id: 4,
            img: 'img/slider/paprika.jpg',
            alt: "paprika"
        }
        
    ]

    drawUnSite(offerInfo);

    function drawUnSite(arr) {

        const offerSliderWrapper = document.querySelector('.offer__slider-wrapper');
        let offerSlides = '';

        arr.forEach(item => {
            offerSlides += `
        <div data-id="${item.id}" class="offer__slide">
            <img src="${item.img}" alt="${item.alt}">
        </div>
        `;
        })
       
        offerSliderWrapper.innerHTML = offerSlides;
    }

    //устанавливаем максимальное количесто слайдеров пишем в основном коде которое возможно добавить
    const totalCounter = document.querySelector('#total');
    totalCounter.innerHTML = '0' + offerInfo.length;

    showCurrentSlide(1);

    const offerCounter = document.querySelector('.offer__slider-counter');

    offerCounter.addEventListener('click', (event) => {

        if (event.target.closest('.offer__slider-prev')) {
          
            const currentCounter = document.querySelector('#current');
            
            if (+currentCounter.innerText > 1) {
                let newValue = +currentCounter.innerText - 1;
                currentCounter.innerText = '0' + newValue;
                showCurrentSlide(newValue);
            }

        }


        if (event.target.closest('.offer__slider-next')) {
           
            const currentCounter = document.querySelector('#current');
            
            if (+currentCounter.innerText != offerInfo.length) {
                let newValue = +currentCounter.innerText + 1;
                currentCounter.innerText = '0' + newValue;
                showCurrentSlide(newValue);
            }




        }

    })



    function showCurrentSlide(queyeNum) {
        let currentSlideData = offerInfo[queyeNum - 1];
        const offerSlides = document.querySelectorAll('.offer__slide');
        
        offerSlides.forEach(item => {
            if (item.getAttribute('data-id') == currentSlideData.id) {
                item.classList.add('show');
                item.classList.remove('hide');
            } else {
                item.classList.add('hide');
                item.classList.remove('show');
            }
        })
    }











    // offerCounter.addEventListener('click', (event) => {
    //     const currentGoal = document.querySelector('#current');
    //     const offerSlides = document.querySelectorAll('.offer__slide');

    //     if (event.target.getAttribute('alt') == 'prev') {

    //         offerSlides.forEach(item => {
    //             if (+item.getAttribute('data-id') == currentGoal.innerHTML) {
    //                 item.classList.add('show');
    //                 item.classList.remove('hide');
    //             } else {
    //                 item.classList.add('hide');
    //                 item.classList.remove('show');
    //             }
    //         })

    //     }



    //     if (event.target.getAttribute('alt') == 'next') {

    //         offerSlides.forEach(item => {
    //             if (+item.getAttribute('data-id') == currentGoal.innerHTML) {
    //                 item.classList.add('show');
    //                 item.classList.remove('hide');
    //             } else {
    //                 item.classList.add('hide');
    //                 item.classList.remove('show');
    //             }
    //         })
    //     }

    // })


    // function currentSlide(id) {


    // }







});