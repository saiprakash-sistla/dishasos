(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/all-reports-view/all-reports-view.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/all-reports-view/all-reports-view.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>all-reports-view works!</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/all-reports/all-reports.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/all-reports/all-reports.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"col-sm-12 allReports\" style=\"padding: 0px;padding-top: 44px;\" *ngIf=\"this._Services.isAllView==false\">\n  <div class=\"col-sm-12\"><button class=\"viewButton\" (click)=\"RecallAll()\" style=\"margin-bottom: 10px;\">Refresh</button></div>\n\n    <table class=\"table table-bordered\" style=\"border: 1px solid black;padding: 5px;text-align: center;\">\n        <tr>\n            <th style=\"border: 1px solid black;padding: 5px;text-align: center;\">Total SOS Landed</th>\n            <th colspan=\"4\" style=\"border: 1px solid black;padding: 5px;text-align: center;\">Dispatched from Disha Control</th>\n            <!-- <th style=\"border: 1px solid black;padding: 5px;text-align: center;\">No.of DISHA APP Downloads on</th> -->\n            <th style=\"border: 1px solid black;padding: 5px;text-align: center;\">Total No.of Disha App Downloads</th>\n        </tr>\n        <tr>\n            <td style=\"border: 1px solid black;padding: 5px;text-align: center;\">{{this.tableTotalData.SosCount}}</td>\n            <td style=\"border: 1px solid black;padding: 5px;text-align: center;\">\n                Actionable SOS\n                <hr>\n                {{this.tableTotalData.AssignedCount}}\n            </td>\n            <td style=\"border: 1px solid black;padding: 5px;text-align: center;\"> Closed\n                <hr>\n                {{this.tableTotalData.CompletedCount}}</td>\n            <td style=\"border: 1px solid black;padding: 5px;text-align: center;\"> Pending\n                <hr>\n                {{this.tableTotalData.PendingCount}}</td>\n            <td style=\"border: 1px solid black;padding: 5px;text-align: center;\"> FIR Registered\n                <hr>\n                {{this.tableTotalData.firStatusCount}}</td>\n            <!-- <td style=\"border: 1px solid black;padding: 5px;text-align: center;\">0</td> -->\n            <td style=\"border: 1px solid black;padding: 5px;text-align: center;\">{{this.tableTotalData.DownloadsCount}}</td>\n        </tr>\n    </table>\n    <table class=\"table table-bordered\" style=\"margin-top: 5px;\" *ngIf=\"this.allReportsData!=undefined\">\n        <tr>\n            <th colspan=\"8\" style=\"border: 1px solid black;padding: 5px;text-align: center;\">Unit Wise Actionable SOS Details</th>\n\n        </tr>\n        <tr>\n            <th style=\"border: 1px solid black;padding: 5px;text-align: center;\">Sl.No</th>\n            <th style=\"border: 1px solid black;padding: 5px;text-align: center;\">Unit Name</th>\n            <th style=\"border: 1px solid black;padding: 5px;text-align: center;\">Total</th>\n            <!-- <th>Actionable</th>\n            <th>Closed</th>\n            <th>Pending</th> -->\n            <th style=\"border: 1px solid black;padding: 5px;text-align: center;\">FIR Registered</th>\n            <!-- <th>Remarks for Pending</th> -->\n            <th style=\"border: 1px solid black;padding: 5px;text-align: center;\"></th>\n        </tr>\n        <tr *ngFor=\"let item of this.allReportsData; let i=index\">\n            <td style=\"border: 1px solid black;padding: 5px;text-align: center;\">{{i+1}}</td>\n            <td style=\"border: 1px solid black;padding: 5px;text-align: center;\">{{item.district}}</td>\n            <td style=\"border: 1px solid black;padding: 5px;text-align: center;\">{{item.sosCount}}</td>\n            <td style=\"border: 1px solid black;padding: 5px;text-align: center;\" *ngIf=\"item.FIRCount!=undefined\">{{item.FIRCount}}</td>\n            <td style=\"border: 1px solid black;padding: 5px;text-align: center;\" *ngIf=\"item.FIRCount==undefined\">0</td>\n            \n            <!-- <td>SOS</td>\n            <td>SOS</td>\n            <td>SOS</td> -->\n            <!-- <td>SOS</td> -->\n            <td style=\"border: 1px solid black;padding: 5px;text-align: center;\"><button class=\"viewButton\" (click)=\"ViewDetails(item.district)\">View</button></td>\n        </tr>\n    </table>\n</div>\n\n\n<div class=\"col-sm-12 view\" *ngIf=\"this._Services.isAllView==true\">\n    <div class=\"row\" style=\"margin: 0px;margin-top: 20px;margin-bottom: 20px;\">\n        <div class=\"col-sm-4 Pendingcard\" (click)=\"getPendingList()\">\n          <mat-card><img src=\"disha/assets/Images/pending.png\" class=\"homeImages\" /> <span class=\"cardTitles\">Pending </span><span\n              class=\"cardCount\" style=\"float:right;\">{{this.SOSCount.pendingSOSCount}}</span></mat-card>\n        </div>\n        <div class=\"col-sm-4 Assignedcard\" (click)=\"getAssignedList()\">\n          <mat-card><img src=\"disha/assets/Images/assigned.png\" class=\"homeImages\" /> <span class=\"cardTitles\">Assigned\n            </span><span class=\"cardCount\" style=\"float:right;\">{{this.SOSCount.assignedSOSCount}}</span></mat-card>\n        </div>\n        <div class=\"col-sm-4 Completedcard\" (click)=\"getCompletedList()\">\n          <mat-card><img src=\"disha/assets/Images/completed.png\" class=\"homeImages\" /> <span\n              class=\"cardTitles\">Completed </span><span class=\"cardCount\"\n              style=\"float:right;\">{{this.SOSCount.completedSOSCount}}</span></mat-card>\n        </div>\n      </div>\n      <h2 style=\"color:#f5145f;margin-top: 0px;\">{{this._Services.DashBoardTitle}}</h2>\n    \n      <div *ngIf=\"this.displayMsg!=''\" class=\"alertMsg\">\n        <p>{{this.displayMsg}}</p>\n      </div>\n      \n      <div class=\"col-sm-12\" *ngIf=\"this.completedList!=undefined && this._Services.DashBoardTitle=='Completed'\">\n        <div class=\"col-sm-3\">\n          <mat-form-field>\n            <mat-label>Search Item</mat-label>\n            <mat-select [(ngModel)]=\"this.searchField\">\n              <mat-option  value=\"Name\">\n                Name\n              </mat-option>\n              <mat-option  value=\"MobileNumber\">\n                Mobile Number\n              </mat-option>\n            </mat-select>\n          </mat-form-field>\n        </div>\n        <div class=\"col-sm-3\">\n          <mat-form-field>\n            <mat-label>Search Value</mat-label>\n            <input matInput placeholder=\"\" value=\"\" [(ngModel)]=\"this.searchValue\">\n           </mat-form-field>\n        </div>\n        <div class=\"col-sm-3\">\n          <button class=\"SubmitButton\"\n                  (click)=\"SearchData(this.searchField,this.searchValue)\">Submit</button>\n        </div>\n        \n      </div>\n    \n      <div class=\"col-sm-12\" style=\"margin: 0px;\" *ngIf=\"this.pendingList!=undefined && this._Services.DashBoardTitle=='Pending'\">\n        <!-- <h2 style=\"color:#f5145f;margin-top: 0px;\">{{this._Services.DashBoardTitle}}</h2> -->\n        <div class=\"example-container mat-elevation-z8\">\n          <table mat-table [dataSource]=\"this.pendingList\">\n            <!-- Position Column -->\n            <ng-container matColumnDef=\"name\">\n              <th mat-header-cell *matHeaderCellDef> Name </th>\n              <td mat-cell *matCellDef=\"let element\"> \n                <span *ngIf=\"element.name!=''\">{{element.name}}</span> \n                <span *ngIf=\"element.name==''\">NA </span>\n                 </td>\n            </ng-container>\n      \n            <ng-container matColumnDef=\"mobileNumber\">\n              <th mat-header-cell *matHeaderCellDef> Mobile Number </th>\n              <td mat-cell *matCellDef=\"let element\"> \n                <span *ngIf=\"element.mobileNumber!=''\">{{element.mobileNumber}}</span> \n                <span *ngIf=\"element.mobileNumber==''\">NA </span>\n                 </td>\n            </ng-container>\n      \n            <!-- Name Column -->\n            <ng-container matColumnDef=\"distressAddress\">\n              <th mat-header-cell *matHeaderCellDef> Location </th>\n              <td mat-cell *matCellDef=\"let element\"> \n                <span *ngIf=\"element.distressAddress!=''\">{{element.distressAddress}}</span> \n                <span *ngIf=\"element.distressAddress==''\">NA </span>\n                 </td>\n            </ng-container>\n      \n            <!-- Weight Column -->\n            <ng-container matColumnDef=\"timestamp\">\n              <th mat-header-cell *matHeaderCellDef> Date & Time </th>\n              <td mat-cell *matCellDef=\"let element\"> \n                <span *ngIf=\"element.timestamp!=''\">{{element.timestamp}}</span> \n                <span *ngIf=\"element.timestamp==''\">NA </span>\n                 </td>\n            </ng-container>\n            <!-- Symbol Column -->\n            <ng-container matColumnDef=\"view\">\n              <th mat-header-cell *matHeaderCellDef> </th>\n              <td mat-cell *matCellDef=\"let element\"><button class=\"viewButton\"\n                  (click)=\"ViewDescription(element)\">View</button></td>\n            </ng-container>\n      \n            <tr mat-header-row *matHeaderRowDef=\"displayedColumns;sticky: true\"></tr>\n            <tr mat-row [ngClass]=\"{'make-grey': row.sosSeen == true}\" *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n            <!-- <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr> -->\n          </table>\n      \n          <mat-paginator [pageSizeOptions]=\"[5, 10, 15]\" showFirstLastButtons></mat-paginator>\n        </div>\n      \n      </div>\n      \n      <div class=\"col-sm-12\" style=\"margin: 0px;\" *ngIf=\"this.assignedList!=undefined && this._Services.DashBoardTitle=='Assigned'\">\n        <!-- <h2 style=\"color:#f5145f;margin-top: 0px;\">{{this._Services.DashBoardTitle}}</h2> -->\n        <div class=\"mat-elevation-z8\">\n          <table mat-table [dataSource]=\"this.assignedList\">\n            <!-- Position Column -->\n            <ng-container matColumnDef=\"name\">\n              <th mat-header-cell *matHeaderCellDef> Name </th>\n              <td mat-cell *matCellDef=\"let element\"> \n                <span *ngIf=\"element.name!=''\">{{element.name}}</span> \n                <span *ngIf=\"element.name==''\">NA </span>\n                 </td>\n            </ng-container>\n            <!-- <ng-container matColumnDef=\"sosAssignedDetails\">\n              <th mat-header-cell *matHeaderCellDef> police station</th>\n              <td mat-cell *matCellDef=\"let element\"> \n                <span *ngIf=\"element.sosAssignedDetails!=''\">{{element.sosAssignedDetails.sosAssignedTo.policeStationName}}</span> \n                <span *ngIf=\"element.sosAssignedDetails==''\">NA </span>\n                 </td>\n            </ng-container> -->\n      \n            <ng-container matColumnDef=\"mobileNumber\">\n              <th mat-header-cell *matHeaderCellDef> Mobile Number </th>\n              <td mat-cell *matCellDef=\"let element\"> \n                <span *ngIf=\"element.mobileNumber!=''\">{{element.mobileNumber}}</span> \n                <span *ngIf=\"element.mobileNumber==''\">NA </span>\n                 </td>\n            </ng-container>\n      \n            <!-- Name Column -->\n            <ng-container matColumnDef=\"city\">\n              <th mat-header-cell *matHeaderCellDef> Location </th>\n              <td mat-cell *matCellDef=\"let element\"> \n                <span *ngIf=\"element.distressAddress!=''\">{{element.distressAddress}}</span> \n                <span *ngIf=\"element.distressAddress==''\">NA </span>\n                 </td>\n            </ng-container>\n      \n            <!-- Weight Column -->\n            <ng-container matColumnDef=\"timestamp\">\n              <th mat-header-cell *matHeaderCellDef> Date & Time </th>\n              <td mat-cell *matCellDef=\"let element\"> \n                <span *ngIf=\"element.timestamp!=''\">{{element.timestamp}}</span> \n                <span *ngIf=\"element.timestamp==''\">NA </span>\n                </td>\n            </ng-container>\n            <!-- Symbol Column -->\n            <ng-container matColumnDef=\"view\">\n              <th mat-header-cell *matHeaderCellDef> </th>\n              <td mat-cell *matCellDef=\"let element\"><button class=\"viewButton\"\n                  (click)=\"ViewDescription(element)\">View</button></td>\n            </ng-container>\n      \n            <tr mat-header-row *matHeaderRowDef=\"displayedassignedColumns\"></tr>\n            <tr mat-row *matRowDef=\"let row; columns: displayedassignedColumns;\"></tr>\n          </table>\n      \n          <mat-paginator [pageSizeOptions]=\"[5, 10, 15]\" showFirstLastButtons></mat-paginator>\n        </div>\n        </div>\n      \n        <div class=\"col-sm-12\" style=\"margin: 0px;\" *ngIf=\"this.completedList!=undefined && this._Services.DashBoardTitle=='Completed'\">\n          <!-- <h2 style=\"color:#f5145f;margin-top: 0px;\">{{this._Services.DashBoardTitle}}</h2> -->\n          <div class=\"mat-elevation-z8\">\n            <table mat-table [dataSource]=\"this.completedList\">\n              <!-- Position Column -->\n              <ng-container matColumnDef=\"name\">\n                <th mat-header-cell *matHeaderCellDef> Name </th>\n                <td mat-cell *matCellDef=\"let element\"> \n                  <span *ngIf=\"element.name!=''\">{{element.name}}</span> \n                <span *ngIf=\"element.name==''\">NA </span>\n                 </td>\n              </ng-container>\n        \n              <ng-container matColumnDef=\"mobileNumber\">\n                <th mat-header-cell *matHeaderCellDef> Mobile Number </th>\n                <td mat-cell *matCellDef=\"let element\"> \n                  <span *ngIf=\"element.mobileNumber!=''\">{{element.mobileNumber}}</span> \n                <span *ngIf=\"element.mobileNumber==''\">NA </span>\n                 </td>\n              </ng-container>\n        \n              <!-- Name Column -->\n              <ng-container matColumnDef=\"city\">\n                <th mat-header-cell *matHeaderCellDef> Location </th>\n                <td mat-cell *matCellDef=\"let element\"> \n                  <span *ngIf=\"element.distressAddress!=''\">{{element.distressAddress}}</span> \n                  <span *ngIf=\"element.distressAddress==''\">NA </span>\n                 </td>\n              </ng-container>\n        \n              <!-- Weight Column -->\n              <ng-container matColumnDef=\"timestamp\">\n                <th mat-header-cell *matHeaderCellDef> Date & Time </th>\n                <td mat-cell *matCellDef=\"let element\"> \n                  <span *ngIf=\"element.timestamp!=''\">{{element.timestamp}}</span> \n                  <span *ngIf=\"element.timestamp==''\">NA </span>\n                   </td>\n              </ng-container>\n              <!-- Symbol Column -->\n              <ng-container matColumnDef=\"view\">\n                <th mat-header-cell *matHeaderCellDef> </th>\n                <td mat-cell *matCellDef=\"let element\"><button class=\"viewButton\"\n                    (click)=\"ViewDescription(element)\">View</button></td>\n              </ng-container>\n        \n              <tr mat-header-row *matHeaderRowDef=\"displayedCompletedColumns\"></tr>\n              <tr mat-row *matRowDef=\"let row; columns: displayedCompletedColumns;\"></tr>\n            \n            </table>\n           \n           \n            <!-- <mat-paginator [pageSizeOptions]=\"[5, 10, 15]\" showFirstLastButtons></mat-paginator> -->\n          </div>\n          </div>\n    \n          <div class=\"col-sm-12\">\n            <button class=\"paginationButton\"\n            (click)=\"getNextPage(true)\">{{this.nexrText}}</button>\n            <button class=\"paginationButton\"\n            (click)=\"getNextPage(false)\">{{this.prevText}}</button>\n          </div>\n    \n          <!-- /sosServices/getCompletedRecords\n    \n          {\n            \"limit\": 10,\n            \"skip\": 2\n          }\n           -->\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<router-outlet></router-outlet>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/assignedpage/assignedpage.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/assignedpage/assignedpage.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"col-sm-12\" style=\"margin: 0px;\" *ngIf=\"this.LocationsData!=undefined\">\n    <h2 style=\"color:#f5145f;\">PS List</h2>\n    <div class=\"mat-elevation-z8\">\n      <table mat-table [dataSource]=\"this.LocationsData\">\n        <!-- Position Column -->\n        <!-- <ng-container matColumnDef=\"PS Code in CCTNS\">\n            <th mat-header-cell *matHeaderCellDef> PS Code </th>\n            <td mat-cell *matCellDef=\"let element\"> {{element.PS Code in CCTNS}} </td>\n          </ng-container> -->\n  \n          \n        <ng-container matColumnDef=\"psName\">\n          <th mat-header-cell *matHeaderCellDef> PS Name </th>\n          <td mat-cell *matCellDef=\"let element\">  \n          <span *ngIf=\"element.psName!=''\">{{element.psName}} </span> \n            <span *ngIf=\"element.psName==''\">NA </span>\n          </td>\n        </ng-container>\n  \n        <ng-container matColumnDef=\"mobile\">\n          <th mat-header-cell *matHeaderCellDef> Mobile Number </th>\n          <td mat-cell *matCellDef=\"let element\"> \n            <span *ngIf=\"element.mobile!=''\">{{element.mobile}} </span> \n            <span *ngIf=\"element.mobile==''\">NA </span>\n             </td>\n        </ng-container>\n\n        <ng-container matColumnDef=\"landLine\">\n            <th mat-header-cell *matHeaderCellDef> LandLine Number </th>\n            <td mat-cell *matCellDef=\"let element\">\n              <span *ngIf=\"element.landLine!=''\">0{{element.landLine}} </span> \n            <span *ngIf=\"element.landLine==''\">NA </span>\n                </td>\n          </ng-container>\n  \n        <!-- Name Column -->\n        <ng-container matColumnDef=\"unit\">\n          <th mat-header-cell *matHeaderCellDef> Unit Name </th>\n          <td mat-cell *matCellDef=\"let element\">\n            <span *ngIf=\"element.unit!=''\">{{element.unit}} </span> \n            <span *ngIf=\"element.unit==''\">NA </span>\n              </td>\n        </ng-container>\n  \n        <!-- Weight Column -->\n        <!-- <ng-container matColumnDef=\"timestamp\">\n          <th mat-header-cell *matHeaderCellDef> Date & Time </th>\n          <td mat-cell *matCellDef=\"let element\"> {{element.timestamp}} </td>\n        </ng-container> -->\n        <!-- Symbol Column -->\n        <ng-container matColumnDef=\"view\">\n          <th mat-header-cell *matHeaderCellDef> </th>\n          <td mat-cell *matCellDef=\"let element\"><button class=\"viewButton\"\n              (click)=\"SetObj(element)\" data-toggle=\"modal\" data-target=\"#sendmsg\">Assign</button></td>\n        </ng-container>\n  \n        <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n        <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n      </table>\n      <mat-paginator [pageSizeOptions]=\"[5, 10, 15]\" showFirstLastButtons></mat-paginator>\n      <!-- <mat-paginator [pageSizeOptions]=\"[5, 10, 15]\" showFirstLastButtons></mat-paginator> -->\n    </div>\n    </div>\n\n    <div id=\"sendmsg\" class=\"modal fade\" role=\"dialog\">\n      <div class=\"modal-dialog\">\n    \n        <!-- Modal content-->\n        <div class=\"modal-content\">\n          <div class=\"modal-header\">\n            <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n            <h4 class=\"modal-title\">Send Message</h4>\n          </div>\n          <div class=\"modal-body\">\n            <textarea class=\"form-control\" rows=\"2\" id=\"comment\" [(ngModel)]=\"this.textMsg\"></textarea>\n            <!-- <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\" style=\"float:right;\">Assign</button>\n            <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\" style=\"float:right;\">Cancel</button> -->\n          </div>\n          <div class=\"modal-footer\">\n            <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Cancel</button>\n            <button type=\"button\" class=\"btn btn-default btn-info\" (click)=\"assignCase(this.textMsg)\" data-dismiss=\"modal\" style=\"float:right;\">Assign</button>\n          </div>\n        </div>\n    \n      </div>\n    </div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/change-password/change-password.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/change-password/change-password.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\n    <h3 style=\"text-align: center;\">Change Password</h3>\n    <div class=\"col-sm-4\"></div>\n    <div class=\"col-sm-4 ViewCard\">\n        <mat-card class=\"changepasswordCard\">\n            <div class=\"input-group formInputs\">\n                <span class=\"input-group-addon\"><i class=\"glyphicon glyphicon-user\"></i></span>\n                <input id=\"userName\" type=\"text\" class=\"form-control\" name=\"userName\" [(ngModel)]=\"this.changePasswordData.userName\" placeholder=\"Enter User Name\">\n              </div>\n              <div class=\"input-group formInputs\">\n                <span class=\"input-group-addon\"><i class=\"glyphicon glyphicon-lock\"></i></span>\n                <input id=\"oldPassword\" type=\"password\" class=\"form-control\" name=\"oldPassword\" [(ngModel)]=\"this.changePasswordData.oldPassword\" placeholder=\"Enter Old Password\">\n              </div>\n              <div class=\"input-group formInputs\">\n                <span class=\"input-group-addon\"><i class=\"glyphicon glyphicon-lock\"></i></span>\n                <input id=\"newPassword\" type=\"password\" class=\"form-control\" name=\"newPassword\" [(ngModel)]=\"this.changePasswordData.newPassword\" placeholder=\"Enter New Password\">\n              </div>\n              <div class=\"formbtn\">\n              <button class=\"viewButton\"\n              (click)=\"savePassword(this.changePasswordData)\">Save</button>\n            </div>\n        </mat-card>\n    </div>\n    <div class=\"col-sm-4\"></div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/dashboard.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/dashboard.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\" style=\"margin: 0px;margin-top: 20px;margin-bottom: 20px;\">\n  <div class=\"col-sm-4 Pendingcard\" (click)=\"ChangePage('Sos')\">\n    <mat-card><img src=\"disha/assets/Images/sos.png\" class=\"homeImages\" /> <span class=\"cardTitles\">SOS </span><span\n        class=\"cardCount\" style=\"float:right;\">{{this._Services.SOSCount.pendingSOSCount+this._Services.SOSCount.assignedSOSCount+this._Services.SOSCount.completedSOSCount}}</span></mat-card>\n  </div>\n  <div class=\"col-sm-4 Assignedcard\" (click)=\"ChangePage('TrackMyTravel')\">\n    <mat-card><img src=\"disha/assets/Images/track.png\" class=\"homeImages\" /> <span class=\"cardTitles\">Track My Travel\n      </span><span class=\"cardCount\" style=\"float:right;\">{{this._Services.TripsCount.activeTripsCount+this._Services.TripsCount.inactiveTripsCount}}</span></mat-card>\n  </div>\n  <div class=\"col-sm-4 Completedcard\">\n    <mat-card><img src=\"disha/assets/Images/100112.png\" class=\"homeImages\" /> <span\n        class=\"cardTitles\">112/100 </span><span class=\"cardCount\"\n        style=\"float:right;\">{{this.emergencyCount}}</span></mat-card>\n  </div>\n</div>\n\n\n<div class=\"col-sm-12\" style=\"margin-top: 10px;\">\n<div class=\"col-sm-6\" style=\"padding: 0px;padding-top: 44px;\">\n  <table>\n    <tr>\n      <th>Name</th>\n      <th>Count</th>\n    </tr>\n    <tr>\n      <td>SOS</td>\n      <td>{{this._Services.SOSCount.pendingSOSCount+this._Services.SOSCount.assignedSOSCount+this._Services.SOSCount.completedSOSCount}}</td>\n    </tr>\n    <tr>\n      <td>Track My Travel</td>\n      <td>{{this._Services.TripsCount.activeTripsCount+this._Services.TripsCount.inactiveTripsCount}}</td>\n    </tr>\n    <tr>\n      <td>112/100</td>\n      <td>{{this.emergencyCount}}</td>\n    </tr>\n    <tr>\n      <td>Pending</td>\n      <td>{{this._Services.SOSCount.pendingSOSCount}}</td>\n    </tr>\n    <tr>\n      <td>Assigned</td>\n      <td>{{this._Services.SOSCount.assignedSOSCount}}</td>\n    </tr>\n    <tr>\n      <td>Completed</td>\n      <td>{{this._Services.SOSCount.completedSOSCount}}</td>\n    </tr>\n   \n  </table>\t\n</div>\n<div class=\"col-sm-6\">\n  <ejs-chart id=\"chart-container\" *ngIf=\"this.chartData.length>0\" [primaryXAxis]='primaryXAxis'[primaryYAxis]='primaryYAxis' [title]='title' [tooltip]='tooltip'>\n    <e-series-collection>\n        <e-series [dataSource]='chartData' type='Column' xName='country' yName='SOS' name='SOS'></e-series>\n        <e-series [dataSource]='chartData' type='Column' xName='country' yName='Track_My_Travel' name='Track_My_Travel'></e-series>\n        <e-series [dataSource]='chartData' type='Column' xName='country' yName='112/100' name='112/100'></e-series>\n        <e-series [dataSource]='chartData' type='Column' xName='country' yName='Pending' name='Pending'></e-series>\n        <e-series [dataSource]='chartData' type='Column' xName='country' yName='Assigned' name='Assigned'></e-series>\n        <e-series [dataSource]='chartData' type='Column' xName='country' yName='Completed' name='Completed'></e-series>\n    </e-series-collection>\n</ejs-chart>\n</div>\n</div>\n<!-- <div style=\"display: block\">\n  <canvas mdbChart\n      [chartType]=chartType\n      [datasets]=chartDatasets\n      [labels]=chartLabels\n      [colors]=chartColors\n      [options]=chartOptions\n      [legend]=\"true\"\n      (chartHover)=\"chartHovered($event)\"\n      (chartClick)=\"chartClicked($event)\">\n  </canvas>\n</div> -->\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/homepage/homepage.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/homepage/homepage.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"content\">\n\n  <div class=\"row HeaderSection\" style=\"margin:0px;\">\n    <div class=\"Header col-sm-12\">\n      <div class=\"col-sm-5\">\n        <img src=\"disha/assets/Images/police1.png\" class=\"logoImage\">\n      </div>\n      <div class=\"col-sm-5\">\n        <h2 style=\"color:white;margin-top: 10px;\"><img src=\"disha/assets/Images/disha1.png\" class=\"logoImage1\">\n          <!-- <b>DISHA</b> -->\n        </h2>\n\n      </div>\n      <div class=\"col-sm-2\">\n\n        <span><img src=\"disha/assets/Images/notification.png\" class=\"notificationImg\" title=\"unseen cases\"></span>\n        <span style=\"color:white;\"><b>{{this.unseenCount}}</b></span>\n        <!-- <img src=\"disha/assets/Images/dummyUser1.jpg\"\n        class=\"userLogoImg\" title=\"User Profile\"> -->\n        <button mat-button [matMenuTriggerFor]=\"menu\" class=\"signBtn\"><span\n            style=\"font-weight: 600; font-size:large ;\">{{this._Services.UserData.userName}}</span></button>\n        <mat-menu #menu=\"matMenu\">\n          <button mat-menu-item (click)=\"goToUserProfile()\">User Profile</button>\n          <button mat-menu-item (click)=\"goToChangePassword()\">Change Password</button>\n          <button mat-menu-item>Notifications {{this.unseenCount}}</button>\n          <button mat-menu-item (click)=\"SignOut()\">Sign Out</button>\n        </mat-menu>\n        <!-- <button class=\"signBtn\" (click)=\"SignOut()\">Sign Out</button> -->\n\n      </div>\n    </div>\n  </div>\n\n  <div class=\"row ContentSection\" style=\"margin:0px;\">\n    <div class=\"SideNav col-sm-2\" style=\"padding: 0px;\">\n      <nav class=\"navbar navbar-inverse sidebar\" role=\"navigation\" style=\"width: 100%;\">\n        <div class=\"container-fluid\">\n          <!-- Brand and toggle get grouped for better mobile display -->\n          <div class=\"navbar-header\">\n            <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\"\n              data-target=\"#bs-sidebar-navbar-collapse-1\">\n              <span class=\"sr-only\">Toggle navigation</span>\n              <span class=\"icon-bar\"></span>\n              <span class=\"icon-bar\"></span>\n              <span class=\"icon-bar\"></span>\n            </button>\n            <!-- <a class=\"navbar-brand\" href=\"#\">Brand</a> -->\n          </div>\n          <!-- Collect the nav links, forms, and other content for toggling -->\n          <div class=\"collapse navbar-collapse\" id=\"bs-sidebar-navbar-collapse-1\">\n            <ul class=\"nav navbar-nav\">\n              <li (click)=\"changePage('Dashboard')\"><a\n                  [class.Active]=\"this._Services.DashBoardTitle=='Dashboard'\">Dashboard<span style=\"font-size:16px;\"\n                    class=\"pull-right hidden-xs\"><img src=\"disha/assets/Images/passport verification.PNG\"\n                      class=\"homeImages1\" /></span></a></li>\n\n              <li class=\"dropdown\">\n                <a class=\"dropdown-toggle\" data-toggle=\"dropdown\">SOS <span class=\"caret\"></span><span\n                    style=\"font-size:16px;\" class=\"pull-right hidden-xs\"><img src=\"disha/assets/Images/sos.png\"\n                      class=\"homeImages1\" /></span></a>\n                <ul class=\"dropdown-menu forAnimate\" role=\"menu\" style=\"background: black;\">\n                  <li (click)=\"changePage('Pending')\"><a\n                      [class.Active]=\"this._Services.DashBoardTitle=='Pending'\">Pending<span style=\"font-size:16px;\"\n                        class=\"pull-right hidden-xs\"><img src=\"disha/assets/Images/pending.png\"\n                          class=\"homeImages1\" /></span></a></li>\n                  <li class=\"divider\"></li>\n                  <li (click)=\"changePage('Assigned')\"><a\n                      [class.Active]=\"this._Services.DashBoardTitle=='Assigned'\">Assigned<span style=\"font-size:16px;\"\n                        class=\"pull-right hidden-xs\"><img src=\"disha/assets/Images/assigned.png\"\n                          class=\"homeImages1\" /></span></a></li>\n                  <li class=\"divider\"></li>\n                  <li (click)=\"changePage('Completed')\"><a\n                      [class.Active]=\"this._Services.DashBoardTitle=='Completed'\">Completed<span style=\"font-size:16px;\"\n                        class=\"pull-right hidden-xs\"><img src=\"disha/assets/Images/completed.png\"\n                          class=\"homeImages1\" /></span></a></li>\n                </ul>\n              </li>\n              <li (click)=\"changePage('TrackMyTravel')\"><a\n                  [class.Active]=\"this._Services.DashBoardTitle=='TrackMyTravel'\">Track My Travel<span\n                    style=\"font-size:16px;\" class=\"pull-right hidden-xs\"><img src=\"disha/assets/Images/track.png\"\n                      class=\"homeImages1\" /></span></a></li>\n              <li (click)=\"goToReports()\"><a [class.Active]=\"this._Services.DashBoardTitle=='Reports'\">DSR<span\n                    style=\"font-size:16px;\" class=\"pull-right hidden-xs\"><img src=\"disha/assets/Images/reports.png\"\n                      class=\"homeImages1\" /></span></a></li>\n              <li (click)=\"goToAllReports()\"><a [class.Active]=\"this._Services.DashBoardTitle=='All Reports'\">All Reports<span\n                    style=\"font-size:16px;\" class=\"pull-right hidden-xs\"><img src=\"disha/assets/Images/reports.png\"\n                      class=\"homeImages1\" /></span></a></li>\n\n\n              <!-- <li class=\"\"><a href=\"#\">Pending<span style=\"font-size:16px;\" class=\"pull-right hidden-xs showopacity glyphicon glyphicon-home\"></span></a></li>\n            <li ><a href=\"#\">Assigned<span style=\"font-size:16px;\" class=\"pull-right hidden-xs showopacity glyphicon glyphicon-user\"></span></a></li>\n            <li ><a href=\"#\">Completed<span style=\"font-size:16px;\" class=\"pull-right hidden-xs showopacity glyphicon glyphicon-envelope\"></span></a></li> -->\n              <!-- <li class=\"dropdown\">\n              <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">Settings <span class=\"caret\"></span><span style=\"font-size:16px;\" class=\"pull-right hidden-xs showopacity glyphicon glyphicon-cog\"></span></a>\n              <ul class=\"dropdown-menu forAnimate\" role=\"menu\">\n                <li><a href=\"#\">Action</a></li>\n                <li><a href=\"#\">Another action</a></li>\n                <li><a href=\"#\">Something else here</a></li>\n                <li class=\"divider\"></li>\n                <li><a href=\"#\">Separated link</a></li>\n                <li class=\"divider\"></li>\n                <li><a href=\"#\">One more separated link</a></li>\n              </ul>\n            </li>\n            <li><a href=\"#\">Home<span style=\"font-size:16px;\" class=\"pull-right hidden-xs showopacity glyphicon glyphicon-home\"></span></a></li>\n            <li ><a href=\"#\">Profile<span style=\"font-size:16px;\" class=\"pull-right hidden-xs showopacity glyphicon glyphicon-user\"></span></a></li>\n            <li ><a href=\"#\">Messages<span style=\"font-size:16px;\" class=\"pull-right hidden-xs showopacity glyphicon glyphicon-envelope\"></span></a></li>\n            <li class=\"dropdown\">\n              <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">Settings <span class=\"caret\"></span><span style=\"font-size:16px;\" class=\"pull-right hidden-xs showopacity glyphicon glyphicon-cog\"></span></a>\n              <ul class=\"dropdown-menu forAnimate\" role=\"menu\">\n                <li><a href=\"#\">Action</a></li>\n                <li><a href=\"#\">Another action</a></li>\n                <li><a href=\"#\">Something else here</a></li>\n                <li class=\"divider\"></li>\n                <li><a href=\"#\">Separated link</a></li>\n                <li class=\"divider\"></li>\n                <li><a href=\"#\">One more separated link</a></li>\n              </ul>\n            </li> -->\n            </ul>\n          </div>\n        </div>\n      </nav>\n    </div>\n    <div class=\"Content col-sm-10\">\n\n      <router-outlet></router-outlet>\n      <div class=\"row alertsDiv\">\n        <p class=\"alertMsg\" *ngIf=\"this.alertMessage!=''\">{{this.alertMessage}}</p>\n        <p class=\"alertMsg\" *ngIf=\"this.alertMessage1!=''\">{{this.alertMessage1}}</p>\n      </div>\n    </div>\n  </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row LoginPage\">\n  <div class=\"logo\">\n    <img src=\"disha/assets/Images/police1.png\" class=\"logoImage2\">\n    <img src=\"disha/assets/Images/disha1.png\" class=\"logoImage\">\n    <img src=\"disha/assets/Images/aplogomap.png\" class=\"logoImage3\">\n  </div>\n  <div class=\"logo\">\n    <img src=\"disha/assets/Images/jagan1.png\" class=\"logoImage1\">\n</div>\n\n\n\n<div class=\"loginContent\">\n\n<!-- <div class=\"row logoDiv\">\n    <img src=\"disha/assets/Images/logodisha.png\" class=\"logoImage\">\n</div> -->\n\n\n<div class=\"formDiv col-sm-12\">\n    <div class=\"input-group formInputs\">\n        <span class=\"input-group-addon\"><i class=\"glyphicon glyphicon-user\"></i></span>\n        <input id=\"username\" type=\"text\" class=\"form-control\" name=\"username\" [(ngModel)]=\"this.UserData.userName\" placeholder=\"Enter User Name\">\n      </div>\n      <div class=\"input-group formInputs\">\n        <span class=\"input-group-addon\"><i class=\"glyphicon glyphicon-lock\"></i></span>\n        <input id=\"password\" type=\"password\" class=\"form-control\" name=\"password\" (keypress)=\"onSearchChange($event,this.UserData)\" [(ngModel)]=\"this.UserData.password\" placeholder=\"Enter Password\">\n      </div>\n</div>\n\n<div class=\"col-sm-12 loginBtn\">\n    <span *ngIf=\"errorMsg!=''\" class=\"error\">{{errorMsg}}</span><button type=\"button\" class=\"btn btn-info\" (click)=\"loginUser(this.UserData)\">Login</button>\n</div>\n\n\n\n</div>\n\n<div class=\"logo1\">\n\n  <img src=\"disha/assets/Images/hm.PNG\" class=\"logoImage4\">\n  <img src=\"disha/assets/Images/dgp1.PNG\" class=\"logoImage5\">\n\n</div>\n\n\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/report-view/report-view.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/report-view/report-view.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"col-sm-6 ViewCard\">\n    <mat-card>\n      <h3>Report Details</h3>\n      <div class=\"col-sm-12 viewCardItems\">\n        <div class=\"col-sm-4\">Name </div>\n        <div class=\"col-sm-8\" *ngIf=\"this.ReportData.name!=undefined\">: {{this.ReportData.name}}</div>\n        <div class=\"col-sm-8\" *ngIf=\"this.ReportData.name==undefined\">: NA</div>\n      </div>\n  \n      <div class=\"col-sm-12 viewCardItems\">\n        <div class=\"col-sm-4\">Mobile Number </div>\n        <div class=\"col-sm-8\" *ngIf=\"this.ReportData.mobileNumber!=undefined\">: {{this.ReportData.mobileNumber}}</div>\n        <div class=\"col-sm-8\" *ngIf=\"this.ReportData.mobileNumber==undefined\">: NA</div>\n  \n      </div>\n  \n      <div class=\"col-sm-12 viewCardItems\">\n        <div class=\"col-sm-4\">Home Address </div>\n        <div class=\"col-sm-8\" *ngIf=\"this.ReportData.city!=undefined\">: {{this.ReportData.city}}</div>\n        <div class=\"col-sm-8\" *ngIf=\"this.ReportData.city==undefined\">: NA</div>\n  \n      </div>\n      <div class=\"col-sm-12 viewCardItems\">\n        <div class=\"col-sm-4\">Distress Location </div>\n        <div class=\"col-sm-8\" *ngIf=\"this.ReportData.longitude!=undefined\">:<a [href]=\"sanitizedUrl\" target=\"_blank\"> http://maps.google.com/?q={{this.ReportData.latitude}},{{this.ReportData.longitude}}</a></div>\n        <div class=\"col-sm-8\" *ngIf=\"this.ReportData.longitude==undefined\">: NA</div>\n      </div>\n  \n      <div class=\"col-sm-12 viewCardItems\">\n        <div class=\"col-sm-4\">Distress Address </div>\n        <div class=\"col-sm-8\" *ngIf=\"this.ReportData.distressAddress!=undefined\">: {{this.ReportData.distressAddress}}</div>\n        <div class=\"col-sm-8\" *ngIf=\"this.ReportData.distressAddress==undefined\">: NA</div>\n      </div>\n     \n  \n      <div class=\"col-sm-12 viewCardItems\">\n        <div class=\"col-sm-4\">Date & Time </div>\n        <div class=\"col-sm-8\" *ngIf=\"this.ReportData.timestamp!=undefined\">: {{this.ReportData.timestamp}}</div>\n        <div class=\"col-sm-8\" *ngIf=\"this.ReportData.timestamp==undefined\">: NA</div>\n  \n      </div>\n  \n      <div class=\"col-sm-12 viewCardItems\">\n        <div class=\"col-sm-4\">Status </div>\n        <div class=\"col-sm-8\" *ngIf=\"this.ReportData.sosStatus!=undefined\">: {{this.ReportData.sosStatus}}</div>\n        <div class=\"col-sm-8\" *ngIf=\"this.ReportData.sosStatus==undefined\">: NA</div>\n  \n      </div>\n  \n   \n<!--   \n      <div class=\"col-sm-12 viewCardItems\">\n        <div class=\"col-sm-4\">Emergency Contacts</div>\n        <div class=\"col-sm-8\" *ngIf=\"this.ReportData.userDetails.emergencyContacts!=undefined\">\n          :\n          <ng-container *ngFor=\"let item of this.ReportData.userDetails.emergencyContacts\">\n            <span> {{item.Name}}({{item.contactNumber}})</span><br>\n          </ng-container>\n           \n        </div>\n        <div class=\"col-sm-8\" *ngIf=\"this.viewCaseData.userDetails.emergencyContacts==undefined\">: NA</div>\n  \n      </div>  -->\n  \n     \n  \n     \n    </mat-card>\n  </div>\n  \n  <div class=\"col-sm-6 ViewCard\">\n    <mat-card>\n      <h3>Locations</h3>\n      \n      <agm-map [latitude]=\"lat1\" [longitude]=\"lng1\"  [mapTypeControl]=\"true\">\n       \n            <agm-marker [latitude]=\"lat1\" [longitude]=\"lng1\"></agm-marker>\n      </agm-map>\n    </mat-card>\n  </div>\n  \n  ");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/reports/reports.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/reports/reports.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"col-sm-12\" style=\"margin: 0px;\" *ngIf=\"this.reportsData!=undefined\">\n    <h2 style=\"color:#f5145f;\">Reports</h2>\n    <div class=\"row\">\n        <div class=\"col-sm-3\">\n            <mat-form-field>\n                <input matInput [matDatepicker]=\"picker3\" placeholder=\"Start Date\" [value]=\"startDate\" (dateChange)=\"changeStartDate($event.value)\">\n                <mat-datepicker-toggle matSuffix [for]=\"picker3\"></mat-datepicker-toggle>\n                <mat-datepicker #picker3></mat-datepicker>\n              </mat-form-field>\n        </div>\n        <div class=\"col-sm-3\">\n            <mat-form-field>\n                <input matInput [matDatepicker]=\"picker4\" placeholder=\"End Date\" [value]=\"startDate\"  (dateChange)=\"changeEndDate($event.value)\">\n                <mat-datepicker-toggle matSuffix [for]=\"picker4\"></mat-datepicker-toggle>\n                <mat-datepicker #picker4></mat-datepicker>\n              </mat-form-field>\n        </div>\n        <div class=\"col-sm-3\">\n            <button class=\"viewButton\"\n              (click)=\"filterData()\">Submit</button>\n        </div>\n    </div>\n   \n\n      \n     \n    <div class=\"mat-elevation-z8\">\n      <table mat-table [dataSource]=\"this.reportsData\">\n        <!-- Position Column -->\n        <!-- <ng-container matColumnDef=\"PS Code in CCTNS\">\n            <th mat-header-cell *matHeaderCellDef> PS Code </th>\n            <td mat-cell *matCellDef=\"let element\"> {{element.PS Code in CCTNS}} </td>\n          </ng-container> -->\n  \n          \n        <ng-container matColumnDef=\"name\">\n          <th mat-header-cell *matHeaderCellDef> Name </th>\n          <td mat-cell *matCellDef=\"let element\">  \n          <span *ngIf=\"element.name!=''\">{{element.name}} </span> \n            <span *ngIf=\"element.name==''\">NA </span>\n          </td>\n        </ng-container>\n  \n        <ng-container matColumnDef=\"mobileNumber\">\n          <th mat-header-cell *matHeaderCellDef> Mobile Number </th>\n          <td mat-cell *matCellDef=\"let element\"> \n            <span *ngIf=\"element.mobileNumber!=''\">{{element.mobileNumber}} </span> \n            <span *ngIf=\"element.mobileNumber==''\">NA </span>\n             </td>\n        </ng-container>\n\n        <ng-container matColumnDef=\"sosStatus\">\n            <th mat-header-cell *matHeaderCellDef> SOS Status </th>\n            <td mat-cell *matCellDef=\"let element\">\n              <span *ngIf=\"element.sosStatus!=''\">{{element.sosStatus}} </span> \n            <span *ngIf=\"element.sosStatus==''\">NA </span>\n                </td>\n          </ng-container>\n  \n        <!-- Name Column -->\n        <ng-container matColumnDef=\"distressAddress\">\n          <th mat-header-cell *matHeaderCellDef> Address </th>\n          <td mat-cell *matCellDef=\"let element\">\n            <span *ngIf=\"element.distressAddress!=''\">{{element.distressAddress}} </span> \n            <span *ngIf=\"element.distressAddress==''\">NA </span>\n              </td>\n        </ng-container>\n  \n        <!-- Weight Column -->\n        <!-- <ng-container matColumnDef=\"timestamp\">\n          <th mat-header-cell *matHeaderCellDef> Date & Time </th>\n          <td mat-cell *matCellDef=\"let element\"> {{element.timestamp}} </td>\n        </ng-container> -->\n        <!-- Symbol Column -->\n        <ng-container matColumnDef=\"view\">\n          <th mat-header-cell *matHeaderCellDef> </th>\n          <td mat-cell *matCellDef=\"let element\"><button class=\"viewButton\"\n              (click)=\"goToView(element)\">View</button></td>\n        </ng-container>\n  \n        <tr mat-header-row *matHeaderRowDef=\"displayedReportColumns\"></tr>\n        <tr mat-row *matRowDef=\"let row; columns: displayedReportColumns;\"></tr>\n      </table>\n      <mat-paginator [pageSizeOptions]=\"[5, 10, 15]\" showFirstLastButtons></mat-paginator>\n      <!-- <mat-paginator [pageSizeOptions]=\"[5, 10, 15]\" showFirstLastButtons></mat-paginator> -->\n    </div>\n    </div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/sos/sos.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/sos/sos.component.html ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\" style=\"margin: 0px;margin-top: 20px;margin-bottom: 20px;\">\n    <div class=\"col-sm-4 Pendingcard\" (click)=\"getPendingList()\">\n      <mat-card><img src=\"disha/assets/Images/pending.png\" class=\"homeImages\" /> <span class=\"cardTitles\">Pending </span><span\n          class=\"cardCount\" style=\"float:right;\">{{this._Services.SOSCount.pendingSOSCount}}</span></mat-card>\n    </div>\n    <div class=\"col-sm-4 Assignedcard\" (click)=\"getAssignedList()\">\n      <mat-card><img src=\"disha/assets/Images/assigned.png\" class=\"homeImages\" /> <span class=\"cardTitles\">Assigned\n        </span><span class=\"cardCount\" style=\"float:right;\">{{this._Services.SOSCount.assignedSOSCount}}</span></mat-card>\n    </div>\n    <div class=\"col-sm-4 Completedcard\" (click)=\"getCompletedList()\">\n      <mat-card><img src=\"disha/assets/Images/completed.png\" class=\"homeImages\" /> <span\n          class=\"cardTitles\">Completed </span><span class=\"cardCount\"\n          style=\"float:right;\">{{this._Services.SOSCount.completedSOSCount}}</span></mat-card>\n    </div>\n  </div>\n  <h2 style=\"color:#f5145f;margin-top: 0px;\">{{this._Services.DashBoardTitle}}</h2>\n\n  <div *ngIf=\"this.displayMsg!=''\" class=\"alertMsg\">\n    <p>{{this.displayMsg}}</p>\n  </div>\n  \n  <div class=\"col-sm-12\" *ngIf=\"this.completedList!=undefined && this._Services.DashBoardTitle=='Completed'\">\n    <div class=\"col-sm-3\">\n      <mat-form-field>\n        <mat-label>Search Item</mat-label>\n        <mat-select [(ngModel)]=\"this.searchField\">\n          <mat-option  value=\"Name\">\n            Name\n          </mat-option>\n          <mat-option  value=\"MobileNumber\">\n            Mobile Number\n          </mat-option>\n        </mat-select>\n      </mat-form-field>\n    </div>\n    <div class=\"col-sm-3\">\n      <mat-form-field>\n        <mat-label>Search Value</mat-label>\n        <input matInput placeholder=\"\" value=\"\" [(ngModel)]=\"this.searchValue\">\n       </mat-form-field>\n    </div>\n    <div class=\"col-sm-3\">\n      <button class=\"SubmitButton\"\n              (click)=\"SearchData(this.searchField,this.searchValue)\">Submit</button>\n    </div>\n    \n  </div>\n\n  <div class=\"col-sm-12\" style=\"margin: 0px;\" *ngIf=\"this.pendingList!=undefined && this._Services.DashBoardTitle=='Pending'\">\n    <!-- <h2 style=\"color:#f5145f;margin-top: 0px;\">{{this._Services.DashBoardTitle}}</h2> -->\n    <div class=\"example-container mat-elevation-z8\">\n      <table mat-table [dataSource]=\"this.pendingList\">\n        <!-- Position Column -->\n        <ng-container matColumnDef=\"name\">\n          <th mat-header-cell *matHeaderCellDef> Name </th>\n          <td mat-cell *matCellDef=\"let element\"> \n            <span *ngIf=\"element.name!=''\">{{element.name}}</span> \n            <span *ngIf=\"element.name==''\">NA </span>\n             </td>\n        </ng-container>\n  \n        <ng-container matColumnDef=\"mobileNumber\">\n          <th mat-header-cell *matHeaderCellDef> Mobile Number </th>\n          <td mat-cell *matCellDef=\"let element\"> \n            <span *ngIf=\"element.mobileNumber!=''\">{{element.mobileNumber}}</span> \n            <span *ngIf=\"element.mobileNumber==''\">NA </span>\n             </td>\n        </ng-container>\n  \n        <!-- Name Column -->\n        <ng-container matColumnDef=\"distressAddress\">\n          <th mat-header-cell *matHeaderCellDef> Location </th>\n          <td mat-cell *matCellDef=\"let element\"> \n            <span *ngIf=\"element.distressAddress!=''\">{{element.distressAddress}}</span> \n            <span *ngIf=\"element.distressAddress==''\">NA </span>\n             </td>\n        </ng-container>\n  \n        <!-- Weight Column -->\n        <ng-container matColumnDef=\"timestamp\">\n          <th mat-header-cell *matHeaderCellDef> Date & Time </th>\n          <td mat-cell *matCellDef=\"let element\"> \n            <span *ngIf=\"element.timestamp!=''\">{{element.timestamp}}</span> \n            <span *ngIf=\"element.timestamp==''\">NA </span>\n             </td>\n        </ng-container>\n        <!-- Symbol Column -->\n        <ng-container matColumnDef=\"view\">\n          <th mat-header-cell *matHeaderCellDef> </th>\n          <td mat-cell *matCellDef=\"let element\"><button class=\"viewButton\"\n              (click)=\"ViewDescription(element)\">View</button></td>\n        </ng-container>\n  \n        <tr mat-header-row *matHeaderRowDef=\"displayedColumns;sticky: true\"></tr>\n        <tr mat-row [ngClass]=\"{'make-grey': row.sosSeen == true}\" *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n        <!-- <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr> -->\n      </table>\n  \n      <!-- <mat-paginator [pageSizeOptions]=\"[5, 10, 15]\" showFirstLastButtons></mat-paginator> -->\n    </div>\n  \n  </div>\n  \n  <div class=\"col-sm-12\" style=\"margin: 0px;\" *ngIf=\"this.assignedList!=undefined && this._Services.DashBoardTitle=='Assigned'\">\n    <!-- <h2 style=\"color:#f5145f;margin-top: 0px;\">{{this._Services.DashBoardTitle}}</h2> -->\n    <div class=\"mat-elevation-z8\">\n      <table mat-table [dataSource]=\"this.assignedList\">\n        <!-- Position Column -->\n        <ng-container matColumnDef=\"name\">\n          <th mat-header-cell *matHeaderCellDef> Name </th>\n          <td mat-cell *matCellDef=\"let element\"> \n            <span *ngIf=\"element.name!=''\">{{element.name}}</span> \n            <span *ngIf=\"element.name==''\">NA </span>\n             </td>\n        </ng-container>\n        <!-- <ng-container matColumnDef=\"sosAssignedDetails\">\n          <th mat-header-cell *matHeaderCellDef> police station</th>\n          <td mat-cell *matCellDef=\"let element\"> \n            <span *ngIf=\"element.sosAssignedDetails!=''\">{{element.sosAssignedDetails.sosAssignedTo.policeStationName}}</span> \n            <span *ngIf=\"element.sosAssignedDetails==''\">NA </span>\n             </td>\n        </ng-container> -->\n  \n        <ng-container matColumnDef=\"mobileNumber\">\n          <th mat-header-cell *matHeaderCellDef> Mobile Number </th>\n          <td mat-cell *matCellDef=\"let element\"> \n            <span *ngIf=\"element.mobileNumber!=''\">{{element.mobileNumber}}</span> \n            <span *ngIf=\"element.mobileNumber==''\">NA </span>\n             </td>\n        </ng-container>\n  \n        <!-- Name Column -->\n        <ng-container matColumnDef=\"city\">\n          <th mat-header-cell *matHeaderCellDef> Location </th>\n          <td mat-cell *matCellDef=\"let element\"> \n            <span *ngIf=\"element.distressAddress!=''\">{{element.distressAddress}}</span> \n            <span *ngIf=\"element.distressAddress==''\">NA </span>\n             </td>\n        </ng-container>\n  \n        <!-- Weight Column -->\n        <ng-container matColumnDef=\"timestamp\">\n          <th mat-header-cell *matHeaderCellDef> Date & Time </th>\n          <td mat-cell *matCellDef=\"let element\"> \n            <span *ngIf=\"element.timestamp!=''\">{{element.timestamp}}</span> \n            <span *ngIf=\"element.timestamp==''\">NA </span>\n            </td>\n        </ng-container>\n        <!-- Symbol Column -->\n        <ng-container matColumnDef=\"view\">\n          <th mat-header-cell *matHeaderCellDef> </th>\n          <td mat-cell *matCellDef=\"let element\"><button class=\"viewButton\"\n              (click)=\"ViewDescription(element)\">View</button></td>\n        </ng-container>\n  \n        <tr mat-header-row *matHeaderRowDef=\"displayedassignedColumns\"></tr>\n        <tr mat-row *matRowDef=\"let row; columns: displayedassignedColumns;\"></tr>\n      </table>\n  \n      <mat-paginator [pageSizeOptions]=\"[5, 10, 15]\" showFirstLastButtons></mat-paginator>\n    </div>\n    </div>\n  \n    <div class=\"col-sm-12\" style=\"margin: 0px;\" *ngIf=\"this.completedList!=undefined && this._Services.DashBoardTitle=='Completed'\">\n      <!-- <h2 style=\"color:#f5145f;margin-top: 0px;\">{{this._Services.DashBoardTitle}}</h2> -->\n      <div class=\"mat-elevation-z8\">\n        <table mat-table [dataSource]=\"this.completedList\">\n          <!-- Position Column -->\n          <ng-container matColumnDef=\"name\">\n            <th mat-header-cell *matHeaderCellDef> Name </th>\n            <td mat-cell *matCellDef=\"let element\"> \n              <span *ngIf=\"element.name!=''\">{{element.name}}</span> \n            <span *ngIf=\"element.name==''\">NA </span>\n             </td>\n          </ng-container>\n    \n          <ng-container matColumnDef=\"mobileNumber\">\n            <th mat-header-cell *matHeaderCellDef> Mobile Number </th>\n            <td mat-cell *matCellDef=\"let element\"> \n              <span *ngIf=\"element.mobileNumber!=''\">{{element.mobileNumber}}</span> \n            <span *ngIf=\"element.mobileNumber==''\">NA </span>\n             </td>\n          </ng-container>\n    \n          <!-- Name Column -->\n          <ng-container matColumnDef=\"city\">\n            <th mat-header-cell *matHeaderCellDef> Location </th>\n            <td mat-cell *matCellDef=\"let element\"> \n              <span *ngIf=\"element.distressAddress!=''\">{{element.distressAddress}}</span> \n              <span *ngIf=\"element.distressAddress==''\">NA </span>\n             </td>\n          </ng-container>\n    \n          <!-- Weight Column -->\n          <ng-container matColumnDef=\"timestamp\">\n            <th mat-header-cell *matHeaderCellDef> Date & Time </th>\n            <td mat-cell *matCellDef=\"let element\"> \n              <span *ngIf=\"element.timestamp!=''\">{{element.timestamp}}</span> \n              <span *ngIf=\"element.timestamp==''\">NA </span>\n               </td>\n          </ng-container>\n          <!-- Symbol Column -->\n          <ng-container matColumnDef=\"view\">\n            <th mat-header-cell *matHeaderCellDef> </th>\n            <td mat-cell *matCellDef=\"let element\"><button class=\"viewButton\"\n                (click)=\"ViewDescription(element)\">View</button></td>\n          </ng-container>\n    \n          <tr mat-header-row *matHeaderRowDef=\"displayedCompletedColumns\"></tr>\n          <tr mat-row *matRowDef=\"let row; columns: displayedCompletedColumns;\"></tr>\n        \n        </table>\n       \n       \n        <!-- <mat-paginator [pageSizeOptions]=\"[5, 10, 15]\" showFirstLastButtons></mat-paginator> -->\n      </div>\n      </div>\n\n      <div class=\"col-sm-12\" *ngIf=\"this._Services.DashBoardTitle!='Pending'\">\n        <button class=\"paginationButton\"\n        (click)=\"getNextPage(true)\">{{this.nexrText}}</button>\n        <button class=\"paginationButton\"\n        (click)=\"getNextPage(false)\">{{this.prevText}}</button>\n      </div>\n\n      <!-- /sosServices/getCompletedRecords\n\n      {\n        \"limit\": 10,\n        \"skip\": 2\n      }\n       -->");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/track-my-travel/track-my-travel.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/track-my-travel/track-my-travel.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\" style=\"margin: 0px;margin-top: 20px;margin-bottom: 20px;\">\n  <div class=\"col-sm-4 trackHeader\" (click)=\"getActiveTripData()\">\n    <mat-card><img src=\"disha/assets/Images/track.png\" class=\"homeImages\" /> <span class=\"cardTitles\">Active Trips\n      </span><span class=\"cardCount\" style=\"float:right;\">{{this._Services.TripsCount.activeTripsCount}}</span></mat-card>\n  </div>\n\n  <div class=\"col-sm-4 trackHeader\" (click)=\"getInActiveTripData()\">\n    <mat-card><img src=\"disha/assets/Images/track.png\" class=\"homeImages\" /> <span class=\"cardTitles\">InActive Trips\n      </span><span class=\"cardCount\" style=\"float:right;\">{{this._Services.TripsCount.inactiveTripsCount}}</span></mat-card>\n  </div>\n</div>\n\n<h3 style=\"color: #008cb8;padding-left: 20px;\">{{this.tripTitle}}</h3>\n\n\n<div class=\"col-sm-12\" style=\"margin: 0px;\" *ngIf=\"this.activeTripData!=undefined && this.tripTitle=='ActiveTrips'\">\n  <!-- <h2 style=\"color:#f5145f;\">PS List</h2> -->\n  <div class=\"mat-elevation-z8\">\n    <table mat-table [dataSource]=\"this.activeTripData\">\n\n\n      <ng-container matColumnDef=\"fullName\">\n        <th mat-header-cell *matHeaderCellDef>User Name </th>\n        <td mat-cell *matCellDef=\"let element\">\n          <span *ngIf=\"element.fullName!=''\">{{element.fullName}} </span>\n          <span *ngIf=\"element.fullName==''\">NA </span>\n\n        </td>\n      </ng-container>\n\n      <ng-container matColumnDef=\"mobileNumber\">\n        <th mat-header-cell *matHeaderCellDef> Mobile Number </th>\n        <td mat-cell *matCellDef=\"let element\">\n          <span *ngIf=\"element.mobileNumber!=''\">{{element.mobileNumber}} </span>\n          <span *ngIf=\"element.mobileNumber==''\">NA </span>\n\n        </td>\n      </ng-container>\n\n      <ng-container matColumnDef=\"address\">\n        <th mat-header-cell *matHeaderCellDef> Address </th>\n        <td mat-cell *matCellDef=\"let element\">\n          <span *ngIf=\"element.address!=''\">{{element.address}} </span>\n          <span *ngIf=\"element.address==''\">NA </span>\n        </td>\n      </ng-container>\n\n      <!-- Name Column -->\n      <ng-container matColumnDef=\"emailId\">\n        <th mat-header-cell *matHeaderCellDef> Email Id </th>\n        <td mat-cell *matCellDef=\"let element\">\n          <span *ngIf=\"element.emailId!=''\">{{element.emailId}} </span>\n          <span *ngIf=\"element.emailId==''\">NA </span>\n        </td>\n      </ng-container>\n\n      <!-- Weight Column -->\n      <!-- <ng-container matColumnDef=\"timestamp\">\n          <th mat-header-cell *matHeaderCellDef> Date & Time </th>\n          <td mat-cell *matCellDef=\"let element\"> {{element.timestamp}} </td>\n        </ng-container> -->\n      <!-- Symbol Column -->\n      <ng-container matColumnDef=\"view\">\n        <th mat-header-cell *matHeaderCellDef> </th>\n        <td mat-cell *matCellDef=\"let element\"><button class=\"viewButton\" (click)=\"GoToView(element)\">View</button></td>\n      </ng-container>\n\n      <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n      <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n    </table>\n    <!-- <mat-paginator [pageSizeOptions]=\"[5, 10, 15]\" showFirstLastButtons></mat-paginator> -->\n    <!-- <mat-paginator [pageSizeOptions]=\"[5, 10, 15]\" showFirstLastButtons></mat-paginator> -->\n  </div>\n</div>\n\n<div class=\"col-sm-12\" style=\"margin: 0px;\" *ngIf=\"this.inActiveTripData!=undefined && this.tripTitle=='InActiveTrips'\">\n  <!-- <h2 style=\"color:#f5145f;\">PS List</h2> -->\n  <div class=\"mat-elevation-z8\">\n    <table mat-table [dataSource]=\"this.inActiveTripData\">\n\n\n      <ng-container matColumnDef=\"fullName\">\n        <th mat-header-cell *matHeaderCellDef>User Name </th>\n        <td mat-cell *matCellDef=\"let element\">\n          <span *ngIf=\"element.fullName!=''\">{{element.fullName}} </span>\n          <span *ngIf=\"element.fullName==''\">NA </span>\n\n        </td>\n      </ng-container>\n\n      <ng-container matColumnDef=\"mobileNumber\">\n        <th mat-header-cell *matHeaderCellDef> Mobile Number </th>\n        <td mat-cell *matCellDef=\"let element\">\n          <span *ngIf=\"element.mobileNumber!=''\">{{element.mobileNumber}} </span>\n          <span *ngIf=\"element.mobileNumber==''\">NA </span>\n\n        </td>\n      </ng-container>\n\n      <ng-container matColumnDef=\"address\">\n        <th mat-header-cell *matHeaderCellDef> Address </th>\n        <td mat-cell *matCellDef=\"let element\">\n          <span *ngIf=\"element.address!=''\">{{element.address}} </span>\n          <span *ngIf=\"element.address==''\">NA </span>\n        </td>\n      </ng-container>\n\n      <!-- Name Column -->\n      <ng-container matColumnDef=\"emailId\">\n        <th mat-header-cell *matHeaderCellDef> Email Id </th>\n        <td mat-cell *matCellDef=\"let element\">\n          <span *ngIf=\"element.emailId!=''\">{{element.emailId}} </span>\n          <span *ngIf=\"element.emailId==''\">NA </span>\n        </td>\n      </ng-container>\n\n      <!-- Weight Column -->\n      <!-- <ng-container matColumnDef=\"timestamp\">\n            <th mat-header-cell *matHeaderCellDef> Date & Time </th>\n            <td mat-cell *matCellDef=\"let element\"> {{element.timestamp}} </td>\n          </ng-container> -->\n      <!-- Symbol Column -->\n      <!-- <ng-container matColumnDef=\"view\">\n            <th mat-header-cell *matHeaderCellDef> </th>\n            <td mat-cell *matCellDef=\"let element\"><button class=\"viewButton\" (click)=\"GoToView(element)\">View</button></td>\n          </ng-container> -->\n\n      <tr mat-header-row *matHeaderRowDef=\"inActivedisplayedColumns\"></tr>\n      <tr mat-row *matRowDef=\"let row; columns: inActivedisplayedColumns;\"></tr>\n    </table>\n    <!-- <mat-paginator [pageSizeOptions]=\"[5, 10, 15]\" showFirstLastButtons></mat-paginator> -->\n    <!-- <mat-paginator [pageSizeOptions]=\"[5, 10, 15]\" showFirstLastButtons></mat-paginator> -->\n  </div>\n</div>\n\n<div class=\"col-sm-12\">\n  <button class=\"paginationButton\"\n  (click)=\"getNextPage(true)\">{{this.nexrText}}</button>\n  <button class=\"paginationButton\"\n  (click)=\"getNextPage(false)\">{{this.prevText}}</button>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/user-profile/user-profile.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user-profile/user-profile.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\" style=\"margin: 0px;margin-top: 20px;margin-bottom: 20px;\">\n    <h2>User Profile</h2>\n    <div class=\"col-sm-3\"></div>\n    <div class=\"col-sm-6 UserCard\" (click)=\"ChangePage('Sos')\">\n      <mat-card style=\"text-align: center;\">\n          <h2><img src=\"disha/assets/Images/dummyUser1.jpg\" class=\"userImg\" /></h2>\n         <p class=\"cardTitles\">{{this._Services.UserData.userName}}</p>\n        </mat-card>\n    </div>\n    <div class=\"col-sm-3\"></div>\n    </div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/view-track/view-track.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/view-track/view-track.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"col-sm-12 ViewCard\">\n    <mat-card>\n      <h3>User Location<span> ({{this._Services.LocationDetails.fullName}}, {{this._Services.LocationDetails.mobileNumber}})</span></h3>\n      <!-- <agm-map [latitude]=\"lat1\" [longitude]=\"lng1\" [zoom]=\"zoom\" [mapTypeControl]=\"true\" > -->\n        <!-- <ng-container *ngFor=\"let item of this.locationsarr\"> -->\n        <!-- <agm-marker [latitude]=\"item.lat\" [longitude]=\"item.lng\" [iconUrl]=\"{ url:'disha/assets/Images/pointer.png',scaledSize: { width: 45, height: 45, anchor : {x:19, y:19} }, labelOrigin:{x:10,y:10}}\"></agm-marker> --> \n        <!-- <agm-marker [latitude]=\"lat3\" [longitude]=\"lng3\"></agm-marker> -->\n      <!-- </ng-container> -->\n      <!-- <agm-direction [origin]=\"dir.origin\" [destination]=\"dir.destination\"></agm-direction> -->\n      <!-- <agm-marker [latitude]=\"lat1\" [longitude]=\"lng1\" [iconUrl]=\"{ url:'disha/assets/Images/marker.gif',scaledSize: { width: 45, height: 45, anchor : {x:19, y:19} }, labelOrigin:{x:10,y:10}}\"></agm-marker>\n      </agm-map> -->\n      <agm-map [latitude]=\"lat\" [longitude]=\"lng\">\n        <agm-marker [latitude]=\"lat1\" [longitude]=\"lng1\" [iconUrl]=\"{ url:'disha/assets/Images/marker.gif',scaledSize: { width: 45, height: 45, anchor : {x:19, y:19} }, labelOrigin:{x:10,y:10}}\"></agm-marker>\n        <agm-direction [origin]=\"origin\" [destination]=\"destination\">\n        </agm-direction>\n      </agm-map>\n    </mat-card>\n  </div>\n\n  ");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/view/view.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/view/view.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"col-sm-6 ViewCard\">\n  <mat-card style=\"padding: 0px;\">\n    <h3>Case Details</h3>\n    <p *ngIf=\"this.errMsg!=''\" style=\"color:red\">{{this.errMsg}}</p>\n    <div class=\"col-sm-12 viewCardItems\">\n      <div class=\"col-sm-4\">Name </div>\n      <div class=\"col-sm-8\" *ngIf=\"this.viewCaseData.name!=undefined\">: {{this.viewCaseData.name}}</div>\n      <div class=\"col-sm-8\" *ngIf=\"this.viewCaseData.name==undefined\">: NA</div>\n    </div>\n\n    <div class=\"col-sm-12 viewCardItems\">\n      <div class=\"col-sm-4\">Mobile Number </div>\n      <div class=\"col-sm-8\" *ngIf=\"this.viewCaseData.mobileNumber!=undefined\">: {{this.viewCaseData.mobileNumber}}</div>\n      <div class=\"col-sm-8\" *ngIf=\"this.viewCaseData.mobileNumber==undefined\">: NA</div>\n\n    </div>\n\n    <div class=\"col-sm-12 viewCardItems\">\n      <div class=\"col-sm-4\">Alternative Mobile Number </div>\n      <div class=\"col-sm-8\" *ngIf=\"this.viewCaseData.userDetails.alternativeMobileNumber!=undefined\">:\n        {{this.viewCaseData.userDetails.alternativeMobileNumber}}</div>\n      <div class=\"col-sm-8\" *ngIf=\"this.viewCaseData.userDetails.alternativeMobileNumber==undefined\">: NA</div>\n\n    </div>\n\n\n\n    <div class=\"col-sm-12 viewCardItems\">\n      <div class=\"col-sm-4\">Home Address </div>\n      <div class=\"col-sm-8\" *ngIf=\"this.viewCaseData.city!=undefined\">: {{this.viewCaseData.city}}</div>\n      <div class=\"col-sm-8\" *ngIf=\"this.viewCaseData.city==undefined\">: NA</div>\n\n    </div>\n    <div class=\"col-sm-12 viewCardItems\">\n      <div class=\"col-sm-4\">Distress Location </div>\n      <div class=\"col-sm-8\" *ngIf=\"this.viewCaseData.longitude!=undefined\">:<a [href]=\"sanitizedUrl\" target=\"_blank\">\n          http://maps.google.com/?q={{this.viewCaseData.latitude}},{{this.viewCaseData.longitude}}</a></div>\n      <div class=\"col-sm-8\" *ngIf=\"this.viewCaseData.longitude==undefined\">: NA</div>\n    </div>\n\n    <div class=\"col-sm-12 viewCardItems\">\n      <div class=\"col-sm-4\">Distress Address </div>\n      <div class=\"col-sm-8\" *ngIf=\"this.viewCaseData.distressAddress!=undefined\">: {{this.viewCaseData.distressAddress}}\n      </div>\n      <div class=\"col-sm-8\" *ngIf=\"this.viewCaseData.distressAddress==undefined\">: NA</div>\n    </div>\n\n    <div class=\"col-sm-12 viewCardItems\">\n      <div class=\"col-sm-4\">Emergency Contacts</div>\n      <div class=\"col-sm-8\" *ngIf=\"this.viewCaseData.userDetails.emergencyContacts!=undefined\">\n        :\n        <ng-container *ngFor=\"let item of this.viewCaseData.userDetails.emergencyContacts\">\n          <span> {{item.Name}}({{item.contactNumber}})</span><br>\n        </ng-container>\n\n      </div>\n      <div class=\"col-sm-8\" *ngIf=\"this.viewCaseData.userDetails.emergencyContacts==undefined\">: NA</div>\n\n    </div>\n    <div class=\"col-sm-12 viewCardItems\"\n      *ngIf=\"this.viewCaseData.sosStatus!='pending' && this.viewCaseData.sosAssignedDetails!=undefined\">\n      <div class=\"col-sm-4\">Assigned Police Station </div>\n      <div class=\"col-sm-8\" *ngIf=\"this.viewCaseData.sosAssignedDetails!=undefined\">:\n        {{this.viewCaseData.sosAssignedDetails.sosAssignedTo.policeStationName}}</div>\n      <div class=\"col-sm-8\" *ngIf=\"this.viewCaseData.sosAssignedDetails==undefined\">: NA</div>\n    </div>\n    <div class=\"col-sm-12 viewCardItems\"\n      *ngIf=\"this.viewCaseData.sosStatus!='pending' && this.viewCaseData.sosAssignedDetails!=undefined\">\n      <div class=\"col-sm-4\">Police Station Number </div>\n      <div class=\"col-sm-8\" *ngIf=\"this.viewCaseData.sosAssignedDetails!=undefined\">:\n        {{this.viewCaseData.sosAssignedDetails.sosAssignedTo.mobileNumber}}</div>\n      <div class=\"col-sm-8\" *ngIf=\"this.viewCaseData.sosAssignedDetails==undefined\">: NA</div>\n    </div>\n    <div class=\"col-sm-12 viewCardItems \" *ngIf=\"this.viewCaseData.sosStatus=='completed'\">\n      <div class=\"col-sm-4\">Comment </div>\n      <div class=\"col-sm-8\" *ngIf=\"this.viewCaseData.sosCompletedDetails!=undefined\">:\n        {{this.viewCaseData.sosCompletedDetails.sosCompletedReport.closingReason}}</div>\n      <!-- <div class=\"col-sm-8\" *ngIf=\"this.viewCaseData.sosCompletedDetails==undefined\">: NA</div> -->\n    </div>\n    <div class=\"col-sm-12 viewCardItems \" *ngIf=\"this.viewCaseData.sosStatus=='assigned'\">\n      <div class=\"col-sm-4\">Comment </div>\n      <div class=\"col-sm-8\" *ngIf=\"this.viewCaseData.sosAssignedDetails!=undefined\">:\n        {{this.viewCaseData.sosAssignedDetails.comment}}</div>\n      <!-- <div class=\"col-sm-8\" *ngIf=\"this.viewCaseData.sosCompletedDetails==undefined\">: NA</div> -->\n    </div>\n\n    <!-- <div class=\"col-sm-12 viewCardItems\">\n      <div class=\"col-sm-4\">Latitude </div>\n      <div class=\"col-sm-8\" *ngIf=\"this.viewCaseData.latitude!=undefined\">: {{this.viewCaseData.latitude}}</div>\n      <div class=\"col-sm-8\" *ngIf=\"this.viewCaseData.latitude==undefined\">: NA</div>\n\n    </div>\n\n    <div class=\"col-sm-12 viewCardItems\">\n      <div class=\"col-sm-4\">Longitude </div>\n      <div class=\"col-sm-8\" *ngIf=\"this.viewCaseData.longitude!=undefined\">: {{this.viewCaseData.longitude}}</div>\n      <div class=\"col-sm-8\" *ngIf=\"this.viewCaseData.longitude==undefined\">: NA</div>\n\n    </div> -->\n\n    <div class=\"col-sm-12 viewCardItems\">\n      <div class=\"col-sm-4\">Date & Time </div>\n      <div class=\"col-sm-8\" *ngIf=\"this.viewCaseData.timestamp!=undefined\">: {{this.viewCaseData.timestamp}}</div>\n      <div class=\"col-sm-8\" *ngIf=\"this.viewCaseData.timestamp==undefined\">: NA</div>\n\n    </div>\n\n\n\n    <div class=\"col-sm-12 viewCardItems\">\n      <div class=\"col-sm-3\">Video :</div>\n      <!-- <div class=\"col-sm-9\" *ngIf=\"this.viewCaseData.filePaths!=undefined\" style=\"word-wrap: break-word;\"><a\n          href=\"{{this.viewCaseData.filePaths}}\" target=\"_blank\">{{this.viewCaseData.filePaths}}</a></div> -->\n      <div class=\"col-sm-9\" *ngIf=\"this.viewCaseData.filePaths!=undefined\"> <video width=\"220\" height=\"100\" controls\n          muted autoplay>\n          <source src=\"{{this.viewCaseData.filePaths}}\" type=\"video/mp4\">\n          <!-- <source src=\"../../assets/Images/1.mp4\" type=\"video/mp4\"> -->\n          <!-- <source src=\"movie.ogg\" type=\"video/ogg\"> -->\n\n        </video>\n      </div>\n\n    </div>\n\n    <div class=\"col-sm-12 viewCardItems\">\n      <div class=\"col-sm-4\">Status </div>\n      <div class=\"col-sm-8\" *ngIf=\"this.viewCaseData.sosStatus!=undefined\">: {{this.viewCaseData.sosStatus}}</div>\n      <div class=\"col-sm-8\" *ngIf=\"this.viewCaseData.sosStatus==undefined\">: NA</div>\n\n    </div>\n\n    <div class=\"col-sm-12 viewCardItems\" *ngIf=\"this.viewCaseData.sosStatus=='assigned'\">\n      <!-- <div class=\"col-sm-4\">Information Conveyed to </div>\n      <div class=\"col-sm-8\">:  -->\n      <mat-form-field class=\"example-full-width\">\n        <mat-label>Information Conveyed to</mat-label>\n        <input matInput placeholder=\"\" value=\"\" [(ngModel)]=\"this.InformationConveyedTo\">\n      </mat-form-field>\n      <!-- </div> -->\n\n    </div>\n\n    <div class=\"col-sm-12 viewCardItems\" *ngIf=\"this.viewCaseData.sosStatus=='assigned'\">\n      <div class=\"col-sm-4\">Crime Number </div>\n      <div class=\"col-sm-8\">:\n      <mat-form-field class=\"example-full-width\">\n        <!-- <mat-label>Enter Crime Number</mat-label> -->\n        <input matInput placeholder=\"\" value=\"\" [(ngModel)]=\"this.CrimeNumber\">\n      </mat-form-field>\n      </div>\n\n    </div>\n\n    <div class=\"col-sm-12 viewCardItems\" *ngIf=\"this.viewCaseData.sosStatus=='assigned'\">\n      <div class=\"col-sm-6\">Is FIR Registered </div>\n      <div class=\"col-sm-6\">: <mat-radio-group aria-labelledby=\"example-radio-group-label\" class=\"example-radio-group\"\n          [(ngModel)]=\"this.fir\">\n          <mat-radio-button class=\"example-radio-button\" [value]=\"\" (click)=\"getFIRvalue('Yes')\">\n            Yes\n          </mat-radio-button>\n          <mat-radio-button class=\"example-radio-button\" [value]=\"\" (click)=\"getFIRvalue('No')\">\n            No\n          </mat-radio-button>\n        </mat-radio-group>\n      </div>\n      <!-- <mat-form-field class=\"example-full-width\">\n        <mat-label>Information Conveyed to</mat-label>\n        <input matInput placeholder=\"\" value=\"\">\n      </mat-form-field> -->\n\n    </div>\n\n    <div class=\"col-sm-12\" style=\"text-align: right;padding-top: 10px;\">\n      <div class=\"container1\">\n        <button type=\"button\" class=\"btn btn-primary\" (click)=\"GoToAssignedPage()\"\n          *ngIf=\"this.viewCaseData.sosStatus=='pending'\" style=\"margin-top: -20px;\">Assign</button>\n        <button type=\"button\" class=\"btn btn-primary\" data-toggle=\"modal\" data-target=\"#completedmsg1\"\n          *ngIf=\"this.viewCaseData.sosStatus=='pending'\" style=\"margin-top: -20px;\">TEST</button>\n        <!-- <button type=\"button\" class=\"btn btn-primary\" *ngIf=\"this.viewCaseData.sosStatus=='pending\" data-toggle=\"modal\" data-target=\"#completedmsg\">Complete</button> -->\n        <button type=\"button\" class=\"btn btn-primary\" *ngIf=\"this.viewCaseData.sosStatus=='assigned'\"\n          data-toggle=\"modal\" data-target=\"#completedmsg\" style=\"margin-top: -100px;\">Complete</button>\n      </div>\n    </div>\n  </mat-card>\n</div>\n\n<div class=\"col-sm-6 ViewCard\">\n  <mat-card>\n    <h3>Locations</h3>\n    <!-- <iframe\n            src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d122409.99752939396!2d80.57442004841059!3d16.51031772678085!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a35eff9482d944b%3A0x939b7e84ab4a0265!2sVijayawada%2C%20Andhra%20Pradesh!5e0!3m2!1sen!2sin!4v1578880840314!5m2!1sen!2sin\"\n            width=\"500\" height=\"320\" frameborder=\"0\" style=\"border:0;\" allowfullscreen=\"\"></iframe>\n            <div id=\"map\" style=\"width: 500px; height: 400px;\"></div> -->\n    <agm-map #gm [latitude]=\"lat1\" [longitude]=\"lng1\" [zoom]=\"zoom\" [mapTypeControl]=\"true\"\n      *ngIf=\"this.locationsarr.length==this.LocationsData.length\">\n      <ng-container *ngFor=\"let item of this.locationsarr\">\n        <agm-marker [latitude]=\"item.lat\" [longitude]=\"item.lng\" (mouseOver)=\"onMouseOver(infoWindow, gm)\"\n          (mouseOut)=\"onMouseOut(infoWindow, $event)\"\n          [iconUrl]=\"{ url:'disha/assets/Images/pointer.png',scaledSize: { width: 45, height: 45, anchor : {x:19, y:19} }, labelOrigin:{x:10,y:10}}\">\n\n          <agm-info-window [disableAutoPan]=\"false\" #infoWindow>\n\n            <div>\n              <p> PS:{{item.psName}}</p>\n              <p>PS Mobile No:{{item.psMobile}}</p>\n              <p>PS Unit:{{item.psUnit}}</p>\n            </div>\n            <!-- <div> -->\n            <!-- <a (click)=\"onClickInfoView({id:m.id})\" class=\"btn btn-attention pull-right\">Daje <i class=\"fa fa-angle-double-right\"></i></a> -->\n            <!-- </div> -->\n\n          </agm-info-window>\n        </agm-marker>\n        <!-- <agm-marker [latitude]=\"lat3\" [longitude]=\"lng3\"></agm-marker> -->\n\n      </ng-container>\n      <!-- <agm-marker [latitude]=\"lat1\" [longitude]=\"lng1\" [iconUrl]=\"{ url:'../assets/Images/marker.gif',scaledSize: { width: 45, height: 45, anchor : {x:19, y:19} }, labelOrigin:{x:10,y:10}}\"></agm-marker> -->\n      <agm-marker [latitude]=\"lat1\" [longitude]=\"lng1\" (mouseOver)=\"onMouseOver(infoWindow, gm)\"\n        (mouseOut)=\"onMouseOut(infoWindow, $event)\"\n        [iconUrl]=\"{ url:'disha/assets/Images/marker.gif',scaledSize: { width: 45, height: 45, anchor : {x:19, y:19} }, labelOrigin:{x:10,y:10}}\">\n        <agm-info-window [disableAutoPan]=\"false\" #infoWindow>\n\n          <div>\n            SOS Victim Location\n          </div>\n\n\n        </agm-info-window>\n      </agm-marker>\n    </agm-map>\n  </mat-card>\n</div>\n\n<div id=\"completedmsg\" class=\"modal fade\" role=\"dialog\">\n  <div class=\"modal-dialog\">\n\n    <!-- Modal content-->\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n        <h4 class=\"modal-title\">Completed Message</h4>\n      </div>\n      <div class=\"modal-body\">\n        <textarea class=\"form-control\" rows=\"2\" id=\"comment\" [(ngModel)]=\"this.textMsg\"></textarea>\n        <!-- <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\" style=\"float:right;\">Assign</button>\n        <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\" style=\"float:right;\">Cancel</button> -->\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Cancel</button>\n        <button type=\"button\" class=\"btn btn-default btn-info\" (click)=\"completeCase(this.textMsg)\" data-dismiss=\"modal\"\n          style=\"float:right;\">Completed</button>\n      </div>\n    </div>\n\n  </div>\n</div>\n<div id=\"completedmsg1\" class=\"modal fade\" role=\"dialog\">\n  <div class=\"modal-dialog\">\n\n    <!-- Modal content-->\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n        <h4 class=\"modal-title\">Completed Message</h4>\n      </div>\n      <div class=\"modal-body\">\n        <textarea class=\"form-control\" rows=\"2\" id=\"comment\" [(ngModel)]=\"this.textMsg\"></textarea>\n        <!-- <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\" style=\"float:right;\">Assign</button>\n        <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\" style=\"float:right;\">Cancel</button> -->\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Cancel</button>\n        <button type=\"button\" class=\"btn btn-default btn-info\" (click)=\"completeCase1(this.textMsg)\"\n          data-dismiss=\"modal\" style=\"float:right;\">Completed</button>\n      </div>\n    </div>\n\n  </div>\n</div>");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/Global/Services.ts":
/*!************************************!*\
  !*** ./src/app/Global/Services.ts ***!
  \************************************/
