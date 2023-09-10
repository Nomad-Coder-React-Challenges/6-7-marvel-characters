import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./details.module.css";

const DetailsPage = () => {
  const params = useParams();

  const [isLoading, setIsLoading] = useState(true);
  const [detail, setDetail] = useState([]);

  const modified = new Date(detail?.modified);
  const year = modified?.getFullYear();
  const thumbnail =
    detail?.thumbnail?.path + "." + detail?.thumbnail?.extension;
  const description =
    detail?.description === ""
      ? "No description exists for this character."
      : detail?.description;

  const getDetail = async () => {
    const json = await (
      await fetch(
        `https://marvel-proxy.nomadcoders.workers.dev/v1/public/characters/${params.id}`
      )
    )?.json();
    setDetail(json?.data?.results[0]);
    setIsLoading(false);
  };

  useEffect(() => {
    getDetail();
  }, []);

  return (
    <>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <div className={styles.container}>
          <img src={thumbnail} className={styles.thumbnail} />
          <h1 className={styles.name}>{detail?.name}</h1>
          <h3 className={styles.year}>{year}</h3>
          <h2 className={styles.description_title}>Description</h2>
          <p className={styles.description}>{description}</p>
        </div>
      )}
    </>
  );
};

export default DetailsPage;
