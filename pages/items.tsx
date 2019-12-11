import axios from "axios";
import { NextPage } from "next";
import Layout from "../components/Layout";
import { SearchDTO } from "../models/SearchDTO";
import ProductCluster from "../components/ProductCluster";

interface Props {
  data?: SearchDTO;
}

const Items: NextPage<Props> = props => {
  const { data } = props;

  if (!data) return <h1>ERROR</h1>;

  return (
    <Layout>
      {data.items.map((item, i) => (
        <ProductCluster data={item} key={`product-${i}`} />
      ))}
    </Layout>
  );
};

Items.getInitialProps = async props => {
  const { search } = props.query;

  if (!search) return {};

  const params = { q: search };
  const searchResponce = await axios.get<SearchDTO>(
    "http://localhost:3000/api/search",
    { params }
  );

  return { data: searchResponce.data };
};

export default Items;
