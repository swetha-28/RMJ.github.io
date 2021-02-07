import { Component, OnInit } from '@angular/core';
import { MenuService } from '@services/menu'
import { Observable, of } from 'rxjs';
// import { select, Store } from '@ngrx/store'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  services = [
    {title:'Home',url:'/home'},
    {title:'Services',url:'/services'},
    {title:'About',url:'/about'}]
  // menuColor        : String
  // isMenuShadow     : Boolean
  // isMenuUnfixed    : Boolean
  // isSidebarOpen    : Boolean
  // isMobileView     : Boolean
  // leftMenuWidth    : Number
  // isMenuCollapsed  : Boolean
  // logo             : String
  // menuData         : any[]
  // menuDataActivated: any[]
  // role             : String
  constructor(private menuService: MenuService) { }

//   this.store.pipe(select(Reducers.getUser)).subscribe(state => {
//     this.role = state.role
//   })
//   this.menuService.getMenuData().subscribe(menuData => (this.menuData = menuData))
//   this.store.pipe(select(Reducers.getSettings)).subscribe(state => {
//     this.menuColor       = state.menuColor
//     this.isMenuShadow    = state.isMenuShadow
//     this.isMenuUnfixed   = state.isMenuUnfixed
//     this.isSidebarOpen   = state.isSidebarOpen
//     this.isMobileView    = state.isMobileView
//     this.leftMenuWidth   = state.leftMenuWidth
//     this.isMenuCollapsed = state.isMenuCollapsed
//     this.logo            = state.logo
//   })
// }

// activateMenu(url: any, menuData = this.menuData) {
//   menuData = JSON.parse(JSON.stringify(menuData))
//   const pathWithSelection = this.getPath({ url: url }, menuData, (entry: any) => entry, 'url')
//   if (pathWithSelection) {
//     pathWithSelection.pop().selected = true
//     _.each(pathWithSelection, (parent: any) => (parent.open = true))
//   }
//   this.menuDataActivated = menuData.slice()
// }

// getPath(
//   element: any,
//   source: any,
//   property: any,
//   keyProperty = 'key',
//   childrenProperty = 'children',
//   path = [],
// ) {
//   let found = false
//   const getElementChildren = (value: any) => _.get(value, childrenProperty)
//   const getElementKey = (value: any) => _.get(value, keyProperty)
//   const key = getElementKey(element)
//   return (
//     _.some(source, (e: any) => {
//       if (getElementKey(e) === key) {
//         path.push(e)
//         return true
//       } else {
//         return (found = this.getPath(
//           element,
//           getElementChildren(e),
//           property,
//           keyProperty,
//           childrenProperty,
//           path.concat(e),
//         ))
//       }
//     }) &&
//     (found || _.map(path, property))
//   )
// }

// toggleSettings() {
//   this.store.dispatch(
//     new SettingsActions.SetStateAction({
//       isSidebarOpen: !this.isSidebarOpen,
//     }),
//   )
// }

// onCollapse(value: any) {
//   this.store.dispatch(
//     new SettingsActions.SetStateAction({
//       isMenuCollapsed: value,
//     }),
//   )
// }

ngOnInit(): void {
//   this.activateMenu(this.router.url)
//   this.router.events
//     .pipe(filter(event => event instanceof NavigationStart))
//     .subscribe((event: NavigationStart) => {
//       this.activateMenu(event.url ? event.url : null)
//     })
}

}
