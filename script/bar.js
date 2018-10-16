
      $(document).ready(function(){
//   html
    var options = {
    value: 0.80,
    size: 120,
    startAngle: -Math.PI,
    startColor: '#f05053',
    endColor: '#f4a47c',
    animation: {
        duration: 1200,
        easing: 'circleProgressEase'
    }
};

$.easing.circleProgressEase = function(x, t, b, c, d) {
    if ((t /= d / 2) < 1)
        return c / 2 * t * t * t + b;
    return c / 2 * ((t -= 2) * t * t + 2) + b;
};

var s = options.size,  // square size
    v = options.value, // current value: from 0.0 to 1.0
    r = s / 2,         // radius
    t = s / 14;        // thickness

// Prepare canvas
var canvas = $('#canvas')[0];

canvas.width = s;
canvas.height = s;
var ctx = canvas.getContext('2d');
var lg = ctx.createLinearGradient(0, 0, s, 0);
lg.addColorStop(0, options.startColor);
lg.addColorStop(1, options.endColor);
ctx.fillStyle = "rgba(0, 0, 0, .1)";

// Draw circle
if (options.animation)
    _drawAnimated(v);
else
    _draw(v);

$('.number').click(function() {
    if (options.animation)
        _drawAnimated(v);
    else
        _draw(v);
});

function _draw(p) {
    // Clear frame
    ctx.clearRect(0, 0, s, s);

    // Draw background circle
    ctx.beginPath();
    ctx.arc(r, r, r, -Math.PI, Math.PI);
    ctx.arc(r, r, r - t, Math.PI, -Math.PI, true);
    ctx.closePath();
    ctx.fill(); // gray fill

    // Draw progress arc
    ctx.beginPath();
    ctx.arc(r, r, r, -Math.PI, -Math.PI + Math.PI * 2 * p);
    ctx.arc(r, r, r - t, -Math.PI + Math.PI * 2 * p, -Math.PI, true);
    ctx.closePath();
    ctx.save();
    ctx.clip();
    ctx.fillStyle = lg;
    ctx.fillRect(0, 0, s, s); // gradient fill
    ctx.restore();
}

function _drawAnimated(v) {
  $(canvas).stop(true, true).css({ value: 0 }).animate({ value: v }, $.extend({}, options.animation, {
        step: function(p) {
            _draw(p);
            $(canvas).trigger('circle-animation-progress', [p / v, p]);
        },

        complete: function() {
            $(canvas).trigger('circle-animation-end');
        }
    }));
}

// now let's animate numbers
var valEl = $('.value');
valEl.data('origVal', valEl.text());
$(canvas).on('circle-animation-progress', function(e, progress) {
  valEl.text(parseInt(valEl.data('origVal') * progress))
});


  });
    
  $(document).ready(function(){
// css
var options = {
    value1: 0.70,
    size: 120,
    startAngle: -Math.PI,
    startColor: '#f05053',
    endColor: '#f4a47c',
    animation: {
        duration: 1200,
        easing: 'circleProgressEase'
    }
};

$.easing.circleProgressEase = function(x, t, b, c, d) {
    if ((t /= d / 2) < 1)
        return c / 2 * t * t * t + b;
    return c / 2 * ((t -= 2) * t * t + 2) + b;
};

var s = options.size,  // square size
    v1 = options.value1, // current value: from 0.0 to 1.0
    r = s / 2,         // radius
    t = s / 14;        // thickness

// Prepare canvas
var canvas = $('#canvas1')[0];

canvas.width = s;
canvas.height = s;
var ctx = canvas.getContext('2d');
var lg = ctx.createLinearGradient(0, 0, s, 0);
lg.addColorStop(0, options.startColor);
lg.addColorStop(1, options.endColor);
ctx.fillStyle = "rgba(0, 0, 0, .1)";

// Draw circle
if (options.animation)
    _drawAnimated(v1);
else
    _draw(v1);

$('.number1').click(function() {
    if (options.animation)
        _drawAnimated(v1);
    else
        _draw(v1);
});

function _draw(p) {
    // Clear frame
    ctx.clearRect(0, 0, s, s);

    // Draw background circle
    ctx.beginPath();
    ctx.arc(r, r, r, -Math.PI, Math.PI);
    ctx.arc(r, r, r - t, Math.PI, -Math.PI, true);
    ctx.closePath();
    ctx.fill(); // gray fill

    // Draw progress arc
    ctx.beginPath();
    ctx.arc(r, r, r, -Math.PI, -Math.PI + Math.PI * 2 * p);
    ctx.arc(r, r, r - t, -Math.PI + Math.PI * 2 * p, -Math.PI, true);
    ctx.closePath();
    ctx.save();
    ctx.clip();
    ctx.fillStyle = lg;
    ctx.fillRect(0, 0, s, s); // gradient fill
    ctx.restore();
}

function _drawAnimated(v1) {
  $(canvas).stop(true, true).css({ value: 0 }).animate({ value: v1 }, $.extend({}, options.animation, {
        step: function(p) {
            _draw(p);
            $(canvas).trigger('circle-animation-progress', [p / v1, p]);
        },

        complete: function() {
            $(canvas).trigger('circle-animation-end');
        }
    }));
}

// now let's animate numbers
var valEl = $('.value1');
valEl.data('origVal', valEl.text());
$(canvas).on('circle-animation-progress', function(e, progress) {
  valEl.text(parseInt(valEl.data('origVal') * progress))
});
  });

