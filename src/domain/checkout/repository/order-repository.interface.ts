import { Order } from "sequelize";
import RepositoryInterface from "../../@shared/repository/respoitory-interface";

export default interface OrderRepositoryInterface extends RepositoryInterface<Order> {}