/*! exports provided: Services */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Services", function() { return Services; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var Services = /** @class */ (function () {
    function Services(http, _Router) {
        var _this = this;
        this.http = http;
        this._Router = _Router;
        this.DashBoardTitle = "Pending";
        this.isAllView = false;
        //BaseUrl = "http://18.140.96.106:5000/";
        this.BaseUrl = "http://disha.appolice.gov.in:5000/";
        console.log(JSON.parse(localStorage.getItem('UserDetails')));
        var userdata = JSON.parse(localStorage.getItem('UserDetails'));
        // this.postAPI("getTripCount",{}).subscribe(tripCounts => {
        //   console.log(tripCounts["data"]);
        //   this.TripsCount=tripCounts["data"];
        // },err=>{
        //   console.log(err);
        // });
        // this.postAPI("allsosRecordsCount",{}).subscribe(sosCounts => {
        //   console.log(sosCounts["data"]);
        //   this.SOSCount=sosCounts["data"];
        //      },err=>{
        //        console.log(err);
        //      });
        if (userdata != undefined) {
            this.UserData = userdata;
            console.log(this.UserData);
            var obj = {
                "district": this.UserData.district
            };
            console.log(obj);
            this.postAPI("getTripCount", obj).subscribe(function (tripCounts) {
                console.log(tripCounts["data"]);
                _this.TripsCount = tripCounts["data"];
            }, function (err) {
                console.log(err);
            });
            this.postAPI("allsosRecordsCount", obj).subscribe(function (sosCounts) {
                console.log(sosCounts["data"]);
                _this.SOSCount = sosCounts["data"];
                _this._Router.navigate(["/Homepage/Dashboard"]);
            }, function (err) {
                console.log(err);
            });
            // this._Router.navigate(["/Homepage/Dashboard"]);
        }
    }
    Services.prototype.ngOnInit = function () {
        //POST  /getTripCount
        //POST  /allsosRecordsCount
    };
    // this._base.getAPI(url).subscribe(data => {
    //   }
    Services.prototype.postAPI = function (url, inputObj) {
        return this.http
            .post(this.BaseUrl + url, inputObj)
            .map(function (res) {
            return res;
        });
    };
    Services.prototype.getAPIfun = function (url) {
        return this.http
            .get(this.BaseUrl + url)
            .map(function (res) {
            return res;
        });
    };
    Services.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
    ]; };
    Services = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], Services);
    return Services;
}());



