import { useState } from "react";
import Modal from "./Modal";

const CardGame = (props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleModal = () => setIsModalOpen(!isModalOpen);
  return (
    <>
      <div className="games" onClick={toggleModal}>
        <div>
          <p>{props.title}</p>
        </div>
        <img src={props.imagem} alt="" />
      </div>
      {isModalOpen && (
        <Modal
          click={toggleModal}
          title={props.title}
          descricao={props.descricao}
          banner={props.banner}
          genero={props.genero}
        />
      )}
    </>
  );
};

export default CardGame;
