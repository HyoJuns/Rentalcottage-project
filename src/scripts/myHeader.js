// 커스텀 요소 만들기
class MyHeader extends HTMLElement {
    // 생성자
    constructor() {
        super();
        // 요소 추가 위치
    }

    render() {
        this.innerHTML = `
            <header class="header slot="header">
                <div class="header__wrap">
                    <div class="header__flexbox">
                        <figure class="header__logo">
                        <a href="./src/index.html">
                            <img src="./src/images/LOGO.png" alt="LOGO">
                        </a>

                        </figure>
                        <nav class="header__gnb">
                    <ul class="gnb">
                        <li class="gnb__item">
                            <a href="./subpage_about.html">
                                펜션소개
                            </a>
                        </li>
                        <li class="gnb__item">
                            <a href="./subpage_roompreview.html">
                                객실소개
                            </a>
                        </li>
                        <li class="gnb__item">
                            <a href="./subpage_special.html">
                                펜션스페셜
                            </a>
                        </li>
                        <li class="gnb__item">
                            <a href="./subpage_service.html">
                                펜션서비스
                            </a>
                        </li>
                        <li class="gnb__item">
                            <a href="./subpage_travel.html">
                                주변여행지
                            </a>
                        </li>
                        <li class="gnb__item">
                            <a href="./subpage_reservation.html">
                                예약안내
                            </a>
                        </li>
                        <li class="gnb__item">
                            <a href="./subpage_community.html">
                                커뮤니티
                            </a>
                        </li>
                    </ul>
                </nav>

                <!-- ICON -->
                <ul class="header__icon">
                    <li class="icon__item">
                        <a href="./subpage_reservation.html">
                            <span class="icon-bank"></span>
                        </a>
                    </li>
                    <li class="icon__item">
                        <a href="./subpage_roompreview.html">
                            <span class="icon-location2"></span>
                        </a>
                    </li>
                </ul>
                    </div>
                </div>
            </header>
        `;
    }

    connectedCallback() {
        // 브라우저 문서에 element가 추가될 때 이 메서드를 호출한다.
        // (요소가 반복적으로 추가/제거되면 여러번 호출된다.)

        if (!this.rendered) {
            this.render();
            this.rendered = true;
        }
    }

    disconnectedCallback() {
        // 브라우저 문서에서 element가 삭제되면 메서드를 호출한다.
        // (요소가 반복적으로 추가/제거되면 여러번 호출된다.)
    }

    // 변경할 변수가 있으면 자동으로 업데이트 시켜준다.
    // 실시간 모니터링
    static get observedAttributes() {
        return [];
    }

    attributeChangedCallback(name, oldValue, newValue) {
        // 위에 나열된 속성들 중 수정사항 발생시 호출한다.
    }

    adoptedCallback() {
        // element가 새 문서로 이동할 때 호출된다.
        // (document.appendNode에서 발생, 거의 사용되지 않는다.)
    }

    // 다른 요소 및 메서드의 속성을 사용
}

class Myfooter extends HTMLElement {
    // 생성자
    constructor() {
        super();
        // 요소 추가 위치
    }

    render() {
        this.innerHTML = `
            <footer class="footer">
        <div class="footer__wrap">
            <nav class="footer__fnb">
                <ul class="fnb__container">
                    <li class="fnb__item">
                        <a href="./subpage_about.html">펜션소개</a>
                    </li>
                    <li class="fnb__item">
                        <a href="./subpage_roompreview.html">객실소개</a>
                    </li>
                    <li class="fnb__item">
                        <a href="./subpage_special.html">펜션스페셜</a>
                    </li>
                    <li class="fnb__item">
                        <a href="./subpage_service.html">펜션서비스</a>
                    </li>
                    <li class="fnb__item">
                        <a href="./subpage_travel.html">주변여행지</a>
                    </li>
                    <li class="fnb__item">
                        <a href="./subpage_reservation.html">예약안내</a>
                    </li>
                    <li class="fnb__item">
                        <a href="./subpage_community.html">커뮤니티</a>
                    </li>
                </ul>
            </nav>
            <div class="footer__left">
                <p class="footer__text">
                    상호 : 행복펜션<br>
                    예약전화 : <a href="tel:031-585-8232">031-585-8232</a>
                </p>
                <address class="footer__address">
                    주소 : 경기포 가평군 상면 수목원로 128<br>
                    (구주소 : 경기도 가평군 상면 행현리 332-2번지)
                </address>
                <small class="footer__copyright">
                    COPYRIGHT(c) ALL RIGHTS RESERVED. (주) 팬션뱅크
                </small>
            </div>
            <div class="footer__right">
                <p class="footer__text">
                    사업자 번호 : 879-44-00531<br>
                    계좌번호 : 농협 351-1085-1544-03 조미선
                </p>
                <p class="footer__text">
                    이 사이트는 포트폴리오 용도로 제작되었습니다.
                </p>
            </div>
        </div>
    </footer>
        `;
    }

    connectedCallback() {
        // 브라우저 문서에 element가 추가될 때 이 메서드를 호출한다.
        // (요소가 반복적으로 추가/제거되면 여러번 호출된다.)

        if (!this.rendered) {
            this.render();
            this.rendered = true;
        }
    }

    disconnectedCallback() {
        // 브라우저 문서에서 element가 삭제되면 메서드를 호출한다.
        // (요소가 반복적으로 추가/제거되면 여러번 호출된다.)
    }

    // 변경할 변수가 있으면 자동으로 업데이트 시켜준다.
    // 실시간 모니터링
    static get observedAttributes() {
        return [];
    }

    attributeChangedCallback(name, oldValue, newValue) {
        // 위에 나열된 속성들 중 수정사항 발생시 호출한다.
    }

    adoptedCallback() {
        // element가 새 문서로 이동할 때 호출된다.
        // (document.appendNode에서 발생, 거의 사용되지 않는다.)
    }
}

// 위 클래스가 브라우저에 제공된다는 것을 알려준다.
customElements.define("my-header", MyHeader);
customElements.define("my-footer", Myfooter);
