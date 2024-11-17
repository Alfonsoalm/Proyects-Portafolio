import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { ListadoTrabajos } from "./ProjectsList";
import { icons } from "../data/icons";
import { Stars } from "./Stars"; // Make sure to import Stars component

export const Inicio = () => {
  const location = useLocation(); // Get the current location

  // Effect to scroll to the top when the location changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  // Sort icons by rating in descending order and select top 6
  const sortedIcons = [...icons].sort((a, b) => b.valoracion - a.valoracion);
  const topRatedIcons = sortedIcons.slice(0, 6);

  return (
    <div className="home-page">
      <h1>
        Hi, My name is <span className="name">Alfonso</span>
      </h1>
      <h2 className="text-animation">
        I'm <span className="name"></span>
      </h2>
      <p>
        I am an electronic engineer from Cordoba, Spain, with a deep passion for{" "}
        <strong>technology</strong> and an unwavering drive to embrace{" "}
        <em>new challenges</em>. My goal is to <em>learn and grow</em> every
        day, collaborating on diverse projects and seizing opportunities to make
        a meaningful impact. I find immense joy in developing both{" "}
        <strong>software</strong> and <strong>hardware</strong> solutions,
        bringing ideas to life through creativity and technical skill. As a{" "}
        <strong>self-taught</strong> and <em>curious</em> individual, I thrive
        on exploration, as evidenced by this very portfolio. From an early age,
        my insatiable curiosity about the world led me to seek answers, and{" "}
        <strong>engineering</strong> became the key to unlocking those
        mysteries. Over time, I have expanded my expertise across a variety of
        domains, from <strong>3D printing</strong> and the{" "}
        <em>Internet of Things (IoT)</em> to <em>computer science</em>,
        continually pushing boundaries and embracing innovation.
      </p>

      <div className="div_link">
        <Link className="link" to="/contacto">
          Contact me
        </Link>
      </div>

      <hr />
      <p className="heading-explain">Some technologies I worked with</p>

      <section className="tech-grid">
        {topRatedIcons.map((icon) => (
          <div key={icon.nombre} className="tech-item">
            <Link to={`/project/${icon.nombre}`} className="tech-item-a">
              <div>
                <img src={"/images/icons/" + icon.imagen} alt={icon.nombre} />
              </div>
              <div>
                <p>{icon.nombre}</p>
                <Stars rating={icon.valoracion} /> {/* Display star ratings */}
              </div>
            </Link>
          </div>
        ))}
      </section>

      <div className="div_link">
        <Link className="link" to="/tecnologies">
          See All Technologies
        </Link>
      </div>
      <hr />

      <section className="lasts-works">
        <h2 className="heading">Some projects developed</h2>

        <p className="guide-explain">
          Let me guide you through my project portfolio and my professional
          experience in engineering.
        </p>

        <ListadoTrabajos limite="2" />

        <div className="div_link">
          <Link className="link" to="/portafolio">
            See More Projects
          </Link>
        </div>
        <br />
      </section>
    </div>
  );
};