/***/ }),

/***/ "./src/app/all-reports-view/all-reports-view.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/all-reports-view/all-reports-view.component.scss ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FsbC1yZXBvcnRzLXZpZXcvYWxsLXJlcG9ydHMtdmlldy5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/all-reports-view/all-reports-view.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/all-reports-view/all-reports-view.component.ts ***!
  \****************************************************************/
/*! exports provided: AllReportsViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllReportsViewComponent", function() { return AllReportsViewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AllReportsViewComponent = /** @class */ (function () {
    function AllReportsViewComponent() {
    }
    AllReportsViewComponent.prototype.ngOnInit = function () {
    };
    AllReportsViewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-all-reports-view',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./all-reports-view.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/all-reports-view/all-reports-view.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./all-reports-view.component.scss */ "./src/app/all-reports-view/all-reports-view.component.scss")).default]
        })
    ], AllReportsViewComponent);
    return AllReportsViewComponent;
}());



/***/ }),

/***/ "./src/app/all-reports/all-reports.component.scss":
/*!********************************************************!*\
  !*** ./src/app/all-reports/all-reports.component.scss ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("table {\n  border-collapse: collapse;\n  width: 100%;\n}\n\nhr {\n  margin: 0px;\n  border-top: 1px solid black;\n}\n\n.viewButton {\n  color: white;\n  background-color: #21c3e6;\n  border: none;\n}\n\n.viewButton:hover {\n  background-color: #f3719a;\n}\n\n.mat-form-field {\n  font-size: 14px;\n  width: 100%;\n}\n\n.mat-column-city {\n  width: 35%;\n}\n\n.mat-column-mobileNumber {\n  width: 15%;\n}\n\nmat-card {\n  height: 80px;\n}\n\n.homeImages {\n  height: 50px;\n  margin-right: 10px;\n}\n\n.Pendingcard .mat-card {\n  background-image: -webkit-gradient(linear, left top, right top, from(#f5af19), to(#f12711));\n  background-image: linear-gradient(to right, #f5af19, #f12711);\n  color: white;\n  cursor: pointer;\n}\n\n.Assignedcard .mat-card {\n  background-image: -webkit-gradient(linear, left top, right top, from(#00B4DB), to(#0083B0));\n  background-image: linear-gradient(to right, #00B4DB, #0083B0);\n  color: white;\n  cursor: pointer;\n}\n\n.Completedcard .mat-card {\n  background-image: -webkit-gradient(linear, left top, right top, from(#38ef7d), to(#11998e));\n  background-image: linear-gradient(to right, #38ef7d, #11998e);\n  color: white;\n  cursor: pointer;\n}\n\n.cardTitles {\n  font-size: 20px;\n}\n\n.cardCount {\n  float: right;\n  font-size: 20px;\n  border: 2px solid white;\n  padding: 12px;\n  /* border-radius: 25px; */\n  border-radius: 18px;\n  padding-top: 3px;\n  padding-bottom: 3px;\n  margin-top: 5px;\n}\n\n.mat-header-cell {\n  font-size: 15px;\n  color: black;\n}\n\n.paginationButton {\n  color: white;\n  background-color: #21c3e6;\n  border: none;\n  padding: 10px;\n  margin: 10px;\n  float: right;\n}\n\n.paginationButton:hover {\n  background-color: #f3719a;\n}\n\n.SubmitButton {\n  color: white;\n  background-color: #21c3e6;\n  border: none;\n  padding: 5px;\n  border-radius: 5px;\n  margin-top: 5px;\n}\n\n.make-grey {\n  background-color: #bdb9b9;\n}\n\n.alertMsg {\n  text-align: right;\n  color: pink;\n  padding-right: 50px;\n}\n\n.alertMsg p {\n  float: right;\n  padding: 5px;\n  background: pink;\n  height: 35px;\n  color: black;\n  border-radius: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWxsLXJlcG9ydHMvQzpcXFVzZXJzXFxocFxcTXVzaWNcXGRpc2hhMS9zcmNcXGFwcFxcYWxsLXJlcG9ydHNcXGFsbC1yZXBvcnRzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hbGwtcmVwb3J0cy9hbGwtcmVwb3J0cy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHlCQUFBO0VBQ0EsV0FBQTtBQ0NKOztBRFNFO0VBQ0UsV0FBQTtFQUNBLDJCQUFBO0FDTko7O0FEU0U7RUFDRSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0FDTko7O0FEU0U7RUFDRSx5QkFBQTtBQ05KOztBRG1CQTtFQUNFLGVBQUE7RUFDQSxXQUFBO0FDaEJGOztBRHNCQTtFQUNBLFVBQUE7QUNuQkE7O0FEcUJBO0VBQ0UsVUFBQTtBQ2xCRjs7QURxQkE7RUFDSSxZQUFBO0FDbEJKOztBRHFCQTtFQUNFLFlBQUE7RUFDQSxrQkFBQTtBQ2xCRjs7QURxQkE7RUFDRSwyRkFBQTtFQUFBLDZEQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUNsQkY7O0FEb0JBO0VBQ0UsMkZBQUE7RUFBQSw2REFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FDakJGOztBRG1CQTtFQUNFLDJGQUFBO0VBQUEsNkRBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQ2hCRjs7QURtQkE7RUFDRSxlQUFBO0FDaEJGOztBRG1CQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsdUJBQUE7RUFDQSxhQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FDaEJBOztBRG1CQTtFQUNFLGVBQUE7RUFDQSxZQUFBO0FDaEJGOztBRHFCQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7QUNsQkE7O0FEcUJBO0VBQ0EseUJBQUE7QUNsQkE7O0FEcUJBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUNsQkE7O0FEcUJBO0VBQ0EseUJBQUE7QUNsQkE7O0FEb0JBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7QUNqQkE7O0FEb0JBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUNqQkEiLCJmaWxlIjoic3JjL2FwcC9hbGwtcmVwb3J0cy9hbGwtcmVwb3J0cy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInRhYmxlIHtcclxuICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbiAgXHJcbi8vICAuYWxsUmVwb3J0cyB0YWJsZSwgdGQsIHRoIHtcclxuLy8gICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xyXG4vLyAgICAgcGFkZGluZzogNXB4O1xyXG4vLyAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4vLyAgICAgLy9mb250LXNpemU6IDI1cHg7XHJcbi8vICAgfVxyXG4gIFxyXG4gIGhye1xyXG4gICAgbWFyZ2luOiAwcHg7XHJcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgYmxhY2s7XHJcbiAgfVxyXG5cclxuICAudmlld0J1dHRvbntcclxuICAgIGNvbG9yOndoaXRlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzIxYzNlNjtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICB9XHJcbiAgXHJcbiAgLnZpZXdCdXR0b246aG92ZXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjM3MTlhOztcclxuICB9XHJcblxyXG5cclxuICAvL3Nvc1xyXG4gIFxyXG4vLyAuZXhhbXBsZS1jb250YWluZXIge1xyXG4vLyAgIGhlaWdodDogMzUwcHg7XHJcbi8vICAgb3ZlcmZsb3c6IGF1dG87XHJcbi8vIH1cclxuXHJcblxyXG5cclxuLm1hdC1mb3JtLWZpZWxkIHtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi8vIHRkLCB0aCB7XHJcbi8vICAgd2lkdGg6IDI1JTtcclxuLy8gfVxyXG4ubWF0LWNvbHVtbi1jaXR5IHtcclxud2lkdGg6IDM1JTtcclxufVxyXG4ubWF0LWNvbHVtbi1tb2JpbGVOdW1iZXIge1xyXG4gIHdpZHRoOiAxNSU7XHJcbiAgICB9XHJcblxyXG5tYXQtY2FyZHtcclxuICAgIGhlaWdodDogODBweDtcclxufVxyXG5cclxuLmhvbWVJbWFnZXN7XHJcbiAgaGVpZ2h0OiA1MHB4O1xyXG4gIG1hcmdpbi1yaWdodDogMTBweDtcclxufVxyXG5cclxuLlBlbmRpbmdjYXJkIC5tYXQtY2FyZHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICNmNWFmMTksICNmMTI3MTEpO1xyXG4gIGNvbG9yOndoaXRlO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4uQXNzaWduZWRjYXJkIC5tYXQtY2FyZHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICMwMEI0REIgLCAjMDA4M0IwKTtcclxuICBjb2xvcjp3aGl0ZTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuLkNvbXBsZXRlZGNhcmQgLm1hdC1jYXJke1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzM4ZWY3ZCwgIzExOTk4ZSk7XHJcbiAgY29sb3I6d2hpdGU7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uY2FyZFRpdGxlc3tcclxuICBmb250LXNpemU6IDIwcHg7XHJcbn1cclxuXHJcbi5jYXJkQ291bnR7XHJcbmZsb2F0OiByaWdodDtcclxuZm9udC1zaXplOiAyMHB4O1xyXG5ib3JkZXI6IDJweCBzb2xpZCB3aGl0ZTtcclxucGFkZGluZzogMTJweDtcclxuLyogYm9yZGVyLXJhZGl1czogMjVweDsgKi9cclxuYm9yZGVyLXJhZGl1czogMThweDtcclxucGFkZGluZy10b3A6IDNweDtcclxucGFkZGluZy1ib3R0b206IDNweDtcclxubWFyZ2luLXRvcDogNXB4O1xyXG59XHJcblxyXG4ubWF0LWhlYWRlci1jZWxse1xyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxuICBjb2xvcjpibGFjaztcclxufVxyXG5cclxuXHJcblxyXG4ucGFnaW5hdGlvbkJ1dHRvbntcclxuY29sb3I6d2hpdGU7XHJcbmJhY2tncm91bmQtY29sb3I6ICMyMWMzZTY7XHJcbmJvcmRlcjogbm9uZTtcclxucGFkZGluZzogMTBweDtcclxubWFyZ2luOiAxMHB4O1xyXG5mbG9hdDpyaWdodDtcclxufVxyXG5cclxuLnBhZ2luYXRpb25CdXR0b246aG92ZXJ7XHJcbmJhY2tncm91bmQtY29sb3I6ICNmMzcxOWE7O1xyXG59XHJcblxyXG4uU3VibWl0QnV0dG9ue1xyXG5jb2xvcjogd2hpdGU7XHJcbmJhY2tncm91bmQtY29sb3I6ICMyMWMzZTY7XHJcbmJvcmRlcjogbm9uZTtcclxucGFkZGluZzogNXB4O1xyXG5ib3JkZXItcmFkaXVzOiA1cHg7XHJcbm1hcmdpbi10b3A6IDVweDtcclxufVxyXG5cclxuLm1ha2UtZ3JleXtcclxuYmFja2dyb3VuZC1jb2xvcjogI2JkYjliOTtcclxufVxyXG4uYWxlcnRNc2d7XHJcbnRleHQtYWxpZ246IHJpZ2h0O1xyXG5jb2xvcjpwaW5rO1xyXG5wYWRkaW5nLXJpZ2h0OiA1MHB4O1xyXG59XHJcblxyXG4uYWxlcnRNc2cgcHtcclxuZmxvYXQ6IHJpZ2h0O1xyXG5wYWRkaW5nOiA1cHg7XHJcbmJhY2tncm91bmQ6IHBpbms7XHJcbmhlaWdodDogMzVweDtcclxuY29sb3I6IGJsYWNrO1xyXG5ib3JkZXItcmFkaXVzOiA1cHg7XHJcbn0iLCJ0YWJsZSB7XG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG5ociB7XG4gIG1hcmdpbjogMHB4O1xuICBib3JkZXItdG9wOiAxcHggc29saWQgYmxhY2s7XG59XG5cbi52aWV3QnV0dG9uIHtcbiAgY29sb3I6IHdoaXRlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjFjM2U2O1xuICBib3JkZXI6IG5vbmU7XG59XG5cbi52aWV3QnV0dG9uOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YzNzE5YTtcbn1cblxuLm1hdC1mb3JtLWZpZWxkIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICB3aWR0aDogMTAwJTtcbn1cblxuLm1hdC1jb2x1bW4tY2l0eSB7XG4gIHdpZHRoOiAzNSU7XG59XG5cbi5tYXQtY29sdW1uLW1vYmlsZU51bWJlciB7XG4gIHdpZHRoOiAxNSU7XG59XG5cbm1hdC1jYXJkIHtcbiAgaGVpZ2h0OiA4MHB4O1xufVxuXG4uaG9tZUltYWdlcyB7XG4gIGhlaWdodDogNTBweDtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuXG4uUGVuZGluZ2NhcmQgLm1hdC1jYXJkIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjZjVhZjE5LCAjZjEyNzExKTtcbiAgY29sb3I6IHdoaXRlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5Bc3NpZ25lZGNhcmQgLm1hdC1jYXJkIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjMDBCNERCLCAjMDA4M0IwKTtcbiAgY29sb3I6IHdoaXRlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5Db21wbGV0ZWRjYXJkIC5tYXQtY2FyZCB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzM4ZWY3ZCwgIzExOTk4ZSk7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uY2FyZFRpdGxlcyB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn1cblxuLmNhcmRDb3VudCB7XG4gIGZsb2F0OiByaWdodDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBib3JkZXI6IDJweCBzb2xpZCB3aGl0ZTtcbiAgcGFkZGluZzogMTJweDtcbiAgLyogYm9yZGVyLXJhZGl1czogMjVweDsgKi9cbiAgYm9yZGVyLXJhZGl1czogMThweDtcbiAgcGFkZGluZy10b3A6IDNweDtcbiAgcGFkZGluZy1ib3R0b206IDNweDtcbiAgbWFyZ2luLXRvcDogNXB4O1xufVxuXG4ubWF0LWhlYWRlci1jZWxsIHtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBjb2xvcjogYmxhY2s7XG59XG5cbi5wYWdpbmF0aW9uQnV0dG9uIHtcbiAgY29sb3I6IHdoaXRlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjFjM2U2O1xuICBib3JkZXI6IG5vbmU7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIG1hcmdpbjogMTBweDtcbiAgZmxvYXQ6IHJpZ2h0O1xufVxuXG4ucGFnaW5hdGlvbkJ1dHRvbjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmMzcxOWE7XG59XG5cbi5TdWJtaXRCdXR0b24ge1xuICBjb2xvcjogd2hpdGU7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyMWMzZTY7XG4gIGJvcmRlcjogbm9uZTtcbiAgcGFkZGluZzogNXB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIG1hcmdpbi10b3A6IDVweDtcbn1cblxuLm1ha2UtZ3JleSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNiZGI5Yjk7XG59XG5cbi5hbGVydE1zZyB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBjb2xvcjogcGluaztcbiAgcGFkZGluZy1yaWdodDogNTBweDtcbn1cblxuLmFsZXJ0TXNnIHAge1xuICBmbG9hdDogcmlnaHQ7XG4gIHBhZGRpbmc6IDVweDtcbiAgYmFja2dyb3VuZDogcGluaztcbiAgaGVpZ2h0OiAzNXB4O1xuICBjb2xvcjogYmxhY2s7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/all-reports/all-reports.component.ts":
/*!******************************************************!*\
  !*** ./src/app/all-reports/all-reports.component.ts ***!
  \******************************************************/
/*! exports provided: AllReportsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllReportsComponent", function() { return AllReportsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/esm5/paginator.es5.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm5/table.es5.js");
/* harmony import */ var _Global_Services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Global/Services */ "./src/app/Global/Services.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_add_observable_interval__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/add/observable/interval */ "./node_modules/rxjs-compat/_esm5/add/observable/interval.js");








var AllReportsComponent = /** @class */ (function () {
    function AllReportsComponent(_Router, _Services, _DatePipe) {
        this._Router = _Router;
        this._Services = _Services;
        this._DatePipe = _DatePipe;
        this.isAllView = false;
        this.Limit = {
            "limit": 10,
            "skip": 0,
            "district": ""
        };
        this.searchObj = {
            name: "",
            mobileNumber: "",
            firStatus: "",
            district: ""
        };
        this.prevText = "<< Prev";
        this.nexrText = "Next >>";
        this.PageTitle = "Pending";
        this.dataSource = null;
        this.PendingListCount = 0;
        this.AssignedListCount = 0;
        this.CompletedListCount = 0;
        this.displayMsg = "";
        this.tableTotalData = {
            firStatusCount: 0,
            SosCount: 0,
            PendingCount: 0,
            AssignedCount: 0,
            CompletedCount: 0,
            DownloadsCount: 0
        };
        this.getData();
        this.reportsCounts();
    }
    AllReportsComponent.prototype.ngOnInit = function () {
    };
    AllReportsComponent.prototype.reportsCounts = function () {
        var _this = this;
        this._Services.postAPI("sosRecords/FirStatus", {}).subscribe(function (resData) {
            console.log(resData["data"]);
            _this.tableTotalData.firStatusCount = resData["data"].firStatusCount;
            // this.allReportsData=resData["data"];
        }, function (err) {
            console.log(err);
        });
        this._Services.postAPI("allsosRecordsCount", {}).subscribe(function (resData) {
            console.log(resData["data"]);
            _this.tableTotalData.PendingCount = resData["data"].pendingSOSCount;
            _this.tableTotalData.AssignedCount = resData["data"].assignedSOSCount;
            _this.tableTotalData.CompletedCount = resData["data"].completedSOSCount;
            _this.tableTotalData.SosCount = resData["data"].pendingSOSCount + resData["data"].assignedSOSCount + resData["data"].completedSOSCount;
            // this.allReportsData=resData["data"];
        }, function (err) {
            console.log(err);
        });
        this._Services.postAPI("user/count", {}).subscribe(function (resData) {
            console.log(resData["data"].userCount);
            _this.tableTotalData.DownloadsCount = resData["data"].userCount;
        }, function (err) {
            console.log(err);
        });
    };
    AllReportsComponent.prototype.getData = function () {
        var _this = this;
        this._Services.postAPI("allsosRecordsCount/district", {}).subscribe(function (resData) {
            console.log(resData["data"]);
            var allrecordsObj = resData["data"];
            _this._Services.postAPI("sosRecords/FirStatus/district", {}).subscribe(function (resData1) {
                console.log(resData1["data"]);
                for (var i = 0; i < resData1["data"].length; i++) {
                    for (var j = 0; j < allrecordsObj.length; j++) {
                        if (allrecordsObj[j].district == resData1["data"][i].district) {
                            allrecordsObj[j].FIRCount = resData1["data"][i].sosCount;
                        }
                    }
                }
                // this.allReportsData=resData["data"];
            }, function (err) {
                console.log(err);
            });
            _this.allReportsData = allrecordsObj;
        }, function (err) {
            console.log(err);
        });
    };
    AllReportsComponent.prototype.ViewDetails = function (districtName) {
        var _this = this;
        this._Services.isAllView = true;
        this.Limit.district = districtName;
        this.searchObj.district = districtName;
        var obj = {
            "district": districtName
        };
        console.log(obj);
        this._Services.postAPI("allsosRecordsCount", obj).subscribe(function (sosCounts) {
            console.log(sosCounts["data"]);
            _this.SOSCount = sosCounts["data"];
            // this._Router.navigate(["/Homepage/Dashboard"]);
        }, function (err) {
            console.log(err);
        });
        this.getPendingList();
    };
    AllReportsComponent.prototype.getPendingList = function () {
        var _this = this;
        this.Limit.skip = 0;
        this._Services.DashBoardTitle = "Pending";
        // this._Services.getAPIfun("sosServices/pending").subscribe(res => {
        this._Services.postAPI("sosServices/getPendingRecords", this.Limit).subscribe(function (res) {
            console.log(res);
            _this.pendingList = res["data"];
            //this.PendingListCount = this.pendingList.length;
            for (var i = 0; i < _this.pendingList.length; i++) {
                _this.pendingList[i].timestamp = _this._DatePipe.transform(_this.pendingList[i].timestamp, 'medium');
            }
            _this.displayedColumns = ['name', 'mobileNumber', 'distressAddress', 'timestamp', 'view'];
            _this.pendingList = new _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](_this.pendingList);
            console.log(_this.pendingList);
            //setTimeout(() => {
            _this.pendingList.paginator = _this.paginator;
            //}, 0);
        }, function (err) {
            console.log(err);
        });
    };
    AllReportsComponent.prototype.getAssignedList = function () {
        var _this = this;
        this.Limit.skip = 0;
        this._Services.DashBoardTitle = "Assigned";
        // this._Services.getAPIfun("sosServices/assigned").subscribe(res => {
        this._Services.postAPI("sosServices/getAssignedRecords", this.Limit).subscribe(function (res) {
            console.log(res);
            _this.assignedList = res["data"];
            //this.AssignedListCount = this.assignedList.length;
            for (var i = 0; i < _this.assignedList.length; i++) {
                _this.assignedList[i].timestamp = _this._DatePipe.transform(_this.assignedList[i].timestamp, 'medium');
            }
            _this.displayedassignedColumns = ['name', 'mobileNumber', 'city', 'timestamp', 'view'];
            _this.assignedList = new _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](_this.assignedList);
            //setTimeout(() => {
            _this.assignedList.paginator = _this.paginator;
            // }, 0);
            console.log(_this.assignedList);
        }, function (err) {
            console.log(err);
        });
    };
    AllReportsComponent.prototype.getCompletedList = function () {
        var _this = this;
        this.Limit.skip = 0;
        this._Services.DashBoardTitle = "Completed";
        this._Services.postAPI("sosServices/getCompletedRecords", this.Limit).subscribe(function (res) {
            console.log(res);
            _this.completedList = res["data"];
            //this.CompletedListCount = this.completedList.length;
            for (var i = 0; i < _this.completedList.length; i++) {
                _this.completedList[i].timestamp = _this._DatePipe.transform(_this.completedList[i].timestamp, 'medium');
            }
            _this.displayedCompletedColumns = ['name', 'mobileNumber', 'city', 'timestamp', 'view'];
            _this.completedList = new _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](_this.completedList);
            // setTimeout(() => {
            _this.completedList.paginator = _this.paginator;
            // }, 0);
            console.log(_this.completedList);
        }, function (err) {
            console.log(err);
        });
    };
    AllReportsComponent.prototype.ViewDescription = function (inputObj) {
        console.log(inputObj);
        this._Services.ViewCaseDetails = inputObj;
        this._Router.navigate(['/Homepage/View', 1]);
    };
    AllReportsComponent.prototype.getNextPage = function (inputValue) {
        //console.log(inputValue);
        if (inputValue == true) {
            this.Limit.skip = this.Limit.skip + 10;
            //console.log(this.completedLimit.skip,this.CompletedListCount);
            if (this._Services.DashBoardTitle == "Completed") {
                if (this.Limit.skip < this._Services.SOSCount.completedSOSCount) {
                    // console.log("hai");
                    this.getCompletedListByRange();
                }
            }
            else if (this._Services.DashBoardTitle == "Assigned") {
                if (this.Limit.skip < this._Services.SOSCount.assignedSOSCount) {
                    // console.log("hai");
                    this.getAssignedListByRange();
                }
            }
            else if (this._Services.DashBoardTitle == "Pending") {
                if (this.Limit.skip < this._Services.SOSCount.pendingSOSCount) {
                    // console.log("hai");
                    this.getPendingListByRange();
                }
            }
        }
        else {
            // console.log("bye");
            this.Limit.skip = this.Limit.skip - 10;
            if (this.Limit.skip >= 0) {
                // console.log("bye");
                if (this._Services.DashBoardTitle == "Completed") {
                    this.getCompletedListByRange();
                }
                else if (this._Services.DashBoardTitle == "Assigned") {
                    this.getAssignedListByRange();
                }
                else if (this._Services.DashBoardTitle == "Pending") {
                    this.getPendingListByRange();
                }
            }
        }
    };
    AllReportsComponent.prototype.getCompletedListByRange = function () {
        var _this = this;
        this._Services.postAPI("sosServices/getCompletedRecords", this.Limit).subscribe(function (res) {
            //console.log(res);
            _this.completedList = res["data"];
            //this.CompletedListCount = this.completedList.length;
            for (var i = 0; i < _this.completedList.length; i++) {
                _this.completedList[i].timestamp = _this._DatePipe.transform(_this.completedList[i].timestamp, 'medium');
            }
            _this.displayedCompletedColumns = ['name', 'mobileNumber', 'city', 'timestamp', 'view'];
            _this.completedList = new _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](_this.completedList);
            // setTimeout(() => {
            _this.completedList.paginator = _this.paginator;
            // }, 0);
            // console.log(this.completedList);
        }, function (err) {
            console.log(err);
        });
    };
    AllReportsComponent.prototype.getPendingListByRange = function () {
        var _this = this;
        this.Limit.skip = 10;
        this._Services.DashBoardTitle = "Pending";
        // this._Services.getAPIfun("sosServices/pending").subscribe(res => {
        this._Services.postAPI("sosServices/getPendingRecords", this.Limit).subscribe(function (res) {
            console.log(res);
            _this.pendingList = res["data"];
            // this.PendingListCount = this.pendingList.length;
            for (var i = 0; i < _this.pendingList.length; i++) {
                _this.pendingList[i].timestamp = _this._DatePipe.transform(_this.pendingList[i].timestamp, 'medium');
            }
            _this.displayedColumns = ['name', 'mobileNumber', 'distressAddress', 'timestamp', 'view'];
            _this.pendingList = new _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](_this.pendingList);
            console.log(_this.pendingList);
            //setTimeout(() => {
            _this.pendingList.paginator = _this.paginator;
            //}, 0);
        }, function (err) {
            console.log(err);
        });
    };
    AllReportsComponent.prototype.getAssignedListByRange = function () {
        var _this = this;
        this._Services.DashBoardTitle = "Assigned";
        // this._Services.getAPIfun("sosServices/assigned").subscribe(res => {
        this._Services.postAPI("sosServices/getAssignedRecords", this.Limit).subscribe(function (res) {
            console.log(res);
            _this.assignedList = res["data"];
            // this.AssignedListCount = this.assignedList.length;
            for (var i = 0; i < _this.assignedList.length; i++) {
                _this.assignedList[i].timestamp = _this._DatePipe.transform(_this.assignedList[i].timestamp, 'medium');
            }
            _this.displayedassignedColumns = ['name', 'mobileNumber', 'city', 'timestamp', 'view'];
            _this.assignedList = new _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](_this.assignedList);
            //setTimeout(() => {
            _this.assignedList.paginator = _this.paginator;
            // }, 0);
            console.log(_this.assignedList);
        }, function (err) {
            console.log(err);
        });
    };
    AllReportsComponent.prototype.SearchData = function (searchField, searchValue) {
        var _this = this;
        this.completedList = [];
        this.searchObj.name = "";
        this.searchObj.mobileNumber = "";
        console.log(searchField, searchValue);
        if (searchField == "Name") {
            this.searchObj.name = searchValue;
        }
        else if (searchField == "MobileNumber") {
            this.searchObj.mobileNumber = searchValue;
        }
        console.log(this.searchObj);
        this._Services.postAPI("sosRecords/sosCompleted/search", this.searchObj).subscribe(function (res) {
            //console.log(res);
            _this.completedList = res["data"];
            //this.CompletedListCount = this.completedList.length;
            for (var i = 0; i < _this.completedList.length; i++) {
                _this.completedList[i].timestamp = _this._DatePipe.transform(_this.completedList[i].timestamp, 'medium');
            }
            _this.displayedCompletedColumns = ['name', 'mobileNumber', 'city', 'timestamp', 'view'];
            _this.completedList = new _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](_this.completedList);
            // setTimeout(() => {
            _this.completedList.paginator = _this.paginator;
            // }, 0);
            // console.log(this.completedList);
        }, function (err) {
            console.log(err);
        });
    };
    AllReportsComponent.prototype.RecallAll = function () {
        this.getData();
        this.reportsCounts();
    };
    AllReportsComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
        { type: _Global_Services__WEBPACK_IMPORTED_MODULE_4__["Services"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"], { static: false })
    ], AllReportsComponent.prototype, "paginator", void 0);
    AllReportsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-all-reports',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./all-reports.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/all-reports/all-reports.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./all-reports.component.scss */ "./src/app/all-reports/all-reports.component.scss")).default]
        })
    ], AllReportsComponent);
    return AllReportsComponent;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./homepage/homepage.component */ "./src/app/homepage/homepage.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _view_view_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./view/view.component */ "./src/app/view/view.component.ts");
