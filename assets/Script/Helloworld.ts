const { ccclass, property } = cc._decorator;

@ccclass
export default class Helloworld extends cc.Component {
    @property(cc.Camera)
    camera: cc.Camera = null;

    @property(cc.Sprite)
    sp_camera: cc.Sprite = null;

    @property(cc.Node)
    node_icon: cc.Node = null;

    onLoad() {
        const texture = new cc.RenderTexture();
        texture.initWithSize(this.sp_camera.node.width, this.sp_camera.node.height);
        const spriteFrame = new cc.SpriteFrame();
        spriteFrame.setTexture(texture);
        this.sp_camera.spriteFrame = spriteFrame;
        this.camera.targetTexture = texture;

        this.node_icon.runAction(cc.repeatForever(cc.sequence(cc.moveBy(0.5, 0, 20), cc.moveBy(0.5, 0, -20))));
    }

    update() {
        let newX = this.camera.node.x + 2;
        if (newX > this.node.width / 2) {
            newX = -this.node.width / 2;
        }
        this.camera.node.x = newX;
    }
}
