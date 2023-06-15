import { CustomerProfile } from './CustomerProfile.js';

export class HealthInsuranceCustomerProfile extends CustomerProfile {
  isLoyalCustomer() {
    return true;
  }
}
