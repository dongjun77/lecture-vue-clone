import View from './View.js'

const tag = '[TabView]'

const TabView = Object.create(View)

TabView.setup = function (el) {
    this.init(el)
}

TabView.setActiveTab = function (tabName) {
    Array.from(this.el.querySelectorAll('li')).forEach(li => { //All은 모든 데이터를 반환해주기 때문
        li.className = li.innerHTML === tabName ? 'active' : ''//탭 네임이 같은것 들만 active라는 문자를 주고 아니면 빈 무자열 반환
    })
}

export default TabView // 이래야 컨트롤러에서 사용이 가능하다