import React, { Component } from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
  PieChart, Pie, Cell,
  BarChart, Bar
} from 'recharts';

class Dashboard extends Component {
  // ===== Sample data for demonstration =====
  lineData = [
    { name: 'Feb', threats: 200 },
    { name: 'Mar', threats: 400 },
    { name: 'Apr', threats: 600 },
    { name: 'May', threats: 400 },
    { name: 'Jun', threats: 700 },
  ];

  pieData = [
    { name: 'Malware', value: 400 },
    { name: 'Phishing', value: 300 },
    { name: 'DDoS', value: 200 },
    { name: 'Intrusion', value: 100 },
  ];

  barData = [
    { name: 'Malware', count: 200 },
    { name: 'Phishing', count: 150 },
    { name: 'DDoS', count: 100 },
    { name: 'Intrusion', count: 80 },
  ];

  COLORS = ['#0088FE', '#FFBB28', '#FF8042', '#00C49F'];

  render() {
    return (
      <div className="dashboard-wrapper">
        {/* ===== Sidebar ===== */}
        <div className="sidebar">
          <h2 className="sidebar-title">Dashboard</h2>
          <ul className="sidebar-menu">
            <li>Threat Search</li>
            <li>Alerts</li>
            <li>Settings</li>
          </ul>
        </div>

        {/* ===== Main Content ===== */}
        <div className="main-content">
          {/* Top Bar */}
          <div className="top-bar">
            <input type="text" placeholder="Search..." className="search-bar" />
          </div>

          {/* Stats Cards */}
          <div className="stats-cards">
            <div className="card">
              <p>Total Threats</p>
              <h3>1,234</h3>
            </div>
            <div className="card">
              <p>High-Risk Threats</p>
              <h3>56</h3>
            </div>
            <div className="card">
              <p>Medium-Risk Threats</p>
              <h3>178</h3>
            </div>
            <div className="card">
              <p>Low-Risk Threats</p>
              <h3>1,000</h3>
            </div>
          </div>

          {/* Charts Row */}
          <div className="charts-row">
            {/* Threat Trend (Line Chart) */}
            <div className="chart-box">
              <h4>Threat Trend</h4>
              <LineChart
                width={400}
                height={250}
                data={this.lineData}
                margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
              >
                <CartesianGrid strokeDasharray="3 3" stroke="#444" />
                <XAxis dataKey="name" stroke="#fff" />
                <YAxis stroke="#fff" />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="threats" stroke="#8884d8" strokeWidth={2} />
              </LineChart>
            </div>

            {/* Threat Type Distribution (Pie Chart) */}
            <div className="chart-box">
              <h4>Threat Type Distribution</h4>
              <PieChart width={300} height={250}>
                <Pie
                  data={this.pieData}
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                  label
                >
                  {this.pieData.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={this.COLORS[index % this.COLORS.length]}
                    />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </div>
          </div>

          {/* Bottom Row: Recent Activity & Top Threats */}
          <div className="bottom-row">
            {/* Recent Activity */}
            <div className="activity-table">
              <h4>Recent Activity</h4>
              <table>
                <thead>
                  <tr>
                    <th>Time</th>
                    <th>Event</th>
                    <th>Severity</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>10:15 AM</td>
                    <td>Malware detected</td>
                    <td>High</td>
                  </tr>
                  <tr>
                    <td>9:00 AM</td>
                    <td>Suspicious login attempt</td>
                    <td>Medium</td>
                  </tr>
                  <tr>
                    <td>Yesterday</td>
                    <td>Firewall rule updated</td>
                    <td>Low</td>
                  </tr>
                  <tr>
                    <td>Yesterday</td>
                    <td>New vulnerability found</td>
                    <td>Medium</td>
                  </tr>
                  <tr>
                    <td>Yesterday</td>
                    <td>System patch applied</td>
                    <td>Low</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Top Threats (Bar Chart) */}
            <div className="chart-box">
              <h4>Top Threats</h4>
              <BarChart
                width={300}
                height={250}
                data={this.barData}
                margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
              >
                <CartesianGrid strokeDasharray="3 3" stroke="#444" />
                <XAxis dataKey="name" stroke="#fff" />
                <YAxis stroke="#fff" />
                <Tooltip />
                <Legend />
                <Bar dataKey="count">
                  {this.barData.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={this.COLORS[index % this.COLORS.length]}
                    />
                  ))}
                </Bar>
              </BarChart>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
