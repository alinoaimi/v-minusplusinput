
# Vue Minus Plus Input
A number input with plus and minus buttons, as a Vue component.

![enter image description here](https://raw.githubusercontent.com/el7r/v-minusplusinput/master/media/demo.jpg)

demo:  [https://el7r.github.io/v-minusplusinput/example.html](https://el7r.github.io/v-minusplusinput/example.html)


# Basic Example

    <html>
        <head>
            <script src="https://cdn.jsdelivr.net/npm/vue@2.5.16/dist/vue.js"></script>
            <script src="dist/js/v-minusplusfield.js" type="text/javascript"></script>
            <link href="dist/css/v-minusplusfield.css" rel="stylesheet" />
        </head>
    
        <body>
            <div id="app">
                <v-minusplusfield :value="50" :min="5" :max="55"></v-minusplusfield>
            </div>
        </body>
        <script>
        var app = new Vue({
        el: '#app',
            data: {
                message: 'Hello Vue!'
            }
        })
        </script>
    </html>

options:
|option| description |
|--|--|
| :min | minimum value |
| :min | minimum value value |
| :value | the value, may be used with :bind v-bind:value="someVariable" |
