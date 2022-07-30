import { toast } from "react-toastify";
import "./styles.css";
import { FaTrash } from "react-icons/fa";
import card from "../../assets/NoCard.png";
import { useEffect } from "react";
const Lista = ({ filtering, list, setList }) => {
  useEffect(() => {
    const local = JSON.parse(localStorage.getItem("@nukenzie-List"));
    local && setList(local);
  }, []);

  const deletar = (id) => {
    const deletado = list.filter((item) => item.id !== id);
    setList(deletado);
    localStorage.setItem("@nukenzie-List", JSON.stringify(deletado));
    toast.success("Excluido com sucesso", {
      position: toast.POSITION.TOP_CENTER,
    });
  };
  return (
    <>
      {list.toString() === "" ? (
        <>
          <li
            key={list.length + 1}
            style={{ listStyle: "none" }}
            className="listaVazia"
          >
            <div>
              <h2>Você ainda não possui nenhum lançamento</h2>
              <img src={card} alt="" />
              <img src={card} alt="" />
              <img src={card} alt="" />
            </div>
          </li>
        </>
      ) : (
        list.map((item, index) => {
          if (filtering === item.type || filtering === "Todos") {
            return (
              <li key={index} style={{ listStyle: "none" }} className="lista">
                <span
                  style={
                    item.type === "Entradas"
                      ? { backgroundColor: "#03B898" }
                      : { backgroundColor: "#E9ECEF" }
                  }
                ></span>
                <div>
                  <h2>{item.description}</h2>
                  <p>{item.type}</p>
                </div>
                <p>R$ {item.value}</p>
                <FaTrash
                  id={item.id}
                  onClick={() => deletar(item.id)}
                  style={{ cursor: "pointer" }}
                />
              </li>
            );
          }
        })
      )}
    </>
  );
};
export default Lista;
