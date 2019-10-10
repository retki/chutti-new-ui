import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpHeaders, HttpEvent } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Router } from '@angular/router'
import { throwError } from 'rxjs';
import { DataSharingService } from './dataSharing.service';
import { start } from 'repl';
import { Http, Response, Headers, RequestMethod, RequestOptionsArgs, RequestOptions } from '@angular/http';
import * as $ from 'jquery';

@Injectable({
    providedIn: 'root'
})
export class Genericservice {
    delete(id: any): any {
        throw new Error("Method not implemented.");
    }
    public baseUrL = environment.apiUrl;
    constructor(public httpClient: HttpClient, public router: Router, private http: Http, private dataSharingService: DataSharingService, ) {
    }

    protected standardHeaders() {
        return {
            'Accept': "application/json",
            'userTokenParam': localStorage.getItem('token'),
        };
    }

    protected standardHeadersWithoutToken() {
        return {
            'Accept': "application/json",
            // 'userTokenParam': localStorage.getItem('token'),
        };
    }
    protected signUpHeaders() {
        return {
            'Accept': "application/json",
        };
    }
    protected googleCalendarHeaders() {

        return {
            'Content-Type': "application/json",
            'authorization': 'Bearer ' + localStorage.getItem('accessToken')
        };
    }
    // login
    login(url, payload): Observable<any> {
        return this.httpClient.post(this.baseUrL + url, payload, {
        }).pipe(
            map((response: any) => {
                if (response.status != undefined)
                    if (response.status.message == 'Authorized User') {
                    }
                return response;
            }),
            catchError(error => {
                return throwError(error);
            })
        );
    }
    //post
    post(url, payload, notification): Observable<any> {

        return this.httpClient.post(this.baseUrL + url, payload, {
            headers: this.standardHeaders()
        }).pipe(
            map((response: any) => {
                if (notification == true) {
                    this.notify(response)
                }
                return response;
            }),
            catchError(error => {
                if(error.error!=undefined){
                    this.dataSharingService.failureMessage(error.error.message);
                    console.log(error)
                    return throwError(error);
                }
               
            })
        );
    }

    //Get All
    get(url): Observable<any> {
        return this.httpClient.get(this.baseUrL + url, {
            headers: this.standardHeaders()
        }).pipe(
            map((response: any) => {

                if (response.status.message == 'Authorized User') {
                    // this.logout();
                }
                return response;
            }),
            catchError(error => {
                return throwError(error);
            })
        );

    }


    saveCalendarEvents(url, payload): Observable<any> {
        var token = localStorage.getItem('accessToken')
        return this.httpClient.post(url, payload, {
            headers: this.googleCalendarHeaders()
        }).pipe(
            map((response: any) => {
                if (response.status != undefined)
                    if (response.status.message == 'Authorized User') {
                    }
                return response;
            }),
            catchError(error => {
                return throwError(error);
            })
        );
    }

    updateCalendarEvents(url, payload): Observable<any> {
        return this.httpClient.put(url, payload, {
            headers: this.googleCalendarHeaders()
        }).pipe(
            map((response: any) => {
                if (response.status != undefined)
                    if (response.status.message == 'Authorized User') {
                    }
                return response;
            }),
            catchError(error => {
                return throwError(error);
            })
        );
    }

    deleteCalendarEvents(url): Observable<any> {
        return this.httpClient.delete(url, {
            headers: this.googleCalendarHeaders()
        }).pipe(
            map((response: any) => {
                if (response.status != undefined)
                    if (response.status.message == 'Authorized User') {
                    }
                return response;
            }),
            catchError(error => {
                return throwError(error);
            })
        );
    }

    //notify
    notify(response) {
        if (response != null) {
            if (response.status !== null) {
                if (response.status.success == 'success' || response.status.success == 'Success') {
                    if (response.data !== undefined) {
                        if (response.data.isActive==false) {
                            this.dataSharingService.successMessage("Deleted Successfully");
                        } else {
                            this.dataSharingService.successMessage(response.status.message);
                        }
                    }
                }
                else if (response.status.success == 'Fail' || response.status.success == 'fail') {
                    this.dataSharingService.failureMessage(response.status.message);
                }
            }
        } else {
            this.dataSharingService.successMessage('Successfully deleted');
        }
    }

    //freshdesk thirdparty API

    // createTicket(url, data,notification): Observable<any> {
    //     let headers: any = new Headers();
    //     headers.append('Content-Type', 'application/json');
    //     headers.append('Authorization', 'Basic bmEwYW9LN0NqOVg3R3U5QnRKYmw6eA==');
    //     headers.append('dataType', 'json'); 
    //     let options = new RequestOptions({ headers: headers });
    //     return this.http.post(url, data,options).pipe(
    //         map((response: any) => {
    //           if(notification==true){
    //             this.dataSharingService.successMessage('Ticket has been created successfully.');
    //           }
    //             return response;
    //         }),
    //         catchError(error => {
    //             return throwError(error);
    //         })
    //     );
    // }

