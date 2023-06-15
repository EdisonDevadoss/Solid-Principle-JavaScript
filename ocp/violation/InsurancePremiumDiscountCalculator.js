import { VehicleInsuranceCustomerProfile } from './VehicleInsuranceCustomerProfile.js';
import { HealthInsuranceCustomerProfile } from './HealthInsuranceCustomerProfile.js';

class InsurancePremiumDiscountCalculator {
  calculatePremiumDiscountPercentVehicle(customer) {
    if (customer.isLoyalCustomer()) {
      console.log('20');
      return 20;
    }
    console.log('0');

    return 0;
  }

  calculatePremiumDiscountPercentHome(customer) {
    if (customer.isLoyalCustomer()) {
      console.log('20');

      return 20;
    }
    console.log('0');

    return 0;
  }
}

const insurancePremiumDiscountCalculator =
  new InsurancePremiumDiscountCalculator();

insurancePremiumDiscountCalculator.calculatePremiumDiscountPercentVehicle(
  new VehicleInsuranceCustomerProfile()
);

insurancePremiumDiscountCalculator.calculatePremiumDiscountPercentHome(
    new HealthInsuranceCustomerProfile()
  );
  