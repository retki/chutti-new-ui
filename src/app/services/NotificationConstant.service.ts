import { Injectable } from '@angular/core';
@Injectable({
    providedIn: 'root'
})
export class NotificationConstants {
  static errormsg='SomeThing Went wrong Please Try Again';
  static forgetPasswordSuccess='Please check  your mail to reset your password';
  static forgetPasswordFailure='Mail Id does not exist ';
  static resetPasswordSuccess='Password changed successfully, Please login with new password';
  static updateUser='User Updated Successfully';
  static wrongOldPasswordMsg='New password should not be the same as the old password';



  static sessionExpiredNotification='Your session has expired,Please login again';
  static sessionInvalidNotification='Your session is invalid,Please login again';
 
  static getLinkPicture(url) {
    var timeStamp = (new Date()).getTime();
    return url + '?' + timeStamp;
  } 
}