<html>
    <head>
        <script>
            function add()
            {
                var num1,num2,sum;
                num1=parseInt(document.getElemenbyID("firstnumber").value);
                num2=parseInt(document.getElemenbyID("secondnumber").value);
                sum=num+num2;
                document.getElemenbyID("answer").value=sum;
            }
        </script>
    </head>
    <body>
        <p>First Number : <input id="firstnumber"></input></p>
        <p>Second Number : <input id="secondnumber"></input></p>
        <button onclick="add()">add them</button>
        <p>Sum=<input id="answer"></input></p>
    </body>
</html>