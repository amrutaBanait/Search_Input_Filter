import {useState, useEffect} from "react";

const url = `https://black-history-month-api.herokuapp.com/people`

function App(){
  const [people, setPeople] = useState([])
  const [filtered, setFiltered] = useState([])
  const [searchInput, setSearchInput] = useState("")
  const [isLoading, setIsLoading] = useState(true);

const fetchPeople = async() => {
  const res = await fetch(url)
  const data = await res.json()
  setPeople(data)
}

useEffect (() => {
  fetchPeople()
}, [])

  return(
    <>
<section>
  <h1>{people.length} people</h1>
</section>

    </>
  )
}


export default App;
