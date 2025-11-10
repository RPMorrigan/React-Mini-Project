const MyButton = ({ veil, setVeil }) => {
  return (
    <>
      <div className="veil"style={{ display: veil ? 'block' : 'none' }}>
      <button onClick={() => setVeil(false)}>
        Click Here to See the Creatures!
        </button>
        </div>
    </>
  );
};

export default MyButton;
