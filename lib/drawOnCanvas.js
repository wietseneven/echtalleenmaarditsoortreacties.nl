import canvasTxt from "canvas-txt";

const drawOnCanvas = (message, canvas, sizes) => {
  const ctx = canvas.getContext('2d');

  ctx.fillStyle = "#fff";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = 'black';
  canvasTxt.align = 'left';
  canvasTxt.vAlign = 'top';
  canvasTxt.fontSize = 60;
  canvasTxt.fontWeight = 'bold';
  canvasTxt.drawText(ctx, message.subject, sizes.spacing, sizes.spacing, sizes.content, 200);

  const content = `${message.greeting}
  
  ${message.introduction}
  
  ${message.paragraphs.join(' ')}
  
  ${message.finalParagraph}
  
  ${message.ending}
  
  ${message.endGreeting}
  
  ${message.senderName}
  `;
  // canvasTxt.
  canvasTxt.fontSize = 45;
  canvasTxt.fontWeight = 500;
  canvasTxt.lineHeight = 65;
  canvasTxt.drawText(ctx, content, sizes.spacing, sizes.spacing * 2, sizes.content, 800);
}

export default drawOnCanvas;