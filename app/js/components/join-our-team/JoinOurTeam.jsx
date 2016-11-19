import Collapsible from '../common/Collapsible.jsx';
import CollapsibleItem from '../common/CollapsibleItem.jsx';
import React from 'react';
import ReactGA from 'react-ga';

export default () => (
  <section id="join-team">
    <div className="wrapper">
      <h1>Join Team LuLa Queens!</h1>
      <div className="container">
        <h5>
          Enjoy full-time income for part-time work!
        </h5>
        <div className="call-to-action">
          <ReactGA.OutboundLink
            className="btn"
            eventLabel="Join Our Team CTA"
            to="https://mylularoe.com/join/LuLaSistersDiciaErica"
            target="_blank"
          >
            Join Now!
          </ReactGA.OutboundLink>
        </div>
        <Collapsible type="accordion" popout>
          <CollapsibleItem
            header="How do I signup for LuLaRoe?"
            body={`Click the link above! We, of course, will then help you with everything you need.
            We have an entire toolkit ready to help you every step of the way!`}
          />
          <CollapsibleItem
            header="How much does it cost to become a LuLaRoe Consultant?"
            body={`In order to have an adequate selection of
              styles and sizes for your customers to choose from,
              LuLaRoe has determined that you need at least 300 pieces
              of clothing. To start, you will be ordering an
              “onboarding package” that includes sufficient items to
              throw a great party. The initial investment is $5,000 to
              $6,000 depending on the current onboarding package that
              LuLaRoe offers. You can always add more styles after your
              initial package is ordered, and trust us, you will want to.`}
          />
          <CollapsibleItem
            header="What is the profit potential?"
            body="45-60% depending on the item"
          />
        </Collapsible>
        <div>
          <p>
            If there are any more questions,
            feel free to check out our FAQ page.  Or if you would like
            to speak directly to us.  Drop us an email at:
            <a href="mailto:LuLaSistersDiciaErica@gmail.com">
              LuLaSistersDiciaErica@gmail.com
            </a>
          </p>
        </div>
      </div>
    </div>
  </section>
);
