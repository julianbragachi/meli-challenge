import * as React from 'react';
import SearchBar from '../SearchBar';
import styles from './header.styles.scss';

interface Props {}

const Header: React.FunctionComponent = ({}: Props) => (
  <header className={styles.header}>
    <div className="container">
      <div className="row">
        <SearchBar className="col-md-8" />
      </div>
    </div>
  </header>
);

export default Header;
