const reactDescriptions = ["Fundamental", "Crucial", "Core"];

function genRandomInt(max){
  const random =  Math.floor(Math.random() * (max + 1));
  return random;
}


//moving the header out of App into Header
//the function name starts with an upper case
//either wrap the return inside () or do SHIFT+ALT+F to automatically add ()
function Header() {
  const random = genRandomInt(reactDescriptions.length -1);
  const descripton = reactDescriptions[random];

  return (
    <header>
      <img src="src/assets/react-core-concepts.png" alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {/* displaying the key word dynamically */}
        {descripton} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );
}



function App() {
  return (
    <div>
      <Header />
      <main>
        <h2>Time to get started!</h2>
      </main>
    </div>
  );
}

export default App;
