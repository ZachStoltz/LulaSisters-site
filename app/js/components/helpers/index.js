import ReactGA from 'react-ga';
export const sendOutboundEvent = (e) => {
  const label = e.target.getAttribute('data-event-label');
  return ReactGA.outboundLink({
    label: label || e.target.href,
  }, () => {});
};
