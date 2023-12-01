import './App.css';
import Card from './Card';

function sum(a,b){
  return a + b;
}

function App() {
  const a = 100;
  const b = "Welcome";
  const c = true;
  // Arrays in react
  const fruits = ["mango", "apple", "lemon", "pineapple", "guava"]
  // How to add style by creting object, direct, and external file
  const styleObj = {
    color: "orange"
  }

  // Object
  const obj = {
    name:"Rionam",
    age:20
  }

  // let arr = [[6,7,12,43], [55,77,78,44]]
  // arr.map((item) => {
  //   return item.map((subItem) => {
  //     console.log(subItem);
  //   })
  // })

  var productArr = [
    {id: 1001, title: "shoes", price: 10},
    {id: 1002, title: "sneaker", price: 30},
    {id: 1003, title: "pants", price: 20}
  ]
  // productArr.map((product) => {
  //   console.log(product);
  // })

  return (
    <div className="App">
      <h1 style={styleObj}>{b} React World {6+6}</h1><br/>

      {/* How we give styling */}
      <h2 style={{color:"red", backgroundColor:"grey"}}>Num is  {a}</h2>

    {/* Conditional rendering */}
      <span>{a === 100 ? "Hii": "Bye" }</span> <br/>

      {"Sum is " + sum(3,4)} <br/>

      {c === true ? "Its true" : "Its false"} <br/>

      {/* Accessing arrays with map in react */}
      <ol>
        {fruits.map((fruit, index) => {
          return <li key={index}>{fruit}</li> 
        })}
      </ol>

        <p>{obj.name} {obj.age}</p>
        {/* Convert to string with JSON */}
        <p>{JSON.stringify(obj)}</p>

      {/*         Creating props              */}
        {/* <Card title={"Tshirt"} price={10}/>
        <Card title={"shoes"} price={20} />
        <Card title={"Bag"} price={25} /> */}


      {
        productArr.map((product) => {
          return <Card key={product.id} title={product.title} price={product.price}/>
        })
      }
    </div>

    
  );
}

export default App;
