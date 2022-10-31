import ICoverComponent from './Cover.vue'
import IModalComponent from './Modal.vue'
import INavMenuComponent from './NavMenu.vue'
import ICardComponent from './Card.vue'

/// TODO: code refactoring

const VueISimple_ComponentList = [
  ICoverComponent,
  IModalComponent,
  INavMenuComponent,
  ICardComponent,
]

const install = function(Vue, globalOptions) {
  if (globalOptions) {
    // SwiperComponent.props.globalOptions.default = () => globalOptions
  }
  for (let iComponent of VueISimple_ComponentList) {
    Vue.component(iComponent.name, iComponent)
  }
}

export default install
export {
  ICoverComponent as iCover,
  IModalComponent as iModal,
  INavMenuComponent as iNavMenu,
  ICardComponent as iCard,
  install,
}
