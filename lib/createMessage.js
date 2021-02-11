import sample from 'lodash/sample';
import sampleSize from 'lodash/sampleSize';
import data from './data';

const { subjects, greetings, senderNames, introductions, randomSentences, finishingSentences, endings } = data;

const createMessage = ({ name, senderName: userSenderName }) => {
  const subject = sample(subjects).replace(/NAME/g, name);
  const greeting = sample(greetings).replace(/NAME/g, name);
  const senderName = userSenderName || sample(senderNames);
  // const introduction = sample(introductions).replace(/SENDERNAME/g, senderName);

  const numberOfParagraphs = Math.round(Math.random() * 5 + 1);
  const paragraphs = sampleSize(randomSentences, numberOfParagraphs).map(sentence => sentence.replace(/NAME/g, name));

  const finalParagraph = sample(finishingSentences);
  // const ending= `${name}, Nederland heeft jou hard nodig!`
  const endGreeting = sample(endings);

  return {
    subject,
    greeting,
    // introduction,
    paragraphs,
    finalParagraph,
    endGreeting,
    senderName,
  }
}

export default createMessage;