import React, { FunctionComponent } from 'react';
import styles from './categoriesBreadcrum.styles.scss';
import Link from 'next/link';

interface Props {
  categories: string[];
}

const CategoriesBreadcrum: FunctionComponent<Props> = ({ categories }: Props) => (
  <ul className={styles.ul}>
    {categories.map((cat, i, arr) => (
      <li key={`cat-${i}`}>
        <Link
          href={{
            pathname: '/items',
            query: { search: encodeURIComponent(cat) },
          }}
        >
          <a className={styles.linkItem}>{cat}</a>
        </Link>
        {arr[i + 1] && (
          <svg width="15" height="15" viewBox="0 0 18 18">
            <g fill="#000">
              <path d="M6.646 5.354l4 4 .354.353.707-.707-.353-.354-4-4L7 4.293 6.293 5z" />
              <path d="M7.354 13.354l4-4L11.707 9 11 8.293l-.354.353-4 4-.353.354.707.707z" />
            </g>
          </svg>
        )}
      </li>
    ))}
  </ul>
);

export default CategoriesBreadcrum;
