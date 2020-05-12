'use strict'

new Vue({
  el: '#calculator',
  data: {
    current: '',
    previous: '',
    operator: '',
    operatorClicked: false,
  },
  methods: {
    clear: function() {
      this.current = '';
    },
    //+/-の切り替え
    pm: function() {
      this.current = this.current.charAt(0) === '-' ? this.current.slice(1) : `-${this.current}`;
    },
    percent: function() {
      this.current = `${parseFloat(this.current) / 100}`;
    },
    dot: function() {
      if (this.current.indexOf('.') === -1) {
        this.append('.');
      }
    },
    append: function(number) {
      if (this.operatorClicked) {
        this.current = '';
        this.operatorClicked = false;
      }
      this.current = `${this.current}${number}`;
    },
    setPrevious: function() {
      this.previous = this.current;
      this.operatorClicked = true;
    },
    //operatorは定義してるだけ
    //equal関数を呼び出すときに直前のoperatorを呼び出す
    divide: function() {
      if (this.previous) {
        this.equal();
      };
      this.operator = function (a, b) {
        return a / b;
      };
      this.setPrevious();
    },
    multiply: function() {
      if (this.previous) {
        this.equal();
      };
      this.operator = function (a, b) {
        return a * b;
      };
      this.setPrevious();
    },
    minus: function() {
      if (this.previous) {
        this.equal();
      };
      this.operator = function (a, b) {
        return a - b;
      };
      this.setPrevious();
    },
    plus: function() {
      if (this.previous) {
        this.equal();
      };
      this.operator = function (a, b) {
        return a + b;
      };
      this.setPrevious();
    },
    equal: function() {
      this.current = `${this.operator(
        parseFloat(this.previous),
        parseFloat(this.current)
      )}`;
      this.previous = null;
    }
  }
})