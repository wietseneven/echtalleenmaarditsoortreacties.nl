import Head from 'next/head'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Lovende-screenshot-aan-jezelf-generator</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center flex-1 px-20 text-center">
        <h1 className="text-6xl font-bold">
          Lieve jij,
        </h1>

        <p className="mt-3 max-w-2xl text-2xl">
          Iedereen kan wel eens een hart onder de riem gebruiken. Zeker onze Thierry. Vul daarom hier je naam in zodat we wat lof jouw kant op kunnen sturen.
        </p>

        <form method="GET" action="/liefde" className="mt-6 w-full max-w-sm text-left space-y-2">
          <label htmlFor="name" className="block text-xl">Jouw naam</label>
          <input placeholder="Vul hier jouw naam in" required name="name" id="name" type="text" maxLength={24} className="block w-full px-4 py-2 mt-2 text-left border rounded-xl" />
          <button className="border px-4 py-2 rounded-xl bg-gray-900 text-white" type="submit">Krijg liefde &rarr;</button>
        </form>
      </main>

      <footer className="flex items-center justify-center w-full h-24 border-t">
        <p>
          Gemaakt door Wietse Neven naar idee van{' '}
          <a className="underline" target="_blank"
          rel="noopener noreferrer" href="https://twitter.com/tijmenmoltmaker/status/1359481283366297600">
            Thijmen Moltmaker
          </a>
        </p>
      </footer>
    </div>
  )
}
