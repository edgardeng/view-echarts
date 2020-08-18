import Vue from 'vue';

export class VanComponent {
  static name: string;
  static install(vue: typeof Vue): void;
}
// 说明：@types是npm的一个分支，当我们把npm包发上去，npm包就会托管到服务器，供大家下载，但是ts为了代码的可复用性，要申明一些静态类型文件，那些文件就是*.d.ts
