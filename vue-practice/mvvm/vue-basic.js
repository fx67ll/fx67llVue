var vueBasic = (function() {


	function test() {
		console.log('=================================');
		setProperty();
	}

	// 测试创建属性，并为属性添加数据描述符和存取描述符
	function setProperty() {
		// 创建一个新对象
		var o = {};

		// 在对象中添加一个属性与数据描述符
		Object.defineProperty(o, 'a', {
			value: 37,
			writable: true,
			enumerable: true,
			configurable: true
		});

		// 对象o拥有了属性a，值为37
		console.log(o);
		console.log('---------------------------------');

		// 在对象中添加一个存取描述符
		var bValue = 38;
		Object.defineProperty(o, 'b', {
			get() {
				return bValue;
			},
			// 把对象 o 的 b 属性值 set 给 bValue 
			set(newValue) {
				bValue = newValue;
			},
			enumerable: true,
			configurable: true
		});

		// 对象o拥有了属性b，值为38
		// 现在除非重新定义 o.b ，否则 o.b 的值总是与 bValue 相同
		console.log(o);
		console.log(bValue);
		console.log('---------------------------------');

		o.b = 39;
		console.log('o.b = 39;')
		console.log(o);
		console.log(bValue);
		console.log('---------------------------------');

		bValue = 40;
		console.log('o.b = 40;')
		console.log(o);
		console.log(bValue);
		console.log('---------------------------------');

		// 数据描述符和存取描述符不能混合使用
		Object.defineProperty(o, "conflict", {
			value: 0x9f91102,
			get() {
				return 0xdeadbeef;
			}
		});
		// 参考资料说：抛出错误 TypeError: value appears only in data descriptors, get appears only in accessor descriptors  
		// 实际上：Uncaught TypeError: Invalid property descriptor. Cannot both specify accessors and a value or writable attribute, #<Object>  
		// 反正不能混用就对了
	}

	return {
		init: function() {
			test();
		}
	}
}());
