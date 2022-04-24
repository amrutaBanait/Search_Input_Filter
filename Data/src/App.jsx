import { useState, useEffect } from "react";

const url = `https://black-history-month-api.herokuapp.com/people`;

function App() {
  const [people, setPeople] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const fetchPeople = async () => {
    const res = await fetch(url);
    const data = await res.json();
    setPeople(data);
  };

  useEffect(() => {
    fetchPeople();
  }, []);

  return (
    <>
 <div className="my-10">
 <section className="px-5 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 xl:max-w-5xl xl:mx-auto">
        {people.map(({ id, name, image, dob }) => (
          <article key={id} className="bg-yellow-300 p-5 rounded shadow">
            <img src={image} alt={name} title={name} className="h-96 w-full" />
            <h3 className="font-bold text-xl mt-1">{name}</h3>
            <p>DOB: {dob}</p>
          </article>
  ))}
      </section>
 </div>
    </> 
  );
}

export default App;
