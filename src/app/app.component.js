"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppComponent = void 0;
const core_1 = require("@angular/core");
const face_snap_1 = require("./face-snap/face-snap");
@(0, core_1.Component)({
    selector: 'app-root',
    imports: [face_snap_1.FaceSnapComponent],
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
class AppComponent {
}
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map