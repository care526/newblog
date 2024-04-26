# clipboard

```ts
// 在需要使用剪切板功能的模块中引入
import { ClipboardModule } from '@angular/cdk/clipboard';
```

## 指令模式
```html
<!-- 标签可以是任何标签 -->
<button cdkCopyToClipboard="我是待复制的文本">点击复制</button>
<button [cdkCopyToClipboard]="willCopyText">点击复制</button>
```

## 编程方式
```ts
// 引入
import { Clipboard } from '@angular/cdk/clipboard';
// 依赖注入
private clipboard: Clipboard,
// 执行(适合短文本)
const copyResult = this.clipboard.copy(url);
copyResult ? this.message.success('复制成功') : this.message.error('复制失败');
```