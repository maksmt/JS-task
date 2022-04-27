$(window).load(function () {
    if (!$.cookie('was__cookie')) {
    } else {
        document.querySelector(".balloon").classList.toggle("hide");
    }

    $.cookie('was__cookie', true, {
        expires: 30, path: '/'
    });

});

$(".balloon").click(function () {
    document.querySelector('.balloon').classList.toggle('hide');
    document.querySelector('.coupon').classList.add('show__coupon');
    document.querySelector('.coupon').classList.add('coupon__bottom');
});

$(".coupon__activate").click(function () {
    document.querySelector('.coupon').classList.add('hide');

});

const progress = document.querySelector('.scroll__paw');

window.addEventListener('scroll', progressPaw);

function progressPaw(e) {
    let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    let winHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let percent = winScroll / winHeight * 82;

    progress.style.top = percent + "%";
}
window.addEventListener('scroll', progressPawAnim);

let s = 0;
function progressPawAnim() {
    let a = document.documentElement.scrollTop;
    if (a > s) {
        progress.style.transform = 'rotate(180deg)';
    } else {
        progress.style.transform = 'rotate(0deg)';
    }
    s = a;

}

const filterPost = document.querySelectorAll('.content__post');
document.querySelector('nav').addEventListener('click', event => {
    if (event.target.tagName !== 'LI') {
        return false;
    }
    let filterClass = event.target.dataset['f'];
    filterPost.forEach(elem => {
        elem.classList.remove('hide');
        if (!elem.classList.contains(filterClass) && filterClass != 'all') {
            elem.classList.add('hide');
        }
    });
});