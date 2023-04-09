# Custom Data-Include

The custom data-include attribute allows you to include HTML content from external files directly into your HTML page using JavaScript. This approach is useful for including reusable components, such as headers and footers, without the need for server-side processing or JavaScript frameworks.

Usage

1. Add any html element to your HTML file with the `data-include` attribute, specifying the path to the external HTML file you want to include:

```html
<header data-include="header.partial.html"></header>
<div data-include="content.partial.html"></div>
<footer data-include="footer.partial.html"></footer>
```

2. Add "html-data-include.js" to your JavaScript files and add it to your HTML file to load and insert the external HTML content:

```html
<script src="js/html-data-include.js"></script>
```

3. The external HTML content will be fetched and inserted into the page, replacing the whole html element with the content of file from `data-include` attribute.

### Example

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>HTML Data Include Sample</title>
</head>

<body>
    <header data-include="header.partial.html"></header>

    <script src="./html-data.include.js"></script>
</body>

</html>
```

Contents of `header.partial.html`:

```html
<header>
    <h1>This is header</h1>
</header>
```

How webpage will be presented in the browser:

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>HTML Data Include Sample</title>
</head>

<body>
    <header>
        <h1>This is header</h1>
    </header>

    <script src="./html-data.include.js"></script>
</body>

</html>
```

## Limitations

The custom data-include attribute relies on the Fetch API to fetch the external HTML content. This means that it requires a web server to work, and it won't work if you're opening your HTML file directly in the browser (e.g., using the file:/// protocol). You need to serve the files through a local or remote web server.

This solution is also subject to the browser's same-origin policy, which means that the external HTML files must be served from the same domain and protocol as the main HTML file, unless CORS headers are properly configured on the server.

## License
This project is released under the MIT License. See the LICENSE file for more details.

Copyright by Vyacheslav Koldovskyy, Programming Mentor
https://programmingmentor.com
https://github.com/programmingmentor

