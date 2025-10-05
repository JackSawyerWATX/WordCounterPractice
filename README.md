# WordCounterPractice

This small project contains two Node.js scripts for counting text statistics and a simple test/demo script.

Prerequisites
 - Node.js installed (v12+ recommended). Verify by running `node -v` in PowerShell.

Files
- `script.js` — The main word/sentence/character counter. It:
  - Prints a sample text and its counts.
  - Then prompts you to enter your own text in the console and prints counts for your input.
  - Exposes a `wordCounter(text)` function (internal) that returns an object with Characters, Words, and Sentences counts.

- `script2.js` — A small interactive test/demo script. It prompts the user for a favorite color and prints the response.

How to run (PowerShell)

Open PowerShell in the project folder and run either script with Node.

Run the main word counter (`script.js`):

```powershell
node .\script.js
```

When you run `script.js` you will see a sample text and its breakdown, then be prompted with:

Enter your text here: -->

Type or paste your text and press Enter. The script will print the Characters, Words, and Sentences counts for your input.

Run the test/demo (`script2.js`):

```powershell
node .\script2.js
```

When you run `script2.js` you'll be prompted:

What is your favorite color?

Type an answer and press Enter. The script will echo your response.

License
This project has no license file. Add one if you plan to share the code publicly.

### I love you all! Happy coding!