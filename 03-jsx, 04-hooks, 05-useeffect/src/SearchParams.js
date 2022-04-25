import { useState, useEffect } from "react"
import Pet from './Pet'

const ANIMALS = ['bird', 'cat', 'dog', 'rabbit', 'reptiles'];
const BREEDS = [];


const SearchParams = () => {
    const [location, setLocation] = useState('');
    const [animal, setAnimal] = useState('');
    const [pets, setPets] = useState([])
    const [breed, setBreed] = useState('');

    useEffect(() => {
        requestPets()
    }, []) // eslint-disable-line react-hooks/exhaustive-deps

    useEffect(() => {
        const timer = setTimeout(() => alert('hi'), 3000);
        return () => clearTimeout(timer);
    }, [animal])

    async function requestPets() {
        const res = await fetch(
            `http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`
        );
        const json = await res.json();

        setPets(json.pets);
    }

    return (
        <div className="search-params">
            <form>
                <label htmlFor="location">
                    location
                    <input id="location" value={location} placeholder="location" onChange={(e) => setLocation(e.target.value)} />
                    <button>Submit</button>
                </label>
                <label htmlFor="animal">
                    animal
                    <select id='animal' value={animal} onChange={(e) => setAnimal(e.target.value)} onBlur={(e) => setAnimal(e.target.value)}>
                        <option value='' />
                        {ANIMALS.map(animal => (
                            <option value={animal} key={animal} >
                                {animal}
                            </option>))}
                    </select>
                </label>
                <label htmlFor="breed">
                    breed
                    <select id='breed' value={breed} onChange={(e) => setBreed(e.target.value)} onBlur={(e) => setBreed(e.target.value)}>
                        <option value='' />
                        {BREEDS.map(breed => (
                            <option value={breed} key={breed} >
                                {breed}
                            </option>))}
                    </select>
                </label>
            </form>
            {
                pets.map((pet) => (
                    <Pet name={pet.name} animal={pet.animal} breed={pet.breed} key={pet.id} />
                ))
            }
        </div>
    )
}

export default SearchParams