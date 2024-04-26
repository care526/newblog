# API

## Directive
指令装饰器
```ts
export declare interface Directive {
  // CSS 选择器
  selector?: string;
  // 
  inputs?: string[];
  // 
  outputs?: string[];
  // 
  providers?: Provider[];
  // 
  exportAs?: string;
  // 
  queries?: {
    [key: string]: any;
  };
  // 
  host?: {
    [key: string]: string;
  };
  // 
  jit?: true;
}
```

## Component
```ts
export declare interface Component extends Directive {
  // 变更检测策略
  changeDetection?: ChangeDetectionStrategy;
  viewProviders?: Provider[];
  moduleId?: string;
  templateUrl?: string;
  template?: string;
  styleUrls?: string[];
  styles?: string[];
  animations?: any[];
  encapsulation?: ViewEncapsulation;
  interpolation?: [string, string];
  entryComponents?: Array<Type<any> | any[]>;
  preserveWhitespaces?: boolean;
}
import { Component, OnInit } from "@angular/core";
@Component({})
```