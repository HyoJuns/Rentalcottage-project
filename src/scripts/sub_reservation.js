$(function () {
    const $reservation_item = $(".reservation__item");
    const $section_reservation = $("section.reservation");

    $reservation_item.click(function (e) {
        $reservation_item.removeClass("active");

        $(this).addClass("active");

        const name = $(this).attr("data-name");

        $section_reservation.removeClass("show");
        console.log($(this));
        $(`.${name}`).addClass("show");
    });
});