/* harmony import */ var _assignedpage_assignedpage_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./assignedpage/assignedpage.component */ "./src/app/assignedpage/assignedpage.component.ts");
/* harmony import */ var _track_my_travel_track_my_travel_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./track-my-travel/track-my-travel.component */ "./src/app/track-my-travel/track-my-travel.component.ts");
/* harmony import */ var _sos_sos_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./sos/sos.component */ "./src/app/sos/sos.component.ts");
/* harmony import */ var _view_track_view_track_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./view-track/view-track.component */ "./src/app/view-track/view-track.component.ts");
/* harmony import */ var _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./user-profile/user-profile.component */ "./src/app/user-profile/user-profile.component.ts");
/* harmony import */ var _reports_reports_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./reports/reports.component */ "./src/app/reports/reports.component.ts");
/* harmony import */ var _report_view_report_view_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./report-view/report-view.component */ "./src/app/report-view/report-view.component.ts");
/* harmony import */ var _change_password_change_password_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./change-password/change-password.component */ "./src/app/change-password/change-password.component.ts");
/* harmony import */ var _all_reports_all_reports_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./all-reports/all-reports.component */ "./src/app/all-reports/all-reports.component.ts");
/* harmony import */ var _all_reports_view_all_reports_view_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./all-reports-view/all-reports-view.component */ "./src/app/all-reports-view/all-reports-view.component.ts");

















var routes = [
    { path: '', redirectTo: 'Login', pathMatch: 'full' },
    { path: 'Login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"] },
    { path: 'Homepage', component: _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_3__["HomepageComponent"],
        children: [
            { path: '', redirectTo: 'Dashboard', pathMatch: 'full' },
            { path: 'Dashboard', component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_5__["DashboardComponent"] },
            { path: 'View/:Id', component: _view_view_component__WEBPACK_IMPORTED_MODULE_6__["ViewComponent"] },
            { path: 'Assignedpage', component: _assignedpage_assignedpage_component__WEBPACK_IMPORTED_MODULE_7__["AssignedpageComponent"] },
            { path: 'TrackMyTravel', component: _track_my_travel_track_my_travel_component__WEBPACK_IMPORTED_MODULE_8__["TrackMyTravelComponent"] },
            { path: 'ViewTrack', component: _view_track_view_track_component__WEBPACK_IMPORTED_MODULE_10__["ViewTrackComponent"] },
            { path: 'Sos', component: _sos_sos_component__WEBPACK_IMPORTED_MODULE_9__["SosComponent"] },
            { path: 'UserProfile', component: _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_11__["UserProfileComponent"] },
            { path: 'Reports', component: _reports_reports_component__WEBPACK_IMPORTED_MODULE_12__["ReportsComponent"] },
            { path: 'ReportView', component: _report_view_report_view_component__WEBPACK_IMPORTED_MODULE_13__["ReportViewComponent"] },
            { path: 'ChangePassword', component: _change_password_change_password_component__WEBPACK_IMPORTED_MODULE_14__["ChangePasswordComponent"] },
            { path: 'AllReports', component: _all_reports_all_reports_component__WEBPACK_IMPORTED_MODULE_15__["AllReportsComponent"] },
            { path: 'AllReportsView', component: _all_reports_view_all_reports_view_component__WEBPACK_IMPORTED_MODULE_16__["AllReportsViewComponent"] }
        ]
    },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, { useHash: true })],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Disha';
        //   $("[data-toggle=popover]").popover({
        //     html : true,
        //     content: function() {
        //       var content = $(this).attr("data-popover-content");
        //       return $(content).children(".popover-body").html();
        //     },
        //     title: function() {
        //       var title = $(this).attr("data-popover-content");
        //       return $(title).children(".popover-heading").html();
        //     }
        // });
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./homepage/homepage.component */ "./src/app/homepage/homepage.component.ts");
/* harmony import */ var _app_Global_Services__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../app/Global/Services */ "./src/app/Global/Services.ts");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm5/card.es5.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm5/table.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/esm5/menu.es5.js");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/datepicker */ "./node_modules/@angular/material/esm5/datepicker.es5.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm5/form-field.es5.js");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/radio */ "./node_modules/@angular/material/esm5/radio.es5.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/esm5/select.es5.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/esm5/core.es5.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _view_view_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./view/view.component */ "./src/app/view/view.component.ts");
/* harmony import */ var _assignedpage_assignedpage_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./assignedpage/assignedpage.component */ "./src/app/assignedpage/assignedpage.component.ts");
/* harmony import */ var _track_my_travel_track_my_travel_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./track-my-travel/track-my-travel.component */ "./src/app/track-my-travel/track-my-travel.component.ts");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/fesm5/agm-core.js");
/* harmony import */ var agm_direction__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! agm-direction */ "./node_modules/agm-direction/fesm5/agm-direction.js");
/* harmony import */ var _sos_sos_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./sos/sos.component */ "./src/app/sos/sos.component.ts");
/* harmony import */ var _view_track_view_track_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./view-track/view-track.component */ "./src/app/view-track/view-track.component.ts");
/* harmony import */ var _syncfusion_ej2_angular_charts__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @syncfusion/ej2-angular-charts */ "./node_modules/@syncfusion/ej2-angular-charts/@syncfusion/ej2-angular-charts.es5.js");
/* harmony import */ var _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./user-profile/user-profile.component */ "./src/app/user-profile/user-profile.component.ts");
/* harmony import */ var _reports_reports_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./reports/reports.component */ "./src/app/reports/reports.component.ts");
/* harmony import */ var _report_view_report_view_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./report-view/report-view.component */ "./src/app/report-view/report-view.component.ts");
/* harmony import */ var _change_password_change_password_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./change-password/change-password.component */ "./src/app/change-password/change-password.component.ts");
/* harmony import */ var _all_reports_all_reports_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./all-reports/all-reports.component */ "./src/app/all-reports/all-reports.component.ts");
/* harmony import */ var _all_reports_view_all_reports_view_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./all-reports-view/all-reports-view.component */ "./src/app/all-reports-view/all-reports-view.component.ts");






























// import { MDBBootstrapModule } from 'angular-bootstrap-md';
// import { ChartsModule, WavesModule } from 'angular-bootstrap-md'








//import { DataLabelService, LineSeriesService } from '@syncfusion/ej2-angular-charts';
var MY_FORMATS = {
    parse: {
        dateInput: 'LL',
    },
    display: {
        dateInput: 'LL',
        monthYearLabel: 'MMM YYYY',
        dateA11yLabel: 'LL',
        monthYearA11yLabel: 'MMMM YYYY',
    },
};
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_6__["HomepageComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_19__["LoginComponent"],
                _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_20__["DashboardComponent"],
                _view_view_component__WEBPACK_IMPORTED_MODULE_22__["ViewComponent"],
                _assignedpage_assignedpage_component__WEBPACK_IMPORTED_MODULE_23__["AssignedpageComponent"],
                _track_my_travel_track_my_travel_component__WEBPACK_IMPORTED_MODULE_24__["TrackMyTravelComponent"],
                _sos_sos_component__WEBPACK_IMPORTED_MODULE_27__["SosComponent"],
                _view_track_view_track_component__WEBPACK_IMPORTED_MODULE_28__["ViewTrackComponent"],
                _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_30__["UserProfileComponent"],
                _reports_reports_component__WEBPACK_IMPORTED_MODULE_31__["ReportsComponent"],
                _report_view_report_view_component__WEBPACK_IMPORTED_MODULE_32__["ReportViewComponent"],
                _change_password_change_password_component__WEBPACK_IMPORTED_MODULE_33__["ChangePasswordComponent"],
                _all_reports_all_reports_component__WEBPACK_IMPORTED_MODULE_34__["AllReportsComponent"],
                _all_reports_view_all_reports_view_component__WEBPACK_IMPORTED_MODULE_35__["AllReportsViewComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _syncfusion_ej2_angular_charts__WEBPACK_IMPORTED_MODULE_29__["ChartModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardModule"],
                _angular_material_table__WEBPACK_IMPORTED_MODULE_9__["MatTableModule"],
                _angular_material_menu__WEBPACK_IMPORTED_MODULE_11__["MatMenuModule"],
                _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_12__["MatDatepickerModule"],
                _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatInputModule"],
                _angular_material_radio__WEBPACK_IMPORTED_MODULE_14__["MatRadioModule"],
                _angular_material_select__WEBPACK_IMPORTED_MODULE_15__["MatSelectModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_21__["RouterModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatPaginatorModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_17__["BrowserAnimationsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_18__["HttpClientModule"],
                _agm_core__WEBPACK_IMPORTED_MODULE_25__["AgmCoreModule"].forRoot({
                    //apiKey: 'AIzaSyAPUhfCkGAK4lYGHb4SSKMxkfuevJpvDCU'
                    // apiKey: 'AIzaSyCaBBWVu8PUqXLOypn0QvDmmR2eFTdVLck'
                    apiKey: 'AIzaSyDvkaBz5arJ1Qp0xxxmpgsnNiVu7h0Ivwc'
                }),
                agm_direction__WEBPACK_IMPORTED_MODULE_26__["AgmDirectionModule"],
            ],
            providers: [_angular_material_datepicker__WEBPACK_IMPORTED_MODULE_12__["MatDatepickerModule"], _app_Global_Services__WEBPACK_IMPORTED_MODULE_7__["Services"], _syncfusion_ej2_angular_charts__WEBPACK_IMPORTED_MODULE_29__["TooltipService"], _syncfusion_ej2_angular_charts__WEBPACK_IMPORTED_MODULE_29__["CategoryService"], _syncfusion_ej2_angular_charts__WEBPACK_IMPORTED_MODULE_29__["BarSeriesService"], _syncfusion_ej2_angular_charts__WEBPACK_IMPORTED_MODULE_29__["ColumnSeriesService"], _syncfusion_ej2_angular_charts__WEBPACK_IMPORTED_MODULE_29__["LineSeriesService"], _syncfusion_ej2_angular_charts__WEBPACK_IMPORTED_MODULE_29__["LegendService"], _syncfusion_ej2_angular_charts__WEBPACK_IMPORTED_MODULE_29__["DataLabelService"], _syncfusion_ej2_angular_charts__WEBPACK_IMPORTED_MODULE_29__["MultiLevelLabelService"], _syncfusion_ej2_angular_charts__WEBPACK_IMPORTED_MODULE_29__["SelectionService"],
                { provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_16__["MAT_DATE_LOCALE"], useValue: { useUtc: true } }],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/assignedpage/assignedpage.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/assignedpage/assignedpage.component.scss ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("table {\n  width: 100%;\n}\n\n.mat-form-field {\n  font-size: 14px;\n  width: 100%;\n}\n\ntd, th {\n  width: 25%;\n}\n\nmat-card {\n  height: 80px;\n}\n\n.homeImages {\n  height: 50px;\n  margin-right: 10px;\n}\n\n.mat-header-cell {\n  font-size: 15px;\n  color: black;\n}\n\n.viewButton {\n  color: white;\n  background-color: #21c3e6;\n  border: none;\n}\n\n.viewButton:hover {\n  background-color: #f3719a;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXNzaWduZWRwYWdlL0M6XFxVc2Vyc1xcaHBcXE11c2ljXFxkaXNoYTEvc3JjXFxhcHBcXGFzc2lnbmVkcGFnZVxcYXNzaWduZWRwYWdlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hc3NpZ25lZHBhZ2UvYXNzaWduZWRwYWdlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0ksV0FBQTtBQ0RKOztBRElFO0VBQ0UsZUFBQTtFQUNBLFdBQUE7QUNESjs7QURJRTtFQUNFLFVBQUE7QUNESjs7QURJRTtFQUNJLFlBQUE7QUNETjs7QURJRTtFQUNFLFlBQUE7RUFDQSxrQkFBQTtBQ0RKOztBRE1BO0VBQ0ksZUFBQTtFQUNBLFlBQUE7QUNISjs7QURNQTtFQUNFLFlBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7QUNIRjs7QURNQTtFQUNFLHlCQUFBO0FDSEYiLCJmaWxlIjoic3JjL2FwcC9hc3NpZ25lZHBhZ2UvYXNzaWduZWRwYWdlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcblxyXG50YWJsZSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbiAgXHJcbiAgLm1hdC1mb3JtLWZpZWxkIHtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuICBcclxuICB0ZCwgdGgge1xyXG4gICAgd2lkdGg6IDI1JTtcclxuICB9XHJcblxyXG4gIG1hdC1jYXJke1xyXG4gICAgICBoZWlnaHQ6IDgwcHg7XHJcbiAgfVxyXG5cclxuICAuaG9tZUltYWdlc3tcclxuICAgIGhlaWdodDogNTBweDtcclxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICB9XHJcblxyXG4gIFxyXG5cclxuLm1hdC1oZWFkZXItY2VsbHtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIGNvbG9yOmJsYWNrO1xyXG59XHJcblxyXG4udmlld0J1dHRvbntcclxuICBjb2xvcjp3aGl0ZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjFjM2U2O1xyXG4gIGJvcmRlcjogbm9uZTtcclxufVxyXG5cclxuLnZpZXdCdXR0b246aG92ZXJ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YzNzE5YTs7XHJcbn0iLCJ0YWJsZSB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4ubWF0LWZvcm0tZmllbGQge1xuICBmb250LXNpemU6IDE0cHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG50ZCwgdGgge1xuICB3aWR0aDogMjUlO1xufVxuXG5tYXQtY2FyZCB7XG4gIGhlaWdodDogODBweDtcbn1cblxuLmhvbWVJbWFnZXMge1xuICBoZWlnaHQ6IDUwcHg7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbn1cblxuLm1hdC1oZWFkZXItY2VsbCB7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgY29sb3I6IGJsYWNrO1xufVxuXG4udmlld0J1dHRvbiB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIxYzNlNjtcbiAgYm9yZGVyOiBub25lO1xufVxuXG4udmlld0J1dHRvbjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmMzcxOWE7XG59Il19 */");

/***/ }),

/***/ "./src/app/assignedpage/assignedpage.component.ts":
/*!********************************************************!*\
  !*** ./src/app/assignedpage/assignedpage.component.ts ***!
  \********************************************************/
/*! exports provided: AssignedpageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssignedpageComponent", function() { return AssignedpageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/esm5/paginator.es5.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm5/table.es5.js");
/* harmony import */ var _Global_Services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Global/Services */ "./src/app/Global/Services.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






var AssignedpageComponent = /** @class */ (function () {
    function AssignedpageComponent(_Services, _Router) {
        this._Services = _Services;
        this._Router = _Router;
        this.textMsg = "";
        this.displayedColumns = ['psName', 'mobile', 'landLine', 'unit', 'view'];
        var inputObj = {
            "name": "policestations",
            "distance": 50000,
            "coordinates": [parseFloat(this._Services.ViewCaseDetails.longitude), parseFloat(this._Services.ViewCaseDetails.latitude)]
        };
        console.log(inputObj);
        this.getData(inputObj);
    }
    AssignedpageComponent.prototype.ngOnInit = function () {
    };
    AssignedpageComponent.prototype.getData = function (inputObj) {
        var _this = this;
        this._Services.postAPI("getLocations", inputObj).subscribe(function (res) {
            console.log(res);
            _this.LocationsData = res["data"];
            _this.LocationsData = new _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](_this.LocationsData);
            setTimeout(function () {
                _this.LocationsData.paginator = _this.paginator;
            }, 0);
            console.log(_this.LocationsData);
        }, function (err) {
            console.log(err);
        });
    };
    AssignedpageComponent.prototype.SetObj = function (inputObj) {
        console.log(inputObj);
        // var objInput = {
        //   "sosId": this._Services.ViewCaseDetails._id,
        //   "sosAssignedBy": "admin",
        //   "sosAssignedTo": {
        //     "policeStationId": inputObj._id,
        //     "policeStationName": inputObj.psName,
        //     "policeStationArea": inputObj.unit
        //   }
        // }
        this.assignedObj = {
            "sosId": this._Services.ViewCaseDetails._id,
            "sosAssignedBy": "admin",
            "sosAssignedTo": {
                "policeStationId": inputObj._id,
                "policeStationName": inputObj.psName,
                "policeStationArea": inputObj.unit,
                "mobileNumber": inputObj.mobile
            },
            "msg": ""
        };
        // this._Services.postAPI("sosServices/sosAssigning", objInput).subscribe(res => {
        //   console.log(res);
        //   this._Services.DashBoardTitle = "Assigned";
        //   this._Router.navigate(["/Homepage/Dashboard"]);
        // }, err => {
        //   console.log(err);
        // });
    };
    AssignedpageComponent.prototype.assignCase = function (textmsg) {
        var _this = this;
        this.assignedObj.msg = textmsg;
        console.log(this.assignedObj);
        this._Services.postAPI("sosServices/sosAssigning", this.assignedObj).subscribe(function (res) {
            console.log(res);
            _this._Services.DashBoardTitle = "Assigned";
            _this._Router.navigate(["/Homepage/Sos"]);
        }, function (err) {
            console.log(err);
        });
    };
    AssignedpageComponent.ctorParameters = function () { return [
        { type: _Global_Services__WEBPACK_IMPORTED_MODULE_4__["Services"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"], { static: false })
    ], AssignedpageComponent.prototype, "paginator", void 0);
    AssignedpageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-assignedpage',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./assignedpage.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/assignedpage/assignedpage.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./assignedpage.component.scss */ "./src/app/assignedpage/assignedpage.component.scss")).default]
        })
    ], AssignedpageComponent);
    return AssignedpageComponent;
}());



/***/ }),

