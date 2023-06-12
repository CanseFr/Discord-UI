import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import {AdminMenuOptionComponent} from "./component/menu/admin-menu-option/admin-menu-option.component";
import {UtilisateurComponent} from "./pages/panel/utilisateur/utilisateur.component";
import {GroupeComponent} from "./pages/panel/groupe/groupe.component";
import {ChannelComponent} from "./pages/panel/channel/channel.component";
import {StatsComponent} from "./pages/panel/stats/stats.component";
import {UserTabComponent} from "./component/menu/tabs/tab-user/user-tab.component";
import {SousMenuGroupeComponent} from "./component/menu/sous-menu/sous-menu-groupe/sous-menu-groupe.component";
import {SousMenuChannelComponent} from "./component/menu/sous-menu/sous-menu-channel/sous-menu-channel.component";
import {TokenGuardService} from "./service/guard/token-guard/token-guard.service";
import {AdminGuardService} from "./service/guard/admin-guard/admin-guard.service";
import {LoginComponent} from "./pages/door/login/login.component";
import {AccessDeniedComponent} from "./pages/access-denied/access-denied.component";
import {RegisterComponent} from "./pages/door/register/register.component";
import {OptionComponent} from "./pages/option/option.component";
import {ChatComponent} from "./pages/chat/chat.component";


const routes: Routes = [
  {path:'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'access-denied', component: AccessDeniedComponent},
  {path: '', component: LoginComponent},


  {
  // ADMIN
    path:'home',
    canActivate: [TokenGuardService],
    children: [
    {path: 'details', component: OptionComponent},
        {
          path: 'admin',
          component: HomeComponent,
          canActivate: [TokenGuardService, AdminGuardService],
          children: [
              {
                path:'option',
                component : AdminMenuOptionComponent,
                children: [
                      {
                        path: 'user',
                        component: UtilisateurComponent,
                        children:[
                          {
                            path: 'tab',
                            component: UserTabComponent

                          }
                        ]
                      },{
                        path:'smg',
                        component:SousMenuGroupeComponent,
                        children: [
                          {
                              path: 'groupe',
                              component: GroupeComponent,
                          }

                        ]
                      },{
                        path: 'smc',
                        component: SousMenuChannelComponent,
                        children: [
                          {
                              path:'channel',
                              component: ChannelComponent
                          }
                        ]
                      },{
                        path: 'stat',
                        component: StatsComponent
                      },
                ]
              }
          ]
        }
    ]
  },
  // USER
  {
    path:'home',
    children: [
      {
        path: 'user',
        component: HomeComponent,
        children: [
          {path: 'chat', component: ChatComponent},
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
