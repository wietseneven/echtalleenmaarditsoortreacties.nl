// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { createCanvas } from 'canvas';
import canvasTxt from 'canvas-txt';
import createMessage from "../../lib/createMessage";
import drawOnCanvas from "../../lib/drawOnCanvas";

const sizes = {
  width: 1170,
  height: 1600,
  spacing: 120,
};

sizes.content = sizes.width - sizes.spacing * 2;

export default function helloAPI(req, res) {
  const message = createMessage(req.query);
  const canvas = createCanvas(sizes.width, sizes.height);

  drawOnCanvas(message, canvas, sizes);

  const buf = canvas.toBuffer('image/png');
  res.setHeader('content-type', 'image/png');
  res.send(buf);
}
