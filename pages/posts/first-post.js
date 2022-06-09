import Head from "next/head";
import Link from "next/link";
import Layout from "../../components/layout/Layout";

export default function FirstPost() {
  return (
    <Layout>
      <h1>
        <Link href="/">back home</Link>
      </h1>
    </Layout>
  );
}
