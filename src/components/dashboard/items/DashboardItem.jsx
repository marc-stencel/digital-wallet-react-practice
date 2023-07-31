import { useState } from 'react';

import classes from './DashboardItem.module.css';

const DashboardItem = ({ children, header, id }) => {
  const [isItemOpen, setIsItemOpen] = useState(false);

  const handleItemCollapseClick = () => {
    setIsItemOpen(!isItemOpen);
  };

  return (
    <li
      key={id}
      className={classes['dashboard-item']}
      aria-expanded={isItemOpen}>
      <h2 aria-label="Toggle" onClick={handleItemCollapseClick}>
        {header}
      </h2>
      <div className={classes.card}>{children}</div>
    </li>
  );
};

export default DashboardItem;
