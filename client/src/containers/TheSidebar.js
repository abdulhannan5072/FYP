import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useLocation, withRouter } from "react-router-dom";

import {
  CCreateElement,
  CSidebar,
  CSidebarBrand,
  CSidebarNav,
  CSidebarNavDivider,
  CSidebarNavTitle,
  CSidebarMinimizer,
  CSidebarNavDropdown,
  CSidebarNavItem,
} from "@coreui/react";

import CIcon from "@coreui/icons-react";

// sidebar nav config
import navigation from "./_nav";
import nav_home from "./nav-items/home";
import nav_phases from "./nav-items/phases";
import path from "../hoc/project/path";
import { sidebarShow } from "../store/actions";
import icon from './logo2.png'

const TheSidebar = (props) => {
  const dispatch = useDispatch();
  const show = useSelector((state) => state.reducer.sidebarShow);
  const projectId = useSelector((state) => state.project._id);
  const location = useLocation();
  const currentKey = location.pathname.split("/")[2] || "/";

  let nav = navigation;

  switch (currentKey) {
    // case "dashboard":
    //   nav = nav_home;
    //   break;
    case "build":
    case "module":
    case "changePhase":
    case "task":
    case "defect":
      nav = path(nav_phases, projectId);
      break;
    default:
      nav = nav_home;
  }

  return (
    <CSidebar show={show}   onShowChange={(val) => dispatch(sidebarShow(val))}>
      <CSidebarBrand className="d-md-down-none" to="/">
        <CIcon
          className="c-sidebar-brand-full "
          title='Softech'
          src={icon}
          height={35}
        />
        
      </CSidebarBrand>
      <CSidebarNav>
        <CCreateElement
          items={nav}
          components={{
            CSidebarNavDivider,
            CSidebarNavDropdown,
            CSidebarNavItem,
            CSidebarNavTitle,
          }}
        />
      </CSidebarNav>
      <CSidebarMinimizer className="c-d-md-down-none" />
    </CSidebar>
  );
};

export default withRouter(React.memo(TheSidebar));
