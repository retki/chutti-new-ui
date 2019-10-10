/* To avoid CSS expressions while still supporting IE 7 and IE 6, use this script */
/* The script tag referencing this file must be placed before the ending body tag. */

/* Use conditional comments in order to target IE 7 and older:
	<!--[if lt IE 8]><!-->
	<script src="ie7/ie7.js"></script>
	<!--<![endif]-->
*/

(function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'chutti\'">' + entity + '</span>' + html;
	}
	var icons = {
		'icon_dashboard': '&#xe100;',
		'icon_leave': '&#xe101;',
		'icon_attendance': '&#xe102;',
		'icon_timesheet': '&#xe103;',
		'icon_attendance1': '&#xe104;',
		'icon_support': '&#xe105;',
		'icon_quick_apply': '&#xe106;',
		'icon_leave_bank': '&#xe107;',
		'icon_collapse': '&#xe108;',
		'icon_expand': '&#xe109;',
		'icon_filter': '&#xe10a;',
		'icon_date_picker': '&#xe10b;',
		'icon_arrow_thick_left': '&#xe10c;',
		'icon_arrow_thick_right': '&#xe10d;',
		'icon_arrow_thin_left': '&#xe10e;',
		'icon_arrow_thin_right': '&#xe10f;',
		'icon_hold': '&#xe110;',
		'icon_cancel': '&#xe111;',
		'icon_tick': '&#xe112;',
		'icon_lock': '&#xe113;',
		'icon_edit_outline': '&#xe114;',
		'icon_edit_filled': '&#xe115;',
		'icon_delete_filled': '&#xe116;',
		'icon_search': '&#xe117;',
		'icon_notifications': '&#xe118;',
		'icon_time': '&#xe119;',
		'icon_date_time': '&#xe11a;',
		'icon_probation': '&#xe11b;',
		'icon_confirmed': '&#xe11c;',
		'icon_holidays': '&#xe11d;',
		'icon_priority_urgent': '&#xe11e;',
		'icon_arrow_up': '&#xe11f;',
		'icon_arrow_down': '&#xe120;',
		'icon_show_password': '&#xe121;',
		'icon_hide_password': '&#xe122;',
		'icon_name': '&#xe123;',
		'icon_organisation': '&#xe124;',
		'icon_phone': '&#xe125;',
		'icon_email': '&#xe126;',
		'icon_password': '&#xe127;',
		'icon_add': '&#xe128;',
		'icon_sign_out': '&#xe129;',
		'icon_profile': '&#xe12a;',
		'icon_warning': '&#xe12b;',
		'icon_camera': '&#xe12c;',
		'0': 0
		},
		els = document.getElementsByTagName('*'),
		i, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		c = el.className;
		c = c.match(/icon_[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
}());
