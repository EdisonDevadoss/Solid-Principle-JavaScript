import { CustomerProfile } from './CustomerProfile.js';

export class HomeInsuranceCustomerProfile extends CustomerProfile {
  isLoyalCustomer() {
    return false;
  }
}
