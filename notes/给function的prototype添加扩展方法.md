###给Function的prototype添加扩展方法

    /**
     Function.prototype添加method方法，并返回this对象
     PS：这是function四种模式中的方法调用模式，因为function被保存为一个对象的属性
     如果method被一个对象调用，那么传入到method的方法内的this就是那个对象
     Function也是所有对象的基类？？
    */
    Function.prototype.method = function(funcName, func) {
        if (!this.prototype[funcName]) {
            this.prototype[funcName] = func;
        } else {}
        return this;
    };
    
###给Function添加getName方法

    //给所有的Function对象添加了一个getName方法
    Function.method('getName', function(name) {
        console.log('name: ' + name);
    });

###给Number类型添加int方法

    //给Number类型添加一个int方法
    //有疑问，此处调用Number.method(...)为何会调用Function.prototype.method从而给Number的prototype也添加了一个"int"方法
    //难道是因为Number.prototype继承与Function.prototpye，而Function.prototype继承与Object.prototype?
    //否则Number.method(...)怎么就会调用到Function.protoype.method(...)上去了！
    Number.method('int', function() {
        return Math[this < 0 ? 'ceil' : 'floor'](this);
        // 此处this指的是什么？此处this是传入的对象
        // 比如 var f = 10.22;f.int();this===f
    });

###给String添加trim方法

    //一样的疑问，String.method怎么就给String.prototype添加上了trim方法
    String.method('trim', function() {
        return this.replace(/^\s+|\s$/g, '');
    });

###给Array添加sum方法

    //sum
    Array.method('sum', function() {
        console.log('数组求和方法');
    });
    console.log([].sum());
    console.log(' s  '.trim().length);