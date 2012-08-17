/* Author:
 Gene Ball   Aug 2012
 */

String.prototype.format = function() {
    var formatted = this;
    for (var i = 0; i < arguments.length; i++) {
        var regexp = new RegExp('\\{' + i + '\\}', 'gi');
        formatted = formatted.replace(regexp, arguments[i]);
    }
    return formatted;
};

var JEB = {
    panels : {
        // @formatter:off
        Portrait320 : {// 320x480 orig iPhone
            "#jeb-LoadMsg" : { position: "absolute", top : "1em",   left : "2em",  }, 
            "#jeb-Info"    : { position: "absolute", top : "3em",   left : "2em", width : 300,},
            "#jeb-Canvas"  : { position: "absolute", top : "5em" ,  left : "1em", width : 300, height: 300, },
            "#jeb-Table"   : { position: "absolute", top : "5em" ,  left : "1em", width : 300, height: 300, },
        },
        Portrait480 : {// 480x800 Galaxy II, Thunderbolt etc
            "#jeb-LoadMsg" : { position: "absolute", top : "1em",   left : "2em",  }, 
            "#jeb-Info"    : { position: "absolute", top : "3em",   left : "2em", width : 300,},
            "#jeb-Canvas"  : { position: "absolute", top : "5em" ,  left : "1em", width : 300, height: 300, },
            "#jeb-Table"   : { position: "absolute", top : "5em" ,  left : "1em", width : 300, height: 300, },
        }, 
        Portrait540 : {// 540x960 Evo, RAZR etc
            "#jeb-LoadMsg" : { position: "absolute", top : "1em",   left : "2em",  }, 
            "#jeb-Info"    : { position: "absolute", top : "3em",   left : "2em", width : 300,},
            "#jeb-Canvas"  : { position: "absolute", top : "5em" ,  left : "1em", width : 300, height: 300, },
            "#jeb-Table"   : { position: "absolute", top : "5em" ,  left : "1em", width : 300, height: 300, },
        }, 
        Portrait600 : {// 600x1024 iphone4(640x960) or Fire,Nook,Tab7 etc
            "#jeb-LoadMsg" : { position: "absolute", top : "1em",   left : "2em",  }, 
            "#jeb-Info"    : { position: "absolute", top : "3em",   left : "2em", width : 300,},
            "#jeb-Canvas"  : { position: "absolute", top : "5em" ,  left : "1em", width : 300, height: 300, },
            "#jeb-Table"   : { position: "absolute", top : "5em" ,  left : "1em", width : 300, height: 300, },
        }, 
        Portrait800 : {// 800x1280 Note, 10" tablets
            "#jeb-LoadMsg" : { position: "absolute", top : "1em",   left : "2em",  }, 
            "#jeb-Info"    : { position: "absolute", top : "3em",   left : "2em", width : 300,},
            "#jeb-Canvas"  : { position: "absolute", top : "5em" ,  left : "1em", width : 300, height: 300, },
            "#jeb-Table"   : { position: "absolute", top : "5em" ,  left : "1em", width : 300, height: 300, },
        }, 
        Portrait10000 : {// 900x1600 (laptops) & everything bigger
            "#jeb-LoadMsg" : { position: "absolute", top : "1em",   left : "2em",  }, 
            "#jeb-Info"    : { position: "absolute", top : "3em",   left : "2em", },
            "#jeb-Canvas"  : { position: "absolute", top : "5em" ,  left : "1em", width : 300, height: 300, },
            "#jeb-Table"   : { position: "absolute", top : "5em" ,  left : "1em", width : 300, height: 300, },
        }, 
        Landscape320 :{// 320x480 orig iPhone
            "#jeb-LoadMsg" : { position: "absolute", top : "1em",   left : "2em",  }, 
            "#jeb-Info"    : { position: "absolute", top : "2em",   left : "2em", width : 300,},
            "#jeb-Canvas"  : { position: "absolute", top : "3em" ,  left : "1em", width : 300, height: 300, },
            "#jeb-Table"   : { position: "absolute", top : "3em" ,  left : "10em", width : 300, height: 300, },
        }, 
        Landscape480 :{// 480x800 Galaxy II, Thunderbolt etc
            "#jeb-LoadMsg" : { position: "absolute", top : "1em",   left : "2em",  }, 
            "#jeb-Info"    : { position: "absolute", top : "2em",   left : "2em", width : 300,},
            "#jeb-Canvas"  : { position: "absolute", top : "3em" ,  left : "1em", width : 300, height: 300, },
            "#jeb-Table"   : { position: "absolute", top : "3em" ,  left : "10em", width : 300, height: 300, },
        },
        Landscape540 :{// 540x960 Evo, RAZR etc
            "#jeb-LoadMsg" : { position: "absolute", top : "1em",   left : "2em",  }, 
            "#jeb-Info"    : { position: "absolute", top : "2em",   left : "2em", width : 300,},
            "#jeb-Canvas"  : { position: "absolute", top : "3em" ,  left : "1em", width : 300, height: 300, },
            "#jeb-Table"   : { position: "absolute", top : "3em" ,  left : "10em", width : 300, height: 300, },
        }, 
        Landscape600 : {// 600x1024 iphone4(640x960) or Fire,Nook,Tab7 etc
            "#jeb-LoadMsg" : { position: "absolute", top : "1em",   left : "2em",  }, 
            "#jeb-Info"    : { position: "absolute", top : "2em",   left : "2em", width : 300,},
            "#jeb-Canvas"  : { position: "absolute", top : "3em" ,  left : "1em", width : 300, height: 300, },
            "#jeb-Table"   : { position: "absolute", top : "3em" ,  left : "10em", width : 300, height: 300, },
        }, 
        Landscape800 :{// 800x1280 Note, 10" tablets
            "#jeb-LoadMsg" : { position: "absolute", top : "1em",   left : "2em",  }, 
            "#jeb-Info"    : { position: "absolute", top : "2em",   left : "2em", width : 300,},
            "#jeb-Canvas"  : { position: "absolute", top : "3em" ,  left : "1em", width : 300, height: 300, },
            "#jeb-Table"   : { position: "absolute", top : "3em" ,  left : "10em", width : 300, height: 300, },
        },
        Landscape10000 :{// 900x1600 (laptops) & everything bigger
            "#jeb-LoadMsg" : { position: "absolute", top : "1em",   left : "2em",  }, 
            "#jeb-Info"    : { position: "absolute", top : "2em",   left : "2em", width : 300,},
            "#jeb-Canvas"  : { position: "absolute", top : "3em" ,  left : "1em", width : 300, height: 300, },
            "#jeb-Table"   : { position: "absolute", top : "3em" ,  left : "10em", width : 600, height: 500, 'font-size': '130%' },
        },
        // @formatter:on
    },
    placePanels : function() {
        var devw = window.screen.width;
        var devh = window.screen.height;
        User.Screen = devw + 'x' + devh;

        var avw = window.screen.availWidth;
        var avh = window.screen.availHeight;
        User.AvailScreen = avw + 'x' + avh;

        var ow = window.outerWidth;
        var oh = window.outerHeight;
        User.Outer = ow + 'x' + oh;

        var w = window.innerWidth;
        var h = window.innerHeight;
        User.Inner = w + 'x' + h;

        var docw = document.body.clientWidth;
        var doch = document.body.clientHeight;
        User.Doc = docw + 'x' + doch;

        User.Agent = navigator.userAgent;
        User.Browser = navigator.appName;
        User.OS = navigator.platform;

        // IH = iphone header
        // AH = android notification bar
        // BA = browser address bar
        // BF = browser footer
        // HP = home page link
        // wxh = reported window.innerWidth x window.innerHeight
        // wXXh = reported window.outerWidth x window.outerHeight
        // iPhone 3G from home page: (header overlaps top line) p(320x396) l(320x396) P 320x480  L  320x214
        // iPhone 3G from Safari:  P 320x356  L 320x139    Rd 8
        // iPhone 4 from home page: (header overlaps top line) P iw=320 ih=480  L  iw=480 ih=320
        // Note/Android HP: AH+BA  P 400x537 t400  L 640x297 t304
        // Note/Dolphin HP: P 400x640 t-xtra  L 640x400  t-xtra
        // Note/Ffox HP: AH+BA P 400x567 t-xtra  L 640x327 t400 (bottom line half under footer)
        // Note/Opera HP: AH+BA+BF  P 356x393 t163 L 569x247
        // Evo/Android NAV (menu hdrs off & scrolled): P 369x615 L 615x369
        // Evo/XScope NAV (menu hdrs off): AH P 320x533 t139  L 533x320 t180

        var screen = (devh < devw) ? "Landscape" : "Portrait";
        var mindim = (devh < devw) ? devh : devw;
        var sizes = [320, 480, 540, 600, 800, 10000];
        for (var i = 0; i < sizes.length; i++) {
            if (mindim <= sizes[i]) {
                screen += sizes[i];
                break;
            }
        }
        $("#jeb-header").text("{0} {1}w x {2}h mapped to {3}w x {4}h ".format(screen, devw, devh, w, h));
        var p = this.panels[screen];
        for (var i in p)
        $(i).css(p[i]);
    },
    onTouchClick : function(sel, body) {
        $(sel).on('touchstart click', 'a', function(event) {
            event.stopPropagation();
            event.preventDefault();
            if (event.handled != true) {
                body(this, event);
                event.handled = true;
            } else {
                return false;
            }
        });
    },
    genTableHtml : function(obj) {
        var html = "<table>";
        for (var i in obj) {
            html += "<tr><td>" + i + ":</td><td>";
            if (obj[i] instanceof String)
                html += obj[i];
            else if (obj[i] instanceof Object)
                html += JEB.genTableHtml(obj[i]);
            else
                html += obj[i].toString();
            html += "</td></tr>";
        }
        return html + "</table>";
    }
}

