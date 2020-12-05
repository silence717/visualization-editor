const properties = [
	'position',
	'display',
	'width',
	'height',
	'margin',
	'padding',
	'fontSize',
	'fontWeight',
	'textAlign',
	'color',
	'background',
	'border',
	'boxShadow',
	'borderRadius'
];

const styleConfigs = {
	position: {
		key: 'position',
		label: '位置',
		type: 'Radio',
		dataSource: ['absolute', 'fixed', 'relative', 'static', 'sticky', 'inherit']
	},
	display: {
		key: 'display',
		label: '布局类型',
		type: 'Radio',
		dataSource: ['block', 'flex', 'inline', 'inline-block', 'inline-flex', 'none']
	},
	width: {
		key: 'width',
		label: '宽度',
		type: 'Input'
	},
	height: {
		key: 'height',
		label: '高度',
		type: 'Input'
	},
	margin: {
		key: 'margin',
		label: '外边距',
		type: 'Spacing'
	},
	padding: {
		key: 'padding',
		label: '内边距',
		type: 'Spacing'
	},
	fontSize: {
		key: 'fontSize',
		label: '字体大小',
		type: 'Input'
	},
	color: {
		key: 'color',
		label: '颜色',
		type: 'Input'
	},
	background: {
		key: 'background',
		label: '背景色',
		type: 'Input'
	},
	border: {
		key: 'border',
		label: '边框',
		type: 'Input'
	},
	boxShadow: {
		key: 'boxShadow',
		label: '阴影',
		type: 'Input'
	},
	borderRadius: {
		key: 'borderRadius',
		label: '圆角',
		type: 'Input'
	},
	textAlign: {
		key: 'textAlign',
		label: '文本水平居中',
		type: 'Radio',
		dataSource: ['left', 'center', 'right']
	},
	fontWeight: {
		key: 'fontWeight',
		label: '文本是否加粗',
		type: 'Radio',
		dataSource: ['normal', 'bold']
	}
};

export { properties, styleConfigs };