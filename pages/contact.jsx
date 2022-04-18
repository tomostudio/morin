import { useEffect } from 'react';
import Layout from '@/components/module/layout';
import Header from '@/components/module/header';
import Footer from '@/components/module/footer';
import Container from '@/components/module/container';
import React from 'react';
import ContactCard from '@/components/module/contactCard';
import { useEffectInit } from '@/components/utils/preset';

const contactData = [
  {
    images: [
      '/contact/contact-1.png',
      '/contact/contact-1.png',
      '/contact/contact-1.png',
    ],
    label: 'Head Office',
    companyName: 'PT. Astaguna Wisesa',
    address: 'Jelambar Madya Utama, Jakarta 11460, Indonesia',
    phone: '021 5657845',
    email: 'info@astaguna.co.id',
    maps: 'https://goo.gl/maps/ozoRK5cx1yWtw3Jq6',
  },
  {
    images: [
      '/contact/contact-2.png',
      '/contact/contact-2.png',
      '/contact/contact-2.png',
    ],
    label: 'Factory',
    companyName: 'PT. Astaguna Wisesa',
    address: 'Kawasan Industri Hyundai BIIE, Cikarang, Bekasi 17550, Indonesia',
    phone: null,
    email: null,
    maps: 'https://goo.gl/maps/FGesQVwHy5yYsATp7',
  },
];

useEffect(() => {
  useEffectInit();
}, []);

const Contact = () => {
  return (
    <Layout className='pt-[86px] lg:pt-32'>
      <Header hamburgerColor='bg-black' />

      <Container
        className='pl-0 pr-0'
        classNameOuter='px-4 mb-5 md:px-8 md:mb-7 lg:mb-10 xl:px-10 xl:mb-16'
      >
        <h1 className='text-morin-blue text-ctitle font-nutmeg font-bold mx-auto mb-8 md:text-ctitleBig lg:text-h2 xl:text-h1 xl:mb-16'>
          Contact
        </h1>

        {contactData?.map((item) => (
          <div className='mb-4 last:mb-0' key={item.label}>
            <ContactCard
              imageData={item.images}
              label={item.label}
              companyName={item.companyName}
              address={item.address}
              phone={item.phone}
              email={item.email}
              maps={item.maps}
            />
          </div>
        ))}
      </Container>

      <Footer />
    </Layout>
  );
};

export default Contact;
