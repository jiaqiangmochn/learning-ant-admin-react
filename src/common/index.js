import { getLocalMenu, saveLocalMenu } from "../utils";
// import { getMenu } from "@/api";
const RouterBasename = "/react-ant-admin";

function getMenus() {
  return new Promise((res, rej) => {
    let localMenu = getLocalMenu();
    if (localMenu) {
      return res(localMenu);
    }
    const result = {
      data: [
        {
          menu_id: 2,
          title: "详情页",
          icon: "icon_infopersonal",
          keepAlive: "true",
          key: "details",
          parentKey: "", // 父级菜单的key值 string or empty string
          path: "/details",
          order: 1,
          children: [
            {
              menu_id: 4,
              title: "二级菜单1",
              icon: "icon_infopersonal",
              keepAlive: "false",
              key: "children1",
              parentKey: "details", // 父级菜单的key值 string or empty string
              path: "/children1",
              order: 100,
            },
            {
              menu_id: 5,
              title: "二级菜单2",
              icon: "icon_infopersonal",
              keepAlive: "true",
              key: "children2",
              parentKey: "details", // 父级菜单的key值 string or empty string
              path: "/children2",
              order: 99,
            },
          ],
        },
        {
          menu_id: 3,
          title: "test",
          icon: "icon_infopersonal",
          keepAlive: "false",
          key: "test",
          parentKey: "", // 父级菜单的key值 string or empty string
          path: "/test",
          order: 3,
        },
      ],
    };
    saveLocalMenu(result);
    res(result);
    // getMenu()
    //   .then((result) => {
    //     if (result) {
    //       saveLocalMenu(result);
    //       res(result);
    //     }
    //   })
    //   .catch((err) => {
    //     res({ data: [], mapKey: [], type: [] });
    //   });
  });
}

export { getMenus, RouterBasename };
