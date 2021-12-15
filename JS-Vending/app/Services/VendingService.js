import { ProxyState } from "../AppState.js"

class VendingService {
    constructor() {
        console.log('this is the service')
    }

    increaseTotal() {
        let total = ProxyState.total += .25
        console.log('working', total)
    }

    // Need to adjust increaseTotal function to now add totals from the snacks array AppState; Interpolation

}


export const vendingService = new VendingService()