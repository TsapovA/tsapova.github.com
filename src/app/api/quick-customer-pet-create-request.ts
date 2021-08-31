import {CustomerCreateRequest} from "./customer-create-request";
import {PetCreateRequest} from "./pet-create-request";

export interface QuickCustomerPetCreateRequest {
  customerCreateRequest: CustomerCreateRequest
  petCreateRequest: PetCreateRequest
}
