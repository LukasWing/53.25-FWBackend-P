throw new Error("This code testApi.ts is deprecated until further notice");
// Add unittests for the api corresponding to the API-doc
import { testEquals } from "./utils.js";
//import fetch from 'node-fetch';
console.log("test started");
export async function run() {
    let tn = 0;
    // unitest HTTPGetSpecProduct
    // Arrange
    let productId = 4;
    let expectedProduct = {
        itemName: "dogeShirt",
        sex: "Male",
        color: "White",
        currency: "Bitcoin",
        image: "/Project1/Images/dogetshirt.jpg",
        price: 10,
        id: 4,
        topDeal: false
    };
    // Act
    try {
        let response1 = await fetch(`/products/${productId}`, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json;charset=utf-8' },
        });
        let product4 = await response1.json();
        // Assert
        // testEquals(JSON.stringify(expectedProduct), JSON.stringify(product4), false, false)
    }
    catch (error) {
        console.log("Error occured in trying to make fetch to testnumber " + tn);
    }
    tn = 1;
    // Unittest Resource Path – Categories/products
    // Arrange 
    let categoryName = "Bitcoin";
    let expected = {
        category: "Bitcoin",
        products: [{
                "itemName": "dogeShirt",
                "color": "White",
                "currency": "Bitcoin",
                "image": "/Project1/Images/dogetshirt.jpg",
                "price": 10,
                "id": 4,
                "topDeal": false
            }, {
                "itemName": "Bitcoin t-shirt",
                "color": "Black",
                "currency": "Bitcoin",
                "image": "/Project1/Images/ItemImages/BitcoinMenBlack.webp",
                "price": 10,
                "id": 8,
                "topDeal": false
            }, {
                "itemName": "Bitcoin Splashy",
                "color": "Black",
                "currency": "Bitcoin",
                "image": "/Project1/Images/ItemImages/BitcoinMenBlack2.jpeg",
                "price": 9,
                "id": 9,
                "topDeal": false
            }, {
                "itemName": "Bitcoin White",
                "color": "White",
                "currency": "Bitcoin",
                "image": "/Project1/Images/ItemImages/BitcoinMenWhite.webp",
                "price": 20,
                "id": 10,
                "topDeal": false
            }, {
                "itemName": "Bitcoin White",
                "color": "White",
                "currency": "Bitcoin",
                "image": "/Project1/Images/ItemImages/BitcoinWomenWhite.webp",
                "price": 10,
                "id": 19,
                "topDeal": false
            }]
    };
    try {
        //Act 
        let response2 = await fetch(`/products/${categoryName}`, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json;charset=utf-8' },
        });
        let content = await response2.json();
        //Assert
        testEquals(JSON.stringify(expected), JSON.stringify(content));
    }
    catch (error) {
        console.log("Error occured in trying to make fetch to testnumber " + tn);
    }
    tn = 2;
    // Unittest Resource Path – Categories
    // Arrange 
    let expectedCats = new Set(["Men", "Female", "White", "Black", "Blue",
        "BitConnect", "Sheba", "Terra Luna", "Bitcoin", "Concordium", "Top deal",
        "Solana", "Ripple"]);
    try {
        //Act
        let response3 = await fetch("/categories", {
            method: 'GET',
            headers: { 'Content-Type': 'application/json;charset=utf-8' },
        });
        let content3 = await response3.json();
        let actualCats = new Set(content3.categories);
        //Assert
        testEquals(expectedCats, actualCats, true, true);
    }
    catch (error) {
        console.log("Error occured in trying to make fetch to testnumber " + tn);
    }
    tn = 3;
    //Unittest HTTPUpdateQuantityItem
    //This test relies on theres no such item/customer in the database, which will throw an error. 
    //Arrange
    let customerId = 1;
    let itemId = 1;
    let item1 = { "customerID": 1, "itemID": 1, "quantity": 4 };
    try {
        //Act
        let responseQuant = await fetch(`Customers/${customerId}/basket/${itemId}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json;charset=utf-8' },
            body: JSON.stringify(item1)
        });
        //Assert
        testEquals(responseQuant.ok, false);
    }
    catch (error) {
        console.log("Error occured in trying to make fetch to testnumber " + tn);
    }
    tn = 4;
    //Unittest HTTPDeleteItemFromBasket
    //This test relies on theres exist such item in the database, which can be deleted
    //Arrange
    let customerId2 = 2;
    let itemId2 = 2;
    let item2 = { "customerID": 2, "itemID": 2, "quantity": 2 };
    try {
        //Act
        let responseDelete = await fetch(`Customers/${customerId}/basket/${itemId}`, {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json;charset=utf-8' },
            body: JSON.stringify(item2)
        });
        //Assert
        testEquals(responseDelete.ok, true);
    }
    catch (error) {
        console.log("Error occured in trying to make fetch to testnumber " + tn);
    }
    tn = 5;
    // Resource Path – products 
    // Arrange Test 1 
    try {
        // Act Test 1
        let response4 = await fetch(`/products/`, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json;charset=utf-8' },
        });
        let products = await response4.json();
        let numOfObjects = 1;
        // Assert Test 1
        testEquals(products.length, numOfObjects, false, false);
    }
    catch (error) {
        console.log("Error occured in trying to make fetch to testnumber " + tn);
    }
    tn = 6;
    // Arrange Test 2
    let expectedProduct2 = {
        itemName: "dogeShirt",
        sex: "Male",
        color: "White",
        currency: "Bitcoin",
        image: "/Project1/Images/dogetshirt.jpg",
        price: 10,
        id: 4,
        topDeal: false
    };
    try {
        // Act Test 1
        let response5 = await fetch(`/products/`, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json;charset=utf-8' },
        });
        let product5 = await response5.json();
        // Assert
        testEquals(JSON.stringify(expectedProduct2), JSON.stringify(product5), false, false);
    }
    catch (error) {
        console.log("Error occured in trying to make fetch to testnumber " + tn);
    }
    tn = 7;
    /**
     * Tests if a new empty customer basket has been posted
     */
    // B6: HTTPCreateBasket
    // Path: Customers/{customerId}/basket/
    // Arrange Test 1
    let expectedCNewBasket = {
        "customerId": 1,
        "contents": []
    };
    try {
        // Act Test 1
        let customerID = 1;
        let response6 = await fetch(`Customers/${customerID}/basket/`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json;charset=utf-8' },
        });
        let basket6 = await response6.json();
        // Assert Test 1
        testEquals(JSON.stringify(expectedCNewBasket), JSON.stringify(basket6), false, false);
    }
    catch (error) {
        console.log("Error occured in trying to make fetch to testnumber " + tn);
    }
    tn = 8;
    /**
     * Tests if it's possible to find a basket from the database
     */
    // C6: HTTPReturnBasketContent
    // Path: Customers/{customerId}/basket/
    // Arrange Test 1
    let expectedCustBasket = {
        "customerId": 1,
        "contents": [
            { "itemId": 42, "amount": 3 },
            { "itemId": 43, "amount": 1 }
        ]
    };
    try {
        // Act Test 1
        // customerID from above
        let response7 = await fetch(`Customers/1/basket/`, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json;charset=utf-8' },
        });
        let basket7 = await response7.json();
        testEquals(JSON.stringify(expectedCustBasket), JSON.stringify(basket7), true, true);
    }
    catch (error) {
        console.log("Error occured in trying to make fetch to testnumber " + tn);
    }
    tn = 9;
    // Assert Test 1
}
run();
//window.run = run; // ignore error here. It will behave well when transpiled
