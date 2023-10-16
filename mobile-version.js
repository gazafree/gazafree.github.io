$(document).ready(() => {
    if (window.innerWidth <= 767) {
        buttons = {
            submit_text: {
                sections_to_hide: [$('.main-section')[0]],
                section_to_display: $('#modify-section'),
                append_to: $('#ctrl-btns'),
                children_length: 2,
                step: 2,
                callback: formatWords,
            },
            convert: {
                sections_to_hide: [$('#modify-section')[0]],
                section_to_display: $('#result-section'),
                children_length: 3,
                step: 3,
                callback: convertText,
            }
        }

        const next_button = $('#submit-text')[0];
        next_button.innerHTML = 'التالي';
        next_button.onclick = () => { addOnClick(buttons.submit_text) };


        const convert_button = $('.convert')[0];
        convert_button.onclick = () => { addOnClick(buttons.convert) };
    }
});

const goback = (e) => {
    const step = e.id[5];
    const selector_list = [[$('#modify-section')[0]], [$('.main-section')[0]], [$('#result-section')[0]]];
    
    if (step === '2') {
        changeVisibility(selector_list[0], 'none');
        changeVisibility(selector_list[1], 'grid');
    } else {
        changeVisibility(selector_list[2], 'none');
        changeVisibility(selector_list[0], 'grid');
    }
};

const changeVisibility = (elements, display) => {
    elements.forEach(elem => {
        elem.style.display = display;
    });
}

const appendGoBackButton = (step, container) => {
    const button = `<button type="button" id="step-${step}" class="col-sm btn btn-dark btn-lg" onclick="goback(this)">العودة</button> `;
    container.append(button);
}

const addOnClick = ({ sections_to_hide, section_to_display, append_to, children_length, step, callback }) => {
    var check = callback()
    if(callback.name == "convertText" && !check){
        return;
    }

    changeVisibility(sections_to_hide, 'none');
    changeVisibility([section_to_display[0]], 'grid');
    const children_to_check = append_to || section_to_display;

    if (children_to_check[0].children.length !== children_length) {
        appendGoBackButton(step, children_to_check);
    }

}