//   javascript

$(document).ready(function(){
    var options = {
        value1: 0.40,
        size: 120,
        startAngle: -Math.PI,
        startColor: '#f05053',
        endColor: '#f4a47c',
        animation: {
            duration: 1200,
            easing: 'circleProgressEase'
        }
    };
    
    $.easing.circleProgressEase = function(x, t, b, c, d) {
        if ((t /= d / 2) < 1)
            return c / 2 * t * t * t + b;
        return c / 2 * ((t -= 2) * t * t + 2) + b;
    };
    
    var s = options.size,  // square size
        v1 = options.value1, // current value: from 0.0 to 1.0
        r = s / 2,         // radius
        t = s / 14;        // thickness
    
    // Prepare canvas
    var canvas = $('#canvas2')[0];
    
    canvas.width = s;
    canvas.height = s;
    var ctx = canvas.getContext('2d');
    var lg = ctx.createLinearGradient(0, 0, s, 0);
    lg.addColorStop(0, options.startColor);
    lg.addColorStop(1, options.endColor);
    ctx.fillStyle = "rgba(0, 0, 0, .1)";
    
    // Draw circle
    if (options.animation)
        _drawAnimated(v1);
    else
        _draw(v1);
    
    $('.number2').click(function() {
        if (options.animation)
            _drawAnimated(v1);
        else
            _draw(v1);
    });
    
    function _draw(p) {
        // Clear frame
        ctx.clearRect(0, 0, s, s);
    
        // Draw background circle
        ctx.beginPath();
        ctx.arc(r, r, r, -Math.PI, Math.PI);
        ctx.arc(r, r, r - t, Math.PI, -Math.PI, true);
        ctx.closePath();
        ctx.fill(); // gray fill
    
        // Draw progress arc
        ctx.beginPath();
        ctx.arc(r, r, r, -Math.PI, -Math.PI + Math.PI * 2 * p);
        ctx.arc(r, r, r - t, -Math.PI + Math.PI * 2 * p, -Math.PI, true);
        ctx.closePath();
        ctx.save();
        ctx.clip();
        ctx.fillStyle = lg;
        ctx.fillRect(0, 0, s, s); // gradient fill
        ctx.restore();
    }
    
    function _drawAnimated(v1) {
      $(canvas).stop(true, true).css({ value: 0 }).animate({ value: v1 }, $.extend({}, options.animation, {
            step: function(p) {
                _draw(p);
                $(canvas).trigger('circle-animation-progress', [p / v1, p]);
            },
    
            complete: function() {
                $(canvas).trigger('circle-animation-end');
            }
        }));
    }
    
    // now let's animate numbers
    var valEl = $('.value2');
    valEl.data('origVal', valEl.text());
    $(canvas).on('circle-animation-progress', function(e, progress) {
      valEl.text(parseInt(valEl.data('origVal') * progress))
    });
      });

//   bootstrap    

