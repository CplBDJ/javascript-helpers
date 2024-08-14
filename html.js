/****************************************************************************************
 * Description: A lightweight react like html creation library.
 * Usage: Use like HTML. Pass another HTML function (like $p), a string or an 
 *        Object using either JavaScript or tag parameters.
 * Example:  
 *     var table = $table(
 *         $tr(
 *             $td('row1'),
 *             $td('row2', {className: 'align-right'})
 *         )
 *     );
 * Inspired by: https://gist.github.com/davidgilbertson/c9ff092236c695dfe8c57d23f7a1a0de
 ***************************************************************************************/

class HTML {
    constructor() {};

    element(tag, ...args) {
        let element = document.createElement(tag);

        args.forEach((arg) => {
            if (this.isInstanceOf(arg, 'string', 'number')) {
                element.appendChild(document.createTextNode(arg))
            } else if (arg instanceof HTMLElement) {
                element.appendChild(arg);
            } else if (this.isInstanceOf(arg, 'Object')) {
                let keys = Object.keys(arg);
    
                keys.forEach((key) => {
                    if (this.isInstanceOf(arg[key], 'function')) {
                        element.addEventListener(key, arg[key]);
                    } else if (key == 'style') {
                        Object.keys(arg[key]).forEach((style) => {
                            //console.log('style', style, arg[key][style]);
                            element.style[style] = arg[key][style]
                        });
                    } else if (key == 'data') {
                        Object.keys(arg[key]).forEach((data) => {
                            element.setAttribute(`data-${data}`, arg[key][data]);
                        });
                    } else if (key == 'className') {
                        element.className = arg[key];
                    } else {  // Allow anything just like html.
                        element.setAttribute(key, arg[key]);
                    }
                });
            };
        });
    
        return element;
    };

    matches(value, ...args) {
        for (let i=0; i<args.length; i++) 
            if (value === args[i] || `${value}`.toLowerCase() === `${args[i]}`.toLowerCase())
                return true;
        
        return false;
    };

    isInstanceOf(value, ...args) {
        let target = this.type(value);
        let htmlelement = target.match(/HTML/) + target.match(/Element/);

        for (let i=0; i<args.length; i++) {
            if (this.matches(args[0], target, htmlelement)) return true;
        };

        return false;
    };

    type(value){
        return Object.prototype.toString.call(value).replace('[object ', '').replace(']', '');
    };
};

const $HTML = new HTML();

