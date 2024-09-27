const Header = (props) => {
  console.log("** props] **", props);
  return (
    <div>
      <h2 style={{ color: props.txtColor }}>Header</h2>
      <button onClick={props.btnClick}>Button</button>
    </div>
  );
};

export default Header;
