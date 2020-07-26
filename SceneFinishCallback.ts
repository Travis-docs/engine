
import Engine from "../engine/Engine";

const {ccclass} = cc._decorator;

@ccclass
export default class SceneFinishCallback extends cc.Component {

    onLoad () {
        Engine.onLoad();
    }

    start () {
        Engine.start();
    }

    // update (dt) {}
}
