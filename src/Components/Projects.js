import React from 'react';
import ProgressiveImage from 'react-progressive-image';
import Gradient from '../Assets/gradient.png';
import MiniGradient from '../Assets/mini-gradient.jpg';
import { projectInfo } from '../constants';

import '../Styles/Projects.scss';

export const DARK_PINK = '#FF7C7C';

const gradient = {
  color: DARK_PINK,
  image: Gradient,
  mini: MiniGradient,
  name: 'gradient.png',
  type: 'static web page',
  stack: 'React',
  description: (
    <span>
      gradient.png is a custom image generation web app. It is also a UI/UX
      redesign of{' '}
      <a
        href='https://cssgradient.io/'
        target='_blank'
        rel='noopener noreferrer'
        style={{ color: DARK_PINK }}
      >
        CSS Gradient
      </a>
      . On top of redesigning the interface, I added a feature that allows the
      user to download the gradient as an image.
    </span>
  ),
  buttons: [
    {
      name: 'site',
      link: 'https://gradient-png.netlify.app/',
    },
    {
      name: 'code',
      link: 'https://github.com/karenying/gradient',
    },
  ],
};

const ProjectsCard = (props) => {
  const { color, image, mini, name, type, stack, description, buttons } = props;

  const renderLinks = () =>
    buttons.map((button) => {
      const { name, link } = button;

      return (
        <a href={link} target='_blank' rel='noopener noreferrer'>
          <div
            className='ProjectsCard-left-buttons-button'
            style={{ borderColor: color }}
          >
            <span>{name}</span>
          </div>
        </a>
      );
    });

  return (
    <div className='ProjectsCard'>
      <div className='ProjectsCard-left'>
        <ProgressiveImage src={image} placeholder={mini}>
          {(src, loading) => (
            <img
              style={{
                opacity: loading ? 0.7 : 1,
              }}
              src={src}
              alt='project'
            />
          )}
        </ProgressiveImage>
        <div className='ProjectsCard-left-info'>
          <span className='ProjectsCard-left-info-left'>type</span>
          <span className='ProjectsCard-left-info-right' style={{ color }}>
            {type}
          </span>
          <span className='ProjectsCard-left-info-left'>stack</span>
          <span className='ProjectsCard-left-info-right' style={{ color }}>
            {stack}
          </span>
        </div>
        <div className='ProjectsCard-left-buttons'>{renderLinks()}</div>
      </div>
      <div
        className='ProjectsCard-center'
        style={{ backgroundColor: color }}
      ></div>
      <div className='ProjectsCard-right'>
        <span className='ProjectsCard-right-header'>{name}</span>
        <p>{description}</p>
      </div>
    </div>
  );
};

const Projects = () => {
  return (
    <div className='projects-container'>
      {projectInfo.map((project) => (
        <ProjectsCard {...project} />
      ))}
    </div>
  );
};

export default Projects;
