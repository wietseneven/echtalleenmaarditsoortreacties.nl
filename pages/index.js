import Head from 'next/head'
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import { useCallback } from 'react';

export default function Home() {
  const router = useRouter();
  const { register, handleSubmit } = useForm();

  const submitHandler = useCallback(({ name, senderName }) => {
    router.push({ pathname: '/bericht', query: { name, senderName }})
  }, [])

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Echt alleen maar dit soort reacties</title>
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:image" content="/Held.png" />
      </Head>

      <main className="flex flex-col items-center justify-center flex-1 px-20 text-center">
        <h1 className="text-6xl font-bold">
          Lieve jij,
        </h1>

        <p className="mt-3 max-w-2xl text-2xl">
          Iedereen kan wel eens een hart onder de riem gebruiken. Zeker onze Thierry. Vul daarom hier je naam in zodat we wat lof jouw kant op kunnen sturen.
        </p>

        <form onSubmit={handleSubmit(submitHandler)} method="GET" action="/bericht" className="mt-6 w-full max-w-sm text-left space-y-4">
          <div>
            <label htmlFor="name" className="block text-xl">Jouw naam</label>
            <input ref={register()} placeholder="Vul hier jouw naam in" required name="name" id="name" type="text" maxLength={24} className="block w-full px-4 py-2 mt-2 text-left border rounded-xl" />
          </div>

          <div>
            <label htmlFor="name" className="block text-xl">Naam afzender</label>
            <input ref={register()} placeholder="Vul hier de naam van de afzender in" name="senderName" id="name" type="text"
                   maxLength={24} className="block w-full px-4 py-2 mt-2 text-left border rounded-xl"/>
            <span className="text-xs text-gray-400 block">Mag je leeg laten, dan wordt het willekeurig ingevuld.</span>
          </div>

          <button className="border inline-block px-4 py-2 rounded-xl bg-gray-900 text-white hover:bg-gray-700" type="submit">Krijg liefde &rarr;</button>
        </form>
      </main>

      <footer className="flex px-4 mt-2 items-center justify-center w-full h-24 border-t">
        <p>
          Gemaakt door{' '}
          <a className="underline" target="_blank" rel="noopener noreferrer" href="https://twitter.com/wietseneven">
            Wietse Neven
          </a>
          {' '}naar idee van{' '}
          <a className="underline" target="_blank"
             rel="noopener noreferrer" href="https://twitter.com/tijmenmoltmaker/status/1359481283366297600">
            Tijmen Moltmaker
          </a>
        </p>
      </footer>
    </div>
  )
}
