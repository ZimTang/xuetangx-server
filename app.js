const Koa = require("koa");
const Router = require("koa-router");
const bodyParser = require("koa-bodyparser");
const cors = require("@koa/cors");

const app = new Koa();
const router = new Router();
app.use(bodyParser());
app.use(cors());

router.get("/category", async (ctx, next) => {
  ctx.body = {
    code: "200",
    data: [
      {
        id: 1,
        text: "推荐",
      },
      {
        id: 2,
        text: "研究生课",
      },
      {
        id: 3,
        text: "职业教育",
      },
    ],
  };
  await next();
});

router.get("/swiper", async (ctx, next) => {
  ctx.body = {
    code: "200",
    data: [
      "https://codertzm.oss-cn-chengdu.aliyuncs.com/cover/20220704095212.png",
      "https://codertzm.oss-cn-chengdu.aliyuncs.com/cover/20220704095129.png",
      "https://codertzm.oss-cn-chengdu.aliyuncs.com/cover/20220704095509.png",
    ],
  };
  await next();
});

router.get("/live", async (ctx, next) => {
  ctx.body = {
    code: "200",
    data: [
      {
        id: 1,
        cover:
          "https://codertzm.oss-cn-chengdu.aliyuncs.com/cover/20220704095802.png",
        title: "Tsinghua Global Summer School 2022",
      },
      {
        id: 2,
        cover:
          "https://codertzm.oss-cn-chengdu.aliyuncs.com/cover/20220704095841.png",
        title: "学堂在线×快手《新知如师说》清华名师系列讲座",
      },
      {
        id: 3,
        cover:
          "https://codertzm.oss-cn-chengdu.aliyuncs.com/cover/20220704095916.png",
        title: "第五届清华领导力论坛",
      },
      {
        id: 4,
        cover:
          "https://codertzm.oss-cn-chengdu.aliyuncs.com/cover/20220704095944.png",
        title: "2022 Global Open Courses",
      },
    ],
  };
  await next();
});

router.get("/friend", async (ctx, next) => {
  ctx.body = {
    code: "200",
    data: [
      {
        id: 1,
        cover:
          "https://proxt-cdn.xuetangx.com/fe-proxtassets/xuetangX/0420/tshinghua.png",
      },
      {
        id: 2,
        cover:
          "https://proxt-cdn.xuetangx.com/fe-proxtassets/xuetangX/0420/zhihuijiaoyu.png",
      },
      {
        id: 3,
        cover:
          "https://proxt-cdn.xuetangx.com/fe-proxtassets/xuetangX/0420/junzhi.png",
      },
      {
        id: 4,
        cover:
          "https://proxt-cdn.xuetangx.com/fe-proxtassets/xuetangX/0420/petersburg.png",
      },
      {
        id: 5,
        cover:
          "https://proxt-cdn.xuetangx.com/fe-proxtassets/xuetangX/0420/openuniversity.png",
      },
      {
        id: 6,
        cover:
          "https://proxt-cdn.xuetangx.com/fe-proxtassets/xuetangX/0420/kmooc.png",
      },
      {
        id: 7,
        cover:
          "https://proxt-cdn.xuetangx.com/fe-proxtassets/xuetangX/0420/thaimooc.png",
      },
      {
        id: 8,
        cover:
          "https://proxt-cdn.xuetangx.com/fe-proxtassets/xuetangX/0420/thaimooc.png",
      },
      {
        id: 9,
        cover:
          "https://qn-next.xuetangx.com/classroom_user_export/cc/jxgjkc.png",
      },
      {
        id: 10,
        cover:
          "https://proxt-cdn.xuetangx.com/fe-proxtassets/xuetangX/0420/sxmooc.png",
      },
    ],
  };
  await next();
});

