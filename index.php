<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>ATC Simulator</title>
    <link rel="stylesheet" href="css/index.css">
</head>

<body>
    <canvas></canvas>
    <aside>
        <div id="strips"></div>
        <div id="console">
            <ul id="incoming"></ul>
            <input type="text" id="cmd" placeholder="...">
        </div>
    </aside>
    <script src="js/models/Runway.js"></script>
    <script src="js/models/Airport.js"></script>

    <script src="js/models/Aircraft.js"></script>

    <script src="js/engine.js"></script>
    <script>
        let canvas, ctx;
        let airport, aircraft;

        let ticker;

        window.onload = () => {
            canvas = document.getElementsByTagName('canvas')[0];
            ctx = canvas.getContext("2d");

            sizeCanvas();

            window.onresize = () => {
                sizeCanvas();
            }

            airport = new Airport();
            aircraft = [];
            aircraft.push(new Aircraft("cessna"));

            console.log(aircraft);

            start(1000);
        }

        function sizeCanvas() {
            canvas.style.width = '100%';
            canvas.style.height = '100%';

            canvas.width = canvas.offsetWidth;
            canvas.height = canvas.offestHeight;
        }
    </script>
</body>

</html>