/***/ "./src/app/change-password/change-password.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/change-password/change-password.component.scss ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".formInputs {\n  margin: 20px;\n}\n\n.formbtn {\n  margin: 20px;\n  text-align: right;\n}\n\n.changepasswordCard {\n  background-image: -webkit-gradient(linear, left top, right top, from(#6666cc), color-stop(#efeaea), to(#4da54d));\n  background-image: linear-gradient(to right, #6666cc, #efeaea, #4da54d);\n  height: 250px;\n  padding-top: 30px;\n}\n\n.viewButton {\n  color: white;\n  background-color: #116f84;\n  border: none;\n  padding: 10px;\n  width: 100px;\n  border-radius: 5px;\n  float: right;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2hhbmdlLXBhc3N3b3JkL0M6XFxVc2Vyc1xcaHBcXE11c2ljXFxkaXNoYTEvc3JjXFxhcHBcXGNoYW5nZS1wYXNzd29yZFxcY2hhbmdlLXBhc3N3b3JkLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jaGFuZ2UtcGFzc3dvcmQvY2hhbmdlLXBhc3N3b3JkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtBQ0NKOztBRElBO0VBQ0ksWUFBQTtFQUNBLGlCQUFBO0FDREo7O0FES0E7RUFDSSxnSEFBQTtFQUFBLHNFQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0FDRko7O0FES0E7RUFDSSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QUNGSiIsImZpbGUiOiJzcmMvYXBwL2NoYW5nZS1wYXNzd29yZC9jaGFuZ2UtcGFzc3dvcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9ybUlucHV0c3tcclxuICAgIG1hcmdpbjogMjBweDtcclxuICAgIC8vIGhlaWdodDogNXZ3O1xyXG4gICAgLy8gd2lkdGg6IDIzdnc7XHJcbn1cclxuXHJcbi5mb3JtYnRue1xyXG4gICAgbWFyZ2luOiAyMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICAvLyBoZWlnaHQ6IDV2dztcclxuICAgIC8vIHdpZHRoOiAyM3Z3O1xyXG59XHJcbi5jaGFuZ2VwYXNzd29yZENhcmR7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICM2NjY2Y2MgLCNlZmVhZWEsICM0ZGE1NGQpO1xyXG4gICAgaGVpZ2h0OiAyNTBweDtcclxuICAgIHBhZGRpbmctdG9wOiAzMHB4O1xyXG59XHJcblxyXG4udmlld0J1dHRvbntcclxuICAgIGNvbG9yOndoaXRlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzExNmY4NDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICB3aWR0aDoxMDBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICB9XHJcbiAgXHJcbi8vICAgLnZpZXdCdXR0b246aG92ZXJ7XHJcbi8vICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjM3MTlhOztcclxuLy8gICB9IiwiLmZvcm1JbnB1dHMge1xuICBtYXJnaW46IDIwcHg7XG59XG5cbi5mb3JtYnRuIHtcbiAgbWFyZ2luOiAyMHB4O1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cblxuLmNoYW5nZXBhc3N3b3JkQ2FyZCB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzY2NjZjYywgI2VmZWFlYSwgIzRkYTU0ZCk7XG4gIGhlaWdodDogMjUwcHg7XG4gIHBhZGRpbmctdG9wOiAzMHB4O1xufVxuXG4udmlld0J1dHRvbiB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzExNmY4NDtcbiAgYm9yZGVyOiBub25lO1xuICBwYWRkaW5nOiAxMHB4O1xuICB3aWR0aDogMTAwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgZmxvYXQ6IHJpZ2h0O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/change-password/change-password.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/change-password/change-password.component.ts ***!
  \**************************************************************/
/*! exports provided: ChangePasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangePasswordComponent", function() { return ChangePasswordComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _Global_Services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Global/Services */ "./src/app/Global/Services.ts");




var ChangePasswordComponent = /** @class */ (function () {
    function ChangePasswordComponent(_Services, _Router) {
        this._Services = _Services;
        this._Router = _Router;
        this.changePasswordData = {
            "userName": "",
            "oldPassword": "",
            "newPassword": ""
        };
        this.changePasswordData = {
            "userName": "",
            "oldPassword": "",
            "newPassword": ""
        };
    }
    ChangePasswordComponent.prototype.ngOnInit = function () {
    };
    ChangePasswordComponent.prototype.savePassword = function (inputObj) {
        var _this = this;
        console.log(inputObj);
        this._Services.postAPI("admin/changePassword", inputObj).subscribe(function (respones) {
            console.log(respones);
            localStorage.clear();
            _this._Router.navigate(["/Login"]);
        }, function (err) {
            console.log(err);
        });
    };
    ChangePasswordComponent.ctorParameters = function () { return [
        { type: _Global_Services__WEBPACK_IMPORTED_MODULE_3__["Services"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    ChangePasswordComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-change-password',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./change-password.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/change-password/change-password.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./change-password.component.scss */ "./src/app/change-password/change-password.component.scss")).default]
        })
    ], ChangePasswordComponent);
    return ChangePasswordComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.component.scss":
/*!****************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.scss ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("table {\n  width: 100%;\n}\n\n.mat-form-field {\n  font-size: 14px;\n  width: 100%;\n}\n\nmat-card {\n  height: 80px;\n}\n\n.homeImages {\n  height: 50px;\n  margin-right: 10px;\n}\n\n.Pendingcard .mat-card {\n  background-image: -webkit-gradient(linear, left top, right top, from(#f5af19), to(#f12711));\n  background-image: linear-gradient(to right, #f5af19, #f12711);\n  color: white;\n  cursor: pointer;\n}\n\n.Assignedcard .mat-card {\n  background-image: -webkit-gradient(linear, left top, right top, from(#00B4DB), to(#0083B0));\n  background-image: linear-gradient(to right, #00B4DB, #0083B0);\n  color: white;\n  cursor: pointer;\n}\n\n.Completedcard .mat-card {\n  background-image: -webkit-gradient(linear, left top, right top, from(#38ef7d), to(#11998e));\n  background-image: linear-gradient(to right, #38ef7d, #11998e);\n  color: white;\n  cursor: pointer;\n}\n\n.cardTitles {\n  font-size: 20px;\n}\n\n.cardCount {\n  float: right;\n  font-size: 20px;\n  border: 2px solid white;\n  padding: 12px;\n  /* border-radius: 25px; */\n  border-radius: 18px;\n  padding-top: 3px;\n  padding-bottom: 3px;\n  margin-top: 5px;\n}\n\n.mat-header-cell {\n  font-size: 15px;\n  color: black;\n}\n\n.viewButton {\n  color: white;\n  background-color: #21c3e6;\n  border: none;\n}\n\n.viewButton:hover {\n  background-color: #f3719a;\n}\n\n.alertMsg {\n  text-align: right;\n  color: pink;\n  padding-right: 50px;\n}\n\n.alertMsg p {\n  float: right;\n  padding: 5px;\n  background: pink;\n  height: 35px;\n  color: black;\n  border-radius: 5px;\n}\n\ntable {\n  border-collapse: collapse;\n}\n\ntable, td, th {\n  border: 1px solid black;\n  padding: 5px;\n  font-size: 25px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL0M6XFxVc2Vyc1xcaHBcXE11c2ljXFxkaXNoYTEvc3JjXFxhcHBcXGRhc2hib2FyZFxcZGFzaGJvYXJkLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0ksV0FBQTtBQ0RKOztBRElFO0VBQ0UsZUFBQTtFQUNBLFdBQUE7QUNESjs7QURRRTtFQUNJLFlBQUE7QUNMTjs7QURRRTtFQUNFLFlBQUE7RUFDQSxrQkFBQTtBQ0xKOztBRFFFO0VBQ0UsMkZBQUE7RUFBQSw2REFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FDTEo7O0FET0U7RUFDRSwyRkFBQTtFQUFBLDZEQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUNKSjs7QURNQTtFQUNJLDJGQUFBO0VBQUEsNkRBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQ0hKOztBRE1BO0VBQ0ksZUFBQTtBQ0hKOztBRE1BO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSx1QkFBQTtFQUNBLGFBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QUNIQTs7QURNQTtFQUNJLGVBQUE7RUFDQSxZQUFBO0FDSEo7O0FETUE7RUFDRSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0FDSEY7O0FETUE7RUFDRSx5QkFBQTtBQ0hGOztBRE1BO0VBQ0UsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7QUNIRjs7QURNQTtFQUNFLFlBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FDSEY7O0FETUE7RUFDRSx5QkFBQTtBQ0hGOztBRE1BO0VBQ0UsdUJBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQ0hGIiwiZmlsZSI6InNyYy9hcHAvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxudGFibGUge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG4gIFxyXG4gIC5tYXQtZm9ybS1maWVsZCB7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbiAgXHJcbiAgLy8gdGQsIHRoIHtcclxuICAvLyAgIHdpZHRoOiAyNSU7XHJcbiAgLy8gfVxyXG5cclxuICBtYXQtY2FyZHtcclxuICAgICAgaGVpZ2h0OiA4MHB4O1xyXG4gIH1cclxuXHJcbiAgLmhvbWVJbWFnZXN7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgfVxyXG5cclxuICAuUGVuZGluZ2NhcmQgLm1hdC1jYXJke1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjZjVhZjE5LCAjZjEyNzExKTtcclxuICAgIGNvbG9yOndoaXRlO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIH1cclxuICAuQXNzaWduZWRjYXJkIC5tYXQtY2FyZHtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzAwQjREQiAsICMwMDgzQjApO1xyXG4gICAgY29sb3I6d2hpdGU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuLkNvbXBsZXRlZGNhcmQgLm1hdC1jYXJke1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjMzhlZjdkLCAjMTE5OThlKTtcclxuICAgIGNvbG9yOndoaXRlO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uY2FyZFRpdGxlc3tcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxufVxyXG5cclxuLmNhcmRDb3VudHtcclxuZmxvYXQ6IHJpZ2h0O1xyXG5mb250LXNpemU6IDIwcHg7XHJcbmJvcmRlcjogMnB4IHNvbGlkIHdoaXRlO1xyXG5wYWRkaW5nOiAxMnB4O1xyXG4vKiBib3JkZXItcmFkaXVzOiAyNXB4OyAqL1xyXG5ib3JkZXItcmFkaXVzOiAxOHB4O1xyXG5wYWRkaW5nLXRvcDogM3B4O1xyXG5wYWRkaW5nLWJvdHRvbTogM3B4O1xyXG5tYXJnaW4tdG9wOiA1cHg7XHJcbn1cclxuXHJcbi5tYXQtaGVhZGVyLWNlbGx7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICBjb2xvcjpibGFjaztcclxufVxyXG5cclxuLnZpZXdCdXR0b257XHJcbiAgY29sb3I6d2hpdGU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIxYzNlNjtcclxuICBib3JkZXI6IG5vbmU7XHJcbn1cclxuXHJcbi52aWV3QnV0dG9uOmhvdmVye1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmMzcxOWE7O1xyXG59XHJcblxyXG4uYWxlcnRNc2d7XHJcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgY29sb3I6cGluaztcclxuICBwYWRkaW5nLXJpZ2h0OiA1MHB4O1xyXG59XHJcblxyXG4uYWxlcnRNc2cgcHtcclxuICBmbG9hdDogcmlnaHQ7XHJcbiAgcGFkZGluZzogNXB4O1xyXG4gIGJhY2tncm91bmQ6IHBpbms7XHJcbiAgaGVpZ2h0OiAzNXB4O1xyXG4gIGNvbG9yOiBibGFjaztcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbn1cclxuXHJcbnRhYmxlIHtcclxuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xyXG59XHJcblxyXG50YWJsZSwgdGQsIHRoIHtcclxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcclxuICBwYWRkaW5nOiA1cHg7XHJcbiAgZm9udC1zaXplOiAyNXB4O1xyXG59IiwidGFibGUge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLm1hdC1mb3JtLWZpZWxkIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICB3aWR0aDogMTAwJTtcbn1cblxubWF0LWNhcmQge1xuICBoZWlnaHQ6IDgwcHg7XG59XG5cbi5ob21lSW1hZ2VzIHtcbiAgaGVpZ2h0OiA1MHB4O1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG5cbi5QZW5kaW5nY2FyZCAubWF0LWNhcmQge1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICNmNWFmMTksICNmMTI3MTEpO1xuICBjb2xvcjogd2hpdGU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLkFzc2lnbmVkY2FyZCAubWF0LWNhcmQge1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICMwMEI0REIsICMwMDgzQjApO1xuICBjb2xvcjogd2hpdGU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLkNvbXBsZXRlZGNhcmQgLm1hdC1jYXJkIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjMzhlZjdkLCAjMTE5OThlKTtcbiAgY29sb3I6IHdoaXRlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5jYXJkVGl0bGVzIHtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuXG4uY2FyZENvdW50IHtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBmb250LXNpemU6IDIwcHg7XG4gIGJvcmRlcjogMnB4IHNvbGlkIHdoaXRlO1xuICBwYWRkaW5nOiAxMnB4O1xuICAvKiBib3JkZXItcmFkaXVzOiAyNXB4OyAqL1xuICBib3JkZXItcmFkaXVzOiAxOHB4O1xuICBwYWRkaW5nLXRvcDogM3B4O1xuICBwYWRkaW5nLWJvdHRvbTogM3B4O1xuICBtYXJnaW4tdG9wOiA1cHg7XG59XG5cbi5tYXQtaGVhZGVyLWNlbGwge1xuICBmb250LXNpemU6IDE1cHg7XG4gIGNvbG9yOiBibGFjaztcbn1cblxuLnZpZXdCdXR0b24ge1xuICBjb2xvcjogd2hpdGU7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyMWMzZTY7XG4gIGJvcmRlcjogbm9uZTtcbn1cblxuLnZpZXdCdXR0b246aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjM3MTlhO1xufVxuXG4uYWxlcnRNc2cge1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgY29sb3I6IHBpbms7XG4gIHBhZGRpbmctcmlnaHQ6IDUwcHg7XG59XG5cbi5hbGVydE1zZyBwIHtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBwYWRkaW5nOiA1cHg7XG4gIGJhY2tncm91bmQ6IHBpbms7XG4gIGhlaWdodDogMzVweDtcbiAgY29sb3I6IGJsYWNrO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbnRhYmxlIHtcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbn1cblxudGFibGUsIHRkLCB0aCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuICBwYWRkaW5nOiA1cHg7XG4gIGZvbnQtc2l6ZTogMjVweDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/esm5/paginator.es5.js");
/* harmony import */ var _Global_Services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Global/Services */ "./src/app/Global/Services.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(_Services, _DatePipe, _Router) {
        var _this = this;
        this._Services = _Services;
        this._DatePipe = _DatePipe;
        this._Router = _Router;
        this.PageTitle = "Pending";
        this.dataSource = null;
        this.PendingListCount = 0;
        this.AssignedListCount = 0;
        this.CompletedListCount = 0;
        this.totalCount = 0;
        this.displayMsg = "";
        this.chartData = [];
        this.totalCount = 0;
        // this._Services.postAPI("getTrips/all", {}).subscribe(res => {
        //   console.log(res);
        //   this.TripList = res["data"];
        //   this.TripListCount = this.TripList.length;
        // }, err => {
        //   console.log(err);
        // });
        this._Services.postAPI("emergencyCallCount", {}).subscribe(function (res) {
            console.log(res);
            _this.emergencyCount = res["data"].count;
        }, function (err) {
            console.log(err);
        });
        // this._Services.getAPIfun("sosServices/pending").subscribe(res => {
        //   console.log(res);
        //   this.pendingList = res["data"];
        //   this.PendingListCount = this.pendingList.length;
        //   this.totalCount += this.PendingListCount;
        // }, err => {
        //   console.log(err);
        // });
        // this._Services.getAPIfun("sosServices/completed").subscribe(res => {
        //   console.log(res);
        //   this.completedList = res["data"];
        //   this.CompletedListCount = this.completedList.length;
        //   this.totalCount += this.CompletedListCount;
        // }, err => {
        //   console.log(err);
        // });
        // this._Services.getAPIfun("sosServices/assigned").subscribe(res => {
        //   console.log(res);
        //   this.assignedList = res["data"];
        //   this.AssignedListCount = this.assignedList.length;
        //   this.totalCount += this.AssignedListCount;
        // }, err => {
        //   console.log(err);
        // });
        setTimeout(function () {
            _this.generateGraph();
        }, 6000);
        //this.getReportData();
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent.prototype.ChangePage = function (inputData) {
        if (inputData == 'Sos') {
            this._Services.DashBoardTitle = "Pending";
            this._Router.navigate(["/Homepage/Sos"]);
        }
        else {
            this._Services.DashBoardTitle = inputData;
            this._Router.navigate(["/Homepage/TrackMyTravel"]);
        }
    };
    DashboardComponent.prototype.generateGraph = function () {
        var obj = {
            country: "Count",
            SOS: this._Services.SOSCount.pendingSOSCount + this._Services.SOSCount.assignedSOSCount + this._Services.SOSCount.completedSOSCount,
            Track_My_Travel: this._Services.TripsCount.activeTripsCount + this._Services.TripsCount.inactiveTripsCount,
            '112/100': this.emergencyCount,
            Pending: this._Services.SOSCount.pendingSOSCount,
            Completed: this._Services.SOSCount.completedSOSCount,
            Assigned: this._Services.SOSCount.assignedSOSCount
        };
        this.chartData.push(obj);
        console.log(this.chartData);
        // this.chartData = [
        //   // { country: "USA", SOS: this.totalCount, Track_My_Travel: this.TripListCount, '112/100': 0,Pending: this.PendingListCount, Assigned: this.AssignedListCount, }
        //   { country: "Count", SOS: 160, Track_My_Travel: 13, '112/100': 0, Pending: 123, Completed: 31, Assigned: 6 }
        // ];
        this.primaryXAxis = {
            valueType: 'Category',
            title: 'Total Details'
        };
        this.primaryYAxis = {
            minimum: 0,
            title: 'Counts'
        };
        this.title = 'Total Counts';
        this.tooltip = { enable: true };
    };
    DashboardComponent.ctorParameters = function () { return [
        { type: _Global_Services__WEBPACK_IMPORTED_MODULE_3__["Services"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["DatePipe"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"], { static: false })
    ], DashboardComponent.prototype, "paginator", void 0);
    DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dashboard',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./dashboard.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/dashboard.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./dashboard.component.scss */ "./src/app/dashboard/dashboard.component.scss")).default]
        })
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/homepage/homepage.component.scss":
/*!**************************************************!*\
  !*** ./src/app/homepage/homepage.component.scss ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".Header {\n  height: 100%;\n  background-image: -webkit-gradient(linear, left top, right top, from(#074fa4), color-stop(#efeaea), to(#4da54d));\n  background-image: linear-gradient(to right, #074fa4, #efeaea, #4da54d);\n  padding-top: 5px;\n}\n\n.alertsDiv {\n  margin: 0px;\n  padding: 5px;\n  position: fixed;\n  margin-top: -90px;\n  right: 10px;\n}\n\n.alertMsg {\n  background-color: #0E2241;\n  border-radius: 5px;\n  padding: 15px;\n  width: 200px;\n  float: right;\n  text-align: center;\n  color: white;\n}\n\n.SideNav {\n  background-color: #353535;\n  height: 120%;\n}\n\n.content {\n  height: 100%;\n}\n\n.HeaderSection {\n  height: 10%;\n}\n\n.ContentSection {\n  height: 90%;\n}\n\n.logoImage {\n  height: 4vw;\n}\n\n.logoImage1 {\n  height: 4.5vw;\n  margin-top: -15px;\n  margin-left: 60px;\n  padding: 0px 15px;\n}\n\nbody, html {\n  height: 100%;\n}\n\n/* remove outer padding */\n\n.main .row {\n  padding: 0px;\n  margin: 0px;\n}\n\n/*Remove rounded coners*/\n\nnav.sidebar.navbar {\n  border-radius: 0px;\n}\n\nnav.sidebar, .main {\n  -webkit-transition: margin 200ms ease-out;\n  transition: margin 200ms ease-out;\n}\n\n/* Add gap to nav and right windows.*/\n\n.main {\n  padding: 10px 10px 0 10px;\n}\n\n/* .....NavBar: Icon only with coloring/layout.....*/\n\n/*small/medium side display*/\n\n@media (min-width: 768px) {\n  /*Allow main to be next to Nav*/\n  .main {\n    position: absolute;\n    width: calc(100% - 40px);\n    /*keeps 100% minus nav size*/\n    margin-left: 40px;\n    float: right;\n  }\n\n  /*lets nav bar to be showed on mouseover*/\n  nav.sidebar:hover + .main {\n    margin-left: 200px;\n  }\n\n  /*Center Brand*/\n  nav.sidebar.navbar.sidebar > .container .navbar-brand, .navbar > .container-fluid .navbar-brand {\n    margin-left: 0px;\n  }\n\n  /*Center Brand*/\n  nav.sidebar .navbar-brand, nav.sidebar .navbar-header {\n    text-align: center;\n    width: 100%;\n    margin-left: 0px;\n  }\n\n  /*Center Icons*/\n  nav.sidebar a {\n    padding-right: 13px;\n  }\n\n  /*adds border top to first nav box */\n  nav.sidebar .navbar-nav > li:first-child {\n    border-top: 1px #e5e5e5 solid;\n  }\n\n  /*adds border to bottom nav boxes*/\n  nav.sidebar .navbar-nav > li {\n    border-bottom: 1px #e5e5e5 solid;\n  }\n\n  /* Colors/style dropdown box*/\n  nav.sidebar .navbar-nav .open .dropdown-menu {\n    position: static;\n    float: none;\n    width: auto;\n    margin-top: 0;\n    background-color: transparent;\n    border: 0;\n    box-shadow: none;\n  }\n\n  /*allows nav box to use 100% width*/\n  nav.sidebar .navbar-collapse, nav.sidebar .container-fluid {\n    padding: 0 0px 0 0px;\n  }\n\n  /*colors dropdown box text */\n  .navbar-inverse .navbar-nav .open .dropdown-menu > li > a {\n    color: #777;\n  }\n\n  /*gives sidebar width/height*/\n  nav.sidebar {\n    width: 200px;\n    height: 100%;\n    margin-left: -160px;\n    float: left;\n    z-index: 8000;\n    margin-bottom: 0px;\n  }\n\n  /*give sidebar 100% width;*/\n  nav.sidebar li {\n    width: 100%;\n  }\n\n  /* Move nav to full on mouse over*/\n  nav.sidebar:hover {\n    margin-left: 0px;\n  }\n\n  /*for hiden things when navbar hidden*/\n  .forAnimate {\n    opacity: 0;\n  }\n}\n\n/* .....NavBar: Fully showing nav bar..... */\n\n@media (min-width: 1330px) {\n  /*Allow main to be next to Nav*/\n  .main {\n    width: calc(100% - 200px);\n    /*keeps 100% minus nav size*/\n    margin-left: 200px;\n  }\n\n  /*Show all nav*/\n  nav.sidebar {\n    margin-left: 0px;\n    float: left;\n  }\n\n  /*Show hidden items on nav*/\n  nav.sidebar .forAnimate {\n    opacity: 1;\n  }\n\n  .notificationImg {\n    height: 2vw;\n    margin-top: 1.5vw;\n    margin-left: 20px;\n  }\n}\n\nnav.sidebar .navbar-nav .open .dropdown-menu > li > a:hover, nav.sidebar .navbar-nav .open .dropdown-menu > li > a:focus {\n  color: #CCC;\n  background-color: transparent;\n}\n\nnav:hover .forAnimate {\n  opacity: 1;\n}\n\nsection {\n  padding-left: 15px;\n}\n\n.homeImages {\n  height: 35px;\n  margin-top: -10px;\n}\n\n.homeImages1 {\n  height: 25px;\n  margin-top: -10px;\n}\n\n.userLogoImg {\n  height: 30px;\n}\n\n.signBtn {\n  color: white;\n  font-size: 15px;\n  float: right;\n  margin-top: 10px;\n  background: #5dac5c;\n  border: none;\n  border-radius: 5px;\n  padding: 5px;\n}\n\n.navbar-nav li {\n  cursor: pointer;\n}\n\n.Active {\n  color: white !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZXBhZ2UvQzpcXFVzZXJzXFxocFxcTXVzaWNcXGRpc2hhMS9zcmNcXGFwcFxcaG9tZXBhZ2VcXGhvbWVwYWdlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9ob21lcGFnZS9ob21lcGFnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7RUFHQSxnSEFBQTtFQUFBLHNFQUFBO0VBQ0EsZ0JBQUE7QUNESjs7QURJQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtBQ0RKOztBREdBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBQ0FBOztBREdBO0VBQ0kseUJBQUE7RUFDQSxZQUFBO0FDQUo7O0FER0E7RUFDSSxZQUFBO0FDQUo7O0FER0E7RUFDSSxXQUFBO0FDQUo7O0FER0E7RUFDSSxXQUFBO0FDQUo7O0FER0E7RUFDSSxXQUFBO0FDQUo7O0FERUE7RUFDSSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0FDQ0o7O0FESUE7RUFDSSxZQUFBO0FDREo7O0FESUEseUJBQUE7O0FBQ0E7RUFDSSxZQUFBO0VBQ0EsV0FBQTtBQ0RKOztBRElBLHdCQUFBOztBQUVBO0VBQ0ksa0JBQUE7QUNGSjs7QURLQTtFQUNJLHlDQUFBO0VBR0EsaUNBQUE7QUNGSjs7QURLQSxxQ0FBQTs7QUFDQTtFQUNJLHlCQUFBO0FDRko7O0FES0Esb0RBQUE7O0FBRUEsNEJBQUE7O0FBQ0E7RUFFSSwrQkFBQTtFQUNBO0lBQ0ksa0JBQUE7SUFDQSx3QkFBQTtJQUEwQiw0QkFBQTtJQUMxQixpQkFBQTtJQUNBLFlBQUE7RUNITjs7RURNRSx5Q0FBQTtFQUNBO0lBQ0ksa0JBQUE7RUNITjs7RURNRSxlQUFBO0VBQ0E7SUFDSSxnQkFBQTtFQ0hOOztFREtFLGVBQUE7RUFDQTtJQUNJLGtCQUFBO0lBQ0EsV0FBQTtJQUNBLGdCQUFBO0VDRk47O0VES0UsZUFBQTtFQUNBO0lBQ0ksbUJBQUE7RUNGTjs7RURLRSxvQ0FBQTtFQUNBO0lBQ0ksNkJBQUE7RUNGTjs7RURLRSxrQ0FBQTtFQUNBO0lBQ0ksZ0NBQUE7RUNGTjs7RURLRSw2QkFBQTtFQUNBO0lBQ0ksZ0JBQUE7SUFDQSxXQUFBO0lBQ0EsV0FBQTtJQUNBLGFBQUE7SUFDQSw2QkFBQTtJQUNBLFNBQUE7SUFFQSxnQkFBQTtFQ0ZOOztFREtFLG1DQUFBO0VBQ0E7SUFDSSxvQkFBQTtFQ0ZOOztFREtFLDRCQUFBO0VBQ0E7SUFDSSxXQUFBO0VDRk47O0VES0UsNkJBQUE7RUFDQTtJQUNJLFlBQUE7SUFDQSxZQUFBO0lBQ0EsbUJBQUE7SUFDQSxXQUFBO0lBQ0EsYUFBQTtJQUNBLGtCQUFBO0VDRk47O0VES0UsMkJBQUE7RUFDQTtJQUNJLFdBQUE7RUNGTjs7RURLRSxrQ0FBQTtFQUNBO0lBQ0ksZ0JBQUE7RUNGTjs7RURJRSxzQ0FBQTtFQUNBO0lBQ0ksVUFBQTtFQ0ROO0FBQ0Y7O0FESUEsNENBQUE7O0FBRUE7RUFFSSwrQkFBQTtFQUNBO0lBQ0kseUJBQUE7SUFBMkIsNEJBQUE7SUFDM0Isa0JBQUE7RUNITjs7RURNRSxlQUFBO0VBQ0E7SUFDSSxnQkFBQTtJQUNBLFdBQUE7RUNITjs7RURLRSwyQkFBQTtFQUNBO0lBQ0ksVUFBQTtFQ0ZOOztFRElFO0lBQ0ksV0FBQTtJQUNBLGlCQUFBO0lBQ0EsaUJBQUE7RUNETjtBQUNGOztBREtBO0VBQ0ksV0FBQTtFQUNBLDZCQUFBO0FDSEo7O0FETUE7RUFDSSxVQUFBO0FDSEo7O0FES0E7RUFDSSxrQkFBQTtBQ0ZKOztBRE9BO0VBQ0ksWUFBQTtFQUNBLGlCQUFBO0FDSko7O0FET0E7RUFDSSxZQUFBO0VBQ0EsaUJBQUE7QUNKSjs7QURPQTtFQUNJLFlBQUE7QUNKSjs7QURPQTtFQUNJLFlBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FDSko7O0FEWUE7RUFDSSxlQUFBO0FDVEo7O0FEWUE7RUFDSSx1QkFBQTtBQ1RKIiwiZmlsZSI6InNyYy9hcHAvaG9tZXBhZ2UvaG9tZXBhZ2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuSGVhZGVye1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgLy9iYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xyXG4gICAgLy9iYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICNmZjk0NzIgLCAjZjI3MDljKTtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzA3NGZhNCAsI2VmZWFlYSwgIzRkYTU0ZCk7XHJcbiAgICBwYWRkaW5nLXRvcDogNXB4O1xyXG59XHJcblxyXG4uYWxlcnRzRGl2e1xyXG4gICAgbWFyZ2luOiAwcHg7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICBtYXJnaW4tdG9wOiAtOTBweDtcclxuICAgIHJpZ2h0OiAxMHB4O1xyXG59XHJcbi5hbGVydE1zZ3tcclxuYmFja2dyb3VuZC1jb2xvcjogIzBFMjI0MTtcclxuYm9yZGVyLXJhZGl1czogNXB4O1xyXG5wYWRkaW5nOiAxNXB4O1xyXG53aWR0aDogMjAwcHg7XHJcbmZsb2F0OiByaWdodDtcclxudGV4dC1hbGlnbjogY2VudGVyO1xyXG5jb2xvcjogd2hpdGVcclxufVxyXG5cclxuLlNpZGVOYXZ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzUzNTM1O1xyXG4gICAgaGVpZ2h0OjEyMCU7XHJcbn1cclxuXHJcbi5jb250ZW50e1xyXG4gICAgaGVpZ2h0OjEwMCU7XHJcbn1cclxuXHJcbi5IZWFkZXJTZWN0aW9ue1xyXG4gICAgaGVpZ2h0OiAxMCU7XHJcbn1cclxuXHJcbi5Db250ZW50U2VjdGlvbntcclxuICAgIGhlaWdodDogOTAlO1xyXG59XHJcblxyXG4ubG9nb0ltYWdle1xyXG4gICAgaGVpZ2h0OiA0dnc7XHJcbn1cclxuLmxvZ29JbWFnZTF7XHJcbiAgICBoZWlnaHQ6IDQuNXZ3O1xyXG4gICAgbWFyZ2luLXRvcDogLTE1cHg7XHJcbiAgICBtYXJnaW4tbGVmdDogNjBweDtcclxuICAgIHBhZGRpbmc6IDBweCAxNXB4O1xyXG59XHJcblxyXG5cclxuLy9zaWRlIG1lbnVcclxuYm9keSxodG1se1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4vKiByZW1vdmUgb3V0ZXIgcGFkZGluZyAqL1xyXG4ubWFpbiAucm93e1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG4gICAgbWFyZ2luOiAwcHg7XHJcbn1cclxuXHJcbi8qUmVtb3ZlIHJvdW5kZWQgY29uZXJzKi9cclxuXHJcbm5hdi5zaWRlYmFyLm5hdmJhciB7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwcHg7XHJcbn1cclxuXHJcbm5hdi5zaWRlYmFyLCAubWFpbntcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogbWFyZ2luIDIwMG1zIGVhc2Utb3V0O1xyXG4gICAgLW1vei10cmFuc2l0aW9uOiBtYXJnaW4gMjAwbXMgZWFzZS1vdXQ7XHJcbiAgICAtby10cmFuc2l0aW9uOiBtYXJnaW4gMjAwbXMgZWFzZS1vdXQ7XHJcbiAgICB0cmFuc2l0aW9uOiBtYXJnaW4gMjAwbXMgZWFzZS1vdXQ7XHJcbn1cclxuXHJcbi8qIEFkZCBnYXAgdG8gbmF2IGFuZCByaWdodCB3aW5kb3dzLiovXHJcbi5tYWlue1xyXG4gICAgcGFkZGluZzogMTBweCAxMHB4IDAgMTBweDtcclxufVxyXG5cclxuLyogLi4uLi5OYXZCYXI6IEljb24gb25seSB3aXRoIGNvbG9yaW5nL2xheW91dC4uLi4uKi9cclxuXHJcbi8qc21hbGwvbWVkaXVtIHNpZGUgZGlzcGxheSovXHJcbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xyXG5cclxuICAgIC8qQWxsb3cgbWFpbiB0byBiZSBuZXh0IHRvIE5hdiovXHJcbiAgICAubWFpbntcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIDQwcHgpOyAvKmtlZXBzIDEwMCUgbWludXMgbmF2IHNpemUqL1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiA0MHB4O1xyXG4gICAgICAgIGZsb2F0OiByaWdodDtcclxuICAgIH1cclxuXHJcbiAgICAvKmxldHMgbmF2IGJhciB0byBiZSBzaG93ZWQgb24gbW91c2VvdmVyKi9cclxuICAgIG5hdi5zaWRlYmFyOmhvdmVyICsgLm1haW57XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDIwMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC8qQ2VudGVyIEJyYW5kKi9cclxuICAgIG5hdi5zaWRlYmFyLm5hdmJhci5zaWRlYmFyPi5jb250YWluZXIgLm5hdmJhci1icmFuZCwgLm5hdmJhcj4uY29udGFpbmVyLWZsdWlkIC5uYXZiYXItYnJhbmQge1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAwcHg7XHJcbiAgICB9XHJcbiAgICAvKkNlbnRlciBCcmFuZCovXHJcbiAgICBuYXYuc2lkZWJhciAubmF2YmFyLWJyYW5kLCBuYXYuc2lkZWJhciAubmF2YmFyLWhlYWRlcntcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDBweDtcclxuICAgIH1cclxuXHJcbiAgICAvKkNlbnRlciBJY29ucyovXHJcbiAgICBuYXYuc2lkZWJhciBhe1xyXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDEzcHg7XHJcbiAgICB9XHJcblxyXG4gICAgLyphZGRzIGJvcmRlciB0b3AgdG8gZmlyc3QgbmF2IGJveCAqL1xyXG4gICAgbmF2LnNpZGViYXIgLm5hdmJhci1uYXYgPiBsaTpmaXJzdC1jaGlsZHtcclxuICAgICAgICBib3JkZXItdG9wOiAxcHggI2U1ZTVlNSBzb2xpZDtcclxuICAgIH1cclxuXHJcbiAgICAvKmFkZHMgYm9yZGVyIHRvIGJvdHRvbSBuYXYgYm94ZXMqL1xyXG4gICAgbmF2LnNpZGViYXIgLm5hdmJhci1uYXYgPiBsaXtcclxuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggI2U1ZTVlNSBzb2xpZDtcclxuICAgIH1cclxuXHJcbiAgICAvKiBDb2xvcnMvc3R5bGUgZHJvcGRvd24gYm94Ki9cclxuICAgIG5hdi5zaWRlYmFyIC5uYXZiYXItbmF2IC5vcGVuIC5kcm9wZG93bi1tZW51IHtcclxuICAgICAgICBwb3NpdGlvbjogc3RhdGljO1xyXG4gICAgICAgIGZsb2F0OiBub25lO1xyXG4gICAgICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgYm9yZGVyOiAwO1xyXG4gICAgICAgIC13ZWJraXQtYm94LXNoYWRvdzogbm9uZTtcclxuICAgICAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgfVxyXG5cclxuICAgIC8qYWxsb3dzIG5hdiBib3ggdG8gdXNlIDEwMCUgd2lkdGgqL1xyXG4gICAgbmF2LnNpZGViYXIgLm5hdmJhci1jb2xsYXBzZSwgbmF2LnNpZGViYXIgLmNvbnRhaW5lci1mbHVpZHtcclxuICAgICAgICBwYWRkaW5nOiAwIDBweCAwIDBweDtcclxuICAgIH1cclxuXHJcbiAgICAvKmNvbG9ycyBkcm9wZG93biBib3ggdGV4dCAqL1xyXG4gICAgLm5hdmJhci1pbnZlcnNlIC5uYXZiYXItbmF2IC5vcGVuIC5kcm9wZG93bi1tZW51PmxpPmEge1xyXG4gICAgICAgIGNvbG9yOiAjNzc3O1xyXG4gICAgfVxyXG5cclxuICAgIC8qZ2l2ZXMgc2lkZWJhciB3aWR0aC9oZWlnaHQqL1xyXG4gICAgbmF2LnNpZGViYXJ7XHJcbiAgICAgICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICBtYXJnaW4tbGVmdDogLTE2MHB4O1xyXG4gICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICAgIHotaW5kZXg6IDgwMDA7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC8qZ2l2ZSBzaWRlYmFyIDEwMCUgd2lkdGg7Ki9cclxuICAgIG5hdi5zaWRlYmFyIGxpIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxuXHJcbiAgICAvKiBNb3ZlIG5hdiB0byBmdWxsIG9uIG1vdXNlIG92ZXIqL1xyXG4gICAgbmF2LnNpZGViYXI6aG92ZXJ7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDBweDtcclxuICAgIH1cclxuICAgIC8qZm9yIGhpZGVuIHRoaW5ncyB3aGVuIG5hdmJhciBoaWRkZW4qL1xyXG4gICAgLmZvckFuaW1hdGV7XHJcbiAgICAgICAgb3BhY2l0eTogMDtcclxuICAgIH1cclxufVxyXG5cclxuLyogLi4uLi5OYXZCYXI6IEZ1bGx5IHNob3dpbmcgbmF2IGJhci4uLi4uICovXHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogMTMzMHB4KSB7XHJcblxyXG4gICAgLypBbGxvdyBtYWluIHRvIGJlIG5leHQgdG8gTmF2Ki9cclxuICAgIC5tYWlue1xyXG4gICAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAyMDBweCk7IC8qa2VlcHMgMTAwJSBtaW51cyBuYXYgc2l6ZSovXHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDIwMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC8qU2hvdyBhbGwgbmF2Ki9cclxuICAgIG5hdi5zaWRlYmFye1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAwcHg7XHJcbiAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICB9XHJcbiAgICAvKlNob3cgaGlkZGVuIGl0ZW1zIG9uIG5hdiovXHJcbiAgICBuYXYuc2lkZWJhciAuZm9yQW5pbWF0ZXtcclxuICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgfVxyXG4gICAgLm5vdGlmaWNhdGlvbkltZ3tcclxuICAgICAgICBoZWlnaHQ6IDJ2dztcclxuICAgICAgICBtYXJnaW4tdG9wOiAxLjV2dztcclxuICAgICAgICBtYXJnaW4tbGVmdDogMjBweDtcclxuICAgIH1cclxuICAgIFxyXG59XHJcblxyXG5uYXYuc2lkZWJhciAubmF2YmFyLW5hdiAub3BlbiAuZHJvcGRvd24tbWVudT5saT5hOmhvdmVyLCBuYXYuc2lkZWJhciAubmF2YmFyLW5hdiAub3BlbiAuZHJvcGRvd24tbWVudT5saT5hOmZvY3VzIHtcclxuICAgIGNvbG9yOiAjQ0NDO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbn1cclxuXHJcbm5hdjpob3ZlciAuZm9yQW5pbWF0ZXtcclxuICAgIG9wYWNpdHk6IDE7XHJcbn1cclxuc2VjdGlvbntcclxuICAgIHBhZGRpbmctbGVmdDogMTVweDtcclxufVxyXG5cclxuLy9lbmQgc2lkZSBtZW51XHJcblxyXG4uaG9tZUltYWdlc3tcclxuICAgIGhlaWdodDogMzVweDtcclxuICAgIG1hcmdpbi10b3A6IC0xMHB4O1xyXG59XHJcblxyXG4uaG9tZUltYWdlczF7XHJcbiAgICBoZWlnaHQ6IDI1cHg7XHJcbiAgICBtYXJnaW4tdG9wOiAtMTBweDtcclxufVxyXG5cclxuLnVzZXJMb2dvSW1ne1xyXG4gICAgaGVpZ2h0OjMwcHg7XHJcbn1cclxuXHJcbi5zaWduQnRue1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIGJhY2tncm91bmQ6ICM1ZGFjNWM7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbn1cclxuXHJcbi8vIC5zaWduQnRuOmhvdmVye1xyXG4vLyAgICAgY29sb3I6ICNmMzcwOWM7XHJcbi8vICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuLy8gfVxyXG5cclxuLm5hdmJhci1uYXYgbGl7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5BY3RpdmV7IFxyXG4gICAgY29sb3I6d2hpdGUgIWltcG9ydGFudDtcclxufVxyXG4vLyAuY29udGFpbmVyMSBzcGFueyAvKiBZb3UgQ2FuIE5hbWUgaXQgd2hhdCB5b3Ugd2FudCovXHJcbi8vICAgICBtYXJnaW4tcmlnaHQ6MTZweDtcclxuLy8gICAgIH1cclxuLy8gICAgIC5jb250YWluZXIxIHNwYW46bGFzdC1jaGlsZHtcclxuLy8gICAgIG1hcmdpbi1yaWdodDowcHg7XHJcbi8vICAgICAvKnNvIHRoZSBsYXN0IG9uZSBkb250IHB1c2ggdGhlIGRpdiB0aGFzIGdpdmluZyB0aGUgc3BhY2Ugb25seSBiZXR3ZWVuIHRoZSBpbnB1dHMqL1xyXG4vLyAgICAgfSIsIi5IZWFkZXIge1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzA3NGZhNCwgI2VmZWFlYSwgIzRkYTU0ZCk7XG4gIHBhZGRpbmctdG9wOiA1cHg7XG59XG5cbi5hbGVydHNEaXYge1xuICBtYXJnaW46IDBweDtcbiAgcGFkZGluZzogNXB4O1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIG1hcmdpbi10b3A6IC05MHB4O1xuICByaWdodDogMTBweDtcbn1cblxuLmFsZXJ0TXNnIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzBFMjI0MTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBwYWRkaW5nOiAxNXB4O1xuICB3aWR0aDogMjAwcHg7XG4gIGZsb2F0OiByaWdodDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5TaWRlTmF2IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM1MzUzNTtcbiAgaGVpZ2h0OiAxMjAlO1xufVxuXG4uY29udGVudCB7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLkhlYWRlclNlY3Rpb24ge1xuICBoZWlnaHQ6IDEwJTtcbn1cblxuLkNvbnRlbnRTZWN0aW9uIHtcbiAgaGVpZ2h0OiA5MCU7XG59XG5cbi5sb2dvSW1hZ2Uge1xuICBoZWlnaHQ6IDR2dztcbn1cblxuLmxvZ29JbWFnZTEge1xuICBoZWlnaHQ6IDQuNXZ3O1xuICBtYXJnaW4tdG9wOiAtMTVweDtcbiAgbWFyZ2luLWxlZnQ6IDYwcHg7XG4gIHBhZGRpbmc6IDBweCAxNXB4O1xufVxuXG5ib2R5LCBodG1sIHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4vKiByZW1vdmUgb3V0ZXIgcGFkZGluZyAqL1xuLm1haW4gLnJvdyB7XG4gIHBhZGRpbmc6IDBweDtcbiAgbWFyZ2luOiAwcHg7XG59XG5cbi8qUmVtb3ZlIHJvdW5kZWQgY29uZXJzKi9cbm5hdi5zaWRlYmFyLm5hdmJhciB7XG4gIGJvcmRlci1yYWRpdXM6IDBweDtcbn1cblxubmF2LnNpZGViYXIsIC5tYWluIHtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBtYXJnaW4gMjAwbXMgZWFzZS1vdXQ7XG4gIC1tb3otdHJhbnNpdGlvbjogbWFyZ2luIDIwMG1zIGVhc2Utb3V0O1xuICAtby10cmFuc2l0aW9uOiBtYXJnaW4gMjAwbXMgZWFzZS1vdXQ7XG4gIHRyYW5zaXRpb246IG1hcmdpbiAyMDBtcyBlYXNlLW91dDtcbn1cblxuLyogQWRkIGdhcCB0byBuYXYgYW5kIHJpZ2h0IHdpbmRvd3MuKi9cbi5tYWluIHtcbiAgcGFkZGluZzogMTBweCAxMHB4IDAgMTBweDtcbn1cblxuLyogLi4uLi5OYXZCYXI6IEljb24gb25seSB3aXRoIGNvbG9yaW5nL2xheW91dC4uLi4uKi9cbi8qc21hbGwvbWVkaXVtIHNpZGUgZGlzcGxheSovXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgLypBbGxvdyBtYWluIHRvIGJlIG5leHQgdG8gTmF2Ki9cbiAgLm1haW4ge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gNDBweCk7XG4gICAgLyprZWVwcyAxMDAlIG1pbnVzIG5hdiBzaXplKi9cbiAgICBtYXJnaW4tbGVmdDogNDBweDtcbiAgICBmbG9hdDogcmlnaHQ7XG4gIH1cblxuICAvKmxldHMgbmF2IGJhciB0byBiZSBzaG93ZWQgb24gbW91c2VvdmVyKi9cbiAgbmF2LnNpZGViYXI6aG92ZXIgKyAubWFpbiB7XG4gICAgbWFyZ2luLWxlZnQ6IDIwMHB4O1xuICB9XG5cbiAgLypDZW50ZXIgQnJhbmQqL1xuICBuYXYuc2lkZWJhci5uYXZiYXIuc2lkZWJhciA+IC5jb250YWluZXIgLm5hdmJhci1icmFuZCwgLm5hdmJhciA+IC5jb250YWluZXItZmx1aWQgLm5hdmJhci1icmFuZCB7XG4gICAgbWFyZ2luLWxlZnQ6IDBweDtcbiAgfVxuXG4gIC8qQ2VudGVyIEJyYW5kKi9cbiAgbmF2LnNpZGViYXIgLm5hdmJhci1icmFuZCwgbmF2LnNpZGViYXIgLm5hdmJhci1oZWFkZXIge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW4tbGVmdDogMHB4O1xuICB9XG5cbiAgLypDZW50ZXIgSWNvbnMqL1xuICBuYXYuc2lkZWJhciBhIHtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxM3B4O1xuICB9XG5cbiAgLyphZGRzIGJvcmRlciB0b3AgdG8gZmlyc3QgbmF2IGJveCAqL1xuICBuYXYuc2lkZWJhciAubmF2YmFyLW5hdiA+IGxpOmZpcnN0LWNoaWxkIHtcbiAgICBib3JkZXItdG9wOiAxcHggI2U1ZTVlNSBzb2xpZDtcbiAgfVxuXG4gIC8qYWRkcyBib3JkZXIgdG8gYm90dG9tIG5hdiBib3hlcyovXG4gIG5hdi5zaWRlYmFyIC5uYXZiYXItbmF2ID4gbGkge1xuICAgIGJvcmRlci1ib3R0b206IDFweCAjZTVlNWU1IHNvbGlkO1xuICB9XG5cbiAgLyogQ29sb3JzL3N0eWxlIGRyb3Bkb3duIGJveCovXG4gIG5hdi5zaWRlYmFyIC5uYXZiYXItbmF2IC5vcGVuIC5kcm9wZG93bi1tZW51IHtcbiAgICBwb3NpdGlvbjogc3RhdGljO1xuICAgIGZsb2F0OiBub25lO1xuICAgIHdpZHRoOiBhdXRvO1xuICAgIG1hcmdpbi10b3A6IDA7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyOiAwO1xuICAgIC13ZWJraXQtYm94LXNoYWRvdzogbm9uZTtcbiAgICBib3gtc2hhZG93OiBub25lO1xuICB9XG5cbiAgLyphbGxvd3MgbmF2IGJveCB0byB1c2UgMTAwJSB3aWR0aCovXG4gIG5hdi5zaWRlYmFyIC5uYXZiYXItY29sbGFwc2UsIG5hdi5zaWRlYmFyIC5jb250YWluZXItZmx1aWQge1xuICAgIHBhZGRpbmc6IDAgMHB4IDAgMHB4O1xuICB9XG5cbiAgLypjb2xvcnMgZHJvcGRvd24gYm94IHRleHQgKi9cbiAgLm5hdmJhci1pbnZlcnNlIC5uYXZiYXItbmF2IC5vcGVuIC5kcm9wZG93bi1tZW51ID4gbGkgPiBhIHtcbiAgICBjb2xvcjogIzc3NztcbiAgfVxuXG4gIC8qZ2l2ZXMgc2lkZWJhciB3aWR0aC9oZWlnaHQqL1xuICBuYXYuc2lkZWJhciB7XG4gICAgd2lkdGg6IDIwMHB4O1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBtYXJnaW4tbGVmdDogLTE2MHB4O1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIHotaW5kZXg6IDgwMDA7XG4gICAgbWFyZ2luLWJvdHRvbTogMHB4O1xuICB9XG5cbiAgLypnaXZlIHNpZGViYXIgMTAwJSB3aWR0aDsqL1xuICBuYXYuc2lkZWJhciBsaSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cblxuICAvKiBNb3ZlIG5hdiB0byBmdWxsIG9uIG1vdXNlIG92ZXIqL1xuICBuYXYuc2lkZWJhcjpob3ZlciB7XG4gICAgbWFyZ2luLWxlZnQ6IDBweDtcbiAgfVxuXG4gIC8qZm9yIGhpZGVuIHRoaW5ncyB3aGVuIG5hdmJhciBoaWRkZW4qL1xuICAuZm9yQW5pbWF0ZSB7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxufVxuLyogLi4uLi5OYXZCYXI6IEZ1bGx5IHNob3dpbmcgbmF2IGJhci4uLi4uICovXG5AbWVkaWEgKG1pbi13aWR0aDogMTMzMHB4KSB7XG4gIC8qQWxsb3cgbWFpbiB0byBiZSBuZXh0IHRvIE5hdiovXG4gIC5tYWluIHtcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gMjAwcHgpO1xuICAgIC8qa2VlcHMgMTAwJSBtaW51cyBuYXYgc2l6ZSovXG4gICAgbWFyZ2luLWxlZnQ6IDIwMHB4O1xuICB9XG5cbiAgLypTaG93IGFsbCBuYXYqL1xuICBuYXYuc2lkZWJhciB7XG4gICAgbWFyZ2luLWxlZnQ6IDBweDtcbiAgICBmbG9hdDogbGVmdDtcbiAgfVxuXG4gIC8qU2hvdyBoaWRkZW4gaXRlbXMgb24gbmF2Ki9cbiAgbmF2LnNpZGViYXIgLmZvckFuaW1hdGUge1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cblxuICAubm90aWZpY2F0aW9uSW1nIHtcbiAgICBoZWlnaHQ6IDJ2dztcbiAgICBtYXJnaW4tdG9wOiAxLjV2dztcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcbiAgfVxufVxubmF2LnNpZGViYXIgLm5hdmJhci1uYXYgLm9wZW4gLmRyb3Bkb3duLW1lbnUgPiBsaSA+IGE6aG92ZXIsIG5hdi5zaWRlYmFyIC5uYXZiYXItbmF2IC5vcGVuIC5kcm9wZG93bi1tZW51ID4gbGkgPiBhOmZvY3VzIHtcbiAgY29sb3I6ICNDQ0M7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG5uYXY6aG92ZXIgLmZvckFuaW1hdGUge1xuICBvcGFjaXR5OiAxO1xufVxuXG5zZWN0aW9uIHtcbiAgcGFkZGluZy1sZWZ0OiAxNXB4O1xufVxuXG4uaG9tZUltYWdlcyB7XG4gIGhlaWdodDogMzVweDtcbiAgbWFyZ2luLXRvcDogLTEwcHg7XG59XG5cbi5ob21lSW1hZ2VzMSB7XG4gIGhlaWdodDogMjVweDtcbiAgbWFyZ2luLXRvcDogLTEwcHg7XG59XG5cbi51c2VyTG9nb0ltZyB7XG4gIGhlaWdodDogMzBweDtcbn1cblxuLnNpZ25CdG4ge1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBiYWNrZ3JvdW5kOiAjNWRhYzVjO1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgcGFkZGluZzogNXB4O1xufVxuXG4ubmF2YmFyLW5hdiBsaSB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLkFjdGl2ZSB7XG4gIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/homepage/homepage.component.ts":
/*!************************************************!*\
  !*** ./src/app/homepage/homepage.component.ts ***!
  \************************************************/
/*! exports provided: HomepageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomepageComponent", function() { return HomepageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _Global_Services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Global/Services */ "./src/app/Global/Services.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_add_observable_interval__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/add/observable/interval */ "./node_modules/rxjs-compat/_esm5/add/observable/interval.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var howler__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! howler */ "./node_modules/howler/dist/howler.js");
/* harmony import */ var howler__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(howler__WEBPACK_IMPORTED_MODULE_7__);








var HomepageComponent = /** @class */ (function () {
    //   _id: "5e5b7f90e3c0ec6149afed62"
    // userName: "testUser1D"
    // createdAt: "2020-03-01T09:25:36.739Z"
    // mobileNumber: "8801108108"
    // email: "NA"
    // district: "Kishna"
    // timestamp: "2020-03-01T09:25:36.739Z"
    function HomepageComponent(_Router, _Services) {
        var _this = this;
        this._Router = _Router;
        this._Services = _Services;
        this.alertMessage = "";
        this.alertMessage1 = "";
        var obj = {
            "district": this._Services.UserData.district
        };
        // console.log(this._Services.UserData.userName);
        // this._Services.getAPIfun("sosServices/pending").subscribe(res => {
        //   //console.log(responseObj["data"].unseenSosCount);
        //   this.caseCount = res["data"].length;
        // }, err => {
        //   console.log(err);
        // });
        // this._Services.getAPIfun("getTrips/active").subscribe(res => {
        //   //console.log(responseObj["data"].unseenSosCount);
        //   this.tripCount = res["data"].length;
        // }, err => {
        //   console.log(err);
        // });
        //notification count
        this.getCount = Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["interval"])(3000).subscribe(function (val) {
            _this._Services.postAPI("sosServices/unseenSosCount/district", obj).subscribe(function (responseObj) {
                //console.log('called');
                // this._Services.getAPIfun("sosServices/unseenSosCount").subscribe(responseObj => {
                //console.log(responseObj["data"].unseenSosCount);
                _this.unseenCount = responseObj["data"].unseenSosCount;
            }, function (err) {
                console.log(err);
            });
        });
        //pending case
        this.getase = Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["interval"])(3000).subscribe(function (val) {
            //console.log('called');
            // this._Services.getAPIfun("sosServices/pending").subscribe(res => {
            _this._Services.postAPI("allsosRecordsCount", obj).subscribe(function (sosCounts) {
                console.log(sosCounts["data"]);
                //console.log(this.caseCount , res["data"].length);
                if (_this._Services.SOSCount.pendingSOSCount < sosCounts["data"].pendingSOSCount) {
                    _this.alertMessage = "SOS has been Raised";
                    var sound = new howler__WEBPACK_IMPORTED_MODULE_7__["Howl"]({
                        src: ['disha/assets/sos.mp3'],
                    });
                    sound.play();
                    _this._Services.SOSCount.pendingSOSCount = sosCounts["data"].pendingSOSCount;
                    setTimeout(function () {
                        _this.alertMessage = "";
                    }, 2500);
                }
                else {
                    _this.alertMessage = "";
                }
            }, function (err) {
                console.log(err);
            });
        });
        //trip
        this.getTrip = Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["interval"])(3000).subscribe(function (val) {
            //console.log('called');
            // this._Services.getAPIfun("getTrips/active").subscribe(res => {
            _this._Services.postAPI("getTripCount", obj).subscribe(function (tripCounts) {
                console.log(tripCounts["data"]);
                //console.log(this.caseCount , res["data"].length);
                if (_this._Services.TripsCount.activeTripsCount < tripCounts["data"].activeTripsCount) {
                    _this.alertMessage1 = "New Trip Added";
                    var sound = new howler__WEBPACK_IMPORTED_MODULE_7__["Howl"]({
                        src: ['../assets/sos.mp3']
                    });
                    sound.play();
                    _this._Services.TripsCount.activeTripsCount = tripCounts["data"].activeTripsCount;
                    setTimeout(function () {
                        _this.alertMessage1 = "";
                    }, 4500);
                }
                else {
                    _this.alertMessage1 = "";
                }
            }, function (err) {
                console.log(err);
            });
        });
    }
    HomepageComponent.prototype.ngOnInit = function () {
    };
    HomepageComponent.prototype.changePage = function (inputData) {
        this._Services.DashBoardTitle = inputData;
        if (inputData == 'Dashboard') {
            this._Router.navigate(["/Homepage/Dashboard"]);
        }
        else if (inputData == 'TrackMyTravel') {
            this._Router.navigate(["/Homepage/TrackMyTravel"]);
        }
        else {
            this._Router.navigate(["/Homepage/Sos"]);
        }
    };
    HomepageComponent.prototype.SignOut = function () {
        localStorage.clear();
        this._Router.navigate(["/Login"]);
    };
    HomepageComponent.prototype.goToUserProfile = function () {
        this._Router.navigate(["/Homepage/UserProfile"]);
    };
    HomepageComponent.prototype.goToChangePassword = function () {
        this._Services.DashBoardTitle = "Change Password";
        this._Router.navigate(["/Homepage/ChangePassword"]);
    };
    HomepageComponent.prototype.goToReports = function () {
        this._Services.DashBoardTitle = "Reports";
        this._Router.navigate(["/Homepage/Reports"]);
    };
    HomepageComponent.prototype.goToAllReports = function () {
        this._Services.DashBoardTitle = "All Reports";
        this._Services.isAllView = false;
        this._Router.navigate(["/Homepage/AllReports"]);
    };
    HomepageComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: _Global_Services__WEBPACK_IMPORTED_MODULE_2__["Services"] }
    ]; };
    HomepageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-homepage',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./homepage.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/homepage/homepage.component.html")).default,
            providers: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"]],
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./homepage.component.scss */ "./src/app/homepage/homepage.component.scss")).default]
        })
    ], HomepageComponent);
    return HomepageComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.scss":
