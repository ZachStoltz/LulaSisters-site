import Helmet from 'react-helmet';
import React from 'react';
import { description, sendOutboundEvent, setOgCommons } from './helpers';

export default () => (
  <section id="about">
    <Helmet
      title="LuLaSisters"
      meta={[
        ...setOgCommons('home'),
        { name: 'description',
          content: description },

      ]}
    />
    <div className="wrapper">
      <div className="paper">
        <div className="img-container">
          <img src="/static/style/img/diciaanderica.jpg" alt={'Dicia & Erica'} />
        </div>
        <div className="bio">
          <h3 className="cursive">LuLa Sisters: Dicia & Erica</h3>
          <p>
            Welcome to the Team LuLa Queens page!
            We are Dicia Marguccio & Erica Stoltz of Team LuLaSisters,
            the original members of Team LuLa Queens!
            We are sister-in-laws who fell in love with LuLaRoe
            as customers & decided to bless others’ lives by
            becoming fashion consultants in June 2016. Dicia lives
            in Windber, PA & Erica lives in Columbia, MD. Together,
            we work to spread the LuLa love across state lines.
            LuLaRoe has been a huge blessing in our lives & in the
            lives of many families.
          </p>
          <p>
            If you would like to shop, check out our
            <a
              href="https://www.facebook.com/groups/LuLaRoeSistersDiciaErica/"
              target="_blank"
              data-event-label="Facebook Group CTA"
              onTouchTap={sendOutboundEvent}
            >
              &nbsp;Facebook shopping page.
            </a>
            &nbsp;If you are interested in learning more
            about LuLaRoe, hosting a pop up party, or how to become a
            consultant & join our team, click around for more info! We
            would love to chat with you and answer all of your questions,
            so send us a message!
          </p>
          <p><strong className="cursive"> &#60;3 Dicia & Erica</strong></p>
          <div className="social-media">
            <a
              href="https://www.facebook.com/groups/LuLaRoeSistersDiciaErica/"
              target="_blank"
              data-event-label="Facebook Group CTA"
              className="btn purple"
              onTouchTap={sendOutboundEvent}
            >
              Shop Our Online Pop-up Mondays @ 8pm EST
            </a>
            <a
              href="https://www.instagram.com/lulasistersdiciaerica/"
              target="_blank"
              data-event-label="Instagram CTA"
              className="btn teal"
              onTouchTap={sendOutboundEvent}
            >
              Follow Us on Instagram
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
);
