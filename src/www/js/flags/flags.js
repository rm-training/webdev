/*
 * Read the index.html file and locate all of the elements that have
 * text content containing the word "FLAG" followed by a number ("#1",
 * "#2", etc.)
 *
 * Using the standard DOM methods, move these elements into the `ul'
 * element that is inside the `div' with the ID of `#bucket'.  Move
 * the entire element, not just the text content.  Ensure you maintain
 * proper HTML structure by enclosing the FLAG elements in `li'
 * elements when necessary.
 *
 * The FLAG elements in the `ul' should be listed in ascending
 * (numeric) order.
 *
 * Tips:
 *
 * Move them one at a time.  Some of them will have to be moved by
 * selecting a parent element and then using the traversal methods to
 * find the correct FLAG element.
 *
 * Hint: you can use:
 *
 *   - getElementById
 *     https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById
 *
 *   - getElementsByTagName
 *     https://developer.mozilla.org/en-US/docs/Web/API/Element/getElementsByTagName
 *
 *   - getElementsByClassName
 *     https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementsByClassName
 *
 *   - querySelector
 *     https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector
 *
 *   - querySelectorAll
 *     https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelectorAll
 *
 *   - createElement
 *     https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement
 *
 *   - appendChild
 *     https://developer.mozilla.org/en-US/docs/Web/API/Node/appendChild
 *
 * and all the parent, child and sibling selectors, along with the DOM
 * traversal properties such as:
 *
 *   - parentNode
 *   - previousSibling
 *   - nextSibling
 *   - firstChild
 *   - lastChild
 *   - childNodes
 *
 * Which you can read about here:
 *
 *    https://developer.mozilla.org/en-US/docs/Web/API/Node
 *
 */

const bucket = document.getElementById("bucket");
const bucketList = bucket.querySelector("ul");

const flag1 = document.querySelector(".main li.foo");
// the flag is already an LI so we do not need to recreate it...
bucketList.appendChild(flag1);

const flag2 = document.querySelector("article a span");
newLi = document.createElement("li");
newLi.appendChild(flag2);
bucketList.appendChild(newLi);

const flag3 = document.querySelector(".footer div div div div:first-child");
newLi = document.createElement("li");
newLi.appendChild(flag3);
bucketList.appendChild(newLi);

const flag4 = document.querySelector("#article-3 p span");
newLi = document.createElement("li");
newLi.appendChild(flag4);
bucketList.appendChild(newLi);

const flag5 = document.querySelector("#article-3 p:nth-child(4)");
newLi = document.createElement("li");
newLi.appendChild(flag5);
bucketList.appendChild(newLi);

/**
 * BONUS:
 *
 * Rewrite your solution.  This time instead of selecting each flag
 * individually, write a function that recursively walks the DOM tree
 * and moves the flags as they are found.  Don't forget to sort the
 * flags so they are in the correct order in the bucket.
 */
const q = [];

q.push(document);

while (q.length) {
  const next = q.pop();

  Array.from(next.children).map(el => {
    if (el.innerText.match(/flag #/i)) {
      if (el.children.length) {
        q.push(el);
      } else {
        console.log("match found:", el, el.innerText);
      }
    }
  });
}
