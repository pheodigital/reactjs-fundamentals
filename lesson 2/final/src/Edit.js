const Edit = (props) => {
  const modifiedFunc = () => props.btnClick(false);
  return (
    <div>
      <h2 style={{ color: props.txtColor }}>{props.userName}</h2>
      <button onClick={modifiedFunc}>Save</button>
    </div>
  );
};

export default Edit;
