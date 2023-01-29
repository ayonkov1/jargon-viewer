import Head from 'next/head'

import Canvas from '../components/Canvas/Canvas'
import StlCanvasViewer from '../components/stl-viewer/STLViewer'

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link
          rel='icon'
          href='/favicon.ico'
        />
      </Head>
      <StlCanvasViewer />
    </>
  )
}