$(document).ready(function(){
    var options = {
        value1: 0.60,
        size: 120,
        startAngle: -Math.PI,
        startColor: '#f05053',
        endColor: '#f4a47c',
        animation: {
            duration: 1200,
            easing: 'circleProgressEase'
        }
    };
    
    $.easing.circleProgressEase = function(x, t, b, c, d) {
        if ((t /= d / 2) < 1)
            return c / 2 * t * t * t + b;
        return c / 2 * ((t -= 2) * t * t + 2) + b;
    };
    
    var s = options.size,  // square size
        v3 = options.value1, // current value: from 0.0 to 1.0
        r = s / 2,         // radius
        t = s / 14;        // thickness
    
    // Prepare canvas
    var canvas = $('#canvas3')[0];
    
    canvas.width = s;
    canvas.height = s;
    var ctx = canvas.getContext('2d');
    var lg = ctx.createLinearGradient(0, 0, s, 0);
    lg.addColorStop(0, options.startColor);
    lg.addColorStop(1, options.endColor);
    ctx.fillStyle = "rgba(0, 0, 0, .1)";
    
    // Draw circle
    if (options.animation)
        _drawAnimated(v3);
    else
        _draw(v3);
    
    $('.number3').click(function() {
        if (options.animation)
            _drawAnimated(v3);
        else
            _draw(v3);
    });
    
    function _draw(p) {
        // Clear frame
        ctx.clearRect(0, 0, s, s);
    
        // Draw background circle
        ctx.beginPath();
        ctx.arc(r, r, r, -Math.PI, Math.PI);
        ctx.arc(r, r, r - t, Math.PI, -Math.PI, true);
        ctx.closePath();
        ctx.fill(); // gray fill
    
        // Draw progress arc
        ctx.beginPath();
        ctx.arc(r, r, r, -Math.PI, -Math.PI + Math.PI * 2 * p);
        ctx.arc(r, r, r - t, -Math.PI + Math.PI * 2 * p, -Math.PI, true);
        ctx.closePath();
        ctx.save();
        ctx.clip();
        ctx.fillStyle = lg;
        ctx.fillRect(0, 0, s, s); // gradient fill
        ctx.restore();
    }
    
    function _drawAnimated(v3) {
      $(canvas).stop(true, true).css({ value: 0 }).animate({ value: v3 }, $.extend({}, options.animation, {
            step: function(p) {
                _draw(p);
                $(canvas).trigger('circle-animation-progress', [p / v3, p]);
            },
    
            complete: function() {
                $(canvas).trigger('circle-animation-end');
            }
        }));
    }
    
    // now let's animate numbers
    var valEl = $('.value3');
    valEl.data('origVal', valEl.text());
    $(canvas).on('circle-animation-progress', function(e, progress) {
      valEl.text(parseInt(valEl.data('origVal') * progress))
    });
      });

//  Angular     
$(document).ready(function(){
    var options = {
        value1: 0.40,
        size: 120,
        startAngle: -Math.PI,
        startColor: '#f05053',
        endColor: '#f4a47c',
        animation: {
            duration: 1200,
            easing: 'circleProgressEase'
        }
    };
    
    $.easing.circleProgressEase = function(x, t, b, c, d) {
        if ((t /= d / 2) < 1)
            return c / 2 * t * t * t + b;
        return c / 2 * ((t -= 2) * t * t + 2) + b;
    };
    
    var s = options.size,  // square size
        v4 = options.value1, // current value: from 0.0 to 1.0
        r = s / 2,         // radius
        t = s / 14;        // thickness
    
    // Prepare canvas
    var canvas = $('#canvas4')[0];
    
    canvas.width = s;
    canvas.height = s;
    var ctx = canvas.getContext('2d');
    var lg = ctx.createLinearGradient(0, 0, s, 0);
    lg.addColorStop(0, options.startColor);
    lg.addColorStop(1, options.endColor);
    ctx.fillStyle = "rgba(0, 0, 0, .1)";
    
    // Draw circle
    if (options.animation)
        _drawAnimated(v4);
    else
        _draw(v4);
    
    $('.number4').click(function() {
        if (options.animation)
            _drawAnimated(v4);
        else
            _draw(v4);
    });
    
    function _draw(p) {
        // Clear frame
        ctx.clearRect(0, 0, s, s);
    
        // Draw background circle
        ctx.beginPath();
        ctx.arc(r, r, r, -Math.PI, Math.PI);
        ctx.arc(r, r, r - t, Math.PI, -Math.PI, true);
        ctx.closePath();
        ctx.fill(); // gray fill
    
        // Draw progress arc
        ctx.beginPath();
        ctx.arc(r, r, r, -Math.PI, -Math.PI + Math.PI * 2 * p);
        ctx.arc(r, r, r - t, -Math.PI + Math.PI * 2 * p, -Math.PI, true);
        ctx.closePath();
        ctx.save();
        ctx.clip();
        ctx.fillStyle = lg;
        ctx.fillRect(0, 0, s, s); // gradient fill
        ctx.restore();
    }
    
    function _drawAnimated(v4) {
      $(canvas).stop(true, true).css({ value: 0 }).animate({ value: v4 }, $.extend({}, options.animation, {
            step: function(p) {
                _draw(p);
                $(canvas).trigger('circle-animation-progress', [p / v4, p]);
            },
    
            complete: function() {
                $(canvas).trigger('circle-animation-end');
            }
        }));
    }
    
    // now let's animate numbers
    var valEl = $('.value4');
    valEl.data('origVal', valEl.text());
    $(canvas).on('circle-animation-progress', function(e, progress) {
      valEl.text(parseInt(valEl.data('origVal') * progress))
    });
      });

