import { Rating, Typography } from "@mui/material";
import { FaStar } from "react-icons/fa";
import React from "react";
import { useState } from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { FaCreditCard, FaHeart, FaPlay, FaShareAlt } from "react-icons/fa";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useLocation } from "react-router-dom";
import Placeholder from "../../components/movie/placeholder/Placeholder";
import "./single.scss";

const Single = () => {
  const location = useLocation();
  const imagePath = "https://image.tmdb.org/t/p/original";
  console.log(location.state.data.moviedata);
  const [value, setValue] = useState(0);
  return (
    <div className="single">
      <div className="movie_jpg_con">
        <LazyLoadImage
          src={imagePath + location.state.data.moviedata.poster_path}
          alt={location.state.data.moviedata.title}
          className="jpg"
          placeholder={<Placeholder spinner_size="4em" size="default" />}
        />
        <button className="movie_btn bg-red-600">
          <FaPlay /> WATCH TRAILER
        </button>
        <button className="movie_btn bg-yellow-400">
          <FaCreditCard /> BUY TICKET
        </button>
      </div>

      <div className="movie_information">
        <span className="movie_title">
          {location.state.data.moviedata.title}{" "}
          <span className="year">
            {location.state.data.moviedata.release_date}
          </span>
        </span>
        <div className="middle">
          <span className="icon_con">
            <span className="icon">
              <FaHeart />
            </span>
            Add to favourites
          </span>
          <span className="icon_con">
            <span className="icon">
              <FaPlay />
            </span>
            Watch trailer
          </span>
          <span className="icon_con">
            <span className="icon">
              <FaShareAlt />
            </span>
            Share
          </span>
        </div>
        <div className="bottom">
          <span className="rating">
            <AiFillStar className="star" />
            {location.state.data.moviedata.vote_average}/
            <span className="ten">10</span>
          </span>
          <span className="release_year">
            Rating: {location.state.data.moviedata.adult ? "18+" : "For all"}
          </span>
          <Typography component="legend" className="release_year">
            Rate this movie:
          </Typography>
          <Rating
            name="simple-controlled"
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
            precision={0.5}
            size="large"
            emptyIcon={
              <AiOutlineStar
                style={{ opacity: 0.55 }}
                color="#fff"
                fontSize="inherit"
              />
            }
          />
        </div>
        <LazyLoadImage
          src={imagePath + location.state.data.moviedata.backdrop_path}
          alt={location.state.data.moviedata.title}
          className="big_jpg"
          placeholder={<Placeholder spinner_size="4em" size="default" />}
        />

        <span className="overview">
          {location.state.data.moviedata.overview}
        </span>
      </div>
    </div>
  );
};

export default Single;