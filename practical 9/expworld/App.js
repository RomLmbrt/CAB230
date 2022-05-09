const API_URL = 'localhost';

export default function App() {
  function update(){
    fetch(`${API_URL}/api/update`, {
      method: "POST",
      body: 'City=Shangai&CountryCode=CHN&Pop=24183300',
      headers: {
      "Content-type": "application/x-www-form-urlencoded"
      }
      })
      .then((res)=>res.json())
      .then((res)=>{
        console.log(res);
      })
  }

  return(
    <div className="App">
      <h1>The DB Upload Example</h1>

      <button onClick={update}>Update</button>
    </div>
  )
}