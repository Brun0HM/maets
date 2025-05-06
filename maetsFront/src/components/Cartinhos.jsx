const Cartinhos = () => {
  return (
    <>
      <div className="Cartinho d-flex p-2 rounded-1 pt-1">
        <img
          className="mb-3 rounded-2"
          src="https://placehold.co/211x140"
          alt=""
        />
        <div className="CartInfo d-flex r align-content-between p-0">
          <div className="CartName m-4 mt-1">
            <h4 className="m-0">Game Name</h4>
            <label htmlFor="">Genre</label>
          </div>
          <div className="CartPrice mt-1">
            <h5 className="m-0">$99.95</h5>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cartinhos;
