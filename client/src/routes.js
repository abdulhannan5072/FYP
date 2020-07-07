import React from 'react';

import Auth from './hoc/auth'




const Toaster = React.lazy(() => import('./views/notifications/toaster/Toaster'));
const Tables = React.lazy(() => import('./views/base/tables/Tables'));

const Breadcrumbs = React.lazy(() => import('./views/base/breadcrumbs/Breadcrumbs'));
const Cards = React.lazy(() => import('./views/base/cards/Cards'));
const Carousels = React.lazy(() => import('./views/base/carousels/Carousels'));
const Collapses = React.lazy(() => import('./views/base/collapses/Collapses'));
const BasicForms = React.lazy(() => import('./views/base/forms/BasicForms'));

const Jumbotrons = React.lazy(() => import('./views/base/jumbotrons/Jumbotrons'));
const ListGroups = React.lazy(() => import('./views/base/list-groups/ListGroups'));
const Navbars = React.lazy(() => import('./views/base/navbars/Navbars'));
const Navs = React.lazy(() => import('./views/base/navs/Navs'));
const Paginations = React.lazy(() => import('./views/base/paginations/Pagnations'));
const Popovers = React.lazy(() => import('./views/base/popovers/Popovers'));
const ProgressBar = React.lazy(() => import('./views/base/progress-bar/ProgressBar'));
const Switches = React.lazy(() => import('./views/base/switches/Switches'));

const Tabs = React.lazy(() => import('./views/base/tabs/Tabs'));
const Tooltips = React.lazy(() => import('./views/base/tooltips/Tooltips'));
const BrandButtons = React.lazy(() => import('./views/buttons/brand-buttons/BrandButtons'));
const ButtonDropdowns = React.lazy(() => import('./views/buttons/button-dropdowns/ButtonDropdowns'));
const ButtonGroups = React.lazy(() => import('./views/buttons/button-groups/ButtonGroups'));
const Buttons = React.lazy(() => import('./views/buttons/buttons/Buttons'));
const Charts = React.lazy(() => import('./views/charts/Charts'));
const CoreUIIcons = React.lazy(() => import('./views/icons/coreui-icons/CoreUIIcons'));
const Flags = React.lazy(() => import('./views/icons/flags/Flags'));
const Brands = React.lazy(() => import('./views/icons/brands/Brands'));
const Alerts = React.lazy(() => import('./views/notifications/alerts/Alerts'));
const Badges = React.lazy(() => import('./views/notifications/badges/Badges'));
const Modals = React.lazy(() => import('./views/notifications/modals/Modals'));
const Colors = React.lazy(() => import('./views/theme/colors/Colors'));
const Typography = React.lazy(() => import('./views/theme/typography/Typography'));
const Widgets = React.lazy(() => import('./views/widgets/Widgets'));
const Users = React.lazy(() => import('./views/users/Users'));
const User = React.lazy(() => import('./views/users/User'));
const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'));

// const Dashboard = React.lazy(() => import('./phases/Dashboard/Dashboard'));
const Projects = React.lazy(() => import('./phases/Projects/Projects'));
const createProject = React.lazy(() => import('./phases/Projects/Create'));
// const users = React.lazy(() => import('./components/Users/Users'));
// const invite = React.lazy(() => import('./components/Users/Invite'));
const build = React.lazy(() => import('./phases/Build/Build'));
// const changephase = React.lazy(() => import('./phases/Changephase/Changephase'));
const createBuild = React.lazy(() => import('./phases/Build/create'));
const editBuild = React.lazy(() => import('./phases/Build/EditBuild'));