//  python  
$(document).ready(function(){
    var options = {
        value1: 0.50,
        size: 120,
        startAngle: -Math.PI,
        startColor: '#f05053',
        endColor: '#f4a47c',
        animation: {
            duration: 1200,
            easing: 'circleProgressEase'
        }
    };
    
    $.easing.circleProgressEase = function(x, t, b, c, d) {
        if ((t /= d / 2) < 1)
            return c / 2 * t * t * t + b;
        return c / 2 * ((t -= 2) * t * t + 2) + b;
    };
    
    var s = options.size,  // square size
        v1 = options.value1, // current value: from 0.0 to 1.0
        r = s / 2,         // radius
        t = s / 14;        // thickness
    
    // Prepare canvas
    var canvas = $('#canvas5')[0];
    
    canvas.width = s;
    canvas.height = s;
    var ctx = canvas.getContext('2d');
    var lg = ctx.createLinearGradient(0, 0, s, 0);
    lg.addColorStop(0, options.startColor);
    lg.addColorStop(1, options.endColor);
    ctx.fillStyle = "rgba(0, 0, 0, .1)";
    
    // Draw circle
    if (options.animation)
        _drawAnimated(v1);
    else
        _draw(v1);
    
    $('.number5').click(function() {
        if (options.animation)
            _drawAnimated(v1);
        else
            _draw(v1);
    });
    
    function _draw(p) {
        // Clear frame
        ctx.clearRect(0, 0, s, s);
    
        // Draw background circle
        ctx.beginPath();
        ctx.arc(r, r, r, -Math.PI, Math.PI);
        ctx.arc(r, r, r - t, Math.PI, -Math.PI, true);
        ctx.closePath();
        ctx.fill(); // gray fill
    
        // Draw progress arc
        ctx.beginPath();
        ctx.arc(r, r, r, -Math.PI, -Math.PI + Math.PI * 2 * p);
        ctx.arc(r, r, r - t, -Math.PI + Math.PI * 2 * p, -Math.PI, true);
        ctx.closePath();
        ctx.save();
        ctx.clip();
        ctx.fillStyle = lg;
        ctx.fillRect(0, 0, s, s); // gradient fill
        ctx.restore();
    }
    
    function _drawAnimated(v1) {
      $(canvas).stop(true, true).css({ value: 0 }).animate({ value: v1 }, $.extend({}, options.animation, {
            step: function(p) {
                _draw(p);
                $(canvas).trigger('circle-animation-progress', [p / v1, p]);
            },
    
            complete: function() {
                $(canvas).trigger('circle-animation-end');
            }
        }));
    }
    
    // now let's animate numbers
    var valEl = $('.value5');
    valEl.data('origVal', valEl.text());
    $(canvas).on('circle-animation-progress', function(e, progress) {
      valEl.text(parseInt(valEl.data('origVal') * progress))
    });
      });
// machine learning

