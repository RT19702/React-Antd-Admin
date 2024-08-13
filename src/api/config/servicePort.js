export const PORT1 = "/hooks";

export const ResultEnum = {
  SUCCESS: 200,
  ERROR: 500,
}

export const MenuList = [
  {
    "icon": "HomeOutlined",
    "title": "首页",
    "path": "/home/index"
  },
  {
    "icon": "AppstoreOutlined",
    "path": "/assembly/guide",
    "title": "引导页"
  },
  {
    "icon": "ExclamationCircleOutlined",
    "title": "错误页面",
    "path": "/error",
    "children": [
      {
        "icon": "AppstoreOutlined",
        "path": "/404",
        "title": "404页面"
      },
      {
        "icon": "AppstoreOutlined",
        "path": "/403",
        "title": "403页面"
      },
      {
        "icon": "AppstoreOutlined",
        "path": "/500",
        "title": "500页面"
      }
    ]
  }
]