import { useState } from "react";
import { useRouter } from 'next/router';
import Image from 'next/image'
import styles from '@/styles/weddingSigns.module.css';

const signs = [
    {
      id: 1,
      name: 'sign  1',
      description: 'nice sign',
      image: '/weddingsPics/wedd1.png',
      price: '$20.99'
    },
    {
      id: 2,
      name: 'sign  2',
      description: 'beautiful sign',
      image: '/weddingsPics/wedd2.png',
      price: '$15.99'
    },
    {
      id: 3,
      name: 'sign  3',
      description: 'amazing sign',
      image: '/weddingsPics/wedd3.png',
      price: '$25.99'
    },
    {
      id: 4,
      name: 'sign  4',
      description: 'gorgeous sign',
      image: '/weddingsPics/wedd4.png',
      price: '$17.99'
    },
    {
      id: 5,
      name: 'sign  5',
      description: 'awesome sign',
      image: '/weddingsPics/wedd5.png',
      price: '$26.99'
    },
    {
      id: 6,
      name: 'sign  6',
      description: 'wonderful sign',
      image: '/weddingsPics/wedd6.png',
      price: '$30.99'
    },
    {
      id: 7,
      name: 'sign  7',
      description: 'elegant sign',
      image: '/weddingsPics/wedd7.png',
      price: '$22.99'
    }
];

export async function getStaticProps({ params }) {

  const signId = params.signId;
  const signs = [
    {
      id: 1,
      name: 'sign  1',
      description: 'nice sign',
      image: '/weddingsPics/wedd1.png',
      price: '$20.99'
    },
    {
      id: 2,
      name: 'sign  2',
      description: 'beautiful sign',
      image: '/weddingsPics/wedd2.png',
      price: '$15.99'
    },
    {
      id: 3,
      name: 'sign  3',
      description: 'amazing sign',
      image: '/weddingsPics/wedd3.png',
      price: '$25.99'
    },
    {
      id: 4,
      name: 'sign  4',
      description: 'gorgeous sign',
      image: '/weddingsPics/wedd4.png',
      price: '$17.99'
    },
    {
      id: 5,
      name: 'sign  5',
      description: 'awesome sign',
      image: '/weddingsPics/wedd5.png',
      price: '$26.99'
    },
    {
      id: 6,
      name: 'sign  6',
      description: 'wonderful sign',
      image: '/weddingsPics/wedd6.png',
      price: '$30.99'
    },
    {
      id: 7,
      name: 'sign  7',
      description: 'elegant sign',
      image: '/weddingsPics/wedd7.png',
      price: '$22.99'
    }
  ];

  const sign = signs.find((p) => p.id === parseInt(params.signId));
  return {
    props: {
      sign,
    },
  };
}

export async function getStaticPaths() {
    const signs = [
        {
          id: 1,
          name: 'sign  1',
          description: 'nice sign',
          image: '/weddingsPics/wedd1.png',
          price: '$20.99'
        },
        {
          id: 2,
          name: 'sign  2',
          description: 'beautiful sign',
          image: '/weddingsPics/wedd2.png',
          price: '$15.99'
        },
        {
          id: 3,
          name: 'sign  3',
          description: 'amazing sign',
          image: '/weddingsPics/wedd3.png',
          price: '$25.99'
        },
        {
          id: 4,
          name: 'sign  4',
          description: 'gorgeous sign',
          image: '/weddingsPics/wedd4.png',
          price: '$17.99'
        },
        {
          id: 5,
          name: 'sign  5',
          description: 'awesome sign',
          image: '/weddingsPics/wedd5.png',
          price: '$26.99'
        },
        {
          id: 6,
          name: 'sign  6',
          description: 'wonderful sign',
          image: '/weddingsPics/wedd6.png',
          price: '$30.99'
        },
        {
          id: 7,
          name: 'sign  7',
          description: 'elegant sign',
          image: '/weddingsPics/wedd7.png',
          price: '$22.99'
        }
      ]

  const paths = signs.map((sign) => ({
    params: { signId: sign.id.toString() },
  }));

  return { paths, fallback: false };
}
export default function ProductPage() {
  const router = useRouter();
  const [confirmOrder, setConfirmOrder] = useState(false);
  const { signId } = router.query;
  const sign = signs.find(p => p.id === parseInt(signId));
  console.log(sign);

  function handleOrder() {
    // redirect to special orders page 
      router.push('/special-orders');
      setConfirmOrder(true);
  }

  if (router.isFallback) {
    return <div> Loading...</div>
  }

  return (
    <div className={styles.signPic2}>
      <h1>{sign.name}</h1>
      <Image src={sign.image} width={380} height={400} alt={sign.name}/>
      <p>{sign.description}</p>
      <p>{sign.price}</p>
      <button className={styles.button} onClick={handleOrder}>Edit Sign</button>
    </div>
  );
}
