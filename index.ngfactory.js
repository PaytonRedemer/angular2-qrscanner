/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
/* tslint:disable */
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var import0 = require('@angular/core/src/linker/ng_module_factory');
var import1 = require('./index');
var import2 = require('@angular/common/src/common_module');
var import3 = require('@angular/common/src/localization');
var import5 = require('@angular/core/src/i18n/tokens');
var QrScannerModuleInjector = (function (_super) {
    __extends(QrScannerModuleInjector, _super);
    function QrScannerModuleInjector(parent) {
        _super.call(this, parent, [], []);
    }
    Object.defineProperty(QrScannerModuleInjector.prototype, "_NgLocalization_2", {
        get: function () {
            if ((this.__NgLocalization_2 == null)) {
                (this.__NgLocalization_2 = new import3.NgLocaleLocalization(this.parent.get(import5.LOCALE_ID)));
            }
            return this.__NgLocalization_2;
        },
        enumerable: true,
        configurable: true
    });
    QrScannerModuleInjector.prototype.createInternal = function () {
        this._CommonModule_0 = new import2.CommonModule();
        this._QrScannerModule_1 = new import1.QrScannerModule();
        return this._QrScannerModule_1;
    };
    QrScannerModuleInjector.prototype.getInternal = function (token, notFoundResult) {
        if ((token === import2.CommonModule)) {
            return this._CommonModule_0;
        }
        if ((token === import1.QrScannerModule)) {
            return this._QrScannerModule_1;
        }
        if ((token === import3.NgLocalization)) {
            return this._NgLocalization_2;
        }
        return notFoundResult;
    };
    QrScannerModuleInjector.prototype.destroyInternal = function () {
    };
    return QrScannerModuleInjector;
}(import0.NgModuleInjector));
exports.QrScannerModuleNgFactory = new import0.NgModuleFactory(QrScannerModuleInjector, import1.QrScannerModule);