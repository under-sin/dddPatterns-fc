import Address from "./entity/address";
import Customer from "./entity/customer";
import Order from "./entity/order";
import OrderItem from "./entity/orderItem";

let customer = new Customer("123", "Anderson");
const address = new Address("Rua 1", 1, "123123", "Natal");
customer.Address = address
customer.activate()