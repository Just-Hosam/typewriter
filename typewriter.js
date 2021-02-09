const sentence = 'Hello there from lighthosue labs\n';

const func = str => {
  let i = 0;
  for (const char of str) {
    setTimeout(() => {
      process.stdout.write(char);
    }, i);
    i += 50;
  }
};

func(sentence);