import { useEffect, useState } from "react";
import MarvelsCard from "../../components/MarvelsCard/index";
import styles from "./home.module.css";

const HomePage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [marvels, setMarvels] = useState([]);

  const getMarvels = async () => {
    const json = await (
      await fetch(
        "https://marvel-proxy.nomadcoders.workers.dev/v1/public/characters?limit=50&orderBy=modified&series=24229,1058,2023"
      )
    )?.json();
    setMarvels(json?.data?.results);
    setIsLoading(false);
  };

  useEffect(() => {
    getMarvels();
  }, []);

  return (
    <>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <div className={styles.movie_list}>
          {marvels?.map((items) => (
            <MarvelsCard key={items?.id} data={items} />
          ))}
        </div>
      )}
    </>
  );
};

export default HomePage;