/*!********************************************!*\
  !*** ./src/app/login/login.component.scss ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".LoginPage {\n  height: 100%;\n  margin: 0px;\n  background-image: -webkit-gradient(linear, left top, left bottom, from(#074fa4), color-stop(#ffffff), to(#328e32));\n  background-image: linear-gradient(#074fa4, #ffffff, #328e32);\n}\n\n.loginContent {\n  height: 17vw;\n  width: 30vw;\n  padding-top: 20px;\n  margin: auto;\n  margin-top: -16.5%;\n  border: 1px solid white;\n  background-color: #ffffff52;\n}\n\n.formDiv {\n  width: 30vw;\n}\n\n.logoDiv {\n  text-align: center;\n  padding: 10px;\n}\n\n.logoImage {\n  height: 11vw;\n  margin-left: 34%;\n}\n\n.formInputs {\n  margin: 30px;\n}\n\n.loginBtn {\n  text-align: right;\n  padding-right: 45px;\n}\n\n.error {\n  color: red;\n  margin-right: 20px;\n}\n\n@media (min-width: 768px) {\n  .logoImage1 {\n    width: 15vw;\n    margin-left: 20px;\n  }\n\n  .logoImage2 {\n    width: 8vw;\n    margin-left: 25px;\n  }\n\n  .logoImage3 {\n    width: 11vw;\n    float: right;\n    margin-right: 25px;\n  }\n\n  .logoImage4 {\n    width: 12%;\n    /* float: right; */\n    margin-left: 30px;\n  }\n\n  .logoImage5 {\n    width: 12%;\n    float: right;\n    margin-right: 30px;\n    margin-top: 20px;\n  }\n}\n\n.logoDiv1 {\n  text-align: center;\n  padding: 10px;\n}\n\n@media (min-width: 320px) and (max-width: 640px) {\n  .logoImage1 {\n    margin-top: 145px;\n    width: 15%;\n    margin-left: 40px;\n  }\n\n  .logoImage2 {\n    margin-top: 23px;\n    width: 5%;\n    margin-left: 40px;\n  }\n\n  .logoImage3 {\n    margin-top: 23px;\n    width: 5%;\n    float: right;\n    margin-right: 25px;\n  }\n\n  .logoImage4 {\n    width: 40%;\n    float: right;\n    margin-top: -184px;\n    margin-right: -190px;\n  }\n\n  .logoImage5 {\n    width: 40%;\n    float: right;\n    margin-top: -187px;\n    margin-right: -390px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vQzpcXFVzZXJzXFxocFxcTXVzaWNcXGRpc2hhMS9zcmNcXGFwcFxcbG9naW5cXGxvZ2luLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBR0Esa0hBQUE7RUFBQSw0REFBQTtBQ0RKOztBRElBO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLHVCQUFBO0VBQ0EsMkJBQUE7QUNESjs7QURJQTtFQUNJLFdBQUE7QUNESjs7QURHQTtFQUNJLGtCQUFBO0VBQ0EsYUFBQTtBQ0FKOztBREdBO0VBQ0ksWUFBQTtFQUNBLGdCQUFBO0FDQUo7O0FER0E7RUFDSSxZQUFBO0FDQUo7O0FES0E7RUFDSSxpQkFBQTtFQUNBLG1CQUFBO0FDRko7O0FES0E7RUFDSSxVQUFBO0VBQ0Esa0JBQUE7QUNGSjs7QURJQTtFQUF5QjtJQUNyQixXQUFBO0lBQ0EsaUJBQUE7RUNBRjs7RURFRjtJQUVJLFVBQUE7SUFDQSxpQkFBQTtFQ0FGOztFREVGO0lBRUksV0FBQTtJQUNBLFlBQUE7SUFDQSxrQkFBQTtFQ0FGOztFREVGO0lBQ0ksVUFBQTtJQUNBLGtCQUFBO0lBQ0EsaUJBQUE7RUNDRjs7RURFRjtJQUNJLFVBQUE7SUFDQSxZQUFBO0lBQ0Esa0JBQUE7SUFDQSxnQkFBQTtFQ0NGO0FBQ0Y7O0FESUE7RUFDSSxrQkFBQTtFQUNBLGFBQUE7QUNGSjs7QURJQTtFQUE4QztJQUMxQyxpQkFBQTtJQUNBLFVBQUE7SUFDQSxpQkFBQTtFQ0FGOztFREVGO0lBQ0ksZ0JBQUE7SUFDQSxTQUFBO0lBQ0EsaUJBQUE7RUNDRjs7RURDRjtJQUNJLGdCQUFBO0lBQ0EsU0FBQTtJQUNBLFlBQUE7SUFDQSxrQkFBQTtFQ0VGOztFREFGO0lBQ0ksVUFBQTtJQUNBLFlBQUE7SUFDQSxrQkFBQTtJQUNBLG9CQUFBO0VDR0Y7O0VEREY7SUFDSSxVQUFBO0lBQ0EsWUFBQTtJQUNBLGtCQUFBO0lBQ0Esb0JBQUE7RUNJRjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuTG9naW5QYWdle1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgbWFyZ2luOiAwcHg7XHJcbiAgICAvL2JhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgI2ZmOTQ3MiAsICNmMjcwOWMpO1xyXG4gICAgLy9iYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoYmx1ZSx3aGl0ZSwgZ3JlZW4pO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KCMwNzRmYTQsICNmZmZmZmYsICMzMjhlMzIpO1xyXG59XHJcblxyXG4ubG9naW5Db250ZW50e1xyXG4gICAgaGVpZ2h0OiAxN3Z3O1xyXG4gICAgd2lkdGg6IDMwdnc7XHJcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIG1hcmdpbi10b3A6IC0xNi41JTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjUyO1xyXG59XHJcblxyXG4uZm9ybURpdiB7XHJcbiAgICB3aWR0aDogMzB2dztcclxufVxyXG4ubG9nb0RpdntcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbn1cclxuXHJcbi5sb2dvSW1hZ2V7XHJcbiAgICBoZWlnaHQ6IDExdnc7XHJcbiAgICBtYXJnaW4tbGVmdDogMzQlO1xyXG59XHJcblxyXG4uZm9ybUlucHV0c3tcclxuICAgIG1hcmdpbjogMzBweDtcclxuICAgIC8vIGhlaWdodDogNXZ3O1xyXG4gICAgLy8gd2lkdGg6IDIzdnc7XHJcbn1cclxuXHJcbi5sb2dpbkJ0bntcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgcGFkZGluZy1yaWdodDogNDVweDtcclxufVxyXG5cclxuLmVycm9ye1xyXG4gICAgY29sb3I6cmVkO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4OztcclxufVxyXG5AbWVkaWEgKG1pbi13aWR0aDo3NjhweCl7LmxvZ29JbWFnZTF7XHJcbiAgICB3aWR0aDogMTV2dztcclxuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG59XHJcbi5sb2dvSW1hZ2Uye1xyXG4gICAgLy8gbWFyZ2luLXRvcDogMjNweDtcclxuICAgIHdpZHRoOiA4dnc7XHJcbiAgICBtYXJnaW4tbGVmdDogMjVweDtcclxufVxyXG4ubG9nb0ltYWdlM3tcclxuICAgIC8vIG1hcmdpbi10b3A6IDIzcHg7XHJcbiAgICB3aWR0aDogMTF2dztcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIG1hcmdpbi1yaWdodDogMjVweDtcclxufVxyXG4ubG9nb0ltYWdlNHtcclxuICAgIHdpZHRoOiAxMiU7XHJcbiAgICAvKiBmbG9hdDogcmlnaHQ7ICovXHJcbiAgICBtYXJnaW4tbGVmdDogMzBweDtcclxuICAgLy8gbWFyZ2luLXJpZ2h0OiAtNzRweDtcclxufVxyXG4ubG9nb0ltYWdlNXtcclxuICAgIHdpZHRoOiAxMiU7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDMwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgLy9tYXJnaW4tbGVmdDogMTMycHg7XHJcbn1cclxuXHJcblxyXG59XHJcbi5sb2dvRGl2MXtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbn1cclxuQG1lZGlhIChtaW4td2lkdGg6MzIwcHgpYW5kIChtYXgtd2lkdGg6NjQwcHgpey5sb2dvSW1hZ2Uxe1xyXG4gICAgbWFyZ2luLXRvcDogMTQ1cHg7XHJcbiAgICB3aWR0aDogMTUlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDQwcHg7XHJcbn1cclxuLmxvZ29JbWFnZTJ7XHJcbiAgICBtYXJnaW4tdG9wOiAyM3B4O1xyXG4gICAgd2lkdGg6IDUlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDQwcHg7XHJcbn1cclxuLmxvZ29JbWFnZTN7XHJcbiAgICBtYXJnaW4tdG9wOiAyM3B4O1xyXG4gICAgd2lkdGg6IDUlO1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAyNXB4O1xyXG59XHJcbi5sb2dvSW1hZ2U0e1xyXG4gICAgd2lkdGg6IDQwJTtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIG1hcmdpbi10b3A6IC0xODRweDtcclxuICAgIG1hcmdpbi1yaWdodDogLTE5MHB4O1xyXG59XHJcbi5sb2dvSW1hZ2U1e1xyXG4gICAgd2lkdGg6IDQwJTtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIG1hcmdpbi10b3A6IC0xODdweDtcclxuICAgIG1hcmdpbi1yaWdodDogLTM5MHB4O1xyXG59XHJcblxyXG5cclxufSIsIi5Mb2dpblBhZ2Uge1xuICBoZWlnaHQ6IDEwMCU7XG4gIG1hcmdpbjogMHB4O1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoIzA3NGZhNCwgI2ZmZmZmZiwgIzMyOGUzMik7XG59XG5cbi5sb2dpbkNvbnRlbnQge1xuICBoZWlnaHQ6IDE3dnc7XG4gIHdpZHRoOiAzMHZ3O1xuICBwYWRkaW5nLXRvcDogMjBweDtcbiAgbWFyZ2luOiBhdXRvO1xuICBtYXJnaW4tdG9wOiAtMTYuNSU7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmNTI7XG59XG5cbi5mb3JtRGl2IHtcbiAgd2lkdGg6IDMwdnc7XG59XG5cbi5sb2dvRGl2IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiAxMHB4O1xufVxuXG4ubG9nb0ltYWdlIHtcbiAgaGVpZ2h0OiAxMXZ3O1xuICBtYXJnaW4tbGVmdDogMzQlO1xufVxuXG4uZm9ybUlucHV0cyB7XG4gIG1hcmdpbjogMzBweDtcbn1cblxuLmxvZ2luQnRuIHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIHBhZGRpbmctcmlnaHQ6IDQ1cHg7XG59XG5cbi5lcnJvciB7XG4gIGNvbG9yOiByZWQ7XG4gIG1hcmdpbi1yaWdodDogMjBweDtcbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gIC5sb2dvSW1hZ2UxIHtcbiAgICB3aWR0aDogMTV2dztcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcbiAgfVxuXG4gIC5sb2dvSW1hZ2UyIHtcbiAgICB3aWR0aDogOHZ3O1xuICAgIG1hcmdpbi1sZWZ0OiAyNXB4O1xuICB9XG5cbiAgLmxvZ29JbWFnZTMge1xuICAgIHdpZHRoOiAxMXZ3O1xuICAgIGZsb2F0OiByaWdodDtcbiAgICBtYXJnaW4tcmlnaHQ6IDI1cHg7XG4gIH1cblxuICAubG9nb0ltYWdlNCB7XG4gICAgd2lkdGg6IDEyJTtcbiAgICAvKiBmbG9hdDogcmlnaHQ7ICovXG4gICAgbWFyZ2luLWxlZnQ6IDMwcHg7XG4gIH1cblxuICAubG9nb0ltYWdlNSB7XG4gICAgd2lkdGg6IDEyJTtcbiAgICBmbG9hdDogcmlnaHQ7XG4gICAgbWFyZ2luLXJpZ2h0OiAzMHB4O1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gIH1cbn1cbi5sb2dvRGl2MSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogMTBweDtcbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDMyMHB4KSBhbmQgKG1heC13aWR0aDogNjQwcHgpIHtcbiAgLmxvZ29JbWFnZTEge1xuICAgIG1hcmdpbi10b3A6IDE0NXB4O1xuICAgIHdpZHRoOiAxNSU7XG4gICAgbWFyZ2luLWxlZnQ6IDQwcHg7XG4gIH1cblxuICAubG9nb0ltYWdlMiB7XG4gICAgbWFyZ2luLXRvcDogMjNweDtcbiAgICB3aWR0aDogNSU7XG4gICAgbWFyZ2luLWxlZnQ6IDQwcHg7XG4gIH1cblxuICAubG9nb0ltYWdlMyB7XG4gICAgbWFyZ2luLXRvcDogMjNweDtcbiAgICB3aWR0aDogNSU7XG4gICAgZmxvYXQ6IHJpZ2h0O1xuICAgIG1hcmdpbi1yaWdodDogMjVweDtcbiAgfVxuXG4gIC5sb2dvSW1hZ2U0IHtcbiAgICB3aWR0aDogNDAlO1xuICAgIGZsb2F0OiByaWdodDtcbiAgICBtYXJnaW4tdG9wOiAtMTg0cHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAtMTkwcHg7XG4gIH1cblxuICAubG9nb0ltYWdlNSB7XG4gICAgd2lkdGg6IDQwJTtcbiAgICBmbG9hdDogcmlnaHQ7XG4gICAgbWFyZ2luLXRvcDogLTE4N3B4O1xuICAgIG1hcmdpbi1yaWdodDogLTM5MHB4O1xuICB9XG59Il19 */");

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _Global_Services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Global/Services */ "./src/app/Global/Services.ts");




var LoginComponent = /** @class */ (function () {
    function LoginComponent(_Router, _Services) {
        this._Router = _Router;
        this._Services = _Services;
        this.errorMsg = "";
        this.UserData = {
            userName: "",
            password: ""
        };
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.loginUser = function (inputObj) {
        var _this = this;
        console.log(inputObj);
        if (inputObj.userName != "" && inputObj.password != "") {
            this._Services.postAPI("admin/login", inputObj).subscribe(function (res) {
                console.log(res);
                _this.errorMsg = "";
                _this._Services.UserData = res["data"].adminDetails;
                localStorage.setItem('UserDetails', JSON.stringify(_this._Services.UserData));
                console.log(JSON.parse(localStorage.getItem('UserDetails')));
                //localStorage.getItem('key');
                var obj = {
                    "district": _this._Services.UserData.district
                };
                _this._Services.postAPI("getTripCount", obj).subscribe(function (tripCounts) {
                    console.log(tripCounts["data"]);
                    _this._Services.TripsCount = tripCounts["data"];
                }, function (err) {
                    console.log(err);
                });
                _this._Services.postAPI("allsosRecordsCount", obj).subscribe(function (sosCounts) {
                    console.log(sosCounts["data"]);
                    _this._Services.SOSCount = sosCounts["data"];
                    _this._Router.navigate(["/Homepage"]);
                }, function (err) {
                    console.log(err);
                });
                // this._Router.navigate(["/Homepage"]);
            }, function (err) {
                console.log(err);
            });
        }
        else {
            this.errorMsg = "Please enter valid details";
        }
    };
    LoginComponent.prototype.onSearchChange = function (event, inputObj) {
        console.log(event);
        if (event.keyCode == 13) {
            this.loginUser(inputObj);
        }
    };
    LoginComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _Global_Services__WEBPACK_IMPORTED_MODULE_3__["Services"] }
    ]; };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login.component.scss */ "./src/app/login/login.component.scss")).default]
        })
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/report-view/report-view.component.scss":
/*!********************************************************!*\
  !*** ./src/app/report-view/report-view.component.scss ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("agm-map {\n  height: 450px;\n}\n\nagm-marker {\n  color: green;\n}\n\n.ViewCard {\n  margin-top: 20px;\n  color: grey !important;\n  font-weight: 700;\n  font-size: 14px;\n}\n\n.mat-card {\n  min-height: 530px;\n  color: grey !important;\n}\n\n.viewCardItems {\n  margin-top: 10px;\n}\n\n.mat-card h3 {\n  text-align: center;\n  color: #1b6cb1;\n  border-bottom: 1px solid #d6d3d3;\n  padding-bottom: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVwb3J0LXZpZXcvQzpcXFVzZXJzXFxocFxcTXVzaWNcXGRpc2hhMS9zcmNcXGFwcFxccmVwb3J0LXZpZXdcXHJlcG9ydC12aWV3LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9yZXBvcnQtdmlldy9yZXBvcnQtdmlldy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7QUNDSjs7QURFQTtFQUNJLFlBQUE7QUNDSjs7QURHQTtFQUNJLGdCQUFBO0VBRUEsc0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUNESjs7QURJQTtFQUNJLGlCQUFBO0VBQ0Esc0JBQUE7QUNESjs7QURJQTtFQUNJLGdCQUFBO0FDREo7O0FESUE7RUFDSSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxnQ0FBQTtFQUNBLG1CQUFBO0FDREoiLCJmaWxlIjoic3JjL2FwcC9yZXBvcnQtdmlldy9yZXBvcnQtdmlldy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImFnbS1tYXB7XHJcbiAgICBoZWlnaHQ6IDQ1MHB4O1xyXG59XHJcblxyXG5hZ20tbWFya2Vye1xyXG4gICAgY29sb3I6Z3JlZW47XHJcbn1cclxuXHJcblxyXG4uVmlld0NhcmR7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgLy9taW4taGVpZ2h0OiAyNTBweDtcclxuICAgIGNvbG9yOiBncmV5ICFpbXBvcnRhbnQ7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG59XHJcblxyXG4ubWF0LWNhcmR7XHJcbiAgICBtaW4taGVpZ2h0OiA1MzBweDtcclxuICAgIGNvbG9yOiBncmV5ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi52aWV3Q2FyZEl0ZW1ze1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxufVxyXG5cclxuLm1hdC1jYXJkIGgze1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6ICMxYjZjYjE7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2Q2ZDNkMztcclxuICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XHJcbn1cclxuIiwiYWdtLW1hcCB7XG4gIGhlaWdodDogNDUwcHg7XG59XG5cbmFnbS1tYXJrZXIge1xuICBjb2xvcjogZ3JlZW47XG59XG5cbi5WaWV3Q2FyZCB7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIGNvbG9yOiBncmV5ICFpbXBvcnRhbnQ7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLm1hdC1jYXJkIHtcbiAgbWluLWhlaWdodDogNTMwcHg7XG4gIGNvbG9yOiBncmV5ICFpbXBvcnRhbnQ7XG59XG5cbi52aWV3Q2FyZEl0ZW1zIHtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cblxuLm1hdC1jYXJkIGgzIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogIzFiNmNiMTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkNmQzZDM7XG4gIHBhZGRpbmctYm90dG9tOiA1cHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/report-view/report-view.component.ts":
/*!******************************************************!*\
  !*** ./src/app/report-view/report-view.component.ts ***!
  \******************************************************/
