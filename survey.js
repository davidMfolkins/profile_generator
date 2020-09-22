const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What\'s your name? ', (name) => {
  console.log(`Thank you for your valuable feedback: ${name}`);

  rl.question('What\'s an activity you like doing? ', (doing) => {
    console.log(`Thank you for your valuable feedback: ${doing}`);

    rl.question('What do you listen to while doing that? ', (listen) => {
      console.log(`Thank you for your valuable feedback: ${listen}`);

      rl.question('Which meal is your favourite dinner? ', (dinner) => {
        console.log(`Thank you for your valuable feedback: ${dinner}`);

        rl.question('What\'s your favourite thing to eat for that meal? ', (eat) => {
          console.log(`Thank you for your valuable feedback: ${eat}`);

          rl.question('What super power do you want? ', (superpower) => {
            console.log(`Thank you for your valuable feedback: ${superpower}`);

            console.log(`Hey! this is ${name}'s profile! \n They like to ${doing}, and listen to ${listen} while they do it. \n Their favorite meal is ${dinner} and their favorite thing to eat is ${eat} \n If they could have any super power it would be ${superpower}`)
            rl.close();

          });
        });
      });
    });
  });
});
