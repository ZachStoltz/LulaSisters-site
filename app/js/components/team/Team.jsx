import Helmet from 'react-helmet';
import Loader from '../common/Loader.jsx';
import Member from '../common/Member.jsx';
import membersJSON from '../../../../static/members.json';
import { setOgCommons } from '../helpers';
import React, { Component } from 'react';

const buildMemberComponents = (members) => {
  return members.map(member => <Member key={member.name} {...member} />);
};

export default class Team extends Component {
  constructor() {
    super();

    this.state = { members: [] };
  }

  componentDidMount() {
    this.setState({ members: membersJSON }); //eslint-disable-line
  }

  render() {
    const { members } = this.state;
    return (
      <section id="team">
        <Helmet
          title="Team LuLaQueens - LuLaSisters"
          meta={[
            ...setOgCommons('team-lula-queens'),
          ]}
        />
        <div className="wrapper">
          <div className="content">
            <h1>Team Lula Queens</h1>
            <div className="members--wrapper">
              <div className="members">
                {!members
                  ? <Loader />
                  : buildMemberComponents(members)
                }
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
