import { useState } from "react";
import Modal from "./Modal";

const CardGame = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleModal = () => setIsModalOpen(!isModalOpen);
  return (
    <>
    <div className="games" onClick={toggleModal}>
      <div>
        <p>Title</p>
      </div>
      <img src="https://placehold.co/250x350" alt="" />
    </div>
    {isModalOpen && <Modal click={toggleModal}/>}
    </>
  );
};

export default CardGame;
