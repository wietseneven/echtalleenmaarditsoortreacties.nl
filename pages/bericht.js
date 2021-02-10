import Head from 'next/head'
import createMessage from "../lib/createMessage";
import {useRouter} from "next/router";
import { useRef, useEffect, useCallback, useMemo, useState } from 'react';
import Link from 'next/link';
import drawOnCanvas from "../lib/drawOnCanvas";

const sizes = {
  width: 1170,
  height: 1600,
  spacing: 120,
};

sizes.content = sizes.width - sizes.spacing * 2;

export default function Bericht(props) {
  const canvasRef = useRef(null);
  const { query } = useRouter();
  const [iteration, setIteration] = useState(0);
  const [downloadHref, setDownloadHref] = useState(null);
  const message = useMemo(() => createMessage(query), [query.name, iteration]);

  const handleClick = useCallback(() => {
    setIteration(prev => prev + 1);
  }, [iteration]);

  useEffect(() => {
    if (!canvasRef.current) return;
    drawOnCanvas(message, canvasRef.current, sizes);
    const url = canvasRef.current.toDataURL();
    setDownloadHref(url);
  }, [message.subject, message.introduction]);

  return (
    <div className="flex flex-col justify-center min-h-screen py-2">
      <Head>
        <title>{ message.subject}</title>
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:image" content={`/image?name=${query.name}&senderName=${query.senderName}`} />
      </Head>

      <div className="max-w-xl w-full h-full flex-1 mx-auto">
        <Link href="/">
          <a className="px-4 hover:underline">&larr; Terug</a>
        </Link>
        <main className="mt-10">
        {query.name && <>
          <canvas className="w-full h-auto" ref={canvasRef} width={sizes.width} height={sizes.height} />
            <footer className="flex px-4 space-x-2">
              <a className="border px-4 py-2 text-xs hover:underline select-none" href={downloadHref} download={`${message.subject}.png`}>Download zodat je hem kunt Tweetten</a>
              <button className="border px-4 py-2 text-xs hover:underline select-none" onClick={handleClick}>Opnieuw</button>
            </footer>
          </>
          }
        </main>
      </div>

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
