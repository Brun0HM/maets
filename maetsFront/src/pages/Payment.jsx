import PayCard from "../components/PayCard";
import PurchaseSummary from "../components/PurchaseSummary";
import RegisterCard from "../components/RegisterCard";
import RegisteredCards from "../components/RegisteredCards";

const Payment = () => {
  return (
    <>
      <div className="container min-vh-100 text-white py-5 px-md-5">
        <div col-6>
          <RegisterCard />
        </div>
        <div className="">
          <PurchaseSummary />
        </div>
      </div>
    </>
  );
};

export default Payment;
