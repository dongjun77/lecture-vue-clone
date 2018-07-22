import SearchModel from './models/SearchModel.js'
import KeywordModel from './models/KeywordModel.js'

new Vue({
    el: '#app',
    data: {
        query: '',
        submitted: false,
        tabs: ['추천 검색어','최근 검색어'],
        selectedTab: '',
        keywords: [],
        searchResult: []
    },
    created() {
        this.selectedTab = this.tabs[0]
        this.fetchKeyword()
    },
    methods: {
        onSubmit(e) {
            this.search()
        },
        onKeyup() {
            if(!this.query.length) this.onReset()
        },
        onReset(e) {
            this.resetForm()
        },
        onClickTab(tab) {
            this.selectedTab = tab
        },
        onClickKeyword(keyword) {
            this.query = keyword
            this.search()
        },
        fetchKeyword() {
            KeywordModel.list().then(data => {
                this.keywords = data
            })
        },
        search() {
            SearchModel.list().then(data => {
                this.submitted = true
                this.searchResult = data
            })
        },
        resetForm() {
            this.query = ''//여기서 this는 Vue 의 query를 ''로 만들어준다
            this.submitted = false
            this.searchResult = []
        }
    }
})