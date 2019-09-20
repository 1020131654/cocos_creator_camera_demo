const { ccclass, property } = cc._decorator;

@ccclass
export default class Helloworld extends cc.Component {
    @property(cc.Camera)
    camera: cc.Camera = null;

    @property(cc.Sprite)
    sp_camera: cc.Sprite = null;

    @property(cc.Node)
    node_icon: cc.Node = null;

    @property(cc.Slider)
    sl_scale: cc.Slider = null;

    @property(cc.Slider)
    sl_h: cc.Slider = null;

    @property(cc.Slider)
    sl_v: cc.Slider = null;

    onLoad() {
        const texture = new cc.RenderTexture();
        texture.initWithSize(this.sp_camera.node.width, this.sp_camera.node.height);
        const spriteFrame = new cc.SpriteFrame();
        spriteFrame.setTexture(texture);
        this.sp_camera.spriteFrame = spriteFrame;
        this.camera.targetTexture = texture;

        this.node_icon.runAction(cc.repeatForever(cc.rotateBy(1, 100)));
        this.onSliderChange(this.sl_scale);
        this.onSliderChange(this.sl_h);
        this.onSliderChange(this.sl_v);
    }

    private onSliderChange(slider?: cc.Slider) {
        switch (slider) {
            case this.sl_scale: {
                const zoomRatio = this.sl_scale.progress * 2;
                this.camera.zoomRatio = zoomRatio;
                break;
            }
            case this.sl_h: {
                this.camera.node.x = (this.sl_h.progress - 0.5) * (this.node.width);
                break;
            }
            case this.sl_v: {
                this.camera.node.y = (this.sl_v.progress - 0.5) * (this.node.height)
                break;
            }
        }

    }
}
