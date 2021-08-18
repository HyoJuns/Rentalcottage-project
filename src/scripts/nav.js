$(function () {
    const hamburger = $(".header__hamburger");
    const nav = $(".header__gnb");

    $(`a[href="#"]`).click((e) => {
        e.preventDefault();
    });

    hamburger.click(function () {
        nav.toggleClass(`header__gnb--open`);
        console.log("click");
    });
});
