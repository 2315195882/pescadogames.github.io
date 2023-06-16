let body_element = document.getElementsByTagName('body');

window.addEventListener("load", () => {
    if (document.cookie.indexOf('isdarktheme=true') == -1) {
    }
    else {
        body_element[0].classList.add('darktheme');
    }

    document.getElementById('darkthemechangebutton').addEventListener('click', function () {
        if (body_element[0].classList.contains('darktheme')) {
            body_element[0].classList.remove('darktheme');
            document.cookie = "isdarktheme=false";
        }
        else {
            body_element[0].classList.add('darktheme');
            document.cookie = "isdarktheme=true";
        }
    });
});