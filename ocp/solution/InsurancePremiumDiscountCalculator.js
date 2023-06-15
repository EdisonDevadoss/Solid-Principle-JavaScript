import { CustomerProfile } from './CustomerProfile.js';
import { VehicleInsuranceCustomerProfile } from './VehicleInsuranceCustomerProfile.js';
import { HomeInsuranceCustomerProfile } from './HomeInsuranceCustomerProfile.js';
import { HealthInsuranceCustomerProfile } from './HealthInsuranceCustomerProfile.js';

export class InsurancePremiumDiscountCalculator {
  calculatePremiumDiscountPercent(customerPf) {
    if (customerPf.isLoyalCustomer()) {
      console.log('---20');
    } else {
      console.log('0');
    }
  }
}

const insurancePremiumDiscountCalculator =
  new InsurancePremiumDiscountCalculator();

insurancePremiumDiscountCalculator.calculatePremiumDiscountPercent(
  new VehicleInsuranceCustomerProfile()
);
insurancePremiumDiscountCalculator.calculatePremiumDiscountPercent(
  new HomeInsuranceCustomerProfile()
);
insurancePremiumDiscountCalculator.calculatePremiumDiscountPercent(
  new HealthInsuranceCustomerProfile()
);
