import axios from "axios";
import { NextPage } from "next";
import Layout from "../../components/Layout";
import { SearchDTO } from "../../models/SearchDTO";
import ProductCluster from "../../components/ProductCluster";

interface Props {
  data: SearchDTO;
}

const Items: NextPage<Props> = props => {
  const { data } = props;

  return (
    <Layout>
      {data ? (
        data.items.map((item, i) => (
          <ProductCluster data={item} key={`product-${i}`} />
        ))
      ) : (
        <h1>No se han encontrado resultados</h1>
      )}
    </Layout>
  );
};

Items.getInitialProps = async props => {
  const { search } = props.query;
  if (!search) return { data: null as any };
  const params = { q: search };

  const searchResponce = await axios.get<SearchDTO>(
    "http://localhost:3000/api/search",
    { params }
  );

  return { data: searchResponce.data };
};

export default Items;
