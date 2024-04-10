<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Click Me!</title>
</head>
<body>
  <button id="myButton">Click Me</button>
  <p id="message"></p>

  <script>
    const button = document.getElementById('myButton');
    const message = document.getElementById('message');

    button.addEventListener('click', () => {
      message.textContent = 'You clicked the button!';
    });
  </script>
</body>
</html>
