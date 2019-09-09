import singleton from "./singleton/main";
import factory   from "./factory/main";
import iterator  from "./iterator/main";
import decorator from "./decorator/main";
import strategy  from "./strategy/main";
import facade    from "./facade/main";
import proxy     from "./proxy/main";
import mediator  from "./mediator/main";
import observer  from "./observer/main";
import adapter   from "./adapter/main";
import template  from "./template_method/main";
/**
 * 結局お前は一体何がしたいんだ
 * この処理自体も割とファクトリパターンっぽい
 */
export default function (req, res) {
    const pattern = req.query.pattern;
    patterns[pattern]()
    res.send("Hello " + pattern);
}

const patterns = {
    singleton: singleton,
    factory: factory,
    iterator: iterator,
    decorator: decorator,
    strategy: strategy,
    facade: facade,
    proxy: proxy,
    mediator: mediator,
    observer: observer,
    adapter: adapter,
    template: template
}