var User = { };
var DeviceDescriptor = {
    Class : ["Where are you reading this page?", "PC", "tablet", "phone"],
    OS : {
        'PC' : ["Which PC OS?", "Windows", "MacOS", "Linux", "other"],
        'tablet' : ["Which tablet OS?", "iOS", "Android", "Kindle", "Nook", "other"],
        'phone' : ["Which phone OS?", "iOS", "Android", "WinPhone", "Blackberry", "other"]
    },
    Browser : {
        'PC' : ["Which PC browser?", "IE", "Chrome", "Safari", "Firefox", "Opera", "other"],
        'iOS' : ["Which iOS browser?", "Safari", "Chrome", "Dolphin", "Opera", "other"],
        'Android' : ["Which Android browser?", "Android", "Dolphin", "Safari", "Firefox", "Opera", "Chrome", "XScope", "other"]
    },
    Screen : {
        'PC' : ["How big is your screen?", "480x640", "768x1024", "720x1280", '1080x1920', "other"],
        'iOS' : ["How big is your screen?", "320x480", "640x960", "768x1024", "1536x2048"],
        'Android' : ["How big is your screen?", "240x320", "320x480", "480x800", "540x960", "720x1280", "768x1024", "800x1280"],
    }
};
JEB.filler = function(proto, htmlID, after) {
    JEB.currFiller = this;
    this.fProto = proto;
    this.fHtmlID = htmlID;
    this.fResult = {};
    this.fField = this.emptyIndex();
    this.after = after;
    var html = this.genHtml(this.fField);
    var id = '#' + this.fHtmlID;
    $(id).html(html);
    JEB.onTouchClick(id, function(targ, event) {
        var f = JEB.currFiller;
        f.fResult[f.fField] = $(targ).text();
        f.fField = f.emptyIndex();
        if (f.fField == null) {
            $('#' + f.fHtmlID).html(f.genTable());
            $('#' + f.fHtmlID).off('touchstart click');
            f.after(f.fResult);
        } else {
            var html = f.genHtml(f.fField);
            var id = '#' + f.fHtmlID;
            $(id).html(html);
        }
    });
};
JEB.filler.prototype = {
    emptyIndex : function() {
        for (var i in this.fProto)
        if (this.fResult[i] == undefined) {
            return i;
        }
        return null;
    },
    genHtml : function(fld) {
        var fieldChoices = this.fProto[fld];
        if ( fieldChoices instanceof Object) {
            var asJson = JSON.stringify(this.fResult);
            for (var j in fieldChoices) {
                if (asJson.indexOf(j) >= 0) {
                    fieldChoices = fieldChoices[j];
                    break;
                }
            }
        }
        var html = fieldChoices[0];
        for (var j = 1; j < fieldChoices.length; j++)
            html += "<br><a>" + fieldChoices[j] + "<a>";
        return html;
    },
    genTable : function() {
        var html = "<table>";
        for (var i in this.fResult)
        html += "<tr><td>" + i + ":</td><td>" + this.fResult[i].toString() + "</td></tr>";
        return html + "</table>";
    }
}

