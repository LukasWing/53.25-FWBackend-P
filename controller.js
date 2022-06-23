import { CustomerManager } from "./CustomerManager.js";
import { ShirtManager } from "./ShirtManager.js";
const DATA_FILE = "./Data.json";
/**
 * Refer to CustomerManager.removeShirt() for functionality
 * @param req
 * @param res
 */
export async function removeShirt(req, res) {
    try {
        let modelMan = new CustomerManager(DATA_FILE);
        let customerId = Number(req.params.customerId);
        let itemId = Number(req.params.itemId);
        await modelMan.removeShirt(customerId, itemId);
        res.status(200).send({ message: "Succesfully removed item" });
        res.end();
    }
    catch (error) {
        res.status(400).send(error.message);
    }
}
/**
 * Refer to ShirtManager.getEveryCategory() for functionality
 * @param req
 * @param res
 */
export async function getCats(req, res) {
    try {
        let modelMan = new ShirtManager(DATA_FILE);
        let allCats = await modelMan.getEveryCategory();
        res.status(200).send(allCats);
        res.end();
    }
    catch (error) {
        // res.statusMessage=
        res.status(400).send(error.message);
    }
}
/**
 * Refer to ShirtManager.getProductsByCategory() for functionality
 * @param req
 * @param res
 */
export async function getProdByCat(req, res) {
    try {
        let cat = req.params.category;
        let modelMan = new ShirtManager(DATA_FILE);
        let prods = await modelMan.getProductsByCategory(cat);
        res.status(200).send(prods);
        res.end();
    }
    catch (error) {
        res.status(404).send(error.message);
    }
}
/**
 * Refer to ShirtManager.getProducts() for functionality
 * @param req
 * @param res
 */
export async function getProducts(req, res) {
    try {
        let modelMan = new ShirtManager(DATA_FILE);
        let prods = await modelMan.getProducts();
        res.status(200).send(prods);
        res.end();
    }
    catch (error) {
        res.status(400).send(error.message);
    }
}
export async function createCustomer(req, res) {
    try {
        let cusMan = new CustomerManager(DATA_FILE);
        let email = req.body.email;
        let firstname = req.body.firstname;
        let lastname = req.body.lastname;
        const customerId = await cusMan.lookUpEmail(email);
        console.log(customerId);
        if (customerId !== -1) {
            throw Error("Customer already exists");
        }
        ;
        let id = await cusMan.createCustomer(email, firstname, lastname);
        res.status(201).send({ customerId: id });
        res.end();
    }
    catch (error) {
        res.status(400).send(error.message);
    }
}
/**
 * Set the item amount of an item in basket to whatever quantity the customer sends
 * @param req to server
 * @param res to client
 */
export async function updateItem(req, res) {
    try {
        let basMan = new CustomerManager(DATA_FILE);
        let customerId = Number(req.params.customerId);
        let itemId = Number(req.params.itemId);
        let amount = req.body.amount;
        let sz = Number(req.body.size);
        let size = sz;
        await basMan.updateShirt(customerId, itemId, amount);
        res.status(201);
        res.end();
    }
    catch (error) {
        res.status(400).send(error.message);
    }
}
export async function addItem(req, res) {
    try {
        let basMan = new CustomerManager(DATA_FILE);
        let customerId = Number(req.params.customerId);
        let itemId = Number(req.params.itemId);
        let amount = req.body.amount;
        let sz = Number(req.body.size);
        let size = sz;
        await basMan.updateShirt(customerId, itemId, amount);
        res.status(201);
        res.end();
    }
    catch (error) {
        res.status(400).send(error.message);
    }
}
export async function addItemList(req, res) {
    try {
        let basMan = new CustomerManager(DATA_FILE);
        let customerId = Number(req.params.customerId);
        let items = req.body.items;
        await basMan.fillBasket(customerId, items);
        res.status(201);
        res.end();
    }
    catch (error) {
        res.status(400).send(error.message);
    }
}
export async function getCustomer(req, res) {
    try {
        let cusMan = new CustomerManager(DATA_FILE);
        let customerId = Number(req.params.customerId);
        let basket = await cusMan.getCustomer(customerId);
        res.status(200).send(basket);
    }
    catch (error) {
        res.status(400).send(error.message);
    }
}
/**
 *
 * Refer to ShirtManager.getByID() for functionality
 * @param req
 * @param res
 */
export async function getSpecificProduct(req, res) {
    try {
        let modelMan = new ShirtManager(DATA_FILE);
        let productId = Number(req.params.productId);
        let product = await modelMan.getByID(productId);
        res.status(200).send(product);
        res.end();
    }
    catch (error) {
        res.status(400).send(error.message);
    }
}
export async function getCustomerId(req, res) {
    try {
        let cusMan = new CustomerManager(DATA_FILE);
        let email = req.body.email;
        let customerId = await cusMan.lookUpEmail(email);
        if (customerId == -1)
            throw Error("Unknown email");
        res.status(200).send({ customerId: customerId });
        res.end();
    }
    catch (error) {
        res.status(400).send(error.message);
    }
}
