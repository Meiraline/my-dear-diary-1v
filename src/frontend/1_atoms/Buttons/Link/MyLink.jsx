
import { Link } from 'react-router-dom';
import classes from './MyLink.module.css';

const MyLink = ({ active, children, ...props }) => (
  <Link
    className={`${classes.link} ${active ? classes.active : ''}`}
    {...props}
  >
    {children}
  </Link>
);

export default MyLink;