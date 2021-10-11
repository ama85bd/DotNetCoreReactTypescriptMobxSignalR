import React, { useEffect, useState } from 'react';
import 'font-awesome/css/font-awesome.min.css';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { Col, Navbar, Row } from 'reactstrap';

function App() {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/activities').then((response) => {
      setActivities(response.data);
    });
  }, []);

  return (
    <React.Fragment>
      <Navbar className="navbar-expand-lg fixed-top bg-primary mt-card dhtt-navbar">
        <Row>
          <Col md={3}>
            <div className="nav-title">
              <div>
                <i className="fa fa-users "></i>
              </div>
            </div>
          </Col>
          <Col md={9}>
            <div className="nav-titlee">
              <div>
                <h2>Reactivities</h2>
              </div>
            </div>
          </Col>
        </Row>
      </Navbar>
      
      <Row>
        <Col md={6}>
          
        <div className="content p-3 overflow-auto">
        <ul className="list-group">
          {activities.map((activity: any) => (
            <li className="list-group-item" key={activity.id}>{activity.title}</li>
          ))}
        </ul>
        </div>
        </Col>
      </Row>
      
      </React.Fragment>
  );
}

export default App;
