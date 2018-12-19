<!DOCTYPE html>
<html lang="en" dir="ltr">
    <head>
        <meta charset="utf-8">
        <title></title>
        {{-- <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.2.3/css/bulma.css"> --}}
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css"
              integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO"
              crossorigin="anonymous">
        <style media="screen">
            body {
                padding: 40px 20px;
            }
        </style>
    </head>

    <body>
        <div id="app" class="container">
            <list>
                <template slot="table-title"> <h1>These are my Projects</h1> </template>
            </list>

            <create></create>
        </div>

        <script src="{{ url('js/vendor.js') }}"></script>
        <script src="{{ url('js/app.js') }}"></script>
    </body>
</html>
