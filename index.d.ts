import * as Egg from 'egg';

declare module 'egg' {
  export interface Context { // tslint:disable-line
    proxy: IProxy;
  }
  
  export interface Application { // tslint:disable-line
    Proxy: Proxy;
  }
  
  export class Proxy { // tslint:disable-line
    /**
     * request context
     */
    ctx: Context;
  
    /**
     * Application
     */
    app: Application;
  
    // consumer 先用 any 代替
    constructor(ctx: Context, consumer: any);
  }
  
  export interface Service { // tslint:disable-line
    proxy: IProxy;
  }

  /**
   * The empty interface `IProxy` is a placeholder, for egg
   * to auto injection proxy to ctx.proxy
   *
   * declare module 'egg' {
   *   export interface IProxy {
   *     foo: FooProxy;
   *   }
   * }
   *
   * Now I can get ctx.proxy.foo at controller and other service file.
   */
  export interface IProxy { [key: string]: any } // tslint:disable-line
}

export = Egg;
