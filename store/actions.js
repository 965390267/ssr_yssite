export const api = {
  //点击发送验证码
  async sendCode({ commit }, params) {
    let { tel } = params;
    return await this.$axios.$post(`user/sms?phone=${tel}`);
  },

  //打开个人中心
  async openPersonCenter({ commit }, params) {
    let { tel, code } = params;
    return await this.$axios.$post(`user/login/sms?phone=${tel}&code=${code}`);
  },
  //退出登录
  async userLogout({ commit }, params) {
    let { token } = params;
    return await this.$axios.$post(`user/logout?token=${token}`);
  },

  //首页header站点树
  async sitemapTree({ commit }, params) {
    let { setId } = params;
    let result=  await this.$axios.$get(`/site/tree?siteId=${setId}`);
    commit("sitemapTree",result[0]);
    return result[0]
  },
  //首页考试日历
  async homeExamCalendar({ commit }, params) {
    let { setId, siteCode } = params;

   let result=  await this.$axios.$get(
      `/article/homeExamCalendar?siteId=${setId}&siteCode=${siteCode}`
    );
    commit("homeExamCalendar",result);
    return result
  },
  //首页备考指南
  async homeguide({ commit }, params) {
    let { setId, siteCode } = params;
    return await this.$axios.$get(
      `/article/homeArticleOne/guide?siteId=${setId}&siteCode=${siteCode}`
    );
  },
  //首页资料下载
  async homeMaterial({ commit }, params) {
    let { query, Authorization } = params;
    return await this.$axios.$get(`/material?query=${query}`);
  },
  //首页云南名师
  async webTeacher({ commit }, params) {
    return await this.$axios.$get(`/webTeacher`);
  },
  //首页资讯
  async homeZixun({ commit }, params) {
    let { setId, siteCode } = params;

    return await this.$axios.$get(
      `/article/homeArticleOne/advisory?siteId=${setId}&siteCode=${siteCode}`
    );
  },
  //获取首页文章模块
  async homeArticleOne({ commit }, params) {
    let { siteId, moduleName, siteCode } = params;

    return await this.$axios.$get(
      `/article/homeArticleOne/exam?siteId=${siteId}&moduleName=${moduleName}&siteCode=${siteCode}`
    );
  },
  async getTeacherDetail({ commit }, params) {
    return await this.$axios.$get(`/class/1916/teacher`);
  },
  /* 获取首页所有数据,依赖前面几个异步接口 */
  async getHomeData({ dispatch, commit }, params) {
    let result = await dispatch("sitemapTree", {
      setId: 0
    });
    let { id, code } = result[0];
    let article = await dispatch("homeArticleOne", {
      siteId: id,
      moduleName: `${encodeURIComponent("招考信息")}`,
      siteCode: code
    });
    // console.log(article);
    commit("homedata", [result[0], article[0]]);
    return [result[0], article[0]];
  }
};
