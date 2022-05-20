export class BaseModel {
    $track = false;
    $state = 0;

    constructor(){
        return new Proxy(this as any, {
            get(t, k: string){
                return t[k];
            },
            set(t, k, v){
                console.log(`Setting value ${v} for property ${String(k)}`)
                t[k] = v;
                return true;
            }
        })
    }
}
export class Person extends BaseModel {

    get fullName(){
        return `${this.firstName} ${this.lastName}`;
    }
    
    constructor(
        public id?: number, 
        public firstName?: string,
        public lastName?: string
    ){
        super();
    }
}