import logo from "./logo.svg";

export default function HelloWorld() {
  const name = null;
  if (name) {
    return <h1 className="heading">Hello, {name}</h1>;
  }
  return (
    <div>
      {" "}
      Hello, Stranger
      <img src={logo} alt="Logo" />
    </div>
  );
}