/*! exports provided: ReportViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportViewComponent", function() { return ReportViewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _Global_Services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Global/Services */ "./src/app/Global/Services.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");




var ReportViewComponent = /** @class */ (function () {
    function ReportViewComponent(_Services, sanitizer) {
        this._Services = _Services;
        this.sanitizer = sanitizer;
        this.ReportData = this._Services.ViewReportData;
        console.log(this.ReportData);
        this.lat1 = parseFloat(this.ReportData.latitude);
        this.lng1 = parseFloat(this.ReportData.longitude);
        this.sanitizedUrl = this.sanitizer.bypassSecurityTrustUrl('http://maps.google.com/?q=' + this.ReportData.latitude + ',' + this.ReportData.longitude);
    }
    ReportViewComponent.prototype.ngOnInit = function () {
    };
    ReportViewComponent.ctorParameters = function () { return [
        { type: _Global_Services__WEBPACK_IMPORTED_MODULE_2__["Services"] },
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"] }
    ]; };
    ReportViewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-report-view',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./report-view.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/report-view/report-view.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./report-view.component.scss */ "./src/app/report-view/report-view.component.scss")).default]
        })
    ], ReportViewComponent);
    return ReportViewComponent;
}());



/***/ }),

/***/ "./src/app/reports/reports.component.scss":
/*!************************************************!*\
  !*** ./src/app/reports/reports.component.scss ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("table {\n  width: 100%;\n}\n\n.mat-form-field {\n  font-size: 14px;\n  width: 100%;\n}\n\ntd, th {\n  width: 25%;\n}\n\nmat-card {\n  height: 80px;\n}\n\n.homeImages {\n  height: 50px;\n  margin-right: 10px;\n}\n\n.mat-header-cell {\n  font-size: 15px;\n  color: black;\n}\n\n.viewButton {\n  color: white;\n  background-color: #21c3e6;\n  border: none;\n  padding: 5px;\n  border-radius: 5px;\n}\n\n.viewButton:hover {\n  background-color: #f3719a;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVwb3J0cy9DOlxcVXNlcnNcXGhwXFxNdXNpY1xcZGlzaGExL3NyY1xcYXBwXFxyZXBvcnRzXFxyZXBvcnRzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9yZXBvcnRzL3JlcG9ydHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSxXQUFBO0FDREo7O0FESUU7RUFDRSxlQUFBO0VBQ0EsV0FBQTtBQ0RKOztBRElFO0VBQ0UsVUFBQTtBQ0RKOztBRElFO0VBQ0ksWUFBQTtBQ0ROOztBRElFO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0FDREo7O0FETUE7RUFDSSxlQUFBO0VBQ0EsWUFBQTtBQ0hKOztBRE1BO0VBQ0UsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQ0hGOztBRE1BO0VBQ0UseUJBQUE7QUNIRiIsImZpbGUiOiJzcmMvYXBwL3JlcG9ydHMvcmVwb3J0cy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxudGFibGUge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG4gIFxyXG4gIC5tYXQtZm9ybS1maWVsZCB7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbiAgXHJcbiAgdGQsIHRoIHtcclxuICAgIHdpZHRoOiAyNSU7XHJcbiAgfVxyXG5cclxuICBtYXQtY2FyZHtcclxuICAgICAgaGVpZ2h0OiA4MHB4O1xyXG4gIH1cclxuXHJcbiAgLmhvbWVJbWFnZXN7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgfVxyXG5cclxuICBcclxuXHJcbi5tYXQtaGVhZGVyLWNlbGx7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICBjb2xvcjpibGFjaztcclxufVxyXG5cclxuLnZpZXdCdXR0b257XHJcbiAgY29sb3I6d2hpdGU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIxYzNlNjtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgcGFkZGluZzogNXB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxufVxyXG5cclxuLnZpZXdCdXR0b246aG92ZXJ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YzNzE5YTs7XHJcbn0iLCJ0YWJsZSB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4ubWF0LWZvcm0tZmllbGQge1xuICBmb250LXNpemU6IDE0cHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG50ZCwgdGgge1xuICB3aWR0aDogMjUlO1xufVxuXG5tYXQtY2FyZCB7XG4gIGhlaWdodDogODBweDtcbn1cblxuLmhvbWVJbWFnZXMge1xuICBoZWlnaHQ6IDUwcHg7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbn1cblxuLm1hdC1oZWFkZXItY2VsbCB7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgY29sb3I6IGJsYWNrO1xufVxuXG4udmlld0J1dHRvbiB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIxYzNlNjtcbiAgYm9yZGVyOiBub25lO1xuICBwYWRkaW5nOiA1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxuLnZpZXdCdXR0b246aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjM3MTlhO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/reports/reports.component.ts":
/*!**********************************************!*\
  !*** ./src/app/reports/reports.component.ts ***!
  \**********************************************/
/*! exports provided: ReportsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportsComponent", function() { return ReportsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/esm5/paginator.es5.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm5/table.es5.js");
/* harmony import */ var _Global_Services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Global/Services */ "./src/app/Global/Services.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






var ReportsComponent = /** @class */ (function () {
    function ReportsComponent(_Services, _Router) {
        this._Services = _Services;
        this._Router = _Router;
        this.dateObj = {
            "startTime": new Date().toISOString(),
            "endTime": new Date().toISOString()
        };
        this.startDate = new Date(this.dateObj.startTime);
        this.displayedReportColumns = ['name', 'mobileNumber', 'sosStatus', 'distressAddress', 'view'];
        this.getReportData();
    }
    ReportsComponent.prototype.ngOnInit = function () {
    };
    ReportsComponent.prototype.getReportData = function () {
        var _this = this;
        this._Services.postAPI("sosRecordTimeRange", this.dateObj).subscribe(function (res) {
            console.log(res);
            _this.reportsData = res["data"];
            _this.reportsData = new _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](_this.reportsData);
            setTimeout(function () {
                _this.reportsData.paginator = _this.paginator;
            }, 0);
        }, function (err) {
            console.log(err);
        });
    };
    // changeStartDate(dateInput) {
    //   console.log(dateInput);
    //   this.dateObj.startTime=new Date(dateInput).toISOString();
    //   console.log(this.dateObj.startTime);
    //   console.log(new Date(this.dateObj.startTime));
    // }
    // changeEndDate(dateInput) {
    //   console.log(dateInput);
    //   this.dateObj.endTime=new Date(dateInput).toISOString();
    // }
    ReportsComponent.prototype.changeStartDate = function (dateInput) {
        console.log(dateInput);
        var dateincr = this.formateDate(dateInput);
        this.dateObj.startTime = new Date(dateincr).toISOString();
        //console.log(this.dateObj.startTime);
        //console.log(new Date(this.dateObj.startTime));
    };
    ReportsComponent.prototype.changeEndDate = function (dateInput) {
        console.log(dateInput);
        var dateincr = this.formateDate(dateInput);
        this.dateObj.endTime = new Date(dateincr).toISOString();
    };
    ReportsComponent.prototype.formateDate = function (datevalue) {
        var d = new Date(datevalue);
        var day = d.getDate();
        var year = d.getFullYear();
        var month = (d.getMonth() + 1);
        return year + "-" + (month > 9 ? month : "0" + month) + "-" + (day > 9 ? day : "0" + day);
    };
    ReportsComponent.prototype.filterData = function () {
        console.log(this.dateObj);
        this.getReportData();
    };
    ReportsComponent.prototype.goToView = function (reportdata) {
        console.log(reportdata);
        this._Services.ViewReportData = reportdata;
        this._Router.navigate(["/Homepage/ReportView"]);
    };
    ReportsComponent.ctorParameters = function () { return [
        { type: _Global_Services__WEBPACK_IMPORTED_MODULE_4__["Services"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"], { static: false })
    ], ReportsComponent.prototype, "paginator", void 0);
    ReportsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-reports',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./reports.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/reports/reports.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./reports.component.scss */ "./src/app/reports/reports.component.scss")).default]
        })
    ], ReportsComponent);
    return ReportsComponent;
}());



/***/ }),

/***/ "./src/app/sos/sos.component.scss":
/*!****************************************!*\
  !*** ./src/app/sos/sos.component.scss ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("table {\n  width: 100%;\n}\n\n.mat-form-field {\n  font-size: 14px;\n  width: 100%;\n}\n\ntd, th {\n  width: 25%;\n}\n\n.mat-column-city {\n  width: 35%;\n}\n\n.mat-column-mobileNumber {\n  width: 15%;\n}\n\nmat-card {\n  height: 80px;\n}\n\n.homeImages {\n  height: 50px;\n  margin-right: 10px;\n}\n\n.Pendingcard .mat-card {\n  background-image: -webkit-gradient(linear, left top, right top, from(#f5af19), to(#f12711));\n  background-image: linear-gradient(to right, #f5af19, #f12711);\n  color: white;\n  cursor: pointer;\n}\n\n.Assignedcard .mat-card {\n  background-image: -webkit-gradient(linear, left top, right top, from(#00B4DB), to(#0083B0));\n  background-image: linear-gradient(to right, #00B4DB, #0083B0);\n  color: white;\n  cursor: pointer;\n}\n\n.Completedcard .mat-card {\n  background-image: -webkit-gradient(linear, left top, right top, from(#38ef7d), to(#11998e));\n  background-image: linear-gradient(to right, #38ef7d, #11998e);\n  color: white;\n  cursor: pointer;\n}\n\n.cardTitles {\n  font-size: 20px;\n}\n\n.cardCount {\n  float: right;\n  font-size: 20px;\n  border: 2px solid white;\n  padding: 12px;\n  /* border-radius: 25px; */\n  border-radius: 18px;\n  padding-top: 3px;\n  padding-bottom: 3px;\n  margin-top: 5px;\n}\n\n.mat-header-cell {\n  font-size: 15px;\n  color: black;\n}\n\n.viewButton {\n  color: white;\n  background-color: #21c3e6;\n  border: none;\n}\n\n.viewButton:hover {\n  background-color: #f3719a;\n}\n\n.paginationButton {\n  color: white;\n  background-color: #21c3e6;\n  border: none;\n  padding: 10px;\n  margin: 10px;\n  float: right;\n}\n\n.paginationButton:hover {\n  background-color: #f3719a;\n}\n\n.SubmitButton {\n  color: white;\n  background-color: #21c3e6;\n  border: none;\n  padding: 5px;\n  border-radius: 5px;\n  margin-top: 5px;\n}\n\n.make-grey {\n  background-color: #bdb9b9;\n}\n\n.alertMsg {\n  text-align: right;\n  color: pink;\n  padding-right: 50px;\n}\n\n.alertMsg p {\n  float: right;\n  padding: 5px;\n  background: pink;\n  height: 35px;\n  color: black;\n  border-radius: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc29zL0M6XFxVc2Vyc1xcaHBcXE11c2ljXFxkaXNoYTEvc3JjXFxhcHBcXHNvc1xcc29zLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zb3Mvc29zLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQU1BO0VBQ0ksV0FBQTtBQ0xKOztBRFFFO0VBQ0UsZUFBQTtFQUNBLFdBQUE7QUNMSjs7QURRRTtFQUNFLFVBQUE7QUNMSjs7QURPRTtFQUNGLFVBQUE7QUNKQTs7QURNRTtFQUNFLFVBQUE7QUNISjs7QURNRTtFQUNJLFlBQUE7QUNITjs7QURNRTtFQUNFLFlBQUE7RUFDQSxrQkFBQTtBQ0hKOztBRE1FO0VBQ0UsMkZBQUE7RUFBQSw2REFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FDSEo7O0FES0U7RUFDRSwyRkFBQTtFQUFBLDZEQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUNGSjs7QURJQTtFQUNJLDJGQUFBO0VBQUEsNkRBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQ0RKOztBRElBO0VBQ0ksZUFBQTtBQ0RKOztBRElBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSx1QkFBQTtFQUNBLGFBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QUNEQTs7QURJQTtFQUNJLGVBQUE7RUFDQSxZQUFBO0FDREo7O0FESUE7RUFDRSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0FDREY7O0FESUE7RUFDRSx5QkFBQTtBQ0RGOztBRElBO0VBQ0UsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtBQ0RGOztBRElBO0VBQ0UseUJBQUE7QUNERjs7QURJQTtFQUNFLFlBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FDREY7O0FESUE7RUFDQSx5QkFBQTtBQ0RBOztBREdBO0VBQ0UsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7QUNBRjs7QURHQTtFQUNFLFlBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FDQUYiLCJmaWxlIjoic3JjL2FwcC9zb3Mvc29zLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi8vIC5leGFtcGxlLWNvbnRhaW5lciB7XHJcbi8vICAgaGVpZ2h0OiAzNTBweDtcclxuLy8gICBvdmVyZmxvdzogYXV0bztcclxuLy8gfVxyXG5cclxudGFibGUge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG4gIFxyXG4gIC5tYXQtZm9ybS1maWVsZCB7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbiAgXHJcbiAgdGQsIHRoIHtcclxuICAgIHdpZHRoOiAyNSU7XHJcbiAgfVxyXG4gIC5tYXQtY29sdW1uLWNpdHkge1xyXG53aWR0aDogMzUlO1xyXG4gIH1cclxuICAubWF0LWNvbHVtbi1tb2JpbGVOdW1iZXIge1xyXG4gICAgd2lkdGg6IDE1JTtcclxuICAgICAgfVxyXG5cclxuICBtYXQtY2FyZHtcclxuICAgICAgaGVpZ2h0OiA4MHB4O1xyXG4gIH1cclxuXHJcbiAgLmhvbWVJbWFnZXN7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgfVxyXG5cclxuICAuUGVuZGluZ2NhcmQgLm1hdC1jYXJke1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjZjVhZjE5LCAjZjEyNzExKTtcclxuICAgIGNvbG9yOndoaXRlO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIH1cclxuICAuQXNzaWduZWRjYXJkIC5tYXQtY2FyZHtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzAwQjREQiAsICMwMDgzQjApO1xyXG4gICAgY29sb3I6d2hpdGU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuLkNvbXBsZXRlZGNhcmQgLm1hdC1jYXJke1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjMzhlZjdkLCAjMTE5OThlKTtcclxuICAgIGNvbG9yOndoaXRlO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uY2FyZFRpdGxlc3tcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxufVxyXG5cclxuLmNhcmRDb3VudHtcclxuZmxvYXQ6IHJpZ2h0O1xyXG5mb250LXNpemU6IDIwcHg7XHJcbmJvcmRlcjogMnB4IHNvbGlkIHdoaXRlO1xyXG5wYWRkaW5nOiAxMnB4O1xyXG4vKiBib3JkZXItcmFkaXVzOiAyNXB4OyAqL1xyXG5ib3JkZXItcmFkaXVzOiAxOHB4O1xyXG5wYWRkaW5nLXRvcDogM3B4O1xyXG5wYWRkaW5nLWJvdHRvbTogM3B4O1xyXG5tYXJnaW4tdG9wOiA1cHg7XHJcbn1cclxuXHJcbi5tYXQtaGVhZGVyLWNlbGx7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICBjb2xvcjpibGFjaztcclxufVxyXG5cclxuLnZpZXdCdXR0b257XHJcbiAgY29sb3I6d2hpdGU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIxYzNlNjtcclxuICBib3JkZXI6IG5vbmU7XHJcbn1cclxuXHJcbi52aWV3QnV0dG9uOmhvdmVye1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmMzcxOWE7O1xyXG59XHJcblxyXG4ucGFnaW5hdGlvbkJ1dHRvbntcclxuICBjb2xvcjp3aGl0ZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjFjM2U2O1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIG1hcmdpbjogMTBweDtcclxuICBmbG9hdDpyaWdodDtcclxufVxyXG5cclxuLnBhZ2luYXRpb25CdXR0b246aG92ZXJ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YzNzE5YTs7XHJcbn1cclxuXHJcbi5TdWJtaXRCdXR0b257XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMyMWMzZTY7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIHBhZGRpbmc6IDVweDtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgbWFyZ2luLXRvcDogNXB4O1xyXG59XHJcblxyXG4ubWFrZS1ncmV5e1xyXG5iYWNrZ3JvdW5kLWNvbG9yOiAjYmRiOWI5O1xyXG59XHJcbi5hbGVydE1zZ3tcclxuICB0ZXh0LWFsaWduOiByaWdodDtcclxuICBjb2xvcjpwaW5rO1xyXG4gIHBhZGRpbmctcmlnaHQ6IDUwcHg7XHJcbn1cclxuXHJcbi5hbGVydE1zZyBwe1xyXG4gIGZsb2F0OiByaWdodDtcclxuICBwYWRkaW5nOiA1cHg7XHJcbiAgYmFja2dyb3VuZDogcGluaztcclxuICBoZWlnaHQ6IDM1cHg7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxufSIsInRhYmxlIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5tYXQtZm9ybS1maWVsZCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbnRkLCB0aCB7XG4gIHdpZHRoOiAyNSU7XG59XG5cbi5tYXQtY29sdW1uLWNpdHkge1xuICB3aWR0aDogMzUlO1xufVxuXG4ubWF0LWNvbHVtbi1tb2JpbGVOdW1iZXIge1xuICB3aWR0aDogMTUlO1xufVxuXG5tYXQtY2FyZCB7XG4gIGhlaWdodDogODBweDtcbn1cblxuLmhvbWVJbWFnZXMge1xuICBoZWlnaHQ6IDUwcHg7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbn1cblxuLlBlbmRpbmdjYXJkIC5tYXQtY2FyZCB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgI2Y1YWYxOSwgI2YxMjcxMSk7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uQXNzaWduZWRjYXJkIC5tYXQtY2FyZCB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzAwQjREQiwgIzAwODNCMCk7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uQ29tcGxldGVkY2FyZCAubWF0LWNhcmQge1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICMzOGVmN2QsICMxMTk5OGUpO1xuICBjb2xvcjogd2hpdGU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmNhcmRUaXRsZXMge1xuICBmb250LXNpemU6IDIwcHg7XG59XG5cbi5jYXJkQ291bnQge1xuICBmbG9hdDogcmlnaHQ7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgYm9yZGVyOiAycHggc29saWQgd2hpdGU7XG4gIHBhZGRpbmc6IDEycHg7XG4gIC8qIGJvcmRlci1yYWRpdXM6IDI1cHg7ICovXG4gIGJvcmRlci1yYWRpdXM6IDE4cHg7XG4gIHBhZGRpbmctdG9wOiAzcHg7XG4gIHBhZGRpbmctYm90dG9tOiAzcHg7XG4gIG1hcmdpbi10b3A6IDVweDtcbn1cblxuLm1hdC1oZWFkZXItY2VsbCB7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgY29sb3I6IGJsYWNrO1xufVxuXG4udmlld0J1dHRvbiB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIxYzNlNjtcbiAgYm9yZGVyOiBub25lO1xufVxuXG4udmlld0J1dHRvbjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmMzcxOWE7XG59XG5cbi5wYWdpbmF0aW9uQnV0dG9uIHtcbiAgY29sb3I6IHdoaXRlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjFjM2U2O1xuICBib3JkZXI6IG5vbmU7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIG1hcmdpbjogMTBweDtcbiAgZmxvYXQ6IHJpZ2h0O1xufVxuXG4ucGFnaW5hdGlvbkJ1dHRvbjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmMzcxOWE7XG59XG5cbi5TdWJtaXRCdXR0b24ge1xuICBjb2xvcjogd2hpdGU7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyMWMzZTY7XG4gIGJvcmRlcjogbm9uZTtcbiAgcGFkZGluZzogNXB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIG1hcmdpbi10b3A6IDVweDtcbn1cblxuLm1ha2UtZ3JleSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNiZGI5Yjk7XG59XG5cbi5hbGVydE1zZyB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBjb2xvcjogcGluaztcbiAgcGFkZGluZy1yaWdodDogNTBweDtcbn1cblxuLmFsZXJ0TXNnIHAge1xuICBmbG9hdDogcmlnaHQ7XG4gIHBhZGRpbmc6IDVweDtcbiAgYmFja2dyb3VuZDogcGluaztcbiAgaGVpZ2h0OiAzNXB4O1xuICBjb2xvcjogYmxhY2s7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/sos/sos.component.ts":
/*!**************************************!*\
  !*** ./src/app/sos/sos.component.ts ***!
  \**************************************/
/*! exports provided: SosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SosComponent", function() { return SosComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/esm5/paginator.es5.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm5/table.es5.js");
/* harmony import */ var _Global_Services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Global/Services */ "./src/app/Global/Services.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_add_observable_interval__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/add/observable/interval */ "./node_modules/rxjs-compat/_esm5/add/observable/interval.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");









var SosComponent = /** @class */ (function () {
    function SosComponent(_Services, _DatePipe, _Router) {
        this._Services = _Services;
        this._DatePipe = _DatePipe;
        this._Router = _Router;
        this.Limit = {
            "limit": 10,
            "skip": 0,
            "district": ""
        };
        this.searchObj = {
            name: "",
            mobileNumber: "",
            firStatus: "",
            district: ""
        };
        this.prevText = "<< Prev";
        this.nexrText = "Next >>";
        this.PageTitle = "Pending";
        this.dataSource = null;
        this.PendingListCount = 0;
        this.AssignedListCount = 0;
        this.CompletedListCount = 0;
        this.displayMsg = "";
        this.Limit.district = this._Services.UserData.district;
        this.searchObj.district = this._Services.UserData.district;
        console.log(this.Limit.district);
        // this._Services.getAPIfun("sosServices/pending").subscribe(res => {
        //   console.log(res);
        //   this.pendingList = res["data"];
        //   this.PendingListCount = this.pendingList.length;
        // }, err => {
        //   console.log(err);
        // });
        // this._Services.getAPIfun("sosServices/completed").subscribe(res => {
        //   console.log(res);
        //   this.completedList = res["data"];
        //   this.CompletedListCount = this.completedList.length;
        // }, err => {
        //   console.log(err);
        // });
        // this._Services.getAPIfun("sosServices/assigned").subscribe(res => {
        //   console.log(res);
        //   this.assignedList = res["data"];
        //   this.AssignedListCount = this.assignedList.length;
        // }, err => {
        //   console.log(err);
        // });
    }
    SosComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getase = Object(rxjs__WEBPACK_IMPORTED_MODULE_8__["interval"])(25000).subscribe(function (val) {
            //console.log('called');
            // this._Services.getAPIfun("sosServices/pending").subscribe(res => {
            _this._Services.getAPIfun("sosServices/pending").subscribe(function (res) {
                // console.log(res);
                _this.pendingList = res["data"];
                _this.PendingListCount = _this.pendingList.length;
                for (var i = 0; i < _this.pendingList.length; i++) {
                    _this.pendingList[i].timestamp = _this._DatePipe.transform(_this.pendingList[i].timestamp, 'medium');
                }
                if (_this._Services.DashBoardTitle == "Pending") {
                    _this.displayedColumns = ['name', 'mobileNumber', 'distressAddress', 'timestamp', 'view'];
                    _this.pendingList = new _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](_this.pendingList);
                    _this.pendingList.paginator = _this.paginator;
                }
            }, function (err) {
                console.log(err);
            });
        });
        if (this._Services.DashBoardTitle == "Pending") {
            this.getPendingList();
        }
        else if (this._Services.DashBoardTitle == "Assigned") {
            this.getAssignedList();
        }
        else if (this._Services.DashBoardTitle == "Completed") {
            this.getCompletedList();
        }
        //this.AutoGetPendingList();
        // this.dataSource.paginator = this.paginator;
    };
    SosComponent.prototype.getPendingList = function () {
        var _this = this;
        this.Limit.skip = 0;
        this._Services.DashBoardTitle = "Pending";
        // this._Services.getAPIfun("sosServices/pending").subscribe(res => {
        this._Services.getAPIfun("sosServices/pending").subscribe(function (res) {
            console.log(res);
            _this.pendingList = res["data"];
            _this.PendingListCount = _this.pendingList.length;
            for (var i = 0; i < _this.pendingList.length; i++) {
                _this.pendingList[i].timestamp = _this._DatePipe.transform(_this.pendingList[i].timestamp, 'medium');
            }
            _this.displayedColumns = ['name', 'mobileNumber', 'distressAddress', 'timestamp', 'view'];
            _this.pendingList = new _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](_this.pendingList);
            console.log(_this.pendingList);
            //setTimeout(() => {
            _this.pendingList.paginator = _this.paginator;
            //}, 0);
        }, function (err) {
            console.log(err);
        });
    };
    SosComponent.prototype.getAssignedList = function () {
        var _this = this;
        this.Limit.skip = 0;
        this._Services.DashBoardTitle = "Assigned";
        // this._Services.getAPIfun("sosServices/assigned").subscribe(res => {
        this._Services.postAPI("sosServices/getAssignedRecords", this.Limit).subscribe(function (res) {
            console.log(res);
            _this.assignedList = res["data"];
            _this.AssignedListCount = _this.assignedList.length;
            for (var i = 0; i < _this.assignedList.length; i++) {
                _this.assignedList[i].timestamp = _this._DatePipe.transform(_this.assignedList[i].timestamp, 'medium');
            }
            _this.displayedassignedColumns = ['name', 'mobileNumber', 'city', 'timestamp', 'view'];
            _this.assignedList = new _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](_this.assignedList);
            //setTimeout(() => {
            _this.assignedList.paginator = _this.paginator;
            // }, 0);
            console.log(_this.assignedList);
        }, function (err) {
            console.log(err);
        });
    };
    SosComponent.prototype.getCompletedList = function () {
        var _this = this;
        this.Limit.skip = 0;
        this._Services.DashBoardTitle = "Completed";
        this._Services.postAPI("sosServices/getCompletedRecords", this.Limit).subscribe(function (res) {
            console.log(res);
            _this.completedList = res["data"];
            //this.CompletedListCount = this.completedList.length;
            for (var i = 0; i < _this.completedList.length; i++) {
                _this.completedList[i].timestamp = _this._DatePipe.transform(_this.completedList[i].timestamp, 'medium');
            }
            _this.displayedCompletedColumns = ['name', 'mobileNumber', 'city', 'timestamp', 'view'];
            _this.completedList = new _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](_this.completedList);
            // setTimeout(() => {
            _this.completedList.paginator = _this.paginator;
            // }, 0);
            console.log(_this.completedList);
        }, function (err) {
            console.log(err);
        });
    };
    SosComponent.prototype.ViewDescription = function (inputObj) {
        console.log(inputObj);
        this._Services.ViewCaseDetails = inputObj;
        this._Router.navigate(['/Homepage/View', 1]);
    };
    SosComponent.prototype.getNextPage = function (inputValue) {
        //console.log(inputValue);
        if (inputValue == true) {
            this.Limit.skip = this.Limit.skip + 10;
            //console.log(this.completedLimit.skip,this.CompletedListCount);
            if (this._Services.DashBoardTitle == "Completed") {
                if (this.Limit.skip < this._Services.SOSCount.completedSOSCount) {
                    // console.log("hai");
                    this.getCompletedListByRange();
                }
            }
            else if (this._Services.DashBoardTitle == "Assigned") {
                if (this.Limit.skip < this._Services.SOSCount.assignedSOSCount) {
                    // console.log("hai");
                    this.getAssignedListByRange();
                }
            }
            else if (this._Services.DashBoardTitle == "Pending") {
                if (this.Limit.skip < this._Services.SOSCount.pendingSOSCount) {
                    // console.log("hai");
                    this.getPendingListByRange();
                }
            }
        }
        else {
            // console.log("bye");
            this.Limit.skip = this.Limit.skip - 10;
            if (this.Limit.skip >= 0) {
                // console.log("bye");
                if (this._Services.DashBoardTitle == "Completed") {
                    this.getCompletedListByRange();
                }
                else if (this._Services.DashBoardTitle == "Assigned") {
                    this.getAssignedListByRange();
                }
                else if (this._Services.DashBoardTitle == "Pending") {
                    this.getPendingListByRange();
                }
            }
        }
    };
    SosComponent.prototype.getCompletedListByRange = function () {
        var _this = this;
        this._Services.postAPI("sosServices/getCompletedRecords", this.Limit).subscribe(function (res) {
            //console.log(res);
            _this.completedList = res["data"];
            //this.CompletedListCount = this.completedList.length;
            for (var i = 0; i < _this.completedList.length; i++) {
                _this.completedList[i].timestamp = _this._DatePipe.transform(_this.completedList[i].timestamp, 'medium');
            }
            _this.displayedCompletedColumns = ['name', 'mobileNumber', 'city', 'timestamp', 'view'];
            _this.completedList = new _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](_this.completedList);
            // setTimeout(() => {
            _this.completedList.paginator = _this.paginator;
            // }, 0);
            // console.log(this.completedList);
        }, function (err) {
            console.log(err);
        });
    };
    SosComponent.prototype.getPendingListByRange = function () {
        var _this = this;
        this.Limit.skip = 10;
        this._Services.DashBoardTitle = "Pending";
        // this._Services.getAPIfun("sosServices/pending").subscribe(res => {
        this._Services.postAPI("sosServices/getPendingRecords", this.Limit).subscribe(function (res) {
            console.log(res);
            _this.pendingList = res["data"];
            // this.PendingListCount = this.pendingList.length;
            for (var i = 0; i < _this.pendingList.length; i++) {
                _this.pendingList[i].timestamp = _this._DatePipe.transform(_this.pendingList[i].timestamp, 'medium');
            }
            _this.displayedColumns = ['name', 'mobileNumber', 'distressAddress', 'timestamp', 'view'];
            _this.pendingList = new _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](_this.pendingList);
            console.log(_this.pendingList);
            //setTimeout(() => {
            _this.pendingList.paginator = _this.paginator;
            //}, 0);
        }, function (err) {
            console.log(err);
        });
    };
    SosComponent.prototype.getAssignedListByRange = function () {
        var _this = this;
        this._Services.DashBoardTitle = "Assigned";
        // this._Services.getAPIfun("sosServices/assigned").subscribe(res => {
        this._Services.postAPI("sosServices/getAssignedRecords", this.Limit).subscribe(function (res) {
            console.log(res);
            _this.assignedList = res["data"];
            // this.AssignedListCount = this.assignedList.length;
            for (var i = 0; i < _this.assignedList.length; i++) {
                _this.assignedList[i].timestamp = _this._DatePipe.transform(_this.assignedList[i].timestamp, 'medium');
            }
            _this.displayedassignedColumns = ['name', 'mobileNumber', 'city', 'timestamp', 'view'];
            _this.assignedList = new _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](_this.assignedList);
            //setTimeout(() => {
            _this.assignedList.paginator = _this.paginator;
            // }, 0);
            console.log(_this.assignedList);
        }, function (err) {
            console.log(err);
        });
    };
    SosComponent.prototype.SearchData = function (searchField, searchValue) {
        var _this = this;
        this.completedList = [];
        this.searchObj.name = "";
        this.searchObj.mobileNumber = "";
        console.log(searchField, searchValue);
        if (searchField == "Name") {
            this.searchObj.name = searchValue;
        }
        else if (searchField == "MobileNumber") {
            this.searchObj.mobileNumber = searchValue;
        }
        console.log(this.searchObj);
        this._Services.postAPI("sosRecords/sosCompleted/search", this.searchObj).subscribe(function (res) {
            //console.log(res);
            _this.completedList = res["data"];
            //this.CompletedListCount = this.completedList.length;
            for (var i = 0; i < _this.completedList.length; i++) {
                _this.completedList[i].timestamp = _this._DatePipe.transform(_this.completedList[i].timestamp, 'medium');
            }
            _this.displayedCompletedColumns = ['name', 'mobileNumber', 'city', 'timestamp', 'view'];
            _this.completedList = new _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](_this.completedList);
            // setTimeout(() => {
            _this.completedList.paginator = _this.paginator;
            // }, 0);
            // console.log(this.completedList);
        }, function (err) {
            console.log(err);
        });
    };
    SosComponent.ctorParameters = function () { return [
        { type: _Global_Services__WEBPACK_IMPORTED_MODULE_4__["Services"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"], { static: false })
    ], SosComponent.prototype, "paginator", void 0);
    SosComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sos',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./sos.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/sos/sos.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./sos.component.scss */ "./src/app/sos/sos.component.scss")).default]
        })
    ], SosComponent);
    return SosComponent;
}());



