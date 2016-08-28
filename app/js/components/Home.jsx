import React from 'react';

export default (props) => (
  <section id="about">
    <div className="wrapper">
      <div className="paper">
        <div className="img-container">
          <img src={props.aboutUsPic} alt={"Dicia & Erica"} />
        </div>
        <div className="bio">
          <h3>LuLa Sisters: Dicia & Erica</h3>
          <p>
            Chia kale chips paleo asymmetrical,
            cardigan pickled umami cred listicle wolf before they sold out disrupt.
            Schlitz lo-fi photo booth offal, marfa trust fund tumblr vegan bespoke swag banjo you probably
            haven't heard of them. Hoodie lomo godard post-ironic, gentrify microdosing selvage plaid photo booth
            yuccie umami cornhole. Shoreditch pickled brunch, kinfolk sartorial four loko beard etsy hammock occupy.
            Skateboard tofu poutine kinfolk taxidermy photo booth williamsburg, butcher normcore.
            Twee waistcoat bushwick readymade cliche, typewriter venmo. Sriracha distillery forage taxidermy,
            seitan flannel selvage fap.
          </p>
          <div className="social-media">
            <a className="btn purple">
              <span>Shop Our Online Pop-up Mondays @ 8pm EST</span>
            </a>
            <a className="btn teal">
              <span>Follow Us on Instagram</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
);
