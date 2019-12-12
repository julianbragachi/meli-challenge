import React, { FunctionComponent } from 'react';
import classNames from 'classnames';
import Link from 'next/link';
import styles from './productCluster.styles.scss';
import { Item } from '../../models/SearchDTO';

interface Props {
  className?: string;
  data: Item;
}

const ProductCluster: FunctionComponent<Props> = (props: Props) => {
  const { id, picture, title, price, free_shipping, address } = props.data;

  const condition = props.data.condition
    ? (props.data.condition.toLowerCase() === 'new' && 'Nuevo') ||
      (props.data.condition.toLowerCase() === 'used' && 'Usado') ||
      ''
    : '';

  return (
    <div className={classNames(styles.container, props.className)}>
      <div>
        <img src={picture} />
      </div>
      <div className="pt-5 pb-5">
        <Link href={`items/${id}`}>
          <h2 className={styles.title}>{title}</h2>
        </Link>
        <p className={styles.price}>
          {price.currency} {price.amount}
        </p>
        <p className={styles.address}>{address}</p>
        {condition && <p id="div-condition">{condition}</p>}
        {free_shipping && <p className={styles.shipping}>Envio gratis!</p>}
      </div>
    </div>
  );
};

export default ProductCluster;
