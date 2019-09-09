import singleton from "./designs/singleton/main";
import factory   from "./designs/factory/main";
import iterator  from "./designs/iterator/main";
import decorator from "./designs/decorator/main";
import strategy  from "./designs/strategy/main";
import facade    from "./designs/facade/main";
import proxy     from "./designs/proxy/main";
import mediator  from "./designs/mediator/main";
import observer  from "./designs/observer/main";
import adapter   from "./designs/adapter/main";
import template  from "./designs/template_method/main";
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