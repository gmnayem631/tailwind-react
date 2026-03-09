import React, { use } from "react";
import PricingCard from "./PricingCard";

const PricingOptions = ({ pricingPromise }) => {
  const pricingResponse = use(pricingPromise);
  const pricingData = pricingResponse.data;

  return (
    <div>
      <h2 className="text-5xl">Get Our Membership</h2>
      <div className="">
        {pricingData.map((pricing) => (
          <PricingCard key={pricing.id} pricing={pricing}></PricingCard>
        ))}
      </div>
    </div>
  );
};

export default PricingOptions;
