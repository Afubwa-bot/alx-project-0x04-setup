import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { CountProvider } from "@/context/CountContext";

export default function App ({Component, pagesProps}: AppProps) {
  return (
    <CountProvider>
      {/* Wrap the application with CountProvider to provide count context */}
    <Layout>
      <Component {...pagesProps} />
    </Layout>  
    </CountProvider>
  )
}