import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Task Manager</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="bg-coolGray-100 h-screen w-screen grid grid-cols-projects-layout">

        <main className="p-2">
          <h1 className="text-2xl font-bold">Welcome to Task Manager!</h1>
        </main>
      </div>
    </>
  );
}

