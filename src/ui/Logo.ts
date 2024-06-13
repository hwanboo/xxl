import { Container } from 'pixi.js';
import { Label } from './Label';
import { i18n } from '../utils/i18n';
import gsap from 'gsap';

/**
 * The game logo, presented in the Home screen
 */
export class Logo extends Container {
    /** The logo text */
    private titleLabel: Label;

    constructor() {
        super();
        this.scale.set(0.5);
        this.titleLabel = new Label(i18n.logoTitle, {
            fill: 0x2c136c,
            fontSize: 120,
            align: 'center',
            fontFamily: 'Game Font',
        });
        this.addChild(this.titleLabel);
    }

    /** Show the component */
    public async show(animated = true) {
        gsap.killTweensOf(this.titleLabel.scale);
        this.visible = true;
        if (animated) {
            this.titleLabel.scale.set(0);
            await gsap.to(this.titleLabel.scale, { x: 1, y: 1, duration: 0.3, ease: 'back.out' });
        } else {
            this.titleLabel.scale.set(1);
        }
    }

    /** Hide the component */
    public async hide(animated = true) {
        gsap.killTweensOf(this.titleLabel.scale);
        if (animated) {
            await gsap.to(this.titleLabel.scale, { x: 0, y: 0, duration: 0.3, ease: 'back.in' });
        } else {
            this.titleLabel.scale.set(0);
        }
        this.visible = false;
    }
}
