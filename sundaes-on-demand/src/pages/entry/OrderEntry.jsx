import Options from "./Options";
import { useOrderDetails } from "../../contexts/OrderDetails";
import Button from "react-bootstrap/Button";

function OrderEntry({ setOrderPhase }) {
  const [orderDetails] = useOrderDetails();
  return (
    <div>
      <h1>Design Your Sundae!</h1>
      <h2>Grand total: {orderDetails.totals.grandTotal}</h2>
      <Options optionType="scoops" />
      <Options optionType="toppings" />
      <Button onClick={() => setOrderPhase("review")}>Order Sundae!</Button>
    </div>
  );
}

export default OrderEntry;
