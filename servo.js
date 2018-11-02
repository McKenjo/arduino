var five = require('johnny-five');
var board = new five.Board();


board.on('ready', function() {
    var servo = five.Servo(12);
    this.repl.inject({servo});
    servo.sweep();
    // servo.center();
    // servo.max();
    // servo.min();
    // servo.center();
    // servo.step(20);
    // for (var i = 0; i < 10; i++) {
    //     servo.sweep();
    // }
});