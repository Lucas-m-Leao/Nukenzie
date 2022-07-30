import "./styles.css";
const TotalPrice = ({ list }) => {
  const total = list.reduce((previousValue, currentValue) => {
    if (currentValue.type === "Entradas") {
      return (previousValue += currentValue.value);
    } else {
      return (previousValue -= currentValue.value);
    }
  }, 0);
  return (
    <section className="containerValor">
      <div className="total">
        <span>
          <h3>Valor total</h3> <p>R$ {total}</p>
        </span>
        <p>O Valor se refere ao saldo</p>
      </div>
    </section>
  );
};
export default TotalPrice;
