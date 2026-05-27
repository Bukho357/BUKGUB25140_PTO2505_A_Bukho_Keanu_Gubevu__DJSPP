import { useEffect, useState } from "react";
import styles from "./LikeButton.module.css";

export default function LikeButton({ podcast }) {
  const [liked, setLiked] = useState(false);

  // Check localStorage when component loads
  useEffect(() => {
    const favourites = JSON.parse(localStorage.getItem("favourites")) || [];

    const exists = favourites.some((item) => item.title === podcast.title);

    setLiked(exists);
  }, [podcast]);

  const toggleFavourite = (e) => {
    e.stopPropagation();

    const favourites = JSON.parse(localStorage.getItem("favourites")) || [];

    let updatedFavourites;

    // Remove favourite
    if (liked) {
      updatedFavourites = favourites.filter(
        (item) => item.title !== podcast.title,
      );

      setLiked(false);
    }

    // Add favourite
    else {
      updatedFavourites = [
        ...favourites,
        {
          ...podcast,
          addedAt: new Date().toISOString(),
        },
      ];

      setLiked(true);
    }

    localStorage.setItem("favourites", JSON.stringify(updatedFavourites));
  };

  return (
    <button className={styles.button} onClick={toggleFavourite}>
      {liked ? "❤️" : "🤍"}
    </button>
  );
}
