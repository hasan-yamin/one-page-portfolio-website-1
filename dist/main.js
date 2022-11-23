"use strict";
let btns = document.querySelectorAll('#myBtnContainer span');
btns.forEach((btn) => {
    btn.addEventListener('click', function () {
        // remove class active fromm last active
        var current = document.querySelectorAll('#myBtnContainer .active');
        current[0].classList.remove('active');
        // get all elements will be filtered
        let allElm = document.querySelectorAll('#project-cards .filterDiv');
        // check type of sellected btn
        if (btn.getAttribute('data-tp') === 'all') {
            // add show class to all elements
            allElm.forEach((elm) => {
                elm.classList.add('show');
            });
        }
        else {
            // show class will be added to current type of filter
            allElm.forEach((elm) => {
                let s = btn.getAttribute('data-tp');
                if (s !== null) {
                    if (elm.classList.contains(s)) {
                        elm.classList.add('show');
                    }
                    else {
                        elm.classList.remove('show');
                    }
                }
            });
        }
        // add class active to current btn
        btn.classList.add('active');
    });
});
//# sourceMappingURL=main.js.map