import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import { AdminMenuOptionComponent } from './component/menu/admin-menu-option/admin-menu-option.component';
import { UtilisateurComponent } from './pages/panel/utilisateur/utilisateur.component';
import { GroupeComponent } from './pages/panel/groupe/groupe.component';
import { ChannelComponent } from './pages/panel/channel/channel.component';
import { StatsComponent } from './pages/panel/stats/stats.component';
import { UserTabComponent } from './component/menu/tabs/tab-user/user-tab.component';
import {MatTableModule} from '@angular/material/table';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatSortModule} from "@angular/material/sort";
import {TabGroupeComponent} from "./component/menu/tabs/tab-groupe/tab-groupe.component";
import { BadgeGroupeComponent } from './component/menu/badge/badge-groupe/badge-groupe.component';
import { BadgeChannelComponent } from './component/menu/badge/badge-channel/badge-channel.component';
import { SousMenuChannelComponent } from './component/menu/sous-menu/sous-menu-channel/sous-menu-channel.component';
import { SousMenuGroupeComponent } from './component/menu/sous-menu/sous-menu-groupe/sous-menu-groupe.component';
import { MainBadgeOptionComponent } from './component/menu/badge/main-badge-option/main-badge-option.component';
import { TabChannelComponent } from './component/menu/tabs/tab-channel/tab-channel.component';
import { RegisterComponent } from './pages/door/register/register.component';
import { AccessDeniedComponent } from './pages/access-denied/access-denied.component';
import { OptionComponent } from './pages/option/option.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { LoginComponent } from './pages/door/login/login.component';
import {HttpInterceptorService} from "./service/http-interceptor/http-interceptor.service";
import {HTTP_INTERCEPTORS, HttpClient, HttpClientModule} from "@angular/common/http";
import {MatMenuModule} from "@angular/material/menu";
import { UserImportUserComponent } from './component/modal/admin/user/user-import-user/user-import-user.component';
import { UserModifyUserComponent } from './component/modal/admin/user/user-modify-user/user-modify-user.component';
import { UserDeleteUserComponent } from './component/modal/admin/user/user-delete-user/user-delete-user.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from "@angular/material/button";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import { OptionProfilPasswordComponent } from './component/modal/profil-option/option-profil-password/option-profil-password.component';
import { OptionProfilEmailComponent } from './component/modal/profil-option/option-profil-email/option-profil-email.component';
import { OptionProfilInfopersoComponent } from './component/modal/profil-option/option-profil-infoperso/option-profil-infoperso.component';
import {MatOptionModule} from "@angular/material/core";
import {MatSelectModule} from "@angular/material/select";
import { ChatComponent } from './pages/chat/chat.component';
import {CdkListbox} from "@angular/cdk/listbox";
import {BadgeUserComponent} from "./component/chat/badge-user/badge-user.component";
import { AddChannelComponent } from './component/modal/admin/channel/add-channel/add-channel.component';
import { AddUserToChannelComponent } from './component/modal/admin/channel/add-user-to-channel/add-user-to-channel.component';
import { AddGroupeComponent } from './component/modal/admin/groupe/add-groupe/add-groupe.component';
import { AddUserToGroupeComponent } from './component/modal/admin/groupe/add-user-to-groupe/add-user-to-groupe.component';
import { DeleteUserToGroupeComponent } from './component/modal/admin/groupe/delete-user-to-groupe/delete-user-to-groupe.component';
import { DeleteGroupeComponent } from './component/modal/admin/groupe/delete-groupe/delete-groupe.component';
import { AddGroupeToChannelComponent } from './component/modal/admin/channel/add-groupe-to-channel/add-groupe-to-channel.component';
import { ModifyGroupeComponent } from './component/modal/admin/groupe/modify-groupe/modify-groupe.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AdminMenuOptionComponent,
    UtilisateurComponent,
    GroupeComponent,
    ChannelComponent,
    StatsComponent,
    BadgeGroupeComponent,
    BadgeChannelComponent,
    SousMenuChannelComponent,
    SousMenuGroupeComponent,
    MainBadgeOptionComponent,
    TabChannelComponent,
    RegisterComponent,
    AccessDeniedComponent,
    OptionComponent,
    LoginComponent,
    OptionProfilPasswordComponent,
    OptionProfilEmailComponent,
    OptionProfilInfopersoComponent,
    ChatComponent,
    BadgeUserComponent,
    AddChannelComponent,
    AddUserToChannelComponent,
    AddGroupeComponent,
    AddUserToGroupeComponent,
    DeleteUserToGroupeComponent,
    DeleteGroupeComponent,
    AddGroupeToChannelComponent,
    ModifyGroupeComponent,
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatIconModule,
        MatSlideToggleModule,
        UserTabComponent,
        MatTableModule,
        MatFormFieldModule,
        MatInputModule,
        MatPaginatorModule,
        MatSortModule,
        TabGroupeComponent,
        FormsModule,
        HttpClientModule,
        MatMenuModule,
        MatDialogModule,
        MatButtonModule,
        UserDeleteUserComponent,
        UserImportUserComponent,
        UserModifyUserComponent,
        MatProgressSpinnerModule,
        ReactiveFormsModule,
        MatOptionModule,
        MatSelectModule,
        CdkListbox,

    ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpInterceptorService,
      multi: true
    }, {
      provide: 'user',
      useValue: true,
    },
    HttpClient,
    HttpClientModule
  ],
  exports: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

