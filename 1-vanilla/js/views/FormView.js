import View from './View.js'

const tag = '[FormView]'

const FormView = Object.create(View)

FormView.setup = function (el) {
  this.init(el)
  this.inputEl = el.querySelector('[type=text]')
  this.resetEl = el.querySelector('[type=reset]')
  this.showResetBtn(false)
  this.bindEvents()
  return this
}

FormView.showResetBtn = function (show = true) {
  this.resetEl.style.display = show ? 'block' : 'none'
}

FormView.bindEvents = function() {
  this.on('submit', e => e.preventDefault())
  this.inputEl.addEventListener('keyup', e => this.onkeyup(e))
}

FormView.onkeyup = function (e) {
  const enter = 13
  this.showResetBtn(this.inputEl.value.length)
  if (e.keyCode !== enter) return 
  //검색결과 View 띄우기
  this.emit('@submit', { 
    input: this.inputEl.value 
  })
}

export default FormView