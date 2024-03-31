import Customer from "../entity/customer";
import RepositoryInterface from "./respoitory-interface";

export default interface CustomerRepositoryInterface
    extends RepositoryInterface<Customer> { };