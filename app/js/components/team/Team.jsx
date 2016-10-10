import Loader from '../common/Loader.jsx';
import Member from '../common/Member.jsx';
import React, { Component } from 'react';

const buildMemberComponents = (members) => {
  if (Array.isArray(members) && members.length === 0) {
    return (
      <h4>
        Members Info Coming Soon!!
      </h4>
    );
  }
  return members.map(member => <Member key={member.name} {...member} />);
};

export default class Team extends Component {
  constructor() {
    super();

    this.state = { members: [] };
  }

  componentDidMount() {
    this.setState({ members: [] }); //eslint-disable-line
  }
  render() {
    return (
      <section id="team">
        <div className="wrapper">
          <div className="content">
            <h1>Our Wonderful Team Members!</h1>
            <div className="members">
              {!this.state.members
                ? <Loader />
                : buildMemberComponents(this.state.members)
              }
            </div>
          </div>
        </div>
      </section>
    );
  }
}
