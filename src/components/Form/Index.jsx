import { useState } from "react";
import { toast } from "react-toastify";
import "./styles.css";
const Form = ({ setList, list, filtering }) => {
  const [description, setDescription] = useState("");
  const [value, setValue] = useState("");
  const [type, settype] = useState("Entradas");
  const data = (e) => {
    e.preventDefault();
    filtering("Todos");
    if (description !== "" && value !== "" && value !== 0 && type !== "") {
      setList([
        ...list,
        { description, value, type, id: `${list.length + 1}` },
      ]);
      localStorage.setItem(
        "@nukenzie-List",
        JSON.stringify([
          ...list,
          { description, value, type, id: `${list.length + 1}` },
        ])
      );
      toast.success("Criando com sucesso", {
        position: toast.POSITION.TOP_CENTER,
      });
    } else {
      toast.error("Ha espaço em branco", {
        position: toast.POSITION.TOP_CENTER,
      });
    }
  };
  return (
    <section className="conteinerForm">
      <form onSubmit={data}>
        <h3 className="titulo">Descrição</h3>
        <input
          onChange={(e) => setDescription(e.target.value)}
          name="description"
          type="text"
          placeholder="Digite aqui sua descrição"
          maxLength={21}
        />
        <p>Ex: Compra de roupas</p>
        <div>
          <div className="valor">
            <h3 className="titulo">Valor</h3>
            <span>
              <input
                name="value"
                type="number"
                placeholder="Valor"
                min={0}
                onChange={(e) => setValue(Number(e.target.value))}
              />
              R$
            </span>
          </div>
          <div className="tipo">
            <h3 className="titulo">Tipo de valor</h3>
            <select
              name="type"
              value={type}
              onChange={(item) => settype(item.target.value)}
            >
              <option value="Entradas">Entradas</option>
              <option value="Despesas">Despesas</option>
            </select>
          </div>
        </div>
        <button type="submit">Inserir valor</button>
      </form>
    </section>
  );
};
export default Form;
