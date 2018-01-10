"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var data_service_1 = require("../data.service/data.service");
var DataCardsComponent = /** @class */ (function () {
    function DataCardsComponent(_dataService) {
        this._dataService = _dataService;
        this._searchTerm = '';
    }
    Object.defineProperty(DataCardsComponent.prototype, "searchTerm", {
        set: function (searchTerm) {
            if (searchTerm !== null) {
                this._searchTerm = searchTerm;
            }
        },
        enumerable: true,
        configurable: true
    });
    DataCardsComponent.prototype.populateCards = function () {
        var _this = this;
        this._dataService.getData(this._searchTerm == null ? '' : this._searchTerm).subscribe(function (data) {
            console.log(data);
            _this.data = data;
        });
    };
    DataCardsComponent.prototype.ngOnInit = function () {
    };
    DataCardsComponent.prototype.ngOnChanges = function (changes) {
        this.populateCards();
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], DataCardsComponent.prototype, "searchTerm", null);
    DataCardsComponent = __decorate([
        core_1.Component({
            selector: 'app-data-cards',
            templateUrl: './data-cards.component.html',
            styleUrls: ['../styles/data-cards/data-cards.component.sass']
        }),
        __metadata("design:paramtypes", [data_service_1.DataService])
    ], DataCardsComponent);
    return DataCardsComponent;
}());
exports.DataCardsComponent = DataCardsComponent;
//# sourceMappingURL=data-cards.component.js.map