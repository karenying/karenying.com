import Expresso from './Assets/expresso.png';
import Dayz from './Assets/dayz.png';
import Gradient from './Assets/gradient.png';
import ColorCharts from './Assets/colorcharts.png';
import DriversEd from './Assets/driversed.gif';

export const DARK_GRAY = '#333333';

export const DARK_PINK = '#FF7C7C';

export const LIGHT_PINK = '#FFB6B9';

export const BLUE = '#8DEAFF';

export const YELLOW = '#FFE084';

export const LIGHT_GRAY = '#D9D9D9';

export const projectInfo = [
    {
        backgroundColor: DARK_PINK,
        color: DARK_PINK,
        image: Gradient,
        name: 'gradient.png',
        type: 'static web page',
        stack: 'React',
        description:
            ' Nulla mi ultrices risus lectus vel, elit nulla etiam in tristique nec in, vivamu eget ut, id sapien integer. Sed semper ridiculus facilisis ante. Nulla libero ut vestibulum vitae quam, justo consequat nunc orci. Nisl interdum aliquet elementum pellentesque venenatis quis.',
        site: 'https://gradient-png.netlify.app/',
        code: 'https://github.com/karenying/gradient',
    },
    {
        backgroundColor: LIGHT_PINK,
        color: '#E9A5A8',
        image: Dayz,
        name: 'dayz',
        type: 'full stack web app',
        stack: 'MongoDB + Express + React',
        description:
            ' Nulla mi ultrices risus lectus vel, elit nulla etiam in tristique nec in, vivamu eget ut, id sapien integer. Sed semper ridiculus facilisis ante. Nulla libero ut vestibulum vitae quam, justo consequat nunc orci. Nisl interdum aliquet elementum pellentesque venenatis quis.',
        site: 'http://dayz-app.herokuapp.com/',
        code: 'https://github.com/karenying/dayz',
    },
    {
        backgroundColor: YELLOW,
        color: '#DCC272',
        image: Expresso,
        name: 'expresso',
        type: 'full stack web app',
        stack: 'MySQL + Flask + React',
        description:
            ' Nulla mi ultrices risus lectus vel, elit nulla etiam in tristique nec in, vivamu eget ut, id sapien integer. Sed semper ridiculus facilisis ante. Nulla libero ut vestibulum vitae quam, justo consequat nunc orci. Nisl interdum aliquet elementum pellentesque venenatis quis.',
        site: 'http://coffeeclub.princeton.edu/',
        code: null,
    },

    {
        backgroundColor: BLUE,
        color: '#72BECF',
        image: ColorCharts,
        name: 'color charts',
        type: 'Chrome extension',
        stack: 'JS',
        description:
            ' Nulla mi ultrices risus lectus vel, elit nulla etiam in tristique nec in, vivamu eget ut, id sapien integer. Sed semper ridiculus facilisis ante. Nulla libero ut vestibulum vitae quam, justo consequat nunc orci. Nisl interdum aliquet elementum pellentesque venenatis quis.',
        site: null,
        code: 'https://github.com/karenying/color-charts',
    },

    {
        backgroundColor: LIGHT_GRAY,
        color: '#9A9A9A',
        image: DriversEd,
        name: "driver's ed",
        type: 'three.js game',
        stack: 'JS',
        description:
            ' Nulla mi ultrices risus lectus vel, elit nulla etiam in tristique nec in, vivamu eget ut, id sapien integer. Sed semper ridiculus facilisis ante. Nulla libero ut vestibulum vitae quam, justo consequat nunc orci. Nisl interdum aliquet elementum pellentesque venenatis quis.',
        site: 'https://karenying.com/drivers-ed/',
        code: 'https://github.com/karenying/drivers-ed/',
    },
];
