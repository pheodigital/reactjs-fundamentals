const Add = (props) => {
  const modifiedFunc = () => props.btnClick(true);
  return (
    <div>
      <h2 style={{ color: props.txtColor }}>{props.userName}</h2>
      <button onClick={modifiedFunc}>Edit</button>
    </div>
  );
};

export default Add;
