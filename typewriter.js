

const sentence = "hello there from lighthouse labs!";


const typewriter = (sentence) => {
  let timeout = 0;

  for (let i = 0; i < sentence.length; i++) {

    setTimeout(() => {
      process.stdout.write(sentence[i]);
    }, timeout);

    timeout += 50;
  }

  setTimeout(() => {
    console.log('\n');
  }, timeout);


};


typewriter(sentence)



