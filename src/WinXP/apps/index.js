import InternetExplorer from './InternetExplorer';
import ErrorBox from './ErrorBox';
import MyComputer from './MyComputer';
import iePaper from 'assets/windowsIcons/ie-paper.png';
import ie from 'assets/windowsIcons/ie.png';
import lw from 'assets/windowsIcons/limewire.png';
import Limewire from './Limewire';
import Maplestory from './Maplestory';
import msn from 'assets/windowsIcons/msn.png';
import MSN from './MSN';
import maple from 'assets/windowsIcons/maple.png';
import outlook from 'assets/windowsIcons/887(32x32).png';
import mail from 'assets/windowsIcons/mail.png';
import mine from 'assets/minesweeper/mine-icon.png';
import error from 'assets/windowsIcons/897(16x16).png';
import computer from 'assets/windowsIcons/676(16x16).png';
import computerLarge from 'assets/windowsIcons/676(32x32).png';
import notepad from 'assets/windowsIcons/327(16x16).png';
import notepadLarge from 'assets/windowsIcons/327(32x32).png';
import winamp from 'assets/windowsIcons/winamp.png';
import paintLarge from 'assets/windowsIcons/680(32x32).png';
import paint from 'assets/windowsIcons/680(16x16).png';
import Email from './Email';

const gen = () => {
  let id = -1;
  return () => {
    id += 1;
    return id;
  };
};
const genId = gen();
const genIndex = gen();
export const defaultAppState = [];

export const defaultIconState = [
  {
    id: 0,
    icon: ie,
    title: 'Internet Explorer',
    component: InternetExplorer,
    isFocus: false,
  },
  {
    id: 1,
    icon: lw,
    title: 'Limewire',
    component: Limewire,
    isFocus: false,
  },
  {
    id: 2,
    icon: msn,
    title: 'MSN',
    component: MSN,
    isFocus: false,
  },
  {
    id: 3,
    icon: maple,
    title: 'Maplestory',
    component: Maplestory,
    isFocus: false,
  },
  {
    id: 4,
    icon: outlook,
    title: 'E-mail',
    component: Email,
    isFocus: false,
  },
];

export const appSettings = {
  'Internet Explorer': {
    header: {
      icon: iePaper,
      title: 'InternetExplorer',
    },
    component: InternetExplorer,
    defaultSize: {
      width: 700,
      height: 500,
    },
    defaultOffset: {
      x: 140,
      y: 30,
    },
    resizable: true,
    minimized: false,
    maximized: window.innerWidth < 800,
    multiInstance: true,
  },
  Limewire: {
    header: {
      icon: lw,
      title: 'Limewire',
    },
    component: Limewire,
    defaultSize: {
      width: 700,
      height: 500,
    },
    defaultOffset: {
      x: 140,
      y: 30,
    },
    resizable: true,
    minimized: false,
    maximized: window.innerWidth < 800,
    multiInstance: true,
  },
  Maplestory: {
    header: {
      icon: maple,
      title: 'Maplestory',
    },
    component: Maplestory,
    defaultSize: {
      width: 700,
      height: 500,
    },
    defaultOffset: {
      x: 140,
      y: 30,
    },
    resizable: true,
    minimized: false,
    maximized: window.innerWidth < 800,
    multiInstance: true,
  },
  'E-mail': {
    header: {
      icon: mail,
      title: 'E-mail',
    },
    component: Email,
    defaultSize: {
      width: 700,
      height: 500,
    },
    defaultOffset: {
      x: 140,
      y: 30,
    },
    resizable: true,
    minimized: false,
    maximized: window.innerWidth < 800,
    multiInstance: true,
  },
  MSN: {
    header: {
      icon: msn,
      title: 'MSN',
    },
    component: MSN,
    defaultSize: {
      width: 700,
      height: 500,
    },
    defaultOffset: {
      x: 140,
      y: 30,
    },
    resizable: true,
    minimized: false,
    maximized: window.innerWidth < 800,
    multiInstance: true,
  },
  Error: {
    header: {
      icon: error,
      title: 'C:\\',
      buttons: ['close'],
      noFooterWindow: true,
    },
    component: ErrorBox,
    defaultSize: {
      width: 380,
      height: 0,
    },
    defaultOffset: {
      x: window.innerWidth / 2 - 190,
      y: window.innerHeight / 2 - 60,
    },
    resizable: false,
    minimized: false,
    maximized: false,
    multiInstance: true,
  },
};

export { InternetExplorer, ErrorBox, Limewire, Maplestory, MSN, Email };
