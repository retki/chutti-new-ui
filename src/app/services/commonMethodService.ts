import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class commonService {

    getBytes(str) {
        var bytes = [];
        for (var i = 0; i < str.length; ++i) {
            bytes.push(str.charCodeAt(i));
        }
        var a = (new String(str.length)).charCodeAt(0);
        bytes = [a, ...bytes, a];
        return bytes;
    }

    reverseString(str) {
        var splitString = str.split("");
        var reverseArray = splitString.reverse();
        var joinArray = reverseArray.join("");
        var v = this.getBytes(joinArray);
        return v;
    }


  getToByTime(time: any): any {
    var date = new Date(time);
    let date1 = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    let dateFormate;
    if (date1 == 31) {
      if (month == 1 || month == 3 || month == 5 || month == 7 || month == 8 || month == 10) {
        return dateFormate = date.getFullYear() + "-" + (date.getMonth() + 2) + "-" + '01';
      }
      if (month == 12) {
        return dateFormate = date.getFullYear() + 1 + "-" + "01" + "-" + '01';
      }
    }
    if (date1 == 30) {
      if (month == 4 || month == 6 || month == 9 || month == 11) {
        return dateFormate = date.getFullYear() + "-" + (date.getMonth() + 2) + "-" + '01';
      }
    }
    if (year % 4 == 0) {
      if (month == 2) {
        if (date1 == 29) {
          return dateFormate = date.getFullYear() + "-" + (date.getMonth() + 2) + "-" + '01';
        }
      }
    } else {
      if (month == 2) {
        if (date1 == 28) {
          return dateFormate = date.getFullYear() + "-" + (date.getMonth() + 2) + "-" + '01';
        }
      }
    }

    return dateFormate = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + (date.getDate() + 1);


    //   return dateFormate;
  }

  getDateByTime(time: any): any {
    var date = new Date(time);
    var dateFormate = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();
    return dateFormate;
  }
  base64ToString(EventCode) {
    var Base64 = {
      _keyStr: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
      encode: function (e) {
        var t = ""; var n, r, i, s, o, u, a; var f = 0;
        e = Base64._utf8_encode(e);
        while (f < e.length) {
          n = e.charCodeAt(f++);
          r = e.charCodeAt(f++);
          i = e.charCodeAt(f++);
          s = n >> 2; o = (n & 3) << 4 | r >> 4;
          u = (r & 15) << 2 | i >> 6;
          a = i & 63;
          if (isNaN(r)) {
            u = a = 64
          } else if (isNaN(i)) {
            a = 64
          }
          t = t + this._keyStr.charAt(s) + this._keyStr.charAt(o) + this._keyStr.charAt(u) + this._keyStr.charAt(a)
        }
        return t
      }, decode: function (e) {
        var t = "";
        var n, r, i; var s, o, u, a;
        var f = 0; e = e.replace(/[^A-Za-z0-9+/=]/g, "");
        while (f < e.length) {
          s = this._keyStr.indexOf(e.charAt(f++));
          o = this._keyStr.indexOf(e.charAt(f++));
          u = this._keyStr.indexOf(e.charAt(f++));
          a = this._keyStr.indexOf(e.charAt(f++));
          n = s << 2 | o >> 4;
          r = (o & 15) << 4 | u >> 2; i = (u & 3) << 6 | a;
          t = t + String.fromCharCode(n);
          if (u != 64) {
            t = t + String.fromCharCode(r)
          }
          if (a != 64) {
            t = t + String.fromCharCode(i)
          }
        }
        t = Base64._utf8_decode(t);
        return t
      }, _utf8_encode: function (e) {
        e = e.replace(/rn/g, "n"); var t = "";
        for (var n = 0; n < e.length; n++) {
          var r = e.charCodeAt(n);
          if (r < 128) {
            t += String.fromCharCode(r)
          } else if (r > 127 && r < 2048) {
            t += String.fromCharCode(r >> 6 | 192);
            t += String.fromCharCode(r & 63 | 128)
          } else {
            t += String.fromCharCode(r >> 12 | 224);
            t += String.fromCharCode(r >> 6 & 63 | 128);
            t += String.fromCharCode(r & 63 | 128)
          }
        } return t
      }, _utf8_decode: function (e) {
        var t = "";
        var n = 0;
        var r = 0, c1 = 0, c2 = 0, c3 = 0;
        while (n < e.length) {
          r = e.charCodeAt(n);
          if (r < 128) {
            t += String.fromCharCode(r); n++
          } else if (r > 191 && r < 224) {
            c2 = e.charCodeAt(n + 1);
            t += String.fromCharCode((r & 31) << 6 | c2 & 63); n += 2
          } else {
            c2 = e.charCodeAt(n + 1);
            c3 = e.charCodeAt(n + 2);
            t += String.fromCharCode((r & 15) << 12 | (c2 & 63) << 6 | c3 & 63)
              ; n += 3
          }
        }
        return t
      }
    }

    var decodedString = Base64.decode(EventCode);
    return decodedString.split(" ");

  }



}