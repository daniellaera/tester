import * as chai from 'chai';
var expect = chai.expect;

describe('about ts types', () => {
  it('1-should compile to plain javascript', () => {
    var boolean: boolean = true; // _
    var integer: number = 6; // _
    var float: number = Math.PI; // _
    var foo: string = 'bar'; // _
    expect(boolean).to.be.true;
    expect(integer).to.equal(6);
    expect(float).to.equal(Math.PI);
    expect(foo).to.equal('bar');
  });

  it('2-should type arrays', () => {
    var list = 'ab'; // _
    expect(list.length).to.equal(2);
  });

  it('3-should type tuples', () => {
    var tupple = [42, 'foo']; // _
    expect(tupple[0]).to.equal(42);
    expect(tupple[1]).to.equal('foo');
  });

  it('4-should type enums', () => {
    // _
    enum myAwesomeEnum {
      ACTIVE,
      ACTIVEW,
      INACTIVE
    }    
    expect(myAwesomeEnum.ACTIVE).to.equal(0);
    expect(myAwesomeEnum[2]).to.equal('INACTIVE');
  });

  it('5-should type null and undefined', () => {
    var nullVar = null;
    var undefinedVar;
    expect(nullVar).to.be.null;
    expect(undefinedVar).to.be.undefined;
  });

  it('6-should work in functions arguments too', () => {
    function sayHello(name: string) {
      return 'Hello '.concat(name);
    }
    expect(sayHello('TypeScript')).to.equal('Hello TypeScript');
  });

  it('7-should infer the type', () => {
    function add(a, b) {
      return a + b;
    }
    expect(add(17, '25')).to.equal('1725');
  });
});