router.get("/course/:id", async (ctx, next) => {
  let data;
  const { id } = ctx.params;
  switch (parseInt(id)) {
    case 1:
      data = [
        {
          id: 1,
          title: "面向未来社会的服务设计与管理",
          desc: "设计美好生活，服务改变世界",
          creator: "清华大学",
          count: 21000,
          cover:
            "https://codertzm.oss-cn-chengdu.aliyuncs.com/cover/20220704103607.png",
        },
        {
          id: 2,
          title: "面向未来社会的服务设计与管理",
          desc: "设计美好生活，服务改变世界",
          creator: "清华大学",
          count: 21000,
          cover:
            "https://codertzm.oss-cn-chengdu.aliyuncs.com/cover/20220704103620.png",
        },
        {
          id: 3,
          title: "面向未来社会的服务设计与管理",
          desc: "设计美好生活，服务改变世界",
          creator: "清华大学",
          count: 21000,
          cover:
            "https://codertzm.oss-cn-chengdu.aliyuncs.com/cover/20220704103634.png",
        },
        {
          id: 4,
          title: "面向未来社会的服务设计与管理",
          desc: "设计美好生活，服务改变世界",
          creator: "清华大学",
          count: 21000,
          cover:
            "https://codertzm.oss-cn-chengdu.aliyuncs.com/cover/20220704103645.png",
        },
        {
          id: 5,
          title: "面向未来社会的服务设计与管理",
          desc: "设计美好生活，服务改变世界",
          creator: "清华大学",
          count: 21000,
          cover:
            "https://codertzm.oss-cn-chengdu.aliyuncs.com/cover/20220704103658.png",
        },
        {
          id: 6,
          title: "面向未来社会的服务设计与管理",
          desc: "设计美好生活，服务改变世界",
          creator: "清华大学",
          count: 21000,
          cover:
            "https://codertzm.oss-cn-chengdu.aliyuncs.com/cover/20220704103711.png",
        },
        {
          id: 7,
          title: "面向未来社会的服务设计与管理",
          desc: "设计美好生活，服务改变世界",
          creator: "清华大学",
          count: 21000,
          cover:
            "https://codertzm.oss-cn-chengdu.aliyuncs.com/cover/20220704103721.png",
        },
        {
          id: 8,
          title: "面向未来社会的服务设计与管理",
          desc: "设计美好生活，服务改变世界",
          creator: "清华大学",
          count: 21000,
          cover:
            "https://codertzm.oss-cn-chengdu.aliyuncs.com/cover/20220704103730.png",
        },
      ];
      break;
    case 2:
      data = [
        {
          id: 9,
          title: "社会工作理论",
          desc: "培养批判性思维能力和本土化理论建构能力",
          creator: "清华大学",
          count: 21000,
          cover:
            "https://codertzm.oss-cn-chengdu.aliyuncs.com/cover/20220704103747.png",
        },
        {
          id: 10,
          title: "面向未来社会的服务设计与管理",
          desc: "设计美好生活，服务改变世界",
          creator: "清华大学",
          count: 21000,
          cover:
            "https://codertzm.oss-cn-chengdu.aliyuncs.com/cover/20220704103620.png",
        },
        {
          id: 11,
          title: "遥感数字图像处理理论与方法",
          desc: "设计美好生活，服务改变世界",
          creator: "清华大学",
          count: 21000,
          cover:
            "https://codertzm.oss-cn-chengdu.aliyuncs.com/cover/20220704103818.png",
        },
        {
          id: 12,
          title: "国际关系史史料学",
          desc: "设计美好生活，服务改变世界",
          creator: "清华大学",
          count: 21000,
          cover:
            "https://codertzm.oss-cn-chengdu.aliyuncs.com/cover/20220704103829.png",
        },
        {
          id: 13,
          title: "新时代中国特色社会主义理论",
          desc: "设计美好生活，服务改变世界",
          creator: "清华大学",
          count: 21000,
          cover:
            "https://codertzm.oss-cn-chengdu.aliyuncs.com/cover/20220704103840.png",
        },
        {
          id: 14,
          title: "水工程理论",
          desc: "设计美好生活，服务改变世界",
          creator: "清华大学",
          count: 21000,
          cover:
            "https://codertzm.oss-cn-chengdu.aliyuncs.com/cover/20220704103849.png",
        },
        {
          id: 15,
          title: "学术论文写作与表达",
          desc: "设计美好生活，服务改变世界",
          creator: "清华大学",
          count: 21000,
          cover:
            "https://codertzm.oss-cn-chengdu.aliyuncs.com/cover/20220704103901.png",
        },
        {
          id: 16,
          title: "机器学习实践",
          desc: "设计美好生活，服务改变世界",
          creator: "清华大学",
          count: 21000,
          cover:
            "https://codertzm.oss-cn-chengdu.aliyuncs.com/cover/20220704103912.png",
        },
      ];
      break;
    case 3:
      [
        {
          id: 17,
          cover: "https://a2k6.com/0619/i/2022/07/05/1mj1q6.png",
          title: "安保防卫与控制",
          desc:
            "以法律为依据，以技能为手段，教授学生运用徒手及防卫器械处置暴",
          creator: "北京政法职业学院",
          count: "2w+",
        },
        {
          id: 18,
          cover: "https://a2k6.com/0619/i/2022/07/05/8d059.jpg",
          title: "铁道概论",
          desc:
            "一个世纪前，中国铁路在风雨飘摇中筚路蓝缕，孙中山先生面对此情",
          creator: "哈尔滨铁道技术职业学院",
          count: "1w+",
        },
        {
          id: 19,
          cover: "https://a2k6.com/0619/i/2022/07/05/8d05s.png",
          title: "智能养猪与猪病防控技术",
          desc: "振兴畜牧业",
          creator: "山东畜牧兽医职业学院",
          count: "9872",
        },
        {
          id: 20,
          cover: "https://a2k6.com/0619/i/2022/07/05/654a.png",
          title: "紧急救助",
          desc: "人人学急救，急救为人人",
          creator: "北京政法职业学院",
          count: "2w+",
        },
        {
          id: 21,
          cover: "https://a2k6.com/0619/i/2022/07/05/6549.png",
          title: "军事器械体操",
          desc: "强化军事体操技能的训练与实践",
          creator: "湖南体育职业学院",
          count: "2w+",
        },
        {
          id: 22,
          cover: "https://a2k6.com/0619/i/2022/07/05/16zue.png",
          title: "客户关系管理",
          desc: "看企业如何建立、提升、维护客户关系",
          creator: "上海科学技术职业学院",
          count: "2w+",
        },
        {
          id: 23,
          cover: "https://a2k6.com/0619/i/2022/07/05/654t.png",
          title: "创新思维",
          desc: "发现问题-研究问题-解决问题",
          creator: "深圳职业技术学院",
          count: "3201",
        },
        {
          id: 24,
          cover: "https://a2k6.com/0619/i/2022/07/05/bdoon8.png",
          title: "新能源发电系统设计",
          desc: "碳达峰，碳中和，绿色低碳已是我们必由之路",
          creator: "顺德职业技术学院",
          count: "1526",
        },
      ];
      break;
    default:
      break;
  }
  ctx.body = {
    code: "200",
    data,
  };
  await next();
});

