import Customer from "../entity/customer";
import RepositoryInterface from "../../@shared/repository/respoitory-interface";

export default interface CustomerRepositoryInterface
    extends RepositoryInterface<Customer> { };