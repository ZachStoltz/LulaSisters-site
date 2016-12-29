import ReactGA from 'react-ga';
export const sendOutboundEvent = (e) => {
  const label = e.target.getAttribute('data-event-label');
  return ReactGA.outboundLink({
    label: label || e.target.href,
  }, () => {});
};

export const description = 'Welcome to the Team LuLa Queens page!'
+ 'We are Dicia Marguccio & Erica Stoltz of Team LuLaSisters, the original members of'
+ 'Team LuLa Queens! We are sister-in-laws who fell in love with LuLaRoe as customers &'
+ 'decided to bless others’ lives by becoming fashion consultants in June 2016. Dicia lives'
+ 'in Windber, PA & Erica lives in Columbia,MD. Together, we work to spread the LuLa love across'
+ 'state lines. LuLaRoe has been a huge blessing in our lives & in the lives of many families.';

const setOgUrl = function setOgUrl(path) {
  let newPath = path;
  if (path === 'home') newPath = '';

  return { property: 'og:url', content: `http://www.lulaqueens.com/${newPath}` };
};
const setOgTitle = function setOgTitle(path) {
  return { property: 'og:title', content: path };
};

export const setOgCommons = function setOgCommons(path) {
  return [
    setOgUrl(path),
    setOgTitle(path),
    { property: 'og:site_name', content: 'LuLaSisters' },
    { property: 'og:type', content: 'website' },
  ];
};
