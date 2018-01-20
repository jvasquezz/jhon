export class DesktopOrMobileView {
    constructor(public isMobile: boolean, public isDesktop: boolean) {
    }

    public static NewInstance(value: boolean) {
        return new DesktopOrMobileView(value, value);
    }

    setView(wWidth) {
        this.isMobile = false;
        this.isDesktop = false;
        if (wWidth < 719) {
        this.isMobile = true;
        } else if (wWidth > 1019) {
        this.isDesktop = true;
        }
    }
}
