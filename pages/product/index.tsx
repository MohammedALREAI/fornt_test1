import Head from "next/head";
import Products from "../../components/products";

export default function ProductPage() {
  return (
    <>
      <Head>
        <title>Product pages</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Products />
    </>
  );
}
