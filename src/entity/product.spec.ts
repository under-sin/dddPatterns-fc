import Product from "./product";

describe("Product unit test", () => { 
    it("should throw error when id is empty", () => {
        expect(() => {
            const product = new Product("", "Book", 50);
        }).toThrow("Id is required");
    });

    it("should throw error when name is empty", () => {
        expect(() => {
            const product = new Product("1", "", 50);
        }).toThrow("Name is required");
    });

    it("should throw error when price is less than 0", () => {
        expect(() => {
            const product = new Product("1", "Book", -1);
        }).toThrow("Price must be greater than 0");
    });

    it("should change name", () => {
        const product = new Product("1", "Book", 50);
        product.changeName("Book 2");
        
        expect(product.name).toBe("Book 2");
    });

    it("should change price", () => {
        const product = new Product("1", "Book", 50);
        product.changePrice(100);
        
        expect(product.price).toBe(100);
    });
});