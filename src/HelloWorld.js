export default function HelloWorld() {
  const name = "Kathrin";
  if (name) {
    return <h1>Hello, {name}</h1>;
  }
  return <div> Hello, Stranger</div>;
}