    getTicketBasedOnUser(url) {
        let headers: any = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', 'Basic bmEwYW9LN0NqOVg3R3U5QnRKYmw6eA==');
        headers.append('dataType', 'json');

        let options = new RequestOptions({ headers: headers });
        return this.http.get(url, options);
    }


    imageUpload(file, url): Observable<HttpEvent<{}>> {
        let formdata: FormData = new FormData();
        formdata.append('file', file);
        let headers = new HttpHeaders(
            this.standardHeaders());
        const req = new HttpRequest('POST', this.baseUrL + url,
            formdata, {
                reportProgress: true,
                responseType: 'json',
                headers: headers
            });
        return this.httpClient.request(req);
    }
    // upload ExcelFile 
    fileUpload(endPointUrl, file: File, organisationId: any, notification): Observable<HttpEvent<{}>> {
        let formdata: FormData = new FormData();
        formdata.append('file', file);
        formdata.append('organisationId', organisationId)
        let headers = new HttpHeaders(
            this.signUpHeaders());
        const req = new HttpRequest('POST', this.baseUrL + endPointUrl,
            formdata, {
                reportProgress: true,
                headers: headers
            });
        return this.httpClient.request(req)
            .pipe(
                map((response: any) => {
                    if (notification == true) {
                        if (response.type == 4) {
                            this.notify(response)
                        }

                    }
                    return response;
                }),
                catchError(error => {
                    return throwError(error);
                })
            );;
    }
    holidayUpload(endPointUrl, file: File, organisationId: any, notification): Observable<HttpEvent<{}>> {
        let formdata: FormData = new FormData();
        formdata.append('file', file);
        formdata.append('organisationId', organisationId)
        let headers = new HttpHeaders(
            this.standardHeaders());
        const req = new HttpRequest('POST', this.baseUrL + endPointUrl,
            formdata, {
                reportProgress: true,
                headers: headers
            });
        return this.httpClient.request(req)
            .pipe(
                map((response: any) => {
                    if (notification == true) {
                        if (response.type == 4) {
                            this.notify(response)
                        }

                    }
                    return response;
                }),
                catchError(error => {
                    return throwError(error);
                })
            );;
    }
    //post
    postWithOutToken(url, payload, notification): Observable<any> {
        return this.httpClient.post(this.baseUrL + url, payload, {
            headers: { 'Content-Type': 'application/json' },
        }).pipe(
            map((response: any) => {
                if (notification == true) {
                    this.notify(response)
                }
                return response;
            }),
            catchError(error => {
                console.log(error)
                return throwError(error);
            })
        );
    }

    //post
    postWithOutHeaders(url, payload, notification): Observable<any> {

        return this.httpClient.post(this.baseUrL + url, payload, {
            headers: this.standardHeadersWithoutToken()
        }).pipe(
            map((response: any) => {
                if (notification == true) {
                    this.notify(response)
                }
                return response;
            }),
            catchError(error => {
                return throwError(error);
            })
        );
    }


      postwithoutToken(url, payload, notification): Observable<any> {

        return this.httpClient.post(this.baseUrL + url, payload, {
            headers: {'Content-Type':'application/json'},
        }).pipe(
            map((response: any) => {
                if (notification == true) {
                    this.notify(response)
                }
                return response;
            }),
            catchError(error => {
                return throwError(error);
            })
        );
    }

    csvUpload(endPointUrl, file: File, notification): Observable<HttpEvent<{}>> {
        let formdata: FormData = new FormData();
        formdata.append('file', file);
        let headers = new HttpHeaders(this.signUpHeaders());
        const req = new HttpRequest('POST', this.baseUrL + endPointUrl,
            formdata, {
                reportProgress: true,
                headers: headers
            });
        return this.httpClient.request(req)
            .pipe(
                map((response: any) => {
                    if (notification == true) {
                        if (response.type == 4) {
                            this.notify(response)
                        }

                    }
                    return response;
                }),
                catchError(error => {
                    return throwError(error);
                })
            );;
    }

    uploadEmployeeAttendance(endPointUrl,file: File, notification: boolean): Observable<HttpEvent<{}>> {
        let headers = new HttpHeaders(this.standardHeaders());
        let formdata: FormData = new FormData();
        formdata.append('file', file);
        const req = new HttpRequest('POST', this.baseUrL + endPointUrl,
            formdata, {
                reportProgress: true,
                responseType: 'json',
                headers: headers
            });
        return this.httpClient.request(req)
            .pipe(map((response: any) => {
                    console.log(response);
                    if (notification == true) {
                        if(response.data !== undefined) {
                            if (response.data.JsonErrorResponse == []) {
                                this.notify(response);
                            } else {
                                this.dataSharingService.failureMessage(response.data.JsonErrorResponse[0]);
                            }
                        }
                    }
                    
                    return response;
                }),
                catchError(error => {
                    return throwError(error);
                })
            );
    }
}

