import FormView from '../views/FormView.js'
import ResultView from '../views/ResultView.js'

const tag = '[MainController]'

export default {
  init() {
    FormView.setup(document.querySelector('form'))
      .on('@submit', e => this.onSubmit(e.detail.input)) // 1.폼뷰에서 엔터를 쳤을경우 onSubmit 함수 (인풋데이터를 긁어서 보내준다) 실행
      .on('@reset', e => this.onResetForm())

    ResultView.setup(document.querySelector('#search-result'))
  },
  
  search(query) {
    console.log(tag, 'search()', query)
    //search api
    this.onSearchResult([]) // 빈 데이터
    // 3.검색된 데이터를 그려주기위해 onSearchResult 함수를 불러온다
  },

  onSubmit(input) {
    console.log(tag, 'onSubmit()', input)
    this.search(input) // 2.search를 실행한다, submit(엔터)를 입력받았을때만 실행
  },

  onResetForm() {
    console.log(tag, 'onResetForm()')
  },

  onSearchResult(data){
    ResultView.render(data)
  }
}