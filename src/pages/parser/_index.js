import App from '../../components/interaction/Parser.svelte'

const target = document.querySelector('figcaption')

Reflect.construct(App, [{target}])