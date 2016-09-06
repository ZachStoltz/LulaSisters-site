import Loader from '../common/Loader.jsx';
import Member from '../common/Member.jsx';
import React, { Component } from 'react';

const buildMemberComponents = (members) => {
  return members.map(member => <Member key={member.name} {...member} />);
};

const testMembers = [{
  name: 'Test User',
  location: 'Mountain View, CA',
  info: [{
    type: 'facebook',
    href: '#',
    name: 'TestUser FB',
  }],
},{
  name: 'Test User 2',
  location: 'Mountain View, CA',
  info: [{
    type: 'facebook',
    href: '#',
    name: 'TestUser FB',
  }],
},{
  name: 'Test User 3',
  location: 'Mountain View, CA',
  info: [{
    type: 'facebook',
    href: '#',
    name: 'TestUser FB',
  }],
},{
  name: 'Test User 4',
  location: 'Mountain View, CA',
  info: [{
    type: 'facebook',
    href: '#',
    name: 'TestUser FB',
  }],
}];

export default class Team extends Component {
  constructor() {
    super();

    this.state = { members: [] };
  }

  componentDidMount() {
    this.setState({ members: testMembers }); //eslint-disable-line
  }
  render() {
    return (
      <section id="team">
        <div className="wrapper">
          <div className="content">
            <h1>Our Wonderful Team Members!</h1>
            <div className="members">
              {!this.state.members //eslint-disable-line
                ? <Loader />
                : buildMemberComponents(this.state.members) //eslint-disable-line
              }
            </div>
          </div>
        </div>
      </section>
    );
  }
}
