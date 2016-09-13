import Collapsible from '../common/Collapsible.jsx';
import CollapsibleItem from '../common/CollapsibleItem.jsx';
import React from 'react';

export default () => (
  <section id="join-team">
    <div className="wrapper">
      <h1>Join The LuLa Queen Team!</h1>
      <div className="container">
        <h3>Why Should You?</h3>
        <p>
          Health goth locavore selfies chambray unicorn.
          Crucifix +1 bitters green juice gochujang.
          Next level kitsch mixtape freegan asymmetrical
          marfa succulents kickstarter. Yr gochujang roof
          party air plant, edison bulb cronut bicycle rights
           snackwave iceland kitsch organic franzen migas
           locavore venmo.
        </p>
        <Collapsible collapsible="accordion" popout>
          <CollapsibleItem
            header="Template Header for Collapsible"
            body="BLAH BLAH BLAH BLAH BLAH"
          />
          <CollapsibleItem
            header="Template Header for Collapsible 2"
            body="BLAH BLAH BLAH BLAH BLAH"
          />
          <CollapsibleItem
            header="Template Header for Collapsible 3"
            body="BLAH BLAH BLAH BLAH BLAH"
          />
        </Collapsible>
      </div>
    </div>
  </section>
);
