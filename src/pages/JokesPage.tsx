import { useEffect, useState } from "react";

type Joke = {
  value: string;
  icon_url: string;
  fetchDate: string;
};

const JokesPage = () => {
  const [joke, setJoke] = useState<Joke | undefined>(undefined);
  const [loading, setLoading] = useState<boolean>(true);

  const getCurrentDate = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, "0");
    const day = String(today.getDate()).padStart(2, "0");
    const hours = today.getHours();
    const minutes = String(today.getMinutes()).padStart(2, "0");
    const seconds = String(today.getSeconds()).padStart(2, "0");

    const fullDate = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
    return fullDate;
  };

  useEffect(() => {
    const fetchJoke = async () => {
      setLoading(true);
      try {
        const res = await fetch(
          "https://api.chucknorris.io/jokes/random?category=dev"
        );
        if (!res.ok) {
          throw new Error(`Response status: ${res.status}`);
        }

        const { value, icon_url } = await res.json();
        if (value && icon_url) {
          const fetchDate = getCurrentDate() + "";
          setJoke({ value, icon_url, fetchDate });
        }
      } catch (error) {
        console.log(`Error while fetching: ${error}`);
      } finally {
        setLoading(false);
      }
    };

    fetchJoke();

    const interval = setInterval(() => {
      fetchJoke();
    }, 15000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="page-container">
      {loading && <div className="spinner"></div>}
      {joke && !loading && (
        <div className="joke-wrapper">
          <div className="joke-content">
            <img src={joke.icon_url} alt="" />
            <div>{joke.value}</div>
          </div>
          <p className="joke-date">
            Data renewed: <span>{joke.fetchDate}</span>
          </p>
        </div>
      )}
    </section>
  );
};
export default JokesPage;
