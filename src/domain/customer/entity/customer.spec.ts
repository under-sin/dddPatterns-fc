import Address from "../value-object/address";
import Customer from "./customer"

describe("Customer unit test", () => {

    it("should throw error when id is empty", () => {
        expect(() => {
            let customer = new Customer("", "John");
        }).toThrow("Id is required");
    });

    it("should throw error when name is empty", () => {
        expect(() => {
            let customer = new Customer("123", "");
        }).toThrow("Name is required");
    });

    it("should change name", () => {
        const customer = new Customer("123", "John");
        customer.changeName("Jane");

        expect(customer.name).toBe("Jane")
    });

    it("should activate customer", () => {
        const customer = new Customer("123", "John");
        const address = new Address("Rua 1", 1, "123123", "Natal");
        customer.Address = address;

        customer.activate()

        expect(customer.isActive()).toBe(true)
    });

    it("should deactivate customer", () => {
        const customer = new Customer("123", "John");

        customer.deactivate()

        expect(customer.isActive()).toBe(false)
    });

    it("should throw error when address is undefined when you activate", () => {
        expect(() => {
            const customer = new Customer("1", "John");
            customer.activate();
        }).toThrow("Address is mandatory to activate a costumer");
    });

    it("should add reward points", () => {
        const customer = new Customer("c1", "Customer 1");
        expect(customer.rewardPoints).toBe(0);

        customer.addRewardPoints(10);
        expect(customer.rewardPoints).toBe(10);

        customer.addRewardPoints(10);
        expect(customer.rewardPoints).toBe(20);
    })
})