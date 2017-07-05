import React, { PropTypes } from 'react';
import { Card, CardTitle, CardText } from 'material-ui/Card';
import { Link } from 'react-router';


const Dashboard = ({ secretData }) => (
  <Card className="container">
    <CardTitle
      title="Dashboard"
      subtitle="You should get access to this page only after authentication."
    />
    {secretData && <CardText style={{ fontSize: '16px', color: 'green' }}>{secretData} </CardText>}
       <Link to={'/secret'}>secret</Link>
  </Card>
);

Dashboard.propTypes = {
  secretData: PropTypes.string.isRequired
};

export default Dashboard;