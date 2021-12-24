import React from "react";
import { Link } from "react-router-dom";
import ProgressiveImage from "react-progressive-image";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Fade from "@material-ui/core/Fade";

import "../Styles/About.css";
import { BLUE, YELLOW, LIGHT_PINK, DARK_PINK } from "../constants";
import Karen from "../Assets/karen.png";
import MiniKaren from "../Assets/mini-karen.png";

const About = () => {
  const useStyles = makeStyles((theme) => ({
    aboutGrid: {
      textAlign: "left",
      maxWidth: "80rem",
      [theme.breakpoints.up("sm")]: { marginBottom: "3rem" },
      [theme.breakpoints.down("sm")]: {
        padding: "0 4.5rem 3rem",
        minHeight: "calc(100vh - 3.5rem)",
      },
    },
    image: {
      display: "flex",
      alignItems: "center",
      width: "100%",
      [theme.breakpoints.up("sm")]: {
        justifyContent: "left",
      },
      [theme.breakpoints.down("sm")]: {
        padding: "2rem 0px 3rem 0px",
        justifyContent: "center",
      },
    },
  }));

  const classes = useStyles();
  const { aboutGrid, image } = classes;

  return (
    <div className="about-container">
      <Grid className={aboutGrid} container>
        <Grid item sm={12} md={4} className={image}>
          <ProgressiveImage src={Karen} placeholder={MiniKaren}>
            {(src, loading) => (
              <img
                style={{ opacity: loading ? 0.8 : 1 }}
                src={src}
                alt="karen"
              />
            )}
          </ProgressiveImage>
        </Grid>
        <Grid item sm={12} md={8}>
          <Fade in timeout={{ enter: 1200 }}>
            <div>
              <p>
                Hi{" "}
                <span className="wave" role="img" aria-label="wave">
                  👋🏼
                </span>{" "}
                I'm Karen, a recent Princeton CS grad and self-proclaimed{" "}
                <a
                  href="https://blog.karenying.com/posts/vscode-girl"
                  style={{ color: LIGHT_PINK }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  VSCode Girl
                </a>
                . I'm interested in anything tech &mdash; especially web dev and
                UI/UX. I love building delightful and clean experiences.
                <br />
                <br />
                Currently I work remotely as a product engineer for{" "}
                <a
                  href="https://gather.town/"
                  style={{ color: BLUE }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Gather Town
                </a>
                . Come build the Metaverse with us. We're{" "}
                <a
                  href="https://gather.town/jobs"
                  style={{ color: DARK_PINK }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  hiring
                </a>
                !
                <br />
                <br />
                I'm a Boston native but I just moved to the SF Bay Area. If I'm
                not beep booping, you can find me playing frisbee, visiting
                friendos, Yelping restaurants to try, or speaking to your
                manager.
                <br />
                <br />
                Sometimes I{" "}
                <a
                  href="https://blog.karenying.com"
                  style={{ color: LIGHT_PINK }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  blog
                </a>{" "}
                (read: complain/meme) about coding and design. Check out some of
                my past{" "}
                <Link
                  to={`/projects`}
                  style={{
                    color: BLUE,
                  }}
                  className="internal-link"
                >
                  projects
                </Link>{" "}
                and feel free to{" "}
                <Link
                  to={`/contact`}
                  style={{
                    color: YELLOW,
                  }}
                  className="internal-link"
                >
                  connect
                </Link>
                !
              </p>
            </div>
          </Fade>
        </Grid>
      </Grid>
    </div>
  );
};

export default About;
