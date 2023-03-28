// Button Transformation
let btn1 = document.getElementsByClassName('button_about');

function changeColor() {
    btn1[0].style.backgroundColor = '#D19A5C';
    btn1[0].style.color = '#fff7ec';
};

function changeBackOriginal() {
    btn1[0].style.backgroundColor = '#e8ac66';
    btn1[0].style.color = '#273d57';
}

btn1[0].addEventListener('mouseover', changeColor);
btn1[0].addEventListener('mouseout', changeBackOriginal);

//Portfolio Button
let btn2 = document.getElementsByClassName('button_portfolio');

function changeColors() {
    btn2[0].style.backgroundColor = '#D19A5C';
    btn2[0].style.color = '#fff7ec'
};

function changeBack() {
    btn2[0].style.backgroundColor = '#e8ac66';
    btn2[0].style.color = '#273d57';
}

btn2[0].addEventListener('mouseover', changeColors);
btn2[0].addEventListener('mouseout', changeBack);