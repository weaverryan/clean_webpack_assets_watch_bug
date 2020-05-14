# Bug Reproducer with CleanWebpackPlugin

This reproduces a bug where, on watch, CleanWebpackPlugin mistakenly deletes
a file it should not.

* yarn install
* yarn watch

Notice that there IS a `build/images/logo.f880ba14.png` file.

Now, modify the `app.js` file. In the terminal, you'll see that
only 3 files were output and the `build/images/logo.f880ba14.png` was
just deleted. That's a mistake. If you modify the `app.css` file
(the file that references the image), it will suddenly be output again.
