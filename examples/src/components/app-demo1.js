import * as domvm from 'domvm'

const el = domvm.defineElementSpread

function AnotherExample (vm) {
  return function () {
    return el('li', 'Another example text')
  }
}

function App () {
  return (vm, data) => (
    <div>
      <h2><t-text>Demo app 1</t-text></h2>
      <ul>
        <li><t-text>One example text</t-text></li>
        <li><t-text>A text with a parameter named "user" with value "<t-param name='user'>Some User</t-param>"</t-text></li>
        {AnotherExample(vm)()}
        <li><my-element></my-element></li>
      </ul>
    </div>
  )
}

domvm.createView(App).mount(document.getElementById('app-demo1'))
