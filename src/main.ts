import Address from "./entity/address";
import Customer from "./entity/customer";
import Order from "./entity/order";
import OrderItem from "./entity/orderItem";

let customer = new Customer("123", "Anderson");
const address = new Address("Rua 1", 1, "123123", "Natal");
customer._address = address
customer.activate()

const item1 = new OrderItem("1", "item1", 10)
const item2 = new OrderItem("3", "item3", 20)
const order = new Order("1", "123", [item1, item2])