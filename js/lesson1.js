var lesson1 = {
    foo: function () {
        var test = {
            test: '',
            test2: ''
        }
        alert('Good job! Problem solved!');
    },

    bar: function () {
    },

    triggerRuntimeError: function () {
        var o = new Object;
        o.f = Boolean.prototype.toString;
        o.f();
    },

    triggerLogicalError: function (a, b) {
        alert('The sum of 4 and 3 when added is ' + a / b);
    },

    moveBall: function () {
        //select ball
        var options = helperFunctions.getOptionsForMovingBall();

        $(".ball").animate(options, 2000, function () {
            //after 2s, continue animating
            $(".ball").animate({
                //return it to original state
                "top": 0,
                "left": 0
                //finally after animation are done, we prompt it with our message!
            }, helperFunctions.ballMovedDone());
        });
    }
};

document.getElementById('runTimeErrorWarningHeader').hidden = true;

var helperFunctions = {
    getOptionsForMovingBall: function () {
        return {
            "left": 400
        }
    },

    ballMovedDone: function () {
        alert('Good job!');
    }
}