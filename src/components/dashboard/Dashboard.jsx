import DashboardList from './DashboardList';

import classes from './Dashboard.module.css';

const Dashboard = () => {
  return (
    <>
      <section className={classes.dashboard}>
        <h1>Dashboard</h1>
        <DashboardList />
      </section>
    </>
  );
};

export default Dashboard;
