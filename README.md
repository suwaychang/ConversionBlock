# ConversionBlock
切換區壞套件

# 您可以直接使用預設

```javascript
// Default export
$('div.step').ConversionBlock();
```

# 或是您也可以這樣使用

```javascript
		var cb = function (index) {
			switch(index) {
				case 3:
					var len = $('input:checked').length;
					if ( len == 0 ){
						alert('Please check');
						return false;
					} else {
						return true;
					}
					break;
				default :
					return true;
					break;
			}
		};
		$('div.step').ConversionBlock({'callback':cb});
```


