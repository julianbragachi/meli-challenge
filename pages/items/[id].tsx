import axios from 'axios';
import { NextPage } from 'next';
import { ItemDTO } from '../../models/ItemDTO';
import Layout from '../../components/Layout';
import styles from './[id].styles.scss';
import CategoriesBreadcrum from '../../components/CategoriesBreadcrum';

interface Props {
  data: ItemDTO;
}

const ItemDetail: NextPage<Props> = props => {
  const { picture, sold_quantity, title, price, description } = props.data.item;
  const condition = props.data.item.condition
    ? props.data.item.condition.toLowerCase() === 'new'
      ? 'Nuevo'
      : 'Usado'
    : '';

  return (
    <Layout title={title}>
      <CategoriesBreadcrum categories={props.data.category} />
      <div className={styles.container}>
        <div className="d-flex mb-5">
          <div className={styles.imgSection}>
            <img src={picture} />
          </div>
          <div className={styles.infoSection}>
            <p className={styles.preTitle}>
              {condition} - {sold_quantity} vendidos
            </p>
            <h1 className={styles.title}>{title}</h1>
            <p className={styles.price}>
              {price.currency} {price.amount}
            </p>
            <button type="button" className={styles.btn}>
              Comprar
            </button>
          </div>
        </div>
        <div>
          <h2 className="mb-3">Descripcion del producto</h2>
          {description}
        </div>
      </div>
    </Layout>
  );
};

ItemDetail.getInitialProps = async props => {
  const { id } = props.query;
  if (!id) return { data: null as any };

  const searchResponce = await axios.get<ItemDTO>(`http://localhost:3000/api/items/${id}`);

  return { data: searchResponce.data };
};

export default ItemDetail;
