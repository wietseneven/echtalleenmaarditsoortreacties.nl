import Head from 'next/head'
import createMessage from "../lib/createMessage";
import {useRouter} from "next/router";
import { useMemo } from 'react';
import Link from 'next/link';

const paragraphClassnames = 'mb-3 text-xl';

export default function Liefde(props) {
  const { query } = useRouter();

  const message = useMemo(() => createMessage(query.name), [query.name]);

  return (
    <div className="flex flex-col justify-center min-h-screen py-2">
      <Head>
        <title>Lovende-screenshot-aan-jezelf-generator</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="max-w-xl h-full flex-1 p-4 mx-auto">
        <Link href="/">
          <a>Terug</a>
        </Link>
        <main className="mt-10">
          <h1 className="text-xl font-bold mb-4">
            {message.subject}
          </h1>

          <p className={paragraphClassnames}>
            {message.greeting}
          </p>

          {message.introduction &&
            <p className={paragraphClassnames}>
              {message.introduction}
            </p>
          }

          {message.paragraphs.map(paragraph => <p key={paragraph} className={paragraphClassnames}>{paragraph}</p>)}

          <p className={paragraphClassnames}>
            {message.finalParagraph}
          </p>
          <p className={paragraphClassnames}>
            {message.ending}
          </p>
        </main>
      </div>

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
