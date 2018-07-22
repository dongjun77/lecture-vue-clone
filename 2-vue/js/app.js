new Vue({
    el: '#app',
    data: {
        query: ''
    },
    methods: {
        onSubmit(e) {
            debugger
        },
        onKeyup() {
            if(!this.query.length) this.onReset()
        },
        onReset() {
            this.query = ''//여기서 this는 Vue 의 query를 ''로 만들어준다
            debugger
        }
    }
})