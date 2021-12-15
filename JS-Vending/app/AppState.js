import { Snack } from "./Models/Snack.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"

class AppState extends EventEmitter {
  /** @type {import('./Models/Value').Value[]} */
  values = []


  total = 0

  snacks = [
    new Snack({ name: 'Doritos', price: '3.50', img: 'https://m.media-amazon.com/images/I/71MQeIS7FAL._SL1500_.jpg' }),
    new Snack({ name: 'Cheetos', price: '3.25', img: 'https://target.scene7.com/is/image/Target/GUEST_483ba9ca-1084-484a-a5a9-5cc5aa1b0fe8?wid=488&hei=488&fmt=pjpeg' }),
    new Snack({ name: 'Kit Kat', price: '2.75', img: 'https://i5.walmartimages.com/asr/ceaefb20-66fd-4e8d-afa4-721bd148be50_1.caca1089569b0608419aeab7d1ec7a73.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF' }),
    new Snack({ name: 'Twix', price: '2.70', img: 'https://www.twix.com/sites/g/files/fnmzdf236/files/2021-03/wazrsinnljydmvimjwve.png' }),
    new Snack({ name: 'Coca-Cola', price: '2.50', img: 'https://cdn.shopify.com/s/files/1/2679/6864/products/grocery-coca-cola-original-20-oz-bottle-14051985981493.png?v=1611195719' }),
    new Snack({ name: 'Sprite', price: '2.50', img: 'https://target.scene7.com/is/image/Target/GUEST_4f2bf9ec-55c4-4a9e-bf0d-61ebc5c9c110?wid=488&hei=488&fmt=pjpeg' })
  ]




}

export const ProxyState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
