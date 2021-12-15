export class Snack {
    constructor(data) {
        this.name = data.name
        this.price = data.price
        this.img = data.img
    }

    get Template() {
        return /*html*/`
     <div class="col-6 my-2">
              <div class="bg-white shadow rounded p-3 ">
                <img class="product-img" src="${this.img}"
                  alt="${this.name}">
                <div class="text-center">
                  <p>${this.name}</p>
                  <p>${this.price}</p>
                </div>
              </div>
            </div>`

        // Make images clickable and copy the increaseTotal function from button in HTML
    }
}


