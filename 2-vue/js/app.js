new Vue({
    el: '#app',
    data: {
        query: ''
    },
    methods: {
        onSubmit(e) {
            debugger
        },
        onreset() {
            this.query = ''//여기서 this는 Vue 의 query를 ''로 만들어준다
        }
    }
})