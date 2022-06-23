export class Customer {
    firstname;
    lastname;
    email;
    customerId;
    basket;
    constructor(customerId, email, firstname, lastname, basket) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.customerId = customerId;
        this.basket = basket === undefined ? [] : basket;
        this.email = email;
    }
    /**
     * Iterates through customers basket id and size to be searched matches element in basket
     * @param id - Item ID to find a match for
     * @param  size - Item size to find match for
     * @returns - Item in the basket that matches id and size
     */
    findItem(id) {
        return this.basket.findIndex(element => element.itemId === id);
    }
    /**
     * Uses Item ID and Helper Function findItem to add quantity to Item in Customer Basket
     * @param id - Customer ID used to identify basket
     * @param quantity - number that is updated on Amount: quantity 10
     */
    update(id, quantity) {
        let index = this.findItem(id);
        if (index === -1) {
            this.basket.push({ itemId: id, amount: quantity });
        }
        else {
            this.basket[index].amount += quantity;
        }
    }
}
