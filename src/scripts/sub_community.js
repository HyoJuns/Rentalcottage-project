$(function () {

    // 메뉴
    const nav_items = $(".community__item");
    const section_list = $("section.community");

    console.log(section_list);

    nav_items.click(function (e) {
        nav_items.removeClass("active");

        $(this).addClass("active");

        // 데이터 불러오기
        const data_show = $(this).attr("data-show");

        section_list.removeClass("show");

        const element = $(`.${data_show}`);
        element.addClass("show");
    });
});
