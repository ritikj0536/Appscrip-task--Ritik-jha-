import { useState, useEffect } from 'react';
import Head from 'next/head';
import TopBar from '../components/TopBar/TopBar';
import Header from '../components/Header/Header';
import HeroSection from '../components/HeroSection/HeroSection';
import ProductGrid from '../components/ProductGrid/ProductGrid';
import Footer from '../components/Footer/Footer';

export default function Home({ products: initialProducts }) {
  const [products, setProducts] = useState(initialProducts || []);

  useEffect(() => {
    if (products.length === 0) {
      fetch('https://fakestoreapi.com/products')
        .then((res) => res.json())
        .then((data) => setProducts(data))
        .catch((err) => console.error('Failed to fetch products:', err));
    }
  }, []);

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Discover Our Products | Mettā Muse",
    "description": "Browse our curated collection of handcrafted products from artisans worldwide.",
    "url": "https://appscrip-task.netlify.app"
  };

  return (
    <>
      <Head>
        <title>Discover Our Products | Mettā Muse</title>
        <meta name="description" content="Browse our curated collection of handcrafted products from artisans worldwide. Discover unique bags, accessories and more from mettā muse." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Discover Our Products | Mettā Muse" />
        <meta property="og:description" content="Browse our curated collection of handcrafted products from artisans worldwide." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://appscrip-task.netlify.app" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Discover Our Products | Mettā Muse" />
        <meta name="twitter:description" content="Browse our curated collection of handcrafted products from artisans worldwide." />
        <link rel="canonical" href="https://appscrip-task.netlify.app" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
      </Head>
      <TopBar />
      <Header />
      <main>
        <HeroSection />
        <ProductGrid products={products} />
      </main>
      <Footer />
    </>
  );
}

export async function getStaticProps() {
  try {
    const res = await fetch('https://fakestoreapi.com/products');
    const products = await res.json();
    return {
      props: { products },
      revalidate: 60
    };
  } catch (error) {
    return { props: { products: [] } };
  }
}