$(function() {
    JEB.placePanels();
    $('#jeb-Info').text(JSON.stringify(User));

    $('#jebBody').on('keypress', function(event) {
        $('#jeb-header').text('key ' + event.which);
    });
    JEB.onTouchClick('.jebLinks', function(targ, event) {
        var pgID = event.currentTarget.attributes["jebPage"].nodeValue;
        history.pushState(pgID, $('#' + pgID).attr('title'), pgID);
        $('.jebPage').toggleClass('hidden', true);
        $('#' + pgID).toggleClass('hidden', false);
    });
    JEB.onTouchClick('.jebPanels', function(targ, event) {
        var pgID = event.currentTarget.attributes["jebPanel"].nodeValue;
        $('.jebPanel').toggleClass('hidden', true);
        $('#' + pgID).toggleClass('hidden', false);
        if (pgID == 'jeb-Table') {
            JEB.devFiller = new JEB.filler(DeviceDescriptor, 'jeb-Table', function(result) {
                User.Report = JEB.devFiller.fResult;
                $('#jeb-Table').html(JEB.genTableHtml(User));
                User.Time = new Date().toDateString();
                if (window.XMLHttpRequest)
                {
                    var aj = new XMLHttpRequest();
                    aj.open("POST", "http://winenotes.biz/log/logger.asp", true);
                    aj.send(JSON.stringify(User));
                }
            });
        }
    });
    JEB.onTouchClick('.jebSetSize', function(targ, event) {
        $(targ).toggleClass('jebSel');
        var sz = parseInt($(targ).text());
        var fnt = '{0}px'.format(sz + 7);
        $('#jeb-header').text('click on ' + fnt);
        var bodycss = {
            'font-size' : fnt
        };
        $('#jebBody').css(bodycss);
    });

    $(window).resize(function() {
        JEB.placePanels();
        //       JEB.initCanvas();
    });
});
