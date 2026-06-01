var pcrfvgit_widget_setup = function() {};

(function() {

var widget_class = "pcrfvgit_alert_widget";
var check_url = "https://pianiemergenza.protezionecivile.fvg.it/api/alerts.jsonp";
var widget_url = "https://pianiemergenza.protezionecivile.fvg.it/api/alerts.html";
var widget_min_height = '170px';

function check_alerts(parms) {

	var widgets = find_widgets();
	if( widgets.length == 0 ) {
		if( console && console.error ) console.error( 'No widgets found in document' );
		return;
	}

	parms = parms || {};
	var alerts = parms.alerts || [];
	var tk = parms.target;

	for( var i=0; i<widgets.length; i++ ) {
		var widget = widgets[i];

		var data = get_widget_data( widget );
		
		if( data.tk != tk )
			continue;

		var alert = null;
		for( var j=0; j<alerts.length; j++ ) {
			var a = alerts[j];
			if( !alert )
				alert = a;
			else {
				if( alert.level < a.level )
					alert = a;
			}
		}

		if( !alert || alert.level == 0 ) {
			widget.innerHTML = '';

			var noAlert = document.createElement('h1');
			noAlert.style.display = 'flex';
			noAlert.style.justifyContent = 'center';
			noAlert.style.alignItems = 'center';
			noAlert.style.textAlign = 'center';
			noAlert.textContent = 'Nessuna allerta meteo in corso';

			widget.appendChild(noAlert);
			widget.style.display = 'block';
			return;
		}

		var alcolor = alert.level == 1 ? 'gialla' :
			alert.level == 2 ? 'arancio' :
			alert.level == 3 ? 'rossa' :
			alert.level == 4 ? 'nera' : null
		;

		var iframe = (widget.children.length > 0 ? widget.children.item(widget.children.length-1) : null );
		if( !(iframe && iframe.tagName.toLowerCase() == 'iframe') ) {
			iframe = document.createElement( "iframe" );
			iframe.style.display = 'none';
			iframe.style.border = 'none';
			iframe.style.width = '100%';
			iframe.style['min-height'] = widget_min_height;
			if( alcolor )
				iframe.title = 'allerta meteo ' + alcolor;
			widget.appendChild(iframe);
		}

		var url = widget_url;
		var parms = [];
		if( data.istat ) parms.push( "istat=" + data.istat );
		if( data.test ) parms.push( "test=" + ( data.test_level == null ? 2 : data.test_level ) );
		if( parms.length > 0 ) url += '?' + encodeURI( parms.join('&') );

		iframe.style.display = 'block';
		widget.style.display = 'block';
		widget.style['min-height'] = widget_min_height;
		iframe.src = url;

		break;
	}	
}

function getElementsByClassNameShim(classNames) {
    var indexOf = [].indexOf || function(prop) {
        for (var i = 0; i < this.length; i++) {
            if (this[i] === prop) return i;
        }
        return -1;
    };

    getElementsByClassName = function(className, context) {
        var elems = document.querySelectorAll ? context.querySelectorAll("." + className) : (function() {
            var all = context.getElementsByTagName("*"),
                elements = [],
                i = 0;
            for (; i < all.length; i++) {
                if (all[i].className && (" " + all[i].className + " ").indexOf(" " + className + " ") > -1 && indexOf.call(elements, all[i]) === -1) elements.push(all[i]);
            }
            return elements;
        })();
        return elems;
    };
    document.getElementsByClassName = function(className) {
        return getElementsByClassName(className, document);
    };

    if(Element) {
        Element.prototype.getElementsByClassName = function(className) {
            return getElementsByClassName(className, this);
        };
    }
}
  
function find_widgets() {
	var items = null;
	if( document.getElementsByClassName ) {
		items = document.getElementsByClassName( widget_class );
	}
	else if( document.querySelectorAll ) {
		items = document.querySelectorAll( '.' + widget_class );
	}
	else {
		var all = document.getElementsByTagName("*");
		items = [];
		var i = 0;
		for(; i < all.length; i++) {
			var cn = all[i].className;
			if( !cn ) continue;
				
			var cc = cn.split(' ');
			for( var j=0; j<cc.length; j++ ) {
				if( cc[j] == widget_class )
					items.push( all[i] );
			}
		}
	}
	return items || [];
}

function tokenize( ix ) {
	var tk = ix || 0;
	if( tk < 10 ) return '00' + tk;
	if( tk < 100 ) return '0' + tk;
	return '' +tk;
}

function wait_widgets() {
	var widgets = find_widgets();
	if( !widgets.length ) {
		window.setTimeout( wait_widgets, 500 );
		return;
	}

	for( var i=0; i < widgets.length; i++ ) {
		var w = widgets[i];

		w.setAttribute( 'data-tk', tokenize( i + 1 ) );
		get_alerts_for(w);
	}
}

function get_widget_data( widget ) {
	var data = {};
	var istat = parseInt( widget.getAttribute('data-istatcode') );
	if( !isNaN( istat ) ) {
		data.istat = istat;
	}

	var test = widget.getAttribute('data-test');
	if( test == 'yes' ) {
		data.test = true;

		var level = parseInt( widget.getAttribute('data-testlevel') );
		if( !isNaN( level ) && level >= 0 && level < 4 ) {
			data.test_level = level;
		}
	}

	data.tk = widget.getAttribute('data-tk');

	return data;
}

function get_alerts_for( widget ) {
	var url = check_url;
	var parms = [];

	var data = get_widget_data( widget );
	
	if( data.istat )	parms.push('istat='+data.istat);
	if( data.test )		parms.push('test=' + (data.test_level == null ? 'yes' : data.test_level) );
	if( data.tk )		parms.push('tk=' + data.tk );

	parms.push('callback=pcrfvgit_widget_setup');

	url = encodeURI( url + '?' + parms.join('&') );

	var s = document.createElement('script');
	s.type = 'application/javascript';
	s.src = url;
	document.body.appendChild( s );
}

pcrfvgit_widget_setup = check_alerts;
wait_widgets();

})();