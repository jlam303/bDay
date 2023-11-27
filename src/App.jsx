import List from "./components/List"
import data from "./utils/data"

import {useState} from 'react'

const App = () => {
  const [people, setPeople] = useState(data)
  const removePeople=(id)=>{
    let newPeople = people.filter((person)=>{ return person.id !== id})
    setPeople(newPeople)
  }
  return(
    <main>
      <section className="container">
        <h3>{people.length} birthdays today</h3>
        <List people ={people} remove={removePeople}/>
        <div className="buttons">
          <button onClick={()=>setPeople([])}>Clear</button>
          <button onClick={()=>setPeople(data)}>Reset</button>

        </div>
      </section>
    </main>
  )
}

export default App