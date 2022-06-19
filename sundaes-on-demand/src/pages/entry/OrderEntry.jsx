import Options from './Options';
import { useOrderDetails } from '../../contexts/OrderDetails';

function OrderEntry() {
  const [orderDetails] = useOrderDetails();
  return (
    <div>
      <h1>Design Your Sundae!</h1>
      <h2>Grand total: {orderDetails.totals.grandTotal}</h2>
      <Options optionType="scoops" />
      <Options optionType="toppings" />
    </div>
  );
}

export default OrderEntry;
