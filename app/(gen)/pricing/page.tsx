import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing Page",
  description: "Pricing",
};

function PricingPage() {
  return (
    <div>
      <h1>Pricing</h1>
      <p>This is the pricing page</p>
    </div>
  );
}

export default PricingPage;
