export class Shirt {
    id;
    itemName;
    color;
    size;
    currency;
    image;
    price;
    topDeal;
    constructor(itemName, color, size, currency, image, price, id, topDeal) {
        this.id = id;
        this.itemName = itemName;
        this.color = color;
        this.size = size;
        this.currency = currency;
        this.image = image;
        this.price = price;
        this.topDeal = topDeal;
    }
    /**
     * Function to find the categories used for sorting
     * @returns the Object of most important fields found from a shirt
     */
    mostImp() {
        return {
            id: this.id,
            itemName: this.itemName,
            size: this.size,
            image: this.image,
            currency: this.currency,
            color: this.color,
            price: this.price,
            topDeal: this.topDeal
        };
    }
}
