import Head from "next/head";
import { CreateProduct } from "../../components/createProduct";
export default function CreateProductPage() {
  return (
    <>
      <Head>
        <title> create Product pages</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <CreateProduct />
    </>
  );
}
