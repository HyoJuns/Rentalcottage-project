// 커스텀 요소 만들기
class MyHeader extends HTMLElement {
    // 생성자
    constructor() {
        super();
        // 요소 추가 위치
    }

    render()
    {

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
                            <a href="./subpage_about.html" target="_blank">
                                펜션소개
                            </a>
                        </li>
                        <li class="gnb__item">
                            <a href="./subpage_roompreview.html" target="_blank">
                                객실소개
                            </a>
                        </li>
                        <li class="gnb__item">
                            <a href="./subpage_special.html" target="_blank">
                                펜션스페셜
                            </a>
                        </li>
                        <li class="gnb__item">
                            <a href="./subpage_service.html" target="_blank">
                                펜션서비스
                            </a>
                        </li>
                        <li class="gnb__item">
                            <a href="./subpage_travel.html" target="_blank">
                                주변여행지
                            </a>
                        </li>
                        <li class="gnb__item">
                            <a href="./subpage_reservation.html" target="_blank">
                                예약안내
                            </a>
                        </li>
                        <li class="gnb__item">
                            <a href="./subpage_community.html" target="_blank">
                                커뮤니티
                            </a>
                        </li>
                    </ul>
                </nav>

                <!-- ICON -->
                <ul class="header__icon">
                    <li class="icon__item">
                        <a href="#">
                            <span class="icon-bank"></span>
                        </a>
                    </li>
                    <li class="icon__item">
                        <a href="#">
                            <span class="icon-location2"></span>
                        </a>
                    </li>
                </ul>
                    </div>
                </div>
            </header>
        `
    }


    connectedCallback() {
        // 브라우저 문서에 element가 추가될 때 이 메서드를 호출한다.
        // (요소가 반복적으로 추가/제거되면 여러번 호출된다.)

        if(!this.rendered)
        {
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
// 위 클래스가 브라우저에 제공된다는 것을 알려준다.
customElements.define("my-header", MyHeader);