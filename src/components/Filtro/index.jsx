import "./styles.css";
const Filtro = ({ filtrar, filtering, list }) => {
  filtering.length === 0 && filtrar("Todos");
  return (
    <section className="filtro">
      <button className="buttons" onClick={() => filtrar("Todos")}>
        Todos
      </button>
      <button className="buttons" onClick={() => filtrar("Entradas")}>
        Entradas
      </button>
      <button className="buttons" onClick={() => filtrar("Despesas")}>
        Despesas
      </button>
    </section>
  );
};
export default Filtro;
