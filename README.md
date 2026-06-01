```html
<!DOCTYPE html>
<html lang="de">

<head>

<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<title>Tschick – Die Reise</title>

<link rel="stylesheet" href="style.css">

<script type="importmap">
{
    "imports": {
        "three":"https://unpkg.com/three@0.160.0/build/three.module.js"
    }
}
</script>

</head>

<body>

<!-- STARTBILDSCHIRM -->

<div id="startscreen">

    <h1>TSCHICK</h1>

    <h2>Eine interaktive 3D-Reise</h2>

    <p>
        Von Tatjanas Party bis zum Ende der Sommerferien
    </p>

    <button id="startBtn">
        Reise starten
    </button>

</div>

<!-- FORTSCHRITT -->

<div id="ui">

    <div id="progressContainer">

        <div id="progressBar"></div>

    </div>

    <div id="chapterBox">

        <h2 id="chapterTitle">

            Tatjanas Party

        </h2>

        <p id="chapterText">

            Maik steht allein vor Tatjanas Haus.

        </p>

    </div>

</div>

<!-- GROSSE KAPITELANZEIGE -->

<div id="sceneTitle">

    Tatjanas Party

</div>

<!-- THREE JS -->

<canvas id="bg"></canvas>

<script type="module" src="main.js"></script>

</body>

</html>
```

