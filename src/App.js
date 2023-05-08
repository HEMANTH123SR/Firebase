
import { useEffect, useState } from "react";
import { Auth } from "./components/auth";
import { db } from "./config/firebase";
import { getDocs, collection, addDoc ,deleteDoc,doc} from "firebase/firestore";

function App() {
  const [movieList, setMovieList] = useState([]);

  // New movie state
  const [newMovieTitle, setMovieTitle] = useState("");
  const [newRealseDate, setNewRealseDate] = useState("");
  const [newMovieOscare, setNewMovieOscare] = useState(false);

  const movieCollectionRef = collection(db, "movies");

  const deleteMovie=async()=>{
    const movieDoc=doc(db,"movies",)
    await deleteDoc()
  }
  useEffect(() => {
    const getMovieList = async () => {
      try {
        const data = await getDocs(movieCollectionRef);
        const filteredData = data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        console.log(filteredData);
        setMovieList(filteredData);
      } catch (err) {
        console.log(err);
      }
    };

    getMovieList();
  }, []);

  const onSubmitMovie = async () => {
    try {
      await addDoc(movieCollectionRef, {
        title: newMovieTitle,
        date: newRealseDate,
        oscar: newMovieOscare,
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <Auth />

      <div>
        <input
          placeholder="movie title"
          onChange={(e) => setMovieTitle(e.target.value)}
        />
        <input
          placeholder="Realse date"
          type="number"
          onChange={(e) => setNewRealseDate(e.target.value)}
        />
        <input
          type="checkbox"
          checked={newMovieOscare}
          onChange={(e) => setNewMovieOscare(e.target.checked)}
        />
        <label>Receive an Oscar</label>
        <button onClick={onSubmitMovie}>Submit movie</button>
      </div>

      <div>
        {movieList.map((movie) => (
          <div key={movie.id}>
            <h1>Movie: {movie.title}</h1>
            <h1>Date: {movie.date}</h1>
            <h1>Oscar: {movie.oscar}</h1>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
