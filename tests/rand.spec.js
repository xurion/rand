describe('Rand', function () {

  var uut;

  beforeEach(function () {

    uut = new Rand();

  });

  describe('str()', function () {

    it('returns a random alpha string 10 characters in length', function () {

      var expectedPattern = /\w+/,
        test1 = uut.str(),
        test2 = uut.str(),
        test3 = uut.str(),
        test4 = uut.str(),
        test5 = uut.str();

      expect(test1.match(expectedPattern).length).toBe(1)
      expect(test1.length).toBe(10)
      expect(test2.match(expectedPattern).length).toBe(1)
      expect(test2.length).toBe(10)
      expect(test3.match(expectedPattern).length).toBe(1)
      expect(test3.length).toBe(10)
      expect(test4.match(expectedPattern).length).toBe(1)
      expect(test4.length).toBe(10)
      expect(test5.match(expectedPattern).length).toBe(1)
      expect(test5.length).toBe(10)
    })

    it('returns random alpha strings that are different from each other (by chance)', function () {

      var test1 = uut.str(),
        test2 = uut.str()

      expect(test1).not.toBe(test2)
    })

    it('returns a random alpha string at a length of the given length argument', function () {

      var test1 = uut.str(1),
        test9 = uut.str(9),
        test11 = uut.str(11)

      expect(test1.length).toBe(1)
      expect(test9.length).toBe(9)
      expect(test11.length).toBe(11)

    })

    it('uses all alpha characters as possible characters in generated strings', function () {

      var test = uut.str(1000)

      expect(test.match('a').length).toBe(1)
      expect(test.match('b').length).toBe(1)
      expect(test.match('c').length).toBe(1)
      expect(test.match('d').length).toBe(1)
      expect(test.match('e').length).toBe(1)
      expect(test.match('f').length).toBe(1)
      expect(test.match('g').length).toBe(1)
      expect(test.match('h').length).toBe(1)
      expect(test.match('i').length).toBe(1)
      expect(test.match('j').length).toBe(1)
      expect(test.match('k').length).toBe(1)
      expect(test.match('l').length).toBe(1)
      expect(test.match('m').length).toBe(1)
      expect(test.match('n').length).toBe(1)
      expect(test.match('o').length).toBe(1)
      expect(test.match('p').length).toBe(1)
      expect(test.match('q').length).toBe(1)
      expect(test.match('r').length).toBe(1)
      expect(test.match('s').length).toBe(1)
      expect(test.match('t').length).toBe(1)
      expect(test.match('u').length).toBe(1)
      expect(test.match('v').length).toBe(1)
      expect(test.match('w').length).toBe(1)
      expect(test.match('x').length).toBe(1)
      expect(test.match('y').length).toBe(1)
      expect(test.match('z').length).toBe(1)
    })

  })

})