const $a = (...args) => $HTML.element('a', ...args);
const $abbr = (...args) => $HTML.element('abbr', ...args);
const $address = (...args) => $HTML.element('address', ...args);
const $area = (...args) => $HTML.element('area', ...args);
const $article = (...args) => $HTML.element('article', ...args);
const $aside = (...args) => $HTML.element('aside', ...args);
const $audio = (...args) => $HTML.element('audio', ...args);
const $b = (...args) => $HTML.element('b', ...args);
const $bdi = (...args) => $HTML.element('bdi', ...args);
const $bdo = (...args) => $HTML.element('bdo', ...args);
const $blockquote = (...args) => $HTML.element('blockquote', ...args);
const $br = (...args) => $HTML.element('br', ...args);
const $button = (...args) => $HTML.element('button', ...args);
const $canvas = (...args) => $HTML.element('canvas', ...args);
const $caption = (...args) => $HTML.element('caption', ...args);
const $cite = (...args) => $HTML.element('cite', ...args);
const $code = (...args) => $HTML.element('code', ...args);
const $col = (...args) => $HTML.element('col', ...args);
const $colgroup = (...args) => $HTML.element('colgroup', ...args);
const $data = (...args) => $HTML.element('data', ...args);
const $datalist = (...args) => $HTML.element('datalist', ...args);
const $dd = (...args) => $HTML.element('dd', ...args);
const $del = (...args) => $HTML.element('del', ...args);
const $details = (...args) => $HTML.element('details', ...args);
const $dfn = (...args) => $HTML.element('dfn', ...args);
const $dialog = (...args) => $HTML.element('dialog', ...args);
const $div = (...args) => $HTML.element('div', ...args);
const $dl = (...args) => $HTML.element('dl', ...args);
const $dt = (...args) => $HTML.element('dt', ...args);
const $em = (...args) => $HTML.element('em', ...args);
const $embed = (...args) => $HTML.element('embed', ...args);
const $fieldset = (...args) => $HTML.element('fieldset', ...args);
const $figcaption = (...args) => $HTML.element('figcaption', ...args);
const $figure = (...args) => $HTML.element('figure', ...args);
const $footer = (...args) => $HTML.element('footer', ...args);
const $form = (...args) => $HTML.element('form', ...args);
const $h1 = (...args) => $HTML.element('h1', ...args);
const $h2 = (...args) => $HTML.element('h2', ...args);
const $h3 = (...args) => $HTML.element('h3', ...args);
const $h4 = (...args) => $HTML.element('h4', ...args);
const $h5 = (...args) => $HTML.element('h5', ...args);
const $h6 = (...args) => $HTML.element('h6', ...args);
const $header = (...args) => $HTML.element('header', ...args);
const $hgroup = (...args) => $HTML.element('hgroup', ...args);
const $hr = (...args) => $HTML.element('hr', ...args);
const $i = (...args) => $HTML.element('i', ...args);
const $iframe = (...args) => $HTML.element('iframe', ...args);
const $img = (...args) => $HTML.element('img', ...args);
const $input = (...args) => $HTML.element('input', ...args);
const $ins = (...args) => $HTML.element('ins', ...args);
const $kbd = (...args) => $HTML.element('kbd', ...args);
const $label = (...args) => $HTML.element('label', ...args);
const $legend = (...args) => $HTML.element('legend', ...args);
const $li = (...args) => $HTML.element('li', ...args);
const $main = (...args) => $HTML.element('main', ...args);
const $map = (...args) => $HTML.element('map', ...args);
const $mark = (...args) => $HTML.element('mark', ...args);
const $math = (...args) => $HTML.element('math', ...args);
const $menu = (...args) => $HTML.element('menu', ...args);
const $meter = (...args) => $HTML.element('meter', ...args);
const $nav = (...args) => $HTML.element('nav', ...args);
const $noscript = (...args) => $HTML.element('noscript', ...args);
const $object = (...args) => $HTML.element('object', ...args);
const $ol = (...args) => $HTML.element('ol', ...args);
const $optgroup = (...args) => $HTML.element('optgroup', ...args);
const $option = (...args) => $HTML.element('option', ...args);
const $output = (...args) => $HTML.element('output', ...args);
const $p = (...args) => $HTML.element('p', ...args);
const $param = (...args) => $HTML.element('param', ...args);
const $picture = (...args) => $HTML.element('picture', ...args);
const $pre = (...args) => $HTML.element('pre', ...args);
const $progress = (...args) => $HTML.element('progress', ...args);
const $q = (...args) => $HTML.element('q', ...args);
const $rb = (...args) => $HTML.element('rb', ...args);
const $rp = (...args) => $HTML.element('rp', ...args);
const $rt = (...args) => $HTML.element('rt', ...args);
const $rtc = (...args) => $HTML.element('rtc', ...args);
const $ruby = (...args) => $HTML.element('ruby', ...args);
const $s = (...args) => $HTML.element('s', ...args);
const $samp = (...args) => $HTML.element('samp', ...args);
const $script = (...args) => $HTML.element('script', ...args);
const $section = (...args) => $HTML.element('section', ...args);
const $select = (...args) => $HTML.element('select', ...args);
const $slot = (...args) => $HTML.element('slot', ...args);
const $small = (...args) => $HTML.element('small', ...args);
const $source = (...args) => $HTML.element('source', ...args);
const $span = (...args) => $HTML.element('span', ...args);
const $strong = (...args) => $HTML.element('strong', ...args);
const $sub = (...args) => $HTML.element('sub', ...args);
const $summary = (...args) => $HTML.element('summary', ...args);
const $sup = (...args) => $HTML.element('sup', ...args);
const $svg = (...args) => $HTML.element('svg', ...args);
const $table = (...args) => $HTML.element('table', ...args);
const $tbody = (...args) => $HTML.element('tbody', ...args);
const $td = (...args) => $HTML.element('td', ...args);
const $template = (...args) => $HTML.element('template', ...args);
const $textarea = (...args) => $HTML.element('textarea', ...args);
const $tfoot = (...args) => $HTML.element('tfoot', ...args);
const $th = (...args) => $HTML.element('th', ...args);
const $thead = (...args) => $HTML.element('thead', ...args);
const $time = (...args) => $HTML.element('time', ...args);
const $tr = (...args) => $HTML.element('tr', ...args);
const $tt = (...args) => $HTML.element('tt', ...args);
const $track = (...args) => $HTML.element('track', ...args);
const $u = (...args) => $HTML.element('u', ...args);
const $ul = (...args) => $HTML.element('ul', ...args);
const $var = (...args) => $HTML.element('var', ...args);
const $video = (...args) => $HTML.element('video', ...args);
const $wbr = (...args) => $HTML.element('wbr', ...args);
const $nbsp = function() { return '\xa0' };