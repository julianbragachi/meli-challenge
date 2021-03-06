import React, { useState, FunctionComponent, ChangeEvent, FormEvent, useEffect } from 'react';
import { useRouter } from 'next/router';
import classNames from 'classnames';
import styles from './searchBar.styles.scss';

interface Props {
  className?: string;
}

const SearchBar: FunctionComponent<Props> = ({ className }: Props) => {
  const router = useRouter();
  const { search } = router.query;
  const [value, setValue] = useState(search ? decodeURIComponent(search as string) : '');

  useEffect(() => {
    if (search) setValue(decodeURIComponent(search as string));
  }, [search]);

  const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    if (e) e.preventDefault();
    if (!value) return;

    router.push(`/items?search=${value}`);
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <form className={classNames(className, styles.form)} onSubmit={handleFormSubmit}>
      <input
        type="text"
        onChange={handleInputChange}
        className={styles.searchBarInput}
        value={value}
        placeholder="Buscar productos, marcas y más…"
        autoFocus
      />
      <button className={classNames(styles.btnSubmit, 'd-flex')}>
        <i className="material-icons">search</i>
      </button>
    </form>
  );
};

export default SearchBar;
