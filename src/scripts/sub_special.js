$(function () {
    const $btns = $(".menu__item");
    let os = "desktop";

    const $card = {
        $main: $(".section-1__mainTitle"),
        $title: $(".pannel__title"),
        $desc: $(".pannel__desc"),
        $bg: $(".pannel"),
        backgroundChange(_name) {
            this.$bg.css(
                "background-image",
                `url(./src/images/img_${_name}_${os}.jpg)`
            );
        },
        textChange(_text, $elem = this.$desc) {
            // console.log($elem.text.val());
            console.log($elem);
            $elem.html(`${_text}`);
        },
    };

    $btns.click(function (e) {
        $btns.removeClass("check");

        $(this).addClass("check");
        const _output = $(this).children("span").text();

        Change(Number(_output));
    });

    function Change(_input) {
        switch (_input) {
            case 1: // 수영장
                $card.backgroundChange("water");
                $card.textChange("SWIMMING POOL", $card.$main);
                $card.textChange("신나는 대형 수영장", $card.$title);
                $card.textChange(
                    `
                    무더운 여름, 시원한 수영장에 풍덩 빠져보세요. <br>
                수영장 크기 : 12m x 8m<br>
                운영시간 : 오후 3시 ~ 8시 까지<br>
                수영장 이용수칙<br>
                수영장 + 모자 필수 착용 <br>
                수건은 개별 지참 요함 (추가시 별도 비용 발생)<br>
                개인 튜브 등 물놀이 용품 별도 지참
                `,
                    $card.$desc
                );
                console.log(_input);
                break;
            case 2: // 숯불
                $card.backgroundChange("beef");
                $card.textChange("BARBECUE", $card.$main);
                $card.textChange("숯불바베큐", $card.$title);
                $card.textChange(
                    `
                    지글지글 익어가는 바비큐를 즐겨보세요.<br>
                    * 숯 + 그릴 대여<br>
                    &nbsp;&nbsp;- 2인 기본 15,000원<br>
                    &nbsp;&nbsp;- 3~4인 20,000원<br>
                    &nbsp;&nbsp;- 5~6인 30,000원<br>
                    &nbsp;&nbsp;- 7~8인 40,000원<br>
                    &nbsp;&nbsp;- 9인이상 1인당 5천원<br>
                    * 돌불판 + 가스버너 대여<br>
                    &nbsp;&nbsp;- 2인 15,000원<br>
                    &nbsp;&nbsp;- 3~4인 20,000원<br>
                    &nbsp;&nbsp;- 5인 이상 30,000원

                `,
                    $card.$desc
                );
                break;
            case 3: // 개별테라스
                $card.backgroundChange("beef");
                $card.textChange("TERRACE", $card.$main);
                $card.textChange("개별테라스", $card.$title);
                $card.textChange(
                    `
                    축령산 숲에서 불어오는 시원하고 상쾌한 공기가 가득한
                    테라스에 앉아서 이야기를 꽃 피워 보세요.

                `,
                    $card.$desc
                );
                break;
            case 4: // 계곡
                $card.backgroundChange("fallwater");
                $card.textChange("VALLEY", $card.$main);
                $card.textChange("근처 계곡", $card.$title);
                $card.textChange(
                    `
                    펜션 산책로를 따라 거닐다 보면 맑은 계곡을 만나실 수 있습니다.<br>
                    펜션에서 계곡까지 도보 5분 거리에 있습니다.

                `,
                    $card.$desc
                );
                break;
            case 5: // 정원
                $card.backgroundChange("garden");
                $card.textChange("GARDEN", $card.$main);
                $card.textChange("행복 연못과 정원", $card.$title);
                $card.textChange(
                    `
                    사계절 피고 지는 아름다운 꽃과 나무가 있는 정원에서 시원하게 분수가 뿜어져 나오는 연못이 있습니다.

                `,
                    $card.$desc
                );
                break;
            case 6:
                $card.backgroundChange("exercise");
                $card.textChange("PLAY COURT", $card.$main);
                $card.textChange("족구장과 배구민턴", $card.$title);
                $card.textChange(
                    `
                    행복펜션에서 스포츠를 즐겨보세요.<br>
                    족구장과 배드민턴이 가능합니다.<br>
                    예약시 사용 시간 미리 말씀해 주세요.

                `,
                    $card.$desc
                );
                break;
            case 7:
                $card.backgroundChange("ice");
                $card.textChange("ICE PLAY", $card.$main);
                $card.textChange("겨울썰매장", $card.$title);
                $card.textChange(
                    `
                    동계에 한하여 운영되는 썰매장이 있습니다.<br>
                    얼음팽이 놀이도 하며, 추운겨울 또 하나의 추억을 만드러 보시기 바랍니다.

                `,
                    $card.$desc
                );
                break;
        }
    }
});
