"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FaceSnapComponent = void 0;
const core_1 = require("@angular/core");
@(0, core_1.Component)({
    selector: 'app-face-snap',
    templateUrl: './face-snap.html',
    styleUrl: './face-snap.scss',
})
class FaceSnapComponent {
    title;
    description;
    createAt;
    snaps;
    imageUrl;
    ngOnInit() {
        this.title = 'Archibald';
        this.description = 'mon meilleur ami depuis toujours';
        this.createAt = new Date();
        this.snaps = 0;
        this.imageUrl =
            'https://images.unsplash.com/photo-1774429078795-0c3fe5ddba8f?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
    }
}
exports.FaceSnapComponent = FaceSnapComponent;
//# sourceMappingURL=face-snap.js.map