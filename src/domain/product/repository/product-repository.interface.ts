import Product from "../entity/product";
import RepositoryInterface from "../../@shared/repository/respoitory-interface";

export default interface ProductRepositoryInterface extends RepositoryInterface<Product> {
}