console.log("Tampermonkey utilities loaded.");

function bar() {
  console.log("bar");
  return "baz";
}

////////////////////////////////////////////////////////////////////////////////

function waitForElement(selector, callback) {
  const observer = new MutationObserver((mutations, observer) => {
    const element = document.querySelector(selector);
    if (element) {
      observer.disconnect();
      callback(element);
    }
  });

  observer.observe(document.body, {
    childList: true,
    subtree: true,
  });
}

/* Usage:
waitForElement('#dynamicElement', (element) => {
    console.log('Element exists:', element);
    // Perform actions on the element
});
*/

////////////////////////////////////////////////////////////////////////////////

function waitForElementAsync(selector) {
  return new Promise((resolve) => {
    waitForElement(selector, (element) => {
      resolve(element);
    });
  });
}

/* Usage:
waitForElement('#dynamicElement').then((element) => {
    console.log('Element exists:', element);
    // Perform actions on the element
});
*/

////////////////////////////////////////////////////////////////////////////////

// TODO: wait for time functions
