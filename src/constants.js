import React from 'react';

import Expresso from './Assets/expresso.png';
import Dayz from './Assets/dayz.png';
import Gradient from './Assets/gradient.png';
import ColorCharts from './Assets/colorcharts.png';
import DriversEd from './Assets/driversed.gif';
import MiniExpresso from './Assets/mini-expresso.jpg';
import MiniDayz from './Assets/mini-dayz.jpg';
import MiniGradient from './Assets/mini-gradient.jpg';
import MiniColorCharts from './Assets/mini-colorcharts.jpg';
import MiniDriversEd from './Assets/mini-driversed.jpg';

export const DARK_GRAY = '#2A2B2E';

export const DARK_PINK = '#FF7C7C';

export const LIGHT_PINK = '#FFB6B9';

export const BLUE = '#8DEAFF';

export const YELLOW = '#FFE084';

export const LIGHT_GRAY = '#D9D9D9';

export const ALMOST_WHITE = '#F5F5F5';

export const projectInfo = [
  {
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
  },
  {
    color: LIGHT_PINK,
    image: Dayz,
    mini: MiniDayz,
    name: 'dayz',
    type: 'full stack web app',
    stack: 'MongoDB + Express + React',
    description:
      'Dayz is a bullet journal style mood tracker. It utilizes a RESTful api to write and read data. This was my first solo full stack project. I thoroughly enjoyed implementing and deploying all the components from scratch.',
    buttons: [
      {
        name: 'code',
        link: 'https://github.com/karenying/dayz',
      },
    ],
  },
  {
    color: BLUE,
    image: Expresso,
    mini: MiniExpresso,
    name: 'expresso',
    type: 'full stack web app',
    stack: 'MySQL + Flask + React',
    description: (
      <span>
        Expresso is an online-ordering app for Princeton University’s Coffee
        Club. Much like any online-ordering interface, the baristas are able to
        see the orders the students place. The students either pay in store when
        picking up, or use Princeton’s Student Charge.
        <br />
        <br />
        Launch postponed.
      </span>
    ),
    buttons: [
      {
        name: 'site',
        link: 'http://coffeeclub.princeton.edu/',
      },
    ],
  },
  {
    color: YELLOW,
    image: ColorCharts,
    mini: MiniColorCharts,
    name: 'color charts',
    type: 'Chrome extension',
    stack: 'JS',
    description:
      'Color Charts aims to increase the readability of charts, graphs, and diagrams on the web. It improves upon existing extensions by using researched color blind friendly palettes to recolor images. The recoloring algorithm uses HTML Canvas and Base64 encoding to recolor images in place.',
    buttons: [
      {
        name: 'code',
        link: 'https://github.com/karenying/color-charts',
      },
      {
        name: 'paper',
        link:
          'https://github.com/karenying/color-charts/blob/master/src/assets/paper.pdf',
      },
    ],
  },
  {
    color: DARK_PINK,
    image: DriversEd,
    mini: MiniDriversEd,
    name: "driver's ed",
    type: 'three.js game',
    stack: 'JS',
    description: (
      <span>
        Driver’s Ed is an infinite runner game. A student driver must navigate
        Princeton University's Washington Road to collect coins while avoiding
        obstacles!
        <br />
        <br />
        Won Art Direction Award and 3rd place overall for Spring 2020 COS 426:
        Computer Graphics.
      </span>
    ),
    buttons: [
      {
        name: 'code',
        link: 'https://github.com/karenying/drivers-ed/',
      },
      {
        name: 'game',
        link: 'https://karenying.github.io/drivers-ed/',
      },
    ],
  },
];
