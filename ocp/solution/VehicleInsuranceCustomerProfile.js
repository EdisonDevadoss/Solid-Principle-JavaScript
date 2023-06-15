import { CustomerProfile } from './CustomerProfile.js';

export class VehicleInsuranceCustomerProfile extends CustomerProfile {
  isLoyalCustomer() {
    return true;
  }
}
