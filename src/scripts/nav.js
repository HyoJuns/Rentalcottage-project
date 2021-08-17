$(function () {
    const hamburger = $(".header__hamburger");
    const nav = $(".header__gnb");

    hamburger.click(function () {
        nav.toggleClass(`header__gnb--open`);
        console.log("click");
    });
});
