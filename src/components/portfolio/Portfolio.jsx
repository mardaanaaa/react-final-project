import React from "react";
import IMG1 from "../../assets/mainPage.PNG";
import IMG2 from "../../assets/nextPrev.PNG";
import IMG4 from "../../assets/clonenetflix.png";
import "./portfolio.css";

const Portfolio = () => {
  const soloProjects = [
    {
      id: 1,
      title: "Spring Narxoz Food",
      img: IMG1,
      description:
        "A comprehensive e-commerce application developed using Spring Framework, PostgreSQL, HTML/CSS, and Bootstrap. Features include product management, user authentication, and a shopping cart system.",
      technologies: "Spring | PostgreSQL | Bootstrap",
      github: "https://github.com/mardaanaaa/final_project",
    },
    {
      id: 2,
      title: "Bulletin Board",
      img: IMG4,
      description:
        "A Bulletin Board is a simple online platform for posting and discussing messages. Users can create accounts, post messages, reply to others, and browse through different topics.",
      technologies: "React | HTML&CSS | Webpack | JS",
      github: "https://github.com/mardaanaaa/task10",
    },
    {
      id: 3,
      title: "Gallery",
      img: IMG2,
      description:
        "It is an application programming interface that allows developers to integrate an image gallery into their websites or applications.",
      technologies: "React | HTML&CSS | API",
      github: "https://github.com/mardaanaaa/bulletin-board",
    },
  ];


  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {soloProjects.map((pro) => (
          <article className="portfolio__item" key={pro.id}>
            <div className="portfolio__item-image">
              <img src={pro.img} alt={pro.title} />
            </div>
            <div className="portfolio__item-content">
              <h3>{pro.title}</h3>
              <p>{pro.description}</p>
              <p>{pro.technologies}</p>
            </div>
            <div className="portfolio__item-cta">
              <a
                href={pro.github}
                target="_blank"
                className="btn"
                rel="noreferrer"
              >
                GitHub
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
