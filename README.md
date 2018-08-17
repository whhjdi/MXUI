# MXUI
我的UI组件项目-沐雪UI(MXUI)

作者: 沐雪

## 笔记
1. props的对象写法
```javascript
props:{
		icon:{},
		iconPosition:{
			type:String,
			default:'left',
			validator(value){
				return !(value!=='left' && value!=='right')
			}
		}
	}
```
2. 巧用flex的order,改变图标和文字的顺序
3. 解决相邻button的border问题
```css
	margin-left:-1;
	&:hover{z-index:1;}
```
4. TDD(测试驱动开发),BDD(行为驱动开发),Assert
5. 
