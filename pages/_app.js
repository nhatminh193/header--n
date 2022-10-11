import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { ChakraProvider } from "@chakra-ui/react";
import Layout from '../component/layout'
import { useRouter } from 'next/router'

function MyApp({ Component, pageProps }) {
  const router = useRouter()
  return (
    <ChakraProvider>
      <Layout>
        <Component key={router.asPath} {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
}

export default MyApp;