const module= React.lazy(() => import('./phases/Module/module'));
const editModule = React.lazy(() => import('./phases/Module/Edit'));
const createmodule = React.lazy(() => import('./phases/Module/create'));
// const profile = React.lazy(() => import('./components/Account/Profile'));
// const settings = React.lazy(() => import('./components/Account/Settings'));
const envAdaptation = React.lazy(() => import('./phases/Changephase/EnvironmentalAdaptation'));
const AdaptationM =React.lazy(() => import('./phases/Changephase/AdoptativeMaintenance/AdoptativeMaintenance'));
const faultRepairs = React.lazy(() => import('./phases/Changephase/FaultRepairs'));
const FaultRepairs=React.lazy(() => import('./phases/Changephase/FaultRepairs/faultpairs'));
const funAddition = React.lazy(() => import('./phases/Changephase/FunctionalityAddition'));
const perfectiveM = React.lazy(() => import('./phases/Changephase/PerfectiveMaintenance/PerfectiveMaintenance'));
const taskManagemnt = React.lazy(() => import('./phases/TaskManagement/create'));
const TaskManagement=React.lazy(() => import('./phases/TaskManagement/Task'));
// const testphase =React.lazy(()=> import('./phases/Testphase/create'));
const defectManagement =React.lazy(()=> import('./phases/DefectManagement/create'));
const Defect =React.lazy(()=> import('./phases/DefectManagement/Defect'));

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/theme', name: 'Theme', component: Colors, exact: true },
  { path: '/theme/colors', name: 'Colors', component: Colors },
  { path: '/theme/typography', name: 'Typography', component: Typography },
  { path: '/base', name: 'Base', component: Cards, exact: true },
  { path: '/base/breadcrumbs', name: 'Breadcrumbs', component: Breadcrumbs },
  { path: '/base/cards', name: 'Cards', component: Cards },
  { path: '/base/carousels', name: 'Carousel', component: Carousels },
  { path: '/base/collapses', name: 'Collapse', component: Collapses },
  { path: '/base/forms', name: 'Forms', component: BasicForms },
  { path: '/base/jumbotrons', name: 'Jumbotrons', component: Jumbotrons },
  { path: '/base/list-groups', name: 'List Groups', component: ListGroups },
  { path: '/base/navbars', name: 'Navbars', component: Navbars },
  { path: '/base/navs', name: 'Navs', component: Navs },
  { path: '/base/paginations', name: 'Paginations', component: Paginations },
  { path: '/base/popovers', name: 'Popovers', component: Popovers },
  { path: '/base/progress-bar', name: 'Progress Bar', component: ProgressBar },
  { path: '/base/switches', name: 'Switches', component: Switches },
  { path: '/base/tables', name: 'Tables', component: Tables },
  { path: '/base/tabs', name: 'Tabs', component: Tabs },
  { path: '/base/tooltips', name: 'Tooltips', component: Tooltips },
  { path: '/buttons', name: 'Buttons', component: Buttons, exact: true },
  { path: '/buttons/buttons', name: 'Buttons', component: Buttons },
  { path: '/buttons/button-dropdowns', name: 'Dropdowns', component: ButtonDropdowns },
  { path: '/buttons/button-groups', name: 'Button Groups', component: ButtonGroups },
  { path: '/buttons/brand-buttons', name: 'Brand Buttons', component: BrandButtons },
  { path: '/charts', name: 'Charts', component: Charts },
  { path: '/icons', exact: true, name: 'Icons', component: CoreUIIcons },
  { path: '/icons/coreui-icons', name: 'CoreUI Icons', component: CoreUIIcons },
  { path: '/icons/flags', name: 'Flags', component: Flags },
  { path: '/icons/brands', name: 'Brands', component: Brands },
  { path: '/notifications', name: 'Notifications', component: Alerts, exact: true },
  { path: '/notifications/alerts', name: 'Alerts', component: Alerts },
  { path: '/notifications/badges', name: 'Badges', component: Badges },
  { path: '/notifications/modals', name: 'Modals', component: Modals },
  { path: '/notifications/toaster', name: 'Toaster', component: Toaster },
  { path: '/widgets', name: 'Widgets', component: Widgets },
  { path: '/users', exact: true,  name: 'Users', component: Users },
  { path: '/users/:id', exact: true, name: 'User Details', component: User },


  // { path: '/dashboard', exact: true, name: 'Dashboard', component:Dashboard },

  { path: '/projects', exact: true, name: 'Projects', component: Auth(Projects,true) },
  { path: '/projects/create', exact: true, name: 'Create new Project', component: Auth(createProject, true) },

  // { path: '/users', exact: true, name: 'Users', component: users },
  // { path: '/users/invite', exact: true, name: 'Invite', component: invite },

  { path: '/:key/module', exact: true, name: 'Module', component: Auth(module, true) },
  { path: '/:key/module/create', exact: true, name: 'Create Module', component: Auth(createmodule, true)},
  { path: '/:key/module/:id', exact: true, name: 'Edit Module', component: Auth(editModule, true)},

  { path: '/:key/build', exact: true, name: 'Build', component: Auth(build, true)},
  { path: '/:key/build/create', exact: true, name: 'Create Build', component: Auth(createBuild, true) },
  { path: '/:key/build/:id', exact: true, name: 'Edit Build', component: Auth(editBuild, true)},

  // { path: '/project/changePhase', exact: true, name: 'Invite', component: changephase },

  { path: '/:key/changePhase/environmentalAdaptation/create', exact: true, name: 'Invite', component: envAdaptation },
  { path: '/:key/changePhase/environmentalAdaptation', exact: true, name: 'Invite', component: AdaptationM },

  { path: '/:key/changePhase/faultRepairs/create', exact: true, name: 'Invite', component: faultRepairs },
  { path: '/:key/changePhase/faultRepairs', exact: true, name: 'Invite', component: FaultRepairs },

  { path: '/:key/changePhase/functionatilityAddition', exact: true, name: 'Invite', component: perfectiveM },
  { path: '/:key/changePhase/functionatilityAddition/create', exact: true, name: 'Invite', component: funAddition },

  // { path: '/profile', exact: true, name: 'Invite', component: profile },
  // { path: '/settings', exact: true, name: 'Invite', component: settings },

  { path: '/:key/createTask', exact: true, name: 'Task', component: taskManagemnt },
  { path: '/:key/Task', exact: true, name: 'Task', component: TaskManagement },

  // { path: '/project/createTest', exact: true, name: 'Test', component: testphase },

  { path: '/:key/createDefect', exact: true, name: 'Test', component: defectManagement },
  { path: '/:key/Defect', exact: true, name: 'Test', component: Defect },

];

export default routes;
