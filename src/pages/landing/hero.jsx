import { FaGooglePlay } from "react-icons/fa";
import { Link } from "react-router-dom";
import { moviePictures } from "../../constants/store";
import MovieCard from "../../components/common/movieCard";

function Hero() {
  return (
    <div className="mt-10">
      <p className="mt-5 text-center text-2xl font-black text-txt dark:text-white/80 lg:text-4xl">
        Your Gateway to VidCee Adventures
      </p>

      <p className="mt-5 text-center text-base leading-relaxed text-txt/80 dark:text-white/60 lg:leading-loose">
        Embark on a cinematic journey with VidCee, where adrenaline-pumping
        action meets heartwarming romance, spine-chilling thrillers mingle with
        side-splitting comedies. Our platform boasts a diverse array of genres
        to cater to every mood and taste. Whether you're drawn to epic
        blockbusters, thought-provoking dramas, or captivating documentaries,
        you'll discover something uniquely resonant with your cinematic
        sensibilities.
      </p>

      <div className="mt-5 flex items-center justify-center">
        <Link to={"/movie"}>
          <button className="flex items-center rounded-full border-[2px] border-purple px-2 py-3 font-semibold text-txt dark:text-white/80 lg:px-10">
            Watch Now
            <FaGooglePlay className="ml-2" />
          </button>
        </Link>
      </div>
      {/* Images */}
      <div className="mt-6 grid grid-cols-3 gap-2 md:grid-cols-5 md:gap-3 lg:grid-cols-7 lg:gap-7">
        {moviePictures.map((movie, index) => (
          <MovieCard
            img={movie.img}
            hasMarginTop={index % 2 === 0}
            key={index}
          />
        ))}
      </div>
    </div>
  );
}

export default Hero;
