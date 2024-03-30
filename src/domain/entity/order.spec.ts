import Order from "./order";
import OrderItem from "./orderItem";

describe("Order unit test", () => {

    it("should throw error when id is empty", () => {
        expect(() => {
            let order = new Order("", "123", []);
        }).toThrow("Id is required");
    });

    it("should throw error when customerId is empty", () => {
        expect(() => {
            let order = new Order("1", "", []);
        }).toThrow("CustomerId is required");
    });

    it("should throw error when items are empty", () => {
        expect(() => {
            let order = new Order("1", "123", []);
        }).toThrow("Items is required");
    });

    it("should calculate total one item", () => {
        const item = new OrderItem("i1", "Book 1", 100, "p1", 2);
        const order = new Order("1", "c1", [item]);

        expect(order.total()).toBe(200);
    });

    it("should calculate total multiples items", () => {
        const item1 = new OrderItem("i1", "Book 1", 50, "p1", 2);
        const item2 = new OrderItem("i2", "Book 2", 80, "p2", 1);
        const order = new Order("1", "c1", [item1, item2]);

        expect(order.total()).toBe(180);
    });

    it("should throw error if the item qtd is less or equal zero", () => {
        expect(() => {
            const item = new OrderItem("i1", "Book", 100, "p1", 0);
            const order = new Order("1", "c1", [item])
        }).toThrow("Quantity must be greater than 0")
    });
})