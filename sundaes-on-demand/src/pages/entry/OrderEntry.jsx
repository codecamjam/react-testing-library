import Options from './Options';

function OrderEntry() {
  return (
    <div>
      <Options optionsType="scoops" />
      <Options optionsType="toppings" />
    </div>
  );
}

export default OrderEntry;
