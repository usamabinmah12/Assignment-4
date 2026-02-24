1. What is the difference between getElementById, getElementsByClassName, and querySelector /
querySelectorAll?
        getElementById selects one element using its unique id and returns a single element.
        getElementsByClassName selects all elements with a specific class name and returns an
        HTMLCollection.
        querySelector selects the first matching element using CSS selectors.
        querySelectorAll selects all matching elements using CSS selectors and returns a NodeList.


2. How do you create and insert a new element into the DOM?
        To create and insert a new element, first use document.createElement() to create the element.
        Then add content using innerText or innerHTML.
        Finally, insert it into the DOM using appendChild() or append().


3. What is Event Bubbling? And how does it work?
        Event bubbling is a process where an event starts from the target element and then propagates
        upward to its parent elements in the DOM.
        For example, if a button inside a div is clicked, the click event first runs on the button and then
        moves up to the div and other ancestor elements.


4. What is Event Delegation in JavaScript? Why is it useful?
        Event delegation is a technique where a single event listener is added to a parent element to
        handle events for its child elements.
        It is useful because it improves performance, reduces memory usage, and works well with
        dynamically added elements.


5. What is the difference between preventDefault() and stopPropagation() methods?
        preventDefault() stops the browser’s default behavior, such as preventing a form from submitting or
        a link from navigating.
        stopPropagation() stops the event from bubbling up to parent elements in the DOM.