$(document).ready(function(){
    var options = {
        value1: 0.40,
        size: 120,
        startAngle: -Math.PI,
        startColor: '#f05053',
        endColor: '#f4a47c',
        animation: {
            duration: 1200,
            easing: 'circleProgressEase'
        }
    };
    
    $.easing.circleProgressEase = function(x, t, b, c, d) {
        if ((t /= d / 2) < 1)
            return c / 2 * t * t * t + b;
        return c / 2 * ((t -= 2) * t * t + 2) + b;
    };
    
    var s = options.size,  // square size
        v1 = options.value1, // current value: from 0.0 to 1.0
        r = s / 2,         // radius
        t = s / 14;        // thickness
    
    // Prepare canvas
    var canvas = $('#canvas6')[0];
    
    canvas.width = s;
    canvas.height = s;
    var ctx = canvas.getContext('2d');
    var lg = ctx.createLinearGradient(0, 0, s, 0);
    lg.addColorStop(0, options.startColor);
    lg.addColorStop(1, options.endColor);
    ctx.fillStyle = "rgba(0, 0, 0, .1)";
    
    // Draw circle
    if (options.animation)
        _drawAnimated(v1);
    else
        _draw(v1);
    
    $('.number6').click(function() {
        if (options.animation)
            _drawAnimated(v1);
        else
            _draw(v1);
    });
    
    function _draw(p) {
        // Clear frame
        ctx.clearRect(0, 0, s, s);
    
        // Draw background circle
        ctx.beginPath();
        ctx.arc(r, r, r, -Math.PI, Math.PI);
        ctx.arc(r, r, r - t, Math.PI, -Math.PI, true);
        ctx.closePath();
        ctx.fill(); // gray fill
    
        // Draw progress arc
        ctx.beginPath();
        ctx.arc(r, r, r, -Math.PI, -Math.PI + Math.PI * 2 * p);
        ctx.arc(r, r, r - t, -Math.PI + Math.PI * 2 * p, -Math.PI, true);
        ctx.closePath();
        ctx.save();
        ctx.clip();
        ctx.fillStyle = lg;
        ctx.fillRect(0, 0, s, s); // gradient fill
        ctx.restore();
    }
    
    function _drawAnimated(v1) {
      $(canvas).stop(true, true).css({ value: 0 }).animate({ value: v1 }, $.extend({}, options.animation, {
            step: function(p) {
                _draw(p);
                $(canvas).trigger('circle-animation-progress', [p / v1, p]);
            },
    
            complete: function() {
                $(canvas).trigger('circle-animation-end');
            }
        }));
    }
    
    // now let's animate numbers
    var valEl = $('.value6');
    valEl.data('origVal', valEl.text());
    $(canvas).on('circle-animation-progress', function(e, progress) {
      valEl.text(parseInt(valEl.data('origVal') * progress))
    });
      });
// Illustrator

$(document).ready(function(){
    var options = {
        value1: 0.30,
        size: 120,
        startAngle: -Math.PI,
        startColor: '#f05053',
        endColor: '#f4a47c',
        animation: {
            duration: 1200,
            easing: 'circleProgressEase'
        }
    };
    
    $.easing.circleProgressEase = function(x, t, b, c, d) {
        if ((t /= d / 2) < 1)
            return c / 2 * t * t * t + b;
        return c / 2 * ((t -= 2) * t * t + 2) + b;
    };
    
    var s = options.size,  // square size
        v1 = options.value1, // current value: from 0.0 to 1.0
        r = s / 2,         // radius
        t = s / 14;        // thickness
    
    // Prepare canvas
    var canvas = $('#canvas7')[0];
    
    canvas.width = s;
    canvas.height = s;
    var ctx = canvas.getContext('2d');
    var lg = ctx.createLinearGradient(0, 0, s, 0);
    lg.addColorStop(0, options.startColor);
    lg.addColorStop(1, options.endColor);
    ctx.fillStyle = "rgba(0, 0, 0, .1)";
    
    // Draw circle
    if (options.animation)
        _drawAnimated(v1);
    else
        _draw(v1);
    
    $('.number7').click(function() {
        if (options.animation)
            _drawAnimated(v1);
        else
            _draw(v1);
    });
    
    function _draw(p) {
        // Clear frame
        ctx.clearRect(0, 0, s, s);
    
        // Draw background circle
        ctx.beginPath();
        ctx.arc(r, r, r, -Math.PI, Math.PI);
        ctx.arc(r, r, r - t, Math.PI, -Math.PI, true);
        ctx.closePath();
        ctx.fill(); // gray fill
    
        // Draw progress arc
        ctx.beginPath();
        ctx.arc(r, r, r, -Math.PI, -Math.PI + Math.PI * 2 * p);
        ctx.arc(r, r, r - t, -Math.PI + Math.PI * 2 * p, -Math.PI, true);
        ctx.closePath();
        ctx.save();
        ctx.clip();
        ctx.fillStyle = lg;
        ctx.fillRect(0, 0, s, s); // gradient fill
        ctx.restore();
    }
    
    function _drawAnimated(v1) {
      $(canvas).stop(true, true).css({ value: 0 }).animate({ value: v1 }, $.extend({}, options.animation, {
            step: function(p) {
                _draw(p);
                $(canvas).trigger('circle-animation-progress', [p / v1, p]);
            },
    
            complete: function() {
                $(canvas).trigger('circle-animation-end');
            }
        }));
    }
    
    // now let's animate numbers
    var valEl = $('.value7');
    valEl.data('origVal', valEl.text());
    $(canvas).on('circle-animation-progress', function(e, progress) {
      valEl.text(parseInt(valEl.data('origVal') * progress))
    });
      });