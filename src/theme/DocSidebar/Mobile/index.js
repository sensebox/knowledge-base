import React, { useEffect } from "react";
import clsx from "clsx";
import {
  NavbarSecondaryMenuFiller,
  ThemeClassNames,
} from "@docusaurus/theme-common";
import { useNavbarMobileSidebar } from "@docusaurus/theme-common/internal";
import DocSidebarItems from "@theme/DocSidebarItems";
import { useBoardStore } from "@site/src/lib/stores/store";

// eslint-disable-next-line react/function-component-definition
const DocSidebarMobileSecondaryMenu = ({ sidebar, path }) => {
  const mobileSidebar = useNavbarMobileSidebar();
  const board = useBoardStore((state) => state.board);
  const [sideBar, setSideBar] = React.useState(sidebar);

  useEffect(() => {
    // filter sidebar through the board
    // if board is not empty, filter the sidebar
    const toFilter = sideBar.filter((item) => item.label === board);
    if (toFilter.length === 0) {
      setSideBar(sidebar);
    } else {
      setSideBar(toFilter);
    }
  }, [board]);

  return (
    <ul className={clsx(ThemeClassNames.docs.docSidebarMenu, "menu__list")}>
      <DocSidebarItems
        items={sideBar}
        activePath={path}
        onItemClick={(item) => {
          // Mobile sidebar should only be closed if the category has a link
          if (item.type === "category" && item.href) {
            mobileSidebar.toggle();
          }
          if (item.type === "link") {
            mobileSidebar.toggle();
          }
        }}
        level={1}
      />
    </ul>
  );
};
function DocSidebarMobile(props) {
  return (
    <NavbarSecondaryMenuFiller
      component={DocSidebarMobileSecondaryMenu}
      props={props}
    />
  );
}
export default React.memo(DocSidebarMobile);
