import ItemTitle from './ItemTitle';
import ItemData from './ItemData';

const UserData = ({ children, mainData, title }) => {
  return (
    <div>
      <ItemTitle>{title}</ItemTitle>
      <div>
        <ItemData>{mainData}</ItemData>
        {children}
      </div>
    </div>
  );
};

export default UserData;
