import { Sequelize } from "sequelize-typescript"
import ProductModel from "../db/sequelize/model/product.model";
import ProductRepository from "./product.repository";
import Product from "../../domain/entity/product";

describe("Product repository test", () => {
    let sequilize: Sequelize;

    beforeEach(async () => {
        sequilize = new Sequelize({
            dialect: "sqlite",
            storage: ":memory:",
            logging: false,
            sync: { force: true },
        });

        sequilize.addModels([ProductModel]);
        await sequilize.sync();
    });

    afterEach(async () => {
        await sequilize.close();
    });

    it("should create a product", async () => {
        const productRepository = new ProductRepository();
        const product = new Product("1", "Book", 50);

        await productRepository.create(product);

        const productModel = await ProductModel.findOne({ where: { id: "1" } });

        expect(productModel.toJSON()).toStrictEqual({
            id: "1",
            name: "Book",
            price: 50,
        })
    });

    it("should update a product", async () => {
        const productRepository = new ProductRepository();
        const product = new Product("1", "Book", 50);

        await productRepository.create(product);

        product.changeName("Book 2");
        product.changePrice(100);

        await productRepository.update(product);

        const productModel = await ProductModel.findOne({ where: { id: "1" } });

        expect(productModel.toJSON()).toStrictEqual({
            id: "1",
            name: "Book 2",
            price: 100,
        });
    });

    it("should find a product by id", async () => {
        const productRepository = new ProductRepository();
        const product = new Product("1", "Book", 50);

        await productRepository.create(product);

        const productModel = await ProductModel.findOne({ where: { id: "1" } });
        const foundProduct = await productRepository.find("1");

        expect(productModel.toJSON()).toStrictEqual({
            id: foundProduct.id,
            name: foundProduct.name,
            price: foundProduct.price,
        });
    });

    it("should find all products", async () => {
        const productRepository = new ProductRepository();
        const product = new Product("1", "Book", 50);
        await productRepository.create(product);

        const product2 = new Product("2", "Book", 50);
        await productRepository.create(product2);

        const foundProduct = await productRepository.findAll();
        const products = [product, product2];

        expect(products).toEqual(foundProduct);
    });
})