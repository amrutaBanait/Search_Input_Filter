import { useState, useEffect } from "react"

const url = `https://black-history-month-api.herokuapp.com/people`

export default function App() {
  const [people, setPeople] = useState([])
  const [filtered, setFiltered] = useState([])
  const [searchInput, setSearchInput] = useState("")

  const fetchPeople = async () => {
    const res = await fetch(url)
    const data = await res.json()
    setPeople(data)
  }

  useEffect(() => {
    fetchPeople()
  })

  const searchPeople = (searchValue) => {
    setSearchInput(searchValue)

    if (searchInput) {
      const filteredSearch = people.filter((user) =>
        Object.values(user)
          .join("")
          .toLowerCase()
          .includes(searchValue.toLowerCase())
      )
      setFiltered(filteredSearch)
    } else {
      setFiltered(people)
    }
  }

  return (
    <div className="flex flex-col justify-center p-5 md:max-w-2xl md:mx-auto lg:max-w-5xl">
      <h1 className="text-white font-bold uppercase mt-10 mb-5 text-xl md:text-2xl lg:text-4xl xl:text-6xl text-center lg:mb-20">
        ReactJs Search Input Filter
      </h1>
      <input
        type="text"
        name="text"
        id="text"
        placeholder="Search..."
        autoComplete="off"
        className="shadow w-full py-2 px-6 rounded"
        onChange={(e) => searchPeople(e.target.value)}
      />

      <section className="bg-pink-100 shadow rounded mt-10 grid grid-cols-1 p-5 text-gray-900 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {searchInput.length > 1
          ? filtered.map(({ id, image, name, knownFor }) => (
              <article
                key={id}
                className="bg-pink-300 py-2 px-5 rounded shadow"
              >
                <img
                  src={image}
                  alt={name}
                  title={name}
                  className="w-full h-96 rounded-t shadow mr-3"
                />
                <h3 className="text-xl">{name}</h3>
                <p className="mb-3">{knownFor}</p>
              </article>
            ))
          : people.map(({ id, image, name, knownFor }) => (
              <article
                key={id}
                className="bg-pink-300 py-2 px-5 rounded shadow"
              >
                <img
                  src={image}
                  alt={name}
                  title={name}
                  className="w-full h-96 rounded-t shadow mr-3"
                />
                <div>
                  <h3 className="text-xl">{name}</h3>
                  <p className="mb-3">{knownFor}</p>
                </div>
              </article>
            ))}
      </section>
    </div>
  )
}
