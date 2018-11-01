'use strict';

const EggService = require('egg').Service;

/**
 * service 基类，封装 service 的通用逻辑。
 * 你可以通过继承此基类来编写 service
 * @example
 * ```js
 * // app/service/user.js
 * const Service = require('sofa-node').Service;
 *
 * class User extends Service {
 *   constructor(ctx) {
 *     super(ctx);
 *     // 你的业务逻辑
 *   }
 *
 *   * findUser(uid) {
 *     uid = Number(uid);
 *     if (!uid) {
 *       return null;
 *     }
 *     return await this.proxy.userQuery.findUser(uid);
 *   }
 *
 *   // 更多其他方法
 * }
 * ```
 */
class Service extends EggService {

  constructor(ctx) {
    super(ctx);
    this.className = this.pathName;
  }

  /**
   * @member {Proxy}
   */
  get proxy() {
    return this.ctx.proxy;
  }

}

module.exports = Service;
