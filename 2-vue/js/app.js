import SearchModel from './models/SearchModel.js'
new Vue({
    el: '#app',
    data: {
        query: '',
        submitted: false,
        searchResult: []
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
        search() {
            SearchModel.list().then(data => {
                this.submitted = true
                this.searchResult = data
            })
        },
        resetForm() {
            this.query = ''//여기서 this는 Vue 의 query를 ''로 만들어준다
            debugger
        }
    }
})