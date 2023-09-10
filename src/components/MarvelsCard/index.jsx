import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import styles from "./MarvelsCard.module.css";

const MarvelsCard = ({ data }) => {
  const modified = new Date(data?.modified)
  const year = modified?.getFullYear();
  const thumbnail = data?.thumbnail?.path + "." + data?.thumbnail?.extension;
  const description = data?.description === "" ? "No description exists for this character." : data?.description;
  
  return (
    <article className={styles.marvels_card}>
      <Link to={`/character/${data?.id}`}>
        <img src={thumbnail} className={styles.marvels_thumbnail} />
      </Link>
      <section className={styles.marvels_title}>
        <h1 className={styles.marvels_name}>
          <Link to={`/character/${data?.id}`}>{data?.name}</Link>
        </h1>
        <h3>{year}</h3>
      </section>
      <section className={styles.marvels_content}>
        <p className={styles.marvels_description}>{description}</p>
        <h3 className={styles.read_more}><Link to={`/character/${data?.id}`}>Read More ></Link></h3>
      </section>
    </article>
  );
};

MarvelsCard.propTypes = { data: PropTypes.object };

export default MarvelsCard;
