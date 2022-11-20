const modalTrigger = document.querySelectorAll('[data-modal]');
const modalForm = document.querySelector('.modal-form');
const modalCloseBtn = document.querySelector('[data-close]');
const modalInputs = document.querySelectorAll('.modal__input');


modalTrigger.forEach(btn => {
    btn.addEventListener('click', () => {
        openModal(modalForm);
    });
});

modalCloseBtn.addEventListener('click', () => {
    closeModal(modalForm);
});


function openModal(targetModal) {
    targetModal.classList.add('show');
    targetModal.classList.remove('hide');
    //запрещает скролить пока открыто модальное окно
    document.body.style.overflow = 'hidden';
    //clearInterval(modalTimerId);

}

function closeModal(targetModal) {
    targetModal.classList.add('hide');
    targetModal.classList.remove('show');
    document.body.style.overflow = '';
    //вызываем для стрерания данных из инпутов!!!!!!!!
    clearModalInput();
}

function clearModalInput() {
    modalInputs.forEach(input => {
        input.value = '';
    })
}

modalForm.addEventListener('click', (e) => {

    //потомучто modal занимает всю страницу высота и ширина 100% и позишион фиксед!!!!!!
    //и задали бакграунд!!!!!!!серый 
    if (e.target === modalForm) {
        closeModal(modalForm);
    }
});

document.addEventListener('keydown', (e) => {
    if (e.code === "Escape" && modalForm.classList.contains('show')) {
        closeModal(modalForm);
    }
});

//чаще используется для рекламы!!!!!!!!!!!!!!!!!!!!!!!!!!!!
const modalTimerId = setTimeout(()=>{
    modalForm.classList.add('show');
    modalForm.classList.remove('hide');
    //запрещает скролить пока открыто модальное окно
    document.body.style.overflow = 'hidden';
    //clearInterval(modalTimerId);
}, 3000);
// const modalTimerId = setTimeout(openModal,3000);


const modalBtn = document.querySelector('.modal__btn');


modalBtn.addEventListener('click', event => {
    event.preventDefault();

    const resData = {};
    modalInputs.forEach(input => {
        resData[input.getAttribute('name')] = input.value;
        //resData['name'] = input.value;
    })
    console.log(resData);
    closeModal(modalForm);
    openModal(modalConfirmation);
    setTimeout(() => {
        closeModal(modalConfirmation);
    }, 3000);

});

const modalConfirmation = document.querySelector('.modal-confirmation');
const orderInputs = document.querySelectorAll('.order__input');
const orderBtn = document.querySelector('.order__btn');


orderBtn.addEventListener('click', event => {
    event.preventDefault();

    const resData = {};
    orderInputs.forEach(input => {
        resData[input.getAttribute('name')] = input.value;
        //resData['name'] = input.value;
    });
    console.log(resData);
    openModal(modalConfirmation);
    setTimeout(() => {
        closeModal(modalConfirmation);
    }, 3000);
});







