import React from 'react';

import Expresso from './Assets/expresso.png';
import Dayz from './Assets/dayz.png';
import Gradient from './Assets/gradient.png';
import ColorCharts from './Assets/colorcharts.png';
import DriversEd from './Assets/driversed.gif';
import Blog from './Assets/blog.png';
import Blogmas from './Assets/blogmas.png';
import Search from './Assets/search.png';

import MiniExpresso from './Assets/mini-expresso.jpg';
import MiniDayz from './Assets/mini-dayz.jpg';
import MiniGradient from './Assets/mini-gradient.jpg';
import MiniColorCharts from './Assets/mini-colorcharts.jpg';
import MiniDriversEd from './Assets/mini-driversed.jpg';
import MiniBlog from './Assets/mini-blog.jpg';
import MiniBlogmas from './Assets/mini-blogmas.jpg';
import MiniSearch from './Assets/mini-search.jpg';

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
    stack: 'ReactJS',
    description: (
      <span>
        gradient.png is a custom image generation web app. It started as a UI/UX
        redesign of{' '}
        <a
          href='https://cssgradient.io/'
          target='_blank'
          rel='noopener noreferrer'
          style={{ color: DARK_PINK }}
        >
          CSS Gradient
        </a>
        .
        <br />
        <br />
        Gradients are great for wallpapers, Zoom backgrounds, LinkedIn banners,
        etc. I added a feature that allows users to download the gradient as an
        image.
        <br />
        <br /> Handpicked palettes from close friends are included as
        suggestions at the bottom.
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
    image: Blog,
    mini: MiniBlog,
    name: 'blog.karenying.com',
    type: 'static site',
    stack: 'GatsbyJS',
    description: (
      <span>
        blog.karenying.com is my blog site. It was bootstrapped with{' '}
        <a
          href='https://github.com/alxshelepenok/gatsby-starter-lumen'
          target='_blank'
          rel='noopener noreferrer'
          style={{ color: LIGHT_PINK }}
        >
          Lumen
        </a>
        , a lightweight Gatsby starter and is statically hosted on{' '}
        <a
          href='http://netlify.com/'
          target='_blank'
          rel='noopener noreferrer'
          style={{ color: LIGHT_PINK }}
        >
          Netlify
        </a>
        .
        <br />
        <br />I write mostly web dev tutorials and UI/UX observational pieces.
        Blogging has been a fun outlet to explore those areas, while also
        helping me better articulate my thoughts/writing.
      </span>
    ),
    buttons: [
      {
        name: 'site',
        link: 'https://blog.karenying.com/',
      },
      {
        name: 'code',
        link: 'https://github.com/karenying/blog.karenying.com',
      },
    ],
  },
  {
    color: YELLOW,
    image: Expresso,
    mini: MiniExpresso,
    name: 'expresso',
    type: 'full stack web app',
    stack: 'MySQL + Flask + ReactJS',
    description: (
      <span>
        Expresso is an online-ordering app for Princeton University’s{' '}
        <a
          href='https://pucoffeeclub.com/'
          target='_blank'
          rel='noopener noreferrer'
          style={{ color: YELLOW }}
        >
          Coffee Club
        </a>
        . Much like any online-ordering interface, the baristas are able to see
        the orders the students place. The students either pay in store when
        picking up, or use Princeton’s Student Charge.
        <br />
        <br />
        We worked closely with both the Coffee Club and the University on this
        app.
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
    color: BLUE,
    image: Blogmas,
    mini: MiniBlogmas,
    name: 'blogmas 2020',
    type: 'static site',
    stack: 'ReactTS',
    description: (
      <span>
        In the spirit of Vlogmas, I participated in Blogmas — miniposts every
        day of December 2020 until Christmas, writing about something I learned
        / coded that day.
        <br />
        <br />I created a semi-interactive calendar visualizer to encapsulate
        the experience.
      </span>
    ),
    buttons: [
      {
        name: 'site',
        link: 'https://www.blogmas.karenying.com/',
      },
      {
        name: 'post',
        link: 'https://blog.karenying.com/posts/blogmas-2020',
      },
    ],
  },
  {
    color: DARK_PINK,
    image: Dayz,
    mini: MiniDayz,
    name: 'dayz',
    type: 'full stack web app',
    stack: 'MongoDB + Express + ReactJS',
    description: (
      <span>
        Dayz is a bullet journal-style mood tracker. It utilizes a RESTful api
        with a MERN stack. This was my first solo full stack project where I
        implemented and deployed all the components from scratch. It's hosted on
        Heroku.
      </span>
    ),
    buttons: [
      {
        name: 'code',
        link: 'https://github.com/karenying/dayz',
      },
    ],
  },
  {
    color: LIGHT_PINK,
    image: DriversEd,
    mini: MiniDriversEd,
    name: "driver's ed",
    type: 'three.js game',
    stack: 'JS',
    description: (
      <span>
        Driver’s Ed is an infinite runner game. A student driver must navigate
        Princeton University's Washington Road to collect coins while avoiding
        obstacles.
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
  {
    color: YELLOW,
    image: ColorCharts,
    mini: MiniColorCharts,
    name: 'color charts',
    type: 'Chrome extension',
    stack: 'JS',
    description: (
      <span>
        Color Charts aims to increase the readability of charts, graphs, and
        diagrams on the web.
        <br />
        <br />
        It improves upon existing extensions by using researched color blind
        friendly palettes to recolor images. The algorithm uses HTML Canvas and
        Base64 encoding to recolor images in place.
      </span>
    ),
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
    color: BLUE,
    image: Search,
    mini: MiniSearch,
    name: 'acme search',
    type: 'static site',
    stack: 'ReactTS',
    description: (
      <span>
        ACME Search is a take home assessment for a company I interviewed for
        Summer 2020. I was given 5 JSON files with different types of data and
        told to create a search engine from it.
        <br />
        <br />I implemented three features on top of the basic search
        functionality - hide / show categories, sort order, and instant search,
        while using React Context API to manage state.
      </span>
    ),
    buttons: [
      {
        name: 'site',
        link: 'https://mystifying-minsky-e468ea.netlify.app/',
      },
    ],
  },
];
