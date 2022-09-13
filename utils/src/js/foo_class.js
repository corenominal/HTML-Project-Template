class Foo {
    constructor(){
        this.foobar = 'foobar';
    }

    bar = () => {
        return this.foobar;
    };
}

export default Foo;