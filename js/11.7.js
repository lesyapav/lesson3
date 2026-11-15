class Spoiler2 extends Spoiler{
    toggleHandler
    
    get state() { return super.state;} // 
    set state (val){
        const oldState = this.state; //
        super.state = val; //
        if ((this.state != oldState) && (this.toggleHandler)) //
            this.toggleHandler(this) ;
    }
    toggle() {//
        this.state = !this.state;
    }
    static create(... elements){
        elements = elements.map (el => {// 
            if (typeof el == 'string') //
                return document.getElementById(el); //
            else
                return el;//
        });
        super.create(...elements) ; //
    }
}
class Spoiler3 extends Spoiler2{
    constructor(header, params={}){
        super(header);
        this.#toggleHandler=params.toggleHandler||null;
    }
    #toggleHandler;
    [Symbol.toPrimitive](hint){
        if (hint==='string'){
            const stateText=this.state?'развернут': 'свернут';
            return `Спойлер "${this.header.textContent}" (${stateText})`;
        }
        return this.state ? 1:0;
    }
}