/***/ }),

/***/ "./src/app/track-my-travel/track-my-travel.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/track-my-travel/track-my-travel.component.scss ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".paginationButton {\n  color: white;\n  background-color: #21c3e6;\n  border: none;\n  padding: 10px;\n  margin: 10px;\n  float: right;\n}\n\n.paginationButton:hover {\n  background-color: #f3719a;\n}\n\n.mat-column-Address {\n  width: 35%;\n}\n\n.mat-column-mobileNumber {\n  width: 15%;\n}\n\ntable {\n  width: 100%;\n}\n\n.mat-form-field {\n  font-size: 14px;\n  width: 100%;\n}\n\ntd, th {\n  width: 25%;\n}\n\nmat-card {\n  height: 80px;\n}\n\n.homeImages {\n  height: 50px;\n  margin-right: 10px;\n}\n\n.mat-header-cell {\n  font-size: 15px;\n  color: black;\n}\n\n.viewButton {\n  color: white;\n  background-color: #21c3e6;\n  border: none;\n}\n\n.viewButton:hover {\n  background-color: #f3719a;\n}\n\n.trackHeader .mat-card {\n  background-image: -webkit-gradient(linear, left top, right top, from(#00B4DB), to(#0083B0));\n  background-image: linear-gradient(to right, #00B4DB, #0083B0);\n  color: white;\n  cursor: pointer;\n}\n\n.cardTitles {\n  font-size: 20px;\n}\n\n.cardCount {\n  float: right;\n  font-size: 20px;\n  border: 2px solid white;\n  padding: 12px;\n  /* border-radius: 25px; */\n  border-radius: 18px;\n  padding-top: 3px;\n  padding-bottom: 3px;\n  margin-top: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdHJhY2stbXktdHJhdmVsL0M6XFxVc2Vyc1xcaHBcXE11c2ljXFxkaXNoYTEvc3JjXFxhcHBcXHRyYWNrLW15LXRyYXZlbFxcdHJhY2stbXktdHJhdmVsLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC90cmFjay1teS10cmF2ZWwvdHJhY2stbXktdHJhdmVsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtBQ0NGOztBREVBO0VBQ0UseUJBQUE7QUNDRjs7QURFQztFQUNDLFVBQUE7QUNDRjs7QURDQTtFQUNHLFVBQUE7QUNFSDs7QURDQTtFQUNJLFdBQUE7QUNFSjs7QURDRTtFQUNFLGVBQUE7RUFDQSxXQUFBO0FDRUo7O0FEQ0U7RUFDRSxVQUFBO0FDRUo7O0FEQ0U7RUFDSSxZQUFBO0FDRU47O0FEQ0U7RUFDRSxZQUFBO0VBQ0Esa0JBQUE7QUNFSjs7QURHQTtFQUNJLGVBQUE7RUFDQSxZQUFBO0FDQUo7O0FER0E7RUFDRSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0FDQUY7O0FER0E7RUFDRSx5QkFBQTtBQ0FGOztBREdBO0VBQ0UsMkZBQUE7RUFBQSw2REFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FDQUY7O0FESUE7RUFDRSxlQUFBO0FDREY7O0FESUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLHVCQUFBO0VBQ0EsYUFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtBQ0RBIiwiZmlsZSI6InNyYy9hcHAvdHJhY2stbXktdHJhdmVsL3RyYWNrLW15LXRyYXZlbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wYWdpbmF0aW9uQnV0dG9ue1xyXG4gIGNvbG9yOndoaXRlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMyMWMzZTY7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgbWFyZ2luOiAxMHB4O1xyXG4gIGZsb2F0OnJpZ2h0O1xyXG59XHJcblxyXG4ucGFnaW5hdGlvbkJ1dHRvbjpob3ZlcntcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjM3MTlhOztcclxufVxyXG5cclxuIC5tYXQtY29sdW1uLUFkZHJlc3Mge1xyXG4gIHdpZHRoOiAzNSU7XHJcbiAgICB9XHJcbi5tYXQtY29sdW1uLW1vYmlsZU51bWJlciB7XHJcbiAgIHdpZHRoOiAxNSU7XHJcbiAgfVxyXG5cclxudGFibGUge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG4gIFxyXG4gIC5tYXQtZm9ybS1maWVsZCB7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbiAgXHJcbiAgdGQsIHRoIHtcclxuICAgIHdpZHRoOiAyNSU7XHJcbiAgfVxyXG5cclxuICBtYXQtY2FyZHtcclxuICAgICAgaGVpZ2h0OiA4MHB4O1xyXG4gIH1cclxuXHJcbiAgLmhvbWVJbWFnZXN7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgfVxyXG5cclxuICBcclxuXHJcbi5tYXQtaGVhZGVyLWNlbGx7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICBjb2xvcjpibGFjaztcclxufVxyXG5cclxuLnZpZXdCdXR0b257XHJcbiAgY29sb3I6d2hpdGU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIxYzNlNjtcclxuICBib3JkZXI6IG5vbmU7XHJcbn1cclxuXHJcbi52aWV3QnV0dG9uOmhvdmVye1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmMzcxOWE7O1xyXG59XHJcblxyXG4udHJhY2tIZWFkZXIgLm1hdC1jYXJke1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzAwQjREQiAsICMwMDgzQjApO1xyXG4gIGNvbG9yOndoaXRlO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuXHJcbi5jYXJkVGl0bGVze1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxufVxyXG5cclxuLmNhcmRDb3VudHtcclxuZmxvYXQ6IHJpZ2h0O1xyXG5mb250LXNpemU6IDIwcHg7XHJcbmJvcmRlcjogMnB4IHNvbGlkIHdoaXRlO1xyXG5wYWRkaW5nOiAxMnB4O1xyXG4vKiBib3JkZXItcmFkaXVzOiAyNXB4OyAqL1xyXG5ib3JkZXItcmFkaXVzOiAxOHB4O1xyXG5wYWRkaW5nLXRvcDogM3B4O1xyXG5wYWRkaW5nLWJvdHRvbTogM3B4O1xyXG5tYXJnaW4tdG9wOiA1cHg7XHJcbn0iLCIucGFnaW5hdGlvbkJ1dHRvbiB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIxYzNlNjtcbiAgYm9yZGVyOiBub25lO1xuICBwYWRkaW5nOiAxMHB4O1xuICBtYXJnaW46IDEwcHg7XG4gIGZsb2F0OiByaWdodDtcbn1cblxuLnBhZ2luYXRpb25CdXR0b246aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjM3MTlhO1xufVxuXG4ubWF0LWNvbHVtbi1BZGRyZXNzIHtcbiAgd2lkdGg6IDM1JTtcbn1cblxuLm1hdC1jb2x1bW4tbW9iaWxlTnVtYmVyIHtcbiAgd2lkdGg6IDE1JTtcbn1cblxudGFibGUge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLm1hdC1mb3JtLWZpZWxkIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICB3aWR0aDogMTAwJTtcbn1cblxudGQsIHRoIHtcbiAgd2lkdGg6IDI1JTtcbn1cblxubWF0LWNhcmQge1xuICBoZWlnaHQ6IDgwcHg7XG59XG5cbi5ob21lSW1hZ2VzIHtcbiAgaGVpZ2h0OiA1MHB4O1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG5cbi5tYXQtaGVhZGVyLWNlbGwge1xuICBmb250LXNpemU6IDE1cHg7XG4gIGNvbG9yOiBibGFjaztcbn1cblxuLnZpZXdCdXR0b24ge1xuICBjb2xvcjogd2hpdGU7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyMWMzZTY7XG4gIGJvcmRlcjogbm9uZTtcbn1cblxuLnZpZXdCdXR0b246aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjM3MTlhO1xufVxuXG4udHJhY2tIZWFkZXIgLm1hdC1jYXJkIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjMDBCNERCLCAjMDA4M0IwKTtcbiAgY29sb3I6IHdoaXRlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5jYXJkVGl0bGVzIHtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuXG4uY2FyZENvdW50IHtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBmb250LXNpemU6IDIwcHg7XG4gIGJvcmRlcjogMnB4IHNvbGlkIHdoaXRlO1xuICBwYWRkaW5nOiAxMnB4O1xuICAvKiBib3JkZXItcmFkaXVzOiAyNXB4OyAqL1xuICBib3JkZXItcmFkaXVzOiAxOHB4O1xuICBwYWRkaW5nLXRvcDogM3B4O1xuICBwYWRkaW5nLWJvdHRvbTogM3B4O1xuICBtYXJnaW4tdG9wOiA1cHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/track-my-travel/track-my-travel.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/track-my-travel/track-my-travel.component.ts ***!
  \**************************************************************/
/*! exports provided: TrackMyTravelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrackMyTravelComponent", function() { return TrackMyTravelComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/esm5/paginator.es5.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm5/table.es5.js");
/* harmony import */ var _Global_Services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Global/Services */ "./src/app/Global/Services.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






var TrackMyTravelComponent = /** @class */ (function () {
    function TrackMyTravelComponent(_Services, _Router) {
        this._Services = _Services;
        this._Router = _Router;
        this.Limit = {
            "limit": 10,
            "skip": 0,
            "district": ""
        };
        this.prevText = "<< Prev";
        this.nexrText = "Next >>";
        this.displayedColumns = ['fullName', 'mobileNumber', 'address', 'emailId', 'view'];
        this.activeTripData = [];
        this.inActivedisplayedColumns = ['fullName', 'mobileNumber', 'address', 'emailId'];
        this.inActiveTripData = [];
        this.tripTitle = "ActiveTrips";
        this.Limit.district = this._Services.UserData.district;
        console.log(this.Limit);
        // this._Services.postAPI("getTrips/inactive", {}).subscribe(res => {
        //   this.inActivelistCount = res["data"].length;
        // },err=>{
        //   console.log(err);
        // });
        this.getActiveTripData();
        // this.getInActiveTripData();
    }
    TrackMyTravelComponent.prototype.ngOnInit = function () {
    };
    TrackMyTravelComponent.prototype.getActiveTripData = function () {
        var _this = this;
        this.Limit.limit = 10;
        this.tripTitle = "ActiveTrips";
        // this._Services.postAPI("getTrips/active", {}).subscribe(res => {
        this._Services.postAPI("getTrips/active/district", this.Limit).subscribe(function (res) {
            // this.tripTitle = "ActiveTrips";
            console.log(res);
            _this.activeTripData = [];
            //this.tripData = res["data"];
            _this.listCount = res["data"].length;
            for (var i = 0; i < res["data"].length; i++) {
                _this.activeTripData.push({
                    tripId: res["data"][i].tripId,
                    fullName: res["data"][i].userDetails.fullName,
                    mobileNumber: res["data"][i].userDetails.mobileNumber,
                    address: res["data"][i].userDetails.address,
                    emailId: res["data"][i].userDetails.emailId
                });
            }
            _this.activeTripData = new _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](_this.activeTripData);
            setTimeout(function () {
                _this.activeTripData.paginator = _this.paginator;
            }, 0);
            console.log(_this.activeTripData, _this.listCount);
        }, function (err) {
            console.log(err);
        });
    };
    TrackMyTravelComponent.prototype.getInActiveTripData = function () {
        var _this = this;
        this.Limit.limit = 10;
        this.tripTitle = "InActiveTrips";
        this._Services.postAPI("getTrips/inactive/district", this.Limit).subscribe(function (res) {
            // this.tripTitle = "InActiveTrips";
            _this.inActiveTripData = [];
            console.log(res);
            //this.tripData = res["data"];
            _this.inActivelistCount = res["data"].length;
            for (var i = 0; i < res["data"].length; i++) {
                _this.inActiveTripData.push({
                    tripId: res["data"][i].tripId,
                    fullName: res["data"][i].userDetails.fullName,
                    mobileNumber: res["data"][i].userDetails.mobileNumber,
                    address: res["data"][i].userDetails.address,
                    emailId: res["data"][i].userDetails.emailId
                });
            }
            _this.inActiveTripData = new _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](_this.inActiveTripData);
            setTimeout(function () {
                _this.inActiveTripData.paginator = _this.paginator;
            }, 0);
            console.log(_this.inActiveTripData, _this.listCount);
        }, function (err) {
            console.log(err);
        });
    };
    TrackMyTravelComponent.prototype.GoToView = function (inputObj) {
        console.log(inputObj);
        this._Services.LocationDetails = inputObj;
        this._Router.navigate(["/Homepage/ViewTrack"]);
    };
    TrackMyTravelComponent.prototype.getNextPage = function (inputValue) {
        console.log(inputValue);
        // this.Limit.district=this._Services.UserData.district;
        if (inputValue == true) {
            this.Limit.skip = this.Limit.skip + 10;
            console.log(this.Limit);
            if (this.tripTitle == "ActiveTrips") {
                if (this.Limit.skip < this._Services.TripsCount.activeTripsCount) {
                    console.log("hai");
                    this.getActiveTripDataByRange();
                }
            }
            else if (this.tripTitle == "InActiveTrips") {
                if (this.Limit.skip < this._Services.TripsCount.inactiveTripsCount) {
                    console.log("hai1");
                    this.getInActiveTripDataByRange();
                }
            }
        }
        else {
            console.log("bye");
            this.Limit.skip = this.Limit.skip - 10;
            console.log(this.Limit);
            if (this.Limit.skip >= 0) {
                console.log("bye");
                if (this.tripTitle == "ActiveTrips") {
                    this.getActiveTripDataByRange();
                }
                else if (this.tripTitle == "InActiveTrips") {
                    this.getInActiveTripDataByRange();
                }
            }
        }
    };
    TrackMyTravelComponent.prototype.getActiveTripDataByRange = function () {
        var _this = this;
        console.log("hai");
        // this.Limit.limit=10;
        // this.tripTitle = "ActiveTrips";
        // this._Services.postAPI("getTrips/active", {}).subscribe(res => {
        this._Services.postAPI("getTrips/active/district", this.Limit).subscribe(function (res) {
            console.log(res);
            _this.activeTripData = [];
            //this.tripData = res["data"];
            _this.listCount = res["data"].length;
            for (var i = 0; i < res["data"].length; i++) {
                _this.activeTripData.push({
                    tripId: res["data"][i].tripId,
                    fullName: res["data"][i].userDetails.fullName,
                    mobileNumber: res["data"][i].userDetails.mobileNumber,
                    address: res["data"][i].userDetails.address,
                    emailId: res["data"][i].userDetails.emailId
                });
            }
            _this.activeTripData = new _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](_this.activeTripData);
            setTimeout(function () {
                _this.activeTripData.paginator = _this.paginator;
            }, 0);
            console.log(_this.activeTripData, _this.listCount);
        }, function (err) {
            console.log(err);
        });
    };
    TrackMyTravelComponent.prototype.getInActiveTripDataByRange = function () {
        var _this = this;
        // this.Limit.limit=10;
        // this.tripTitle = "InActiveTrips";
        this._Services.postAPI("getTrips/inactive/district", this.Limit).subscribe(function (res) {
            // this.tripTitle = "InActiveTrips";
            _this.inActiveTripData = [];
            console.log(res);
            //this.tripData = res["data"];
            _this.inActivelistCount = res["data"].length;
            for (var i = 0; i < res["data"].length; i++) {
                _this.inActiveTripData.push({
                    tripId: res["data"][i].tripId,
                    fullName: res["data"][i].userDetails.fullName,
                    mobileNumber: res["data"][i].userDetails.mobileNumber,
                    address: res["data"][i].userDetails.address,
                    emailId: res["data"][i].userDetails.emailId
                });
            }
            _this.inActiveTripData = new _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](_this.inActiveTripData);
            setTimeout(function () {
                _this.inActiveTripData.paginator = _this.paginator;
            }, 0);
            console.log(_this.inActiveTripData, _this.listCount);
        }, function (err) {
            console.log(err);
        });
    };
    TrackMyTravelComponent.ctorParameters = function () { return [
        { type: _Global_Services__WEBPACK_IMPORTED_MODULE_4__["Services"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"], { static: false })
    ], TrackMyTravelComponent.prototype, "paginator", void 0);
    TrackMyTravelComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-track-my-travel',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./track-my-travel.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/track-my-travel/track-my-travel.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./track-my-travel.component.scss */ "./src/app/track-my-travel/track-my-travel.component.scss")).default]
        })
    ], TrackMyTravelComponent);
    return TrackMyTravelComponent;
}());



/***/ }),

/***/ "./src/app/user-profile/user-profile.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/user-profile/user-profile.component.scss ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".userImg {\n  height: 100px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci1wcm9maWxlL0M6XFxVc2Vyc1xcaHBcXE11c2ljXFxkaXNoYTEvc3JjXFxhcHBcXHVzZXItcHJvZmlsZVxcdXNlci1wcm9maWxlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC91c2VyLXByb2ZpbGUvdXNlci1wcm9maWxlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvdXNlci1wcm9maWxlL3VzZXItcHJvZmlsZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi51c2VySW1ne1xyXG4gICAgaGVpZ2h0OiAxMDBweDtcclxufSIsIi51c2VySW1nIHtcbiAgaGVpZ2h0OiAxMDBweDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/user-profile/user-profile.component.ts":
/*!********************************************************!*\
  !*** ./src/app/user-profile/user-profile.component.ts ***!
  \********************************************************/
/*! exports provided: UserProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserProfileComponent", function() { return UserProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _Global_Services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Global/Services */ "./src/app/Global/Services.ts");



var UserProfileComponent = /** @class */ (function () {
    function UserProfileComponent(_Services) {
        this._Services = _Services;
    }
    UserProfileComponent.prototype.ngOnInit = function () {
    };
    UserProfileComponent.ctorParameters = function () { return [
        { type: _Global_Services__WEBPACK_IMPORTED_MODULE_2__["Services"] }
    ]; };
    UserProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user-profile',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./user-profile.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/user-profile/user-profile.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./user-profile.component.scss */ "./src/app/user-profile/user-profile.component.scss")).default]
        })
    ], UserProfileComponent);
    return UserProfileComponent;
}());



/***/ }),

/***/ "./src/app/view-track/view-track.component.scss":
/*!******************************************************!*\
  !*** ./src/app/view-track/view-track.component.scss ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".ViewCard {\n  height: 100%;\n}\n\nagm-map {\n  height: 450px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlldy10cmFjay9DOlxcVXNlcnNcXGhwXFxNdXNpY1xcZGlzaGExL3NyY1xcYXBwXFx2aWV3LXRyYWNrXFx2aWV3LXRyYWNrLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC92aWV3LXRyYWNrL3ZpZXctdHJhY2suY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0FDQ0o7O0FERUE7RUFDSSxhQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC92aWV3LXRyYWNrL3ZpZXctdHJhY2suY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuVmlld0NhcmR7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbmFnbS1tYXB7XHJcbiAgICBoZWlnaHQ6IDQ1MHB4O1xyXG59XHJcbiIsIi5WaWV3Q2FyZCB7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuYWdtLW1hcCB7XG4gIGhlaWdodDogNDUwcHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/view-track/view-track.component.ts":
/*!****************************************************!*\
  !*** ./src/app/view-track/view-track.component.ts ***!
  \****************************************************/
/*! exports provided: ViewTrackComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewTrackComponent", function() { return ViewTrackComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _Global_Services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Global/Services */ "./src/app/Global/Services.ts");
/* harmony import */ var rxjs_add_observable_interval__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/observable/interval */ "./node_modules/rxjs-compat/_esm5/add/observable/interval.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");





var ViewTrackComponent = /** @class */ (function () {
    function ViewTrackComponent(_Services) {
        var _this = this;
        this._Services = _Services;
        this.lat1 = 0;
        this.lng1 = 0;
        this.zoom = 10;
        this.lat = 0;
        this.lng = 0;
        this.dir = {
            origin: { lat: 24.799448, lng: 120.979021 },
            destination: { lat: 24.799524, lng: 120.975017 }
        };
        this._Services.postAPI("getTrip/" + this._Services.LocationDetails.tripId, {}).subscribe(function (res) {
            //this.caseCount = res["data"].length;
            console.log(res["data"]);
            _this.lat1 = res["data"][0].lastLocationDetails.latitude;
            _this.lng1 = res["data"][0].lastLocationDetails.longitude;
            _this.lat = parseFloat(res["data"][0].tripSource.srcLat);
            _this.lng = parseFloat(res["data"][0].tripSource.srcLng);
            _this.origin = { lat: parseFloat(res["data"][0].tripSource.srcLat), lng: parseFloat(res["data"][0].tripSource.srcLng) };
            _this.destination = { lat: parseFloat(res["data"][0].tripDestination.destLat), lng: parseFloat(res["data"][0].tripDestination.destLng) };
            console.log(_this.origin, _this.destination);
        }, function (err) {
            console.log(err);
        });
        this.updateTrack = Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["interval"])(3000).subscribe(function (val) {
            _this._Services.postAPI("getTrip/" + _this._Services.LocationDetails.tripId, {}).subscribe(function (res) {
                //this.unseenCount = responseObj["data"].unseenSosCount;
                console.log(res["data"][0].lastLocationDetails);
                _this.lat1 = res["data"][0].lastLocationDetails.latitude;
                _this.lng1 = res["data"][0].lastLocationDetails.longitude;
            }, function (err) {
                console.log(err);
            });
        });
    }
    ViewTrackComponent.prototype.ngOnInit = function () {
        //this.getDirection();
    };
    ViewTrackComponent.prototype.getDirection = function () {
        this.origin = { lat: 24.799448, lng: 120.979021 };
        this.destination = { lat: 24.799524, lng: 120.975017 };
        // this.origin = 'Taipei Main Station';
        // this.destination = 'Taiwan Presidential Office';
    };
    ViewTrackComponent.ctorParameters = function () { return [
        { type: _Global_Services__WEBPACK_IMPORTED_MODULE_2__["Services"] }
    ]; };
    ViewTrackComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-view-track',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./view-track.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/view-track/view-track.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./view-track.component.scss */ "./src/app/view-track/view-track.component.scss")).default]
        })
    ], ViewTrackComponent);
    return ViewTrackComponent;
}());



/***/ }),

/***/ "./src/app/view/view.component.scss":
/*!******************************************!*\
  !*** ./src/app/view/view.component.scss ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("agm-map {\n  height: 450px;\n}\n\nagm-marker {\n  color: green;\n}\n\n.ViewCard {\n  margin-top: 20px;\n  color: grey !important;\n  font-weight: 700;\n  font-size: 14px;\n}\n\n.mat-card {\n  min-height: 800px;\n  color: grey !important;\n}\n\n.viewCardItems {\n  margin-top: 10px;\n}\n\n.mat-card h3 {\n  text-align: center;\n  color: #1b6cb1;\n  border-bottom: 1px solid #d6d3d3;\n  padding-bottom: 5px;\n}\n\n.container1 button {\n  /* You Can Name it what you want*/\n  margin-right: 16px;\n}\n\n.container1 button:last-child {\n  margin-right: 0px;\n  /*so the last one dont push the div thas giving the space only between the inputs*/\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlldy9DOlxcVXNlcnNcXGhwXFxNdXNpY1xcZGlzaGExL3NyY1xcYXBwXFx2aWV3XFx2aWV3LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC92aWV3L3ZpZXcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0FDQ0o7O0FERUE7RUFDSSxZQUFBO0FDQ0o7O0FER0E7RUFDSSxnQkFBQTtFQUVBLHNCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FDREo7O0FESUE7RUFDSSxpQkFBQTtFQUNBLHNCQUFBO0FDREo7O0FESUE7RUFDSSxnQkFBQTtBQ0RKOztBRElBO0VBQ0ksa0JBQUE7RUFDQSxjQUFBO0VBQ0EsZ0NBQUE7RUFDQSxtQkFBQTtBQ0RKOztBREdBO0VBQW9CLGlDQUFBO0VBQ2hCLGtCQUFBO0FDQ0o7O0FEQ0k7RUFDQSxpQkFBQTtFQUNBLGtGQUFBO0FDRUoiLCJmaWxlIjoic3JjL2FwcC92aWV3L3ZpZXcuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJhZ20tbWFwe1xyXG4gICAgaGVpZ2h0OiA0NTBweDtcclxufVxyXG5cclxuYWdtLW1hcmtlcntcclxuICAgIGNvbG9yOmdyZWVuO1xyXG59XHJcblxyXG5cclxuLlZpZXdDYXJke1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgIC8vbWluLWhlaWdodDogMjUwcHg7XHJcbiAgICBjb2xvcjogZ3JleSAhaW1wb3J0YW50O1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxufVxyXG5cclxuLm1hdC1jYXJke1xyXG4gICAgbWluLWhlaWdodDogODAwcHg7XHJcbiAgICBjb2xvcjogZ3JleSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4udmlld0NhcmRJdGVtc3tcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbn1cclxuXHJcbi5tYXQtY2FyZCBoM3tcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOiAjMWI2Y2IxO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkNmQzZDM7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogNXB4O1xyXG59XHJcbi5jb250YWluZXIxIGJ1dHRvbnsgLyogWW91IENhbiBOYW1lIGl0IHdoYXQgeW91IHdhbnQqL1xyXG4gICAgbWFyZ2luLXJpZ2h0OjE2cHg7XHJcbiAgICB9XHJcbiAgICAuY29udGFpbmVyMSBidXR0b246bGFzdC1jaGlsZHtcclxuICAgIG1hcmdpbi1yaWdodDowcHg7XHJcbiAgICAvKnNvIHRoZSBsYXN0IG9uZSBkb250IHB1c2ggdGhlIGRpdiB0aGFzIGdpdmluZyB0aGUgc3BhY2Ugb25seSBiZXR3ZWVuIHRoZSBpbnB1dHMqL1xyXG4gICAgfSIsImFnbS1tYXAge1xuICBoZWlnaHQ6IDQ1MHB4O1xufVxuXG5hZ20tbWFya2VyIHtcbiAgY29sb3I6IGdyZWVuO1xufVxuXG4uVmlld0NhcmQge1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBjb2xvcjogZ3JleSAhaW1wb3J0YW50O1xuICBmb250LXdlaWdodDogNzAwO1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbi5tYXQtY2FyZCB7XG4gIG1pbi1oZWlnaHQ6IDgwMHB4O1xuICBjb2xvcjogZ3JleSAhaW1wb3J0YW50O1xufVxuXG4udmlld0NhcmRJdGVtcyB7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG5cbi5tYXQtY2FyZCBoMyB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6ICMxYjZjYjE7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZDZkM2QzO1xuICBwYWRkaW5nLWJvdHRvbTogNXB4O1xufVxuXG4uY29udGFpbmVyMSBidXR0b24ge1xuICAvKiBZb3UgQ2FuIE5hbWUgaXQgd2hhdCB5b3Ugd2FudCovXG4gIG1hcmdpbi1yaWdodDogMTZweDtcbn1cblxuLmNvbnRhaW5lcjEgYnV0dG9uOmxhc3QtY2hpbGQge1xuICBtYXJnaW4tcmlnaHQ6IDBweDtcbiAgLypzbyB0aGUgbGFzdCBvbmUgZG9udCBwdXNoIHRoZSBkaXYgdGhhcyBnaXZpbmcgdGhlIHNwYWNlIG9ubHkgYmV0d2VlbiB0aGUgaW5wdXRzKi9cbn0iXX0= */");

/***/ }),

/***/ "./src/app/view/view.component.ts":
/*!****************************************!*\
  !*** ./src/app/view/view.component.ts ***!
  \****************************************/
/*! exports provided: ViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewComponent", function() { return ViewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _Global_Services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Global/Services */ "./src/app/Global/Services.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");





var ViewComponent = /** @class */ (function () {
    function ViewComponent(_Services, _Router, sanitizer) {
        this._Services = _Services;
        this._Router = _Router;
        this.sanitizer = sanitizer;
        this.CrimeNumber = "";
        this.InformationConveyedTo = "";
        this.LocationsData = [];
        this.locationsarr = [];
        this.lat = 15.9129;
        this.lng = 79.7400;
        this.zoom = 12;
        this.isFirRegistered = null;
        this.textMsg = "";
        this.errMsg = "";
        console.log(_Services.ViewCaseDetails);
        this.viewCaseData = _Services.ViewCaseDetails;
        this.sanitizedUrl = this.sanitizer.bypassSecurityTrustUrl('http://maps.google.com/?q=' + this.viewCaseData.latitude + ',' + this.viewCaseData.longitude);
        var obj = {
            "sosId": this.viewCaseData._id,
            "sosSeenBy": "admin"
        };
        this._Services.postAPI("sosServices/sosSeen", obj).subscribe(function (res) {
            console.log(res);
        }, function (err) {
            console.log(err);
        });
        this.lat1 = parseFloat(this._Services.ViewCaseDetails.latitude);
        this.lng1 = parseFloat(this._Services.ViewCaseDetails.longitude);
        var inputObj = {
            "name": "policestations",
            "distance": 50000,
            "coordinates": [parseFloat(this._Services.ViewCaseDetails.longitude), parseFloat(this._Services.ViewCaseDetails.latitude)]
        };
        console.log(inputObj);
        this.getData(inputObj);
    }
    ViewComponent.prototype.ngOnInit = function () {
    };
    ViewComponent.prototype.getData = function (inputObj) {
        var _this = this;
        this._Services.postAPI("getLocations", inputObj).subscribe(function (res) {
            console.log(res["data"]);
            _this.LocationsData = res["data"];
            if (_this.LocationsData.length > 0) {
                for (var i = 0; i < _this.LocationsData.length; i++) {
                    _this.locationsarr.push({ psName: _this.LocationsData[i].psName, psMobile: _this.LocationsData[i].mobile, psLandline: _this.LocationsData[i].landLine, lng: _this.LocationsData[i].location.coordinates[0], lat: _this.LocationsData[i].location.coordinates[1], psUnit: _this.LocationsData[i].unit, });
                }
                console.log(_this.locationsarr);
            }
            //this.LocationsData = new MatTableDataSource(this.LocationsData);
            // setTimeout(() => {
            //   this.LocationsData.paginator= this.paginator;
            // }, 0);
            // console.log(this.LocationsData);
        }, function (err) {
            console.log(err);
        });
    };
    ViewComponent.prototype.GoToAssignedPage = function () {
        this._Router.navigate(["/Homepage/Assignedpage"]);
    };
    ViewComponent.prototype.getFIRvalue = function (inputText) {
        console.log(inputText);
        this.isFirRegistered = inputText;
    };
    ViewComponent.prototype.completeCase = function (textMsg) {
        var _this = this;
        this.errMsg = "";
        console.log(textMsg);
        if (textMsg != "" && this.isFirRegistered != null) {
            this.errMsg = "";
            var obj = {
                "sosId": this.viewCaseData._id,
                "sosCompletedBy": this.viewCaseData.sosAssignedDetails.sosAssignedBy,
                "sosCompletedReport": {
                    "policeStationId": this.viewCaseData.sosAssignedDetails.sosAssignedTo.policeStationId,
                    "policeStationName": this.viewCaseData.sosAssignedDetails.sosAssignedTo.policeStationName,
                    "policeStationArea": this.viewCaseData.sosAssignedDetails.sosAssignedTo.policeStationArea,
                    "closingReason": textMsg,
                    "CrimeNumber": this.CrimeNumber,
                    "InformationConveyedTo": this.InformationConveyedTo
                },
                "firRegistered": this.isFirRegistered
            };
            console.log(obj);
            this._Services.postAPI("sosServices/sosCompleted", obj).subscribe(function (res) {
                console.log(res);
                _this._Services.DashBoardTitle = "Completed";
                _this._Router.navigate(["/Homepage/Sos"]);
            }, function (err) {
                console.log(err);
            });
        }
        else {
            this.errMsg = "Please Enter Closing Reason and FIR Status";
        }
    };
    ViewComponent.prototype.completeCase1 = function (textMsg) {
        var _this = this;
        this.errMsg = "";
        console.log(textMsg);
        if (textMsg != "") {
            this.errMsg = "";
            var obj = {
                "sosId": this.viewCaseData._id,
                "sosCompletedBy": "",
                "sosCompletedReport": {
                    "policeStationId": "",
                    "policeStationName": "",
                    "policeStationArea": "",
                    "closingReason": textMsg,
                    "CrimeNumber": this.CrimeNumber,
                    "InformationConveyedTo": this.InformationConveyedTo
                },
                "firRegistered": this.isFirRegistered
            };
            console.log(obj);
            this._Services.postAPI("sosServices/sosCompleted", obj).subscribe(function (res) {
                console.log(res);
                _this._Services.DashBoardTitle = "Completed";
                _this._Router.navigate(["/Homepage/Sos"]);
            }, function (err) {
                console.log(err);
            });
        }
        else {
            this.errMsg = "Please Enter Closing Reason and FIR Status";
        }
    };
    ViewComponent.prototype.onMouseOver = function (infoWindow, gm) {
        console.log(gm);
        if (gm.lastOpen && gm.lastOpen.isOpen) {
            gm.lastOpen.close();
        }
        gm.lastOpen = infoWindow;
        infoWindow.open();
    };
    ViewComponent.prototype.onMouseOut = function (infoWindow, $event) {
        infoWindow.close();
    };
    ViewComponent.ctorParameters = function () { return [
        { type: _Global_Services__WEBPACK_IMPORTED_MODULE_2__["Services"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DomSanitizer"] }
    ]; };
    ViewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-view',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./view.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/view/view.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./view.component.scss */ "./src/app/view/view.component.scss")).default]
        })
    ], ViewComponent);
    return ViewComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_5__);






if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\hp\Music\disha1\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map