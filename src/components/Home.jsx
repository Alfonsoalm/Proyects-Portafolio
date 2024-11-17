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
      <p className="justified-text">
        I am an electronic engineer from Cordoba, Spain, passionate about technology and driven to face new challenges. I thrive on learning, collaborating on projects, and developing impactful software and hardware solutions. Self-taught and curious, I find joy in bringing ideas to life and expanding my skills in 3D printing, IoT, and computer science. Engineering has always been my way to satisfy my curiosity, and I continually embrace innovation and growth.
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