router.get("/friend", async (ctx, next) => {
  ctx.body = {
    code: "200",
    data: [
      {
        id: 1,
        cover:
          "https://proxt-cdn.xuetangx.com/fe-proxtassets/xuetangX/0420/tshinghua.png",
      },
      {
        id: 2,
        cover:
          "https://proxt-cdn.xuetangx.com/fe-proxtassets/xuetangX/0420/zhihuijiaoyu.png",
      },
      {
        id: 3,
        cover:
          "https://proxt-cdn.xuetangx.com/fe-proxtassets/xuetangX/0420/junzhi.png",
      },
      {
        id: 4,
        cover:
          "https://proxt-cdn.xuetangx.com/fe-proxtassets/xuetangX/0420/petersburg.png",
      },
      {
        id: 5,
        cover:
          "https://proxt-cdn.xuetangx.com/fe-proxtassets/xuetangX/0420/openuniversity.png",
      },
      {
        id: 6,
        cover:
          "https://proxt-cdn.xuetangx.com/fe-proxtassets/xuetangX/0420/kmooc.png",
      },
      {
        id: 7,
        cover:
          "https://proxt-cdn.xuetangx.com/fe-proxtassets/xuetangX/0420/thaimooc.png",
      },
      {
        id: 8,
        cover:
          "https://proxt-cdn.xuetangx.com/fe-proxtassets/xuetangX/0420/thaimooc.png",
      },
      {
        id: 9,
        cover:
          "https://qn-next.xuetangx.com/classroom_user_export/cc/jxgjkc.png",
      },
      {
        id: 10,
        cover:
          "https://proxt-cdn.xuetangx.com/fe-proxtassets/xuetangX/0420/sxmooc.png",
      },
    ],
  };
  await next();
});

app.use(router.routes()).use(router.allowedMethods());

app.listen(3000, () => {
  console.log("服务器已启动");
});
