import { ProxyState } from "../AppState.js"
import { vendingService } from "../Services/VendingService.js"


function drawSnacks() {
    let template = ''
    let snacks = ProxyState.snacks
    snacks.forEach(s => template += s.Template)
    document.getElementById('snacks').innerHTML = template
}

function drawTotal() {
    // Will need to call the service function for making the total
    document.getElementById('total').innerText
}


export class VendingController {
    constructor() {
        console.log('this is the controller')
        ProxyState.on('snacks', drawSnacks)
        drawSnacks()
    }

    increaseTotal() {
        vendingService.increaseTotal()
    }
}