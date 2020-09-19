//  关于动画的方法
const binding = {
	// 获取el节点的方法
	getEl: function(el) {
		if (typeof el === 'string' || typeof el === 'number') return el;
		if (WXEnvironment) {
			return el.ref;
		} else {
			return el instanceof HTMLElement ? el : el.$el;
		}
	},
	testDemo: function() {
		console.log('使用binding');
	}
}

export default binding;
