export default {
    template: '#search-form',
    props: ['value'],
    data() {
        return {
            inputValue: this.value
        }
    },
    watch: {
        value(newVal, oldVal) { // props 에 들어오는 value라는 값을 응시한다
            this.inputValue = newVal
        }
    },
    methods: {
        onSubmit() {
            this.$emit('@submit', this.inputValue.trim())
        },
        onKeyup() {
            if (!this.inputValue.length) this.onReset()
        },
        onReset() {
            this.inputValue = ''
            this.$emit('@reset')
        }
    }
}