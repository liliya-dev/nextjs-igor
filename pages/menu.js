import Head from "next/head";
import Link from "next/link";
import React from "react";
import Layout from "../components/layout/Layout";
import { getSortedPostsData } from "../lib/menu";
import axios from "axios";

export default function blogs({ allPostsData }) {

  return (
    <Layout>
      <div>
      <section>
        <h2 >Menu block</h2>
        <ul >
          {allPostsData.map(({ id, date, title, names }) => (
            id !== 'coctails.js' &&
            <li key={id}>
              {title}
              <br />
              {id}
              <br />
              {date}
              <br />
              {names}
            </li>
          ))}
        </ul>
      </section>
        <Link href='/menu/coctails'> Coctails menu</Link>
      </div>
    </Layout>
  );
}
export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}