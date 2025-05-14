import Title from "./components/Title";

function App() {
  let name = 'ali sheikh';
  let age = 27;

  const handleClick = (name) => {
    console.log(name)
  }

  return (
    <>
      <Title name={name} age={age} handleClick={handleClick} >
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, esse!</p>
      </Title>
    </>
  );
}

export default App;
