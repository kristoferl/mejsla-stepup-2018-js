function resultOrErr(fn) {
  try {
    return fn();
  } catch (err) {
    return err;
  }
}

const runButton = (element) => doIt(element);

async function doIt(element) {
  const section = element.parentElement;
  const elem = section.getElementsByClassName('source')[0];
  const resultElement = section.getElementsByClassName('result')[0];

  const newLinesRemoved = elem.innerText.replace(/^\/\/.*$/gm, '');
  const fn = "(() => {" + newLinesRemoved + "})()";
  resultElement.innerText = ''; // reset result box
  let result = await resultOrErr(() => eval(fn));
  if(result.message && result.stack) {
    // Guess that it is an error
    result = result.message;
  }
  resultElement.innerText = typeof result === 'object' ? JSON.stringify(result) : result;
  resultElement.parentElement.style = "display:block";

}

function keyPressResetButton(event, element) {
  if(event.code !== 'Enter') {
    return;
  }
  resetButton(element);
}

function resetButton(element) {
  const section = element.parentElement;
  const resultElement = section.getElementsByClassName('result')[0];
  resultElement.innerText = ''; // reset result box
  resultElement.parentElement.style = "display:none";
}