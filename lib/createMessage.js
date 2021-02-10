import sample from 'lodash/sample';
import sampleSize from 'lodash/sampleSize';
import data from './data';

const { subjects, greetings, senderNames, introductions, randomSentences, finishingSentences, endings } = data;

const createMessage = (name) => {
  const subject = sample(subjects).replace(/NAME/g, name);
  const greeting = sample(greetings).replace(/NAME/g, name);
  const needsIntroduction = Math.round(Math.random());
  const senderName = sample(senderNames);
  const introduction = needsIntroduction ? sample(introductions).replace(/SENDERNAME/g, senderName) : false;

  const numberOfParagraphs = Math.round(Math.random() * 5 + 1);
  const paragraphs = sampleSize(randomSentences, numberOfParagraphs);

  const finalParagraph = sample(finishingSentences);
  const ending= `${name}, Nederland heeft jou hard nodig!`
  const endGreeting = sample(endings);

  return {
    subject,
    greeting,
    introduction,
    paragraphs,
    finalParagraph,
    ending,
    endGreeting,
  }
}

export default createMessage;