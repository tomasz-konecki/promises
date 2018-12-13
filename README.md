# promises

promises

A promise is an object that represents an action that hasn't finished yet,
but will do at some point down the line.
It's essentially just a placeholder for the result of some kind of asynchronous
operation (like a HTTP request).

For example:
We make a HTTP request for some data. As soon as that asynchronous request is made,
it returns a promise object straight away, before the data is retrieved and brought
back to us.
Within that promise object we can register callbacks, which will run when the request
completes.
