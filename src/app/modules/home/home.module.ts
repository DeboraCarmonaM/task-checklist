//Components
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { TodoButtonDeletAllComponent } from './components/todo-button-delet-all/todo-button-delet-all.component';
import { TodoInputAddItensComponent } from './components/todo-input-add-itens/todo-input-add-itens.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { FormsModule } from '@angular/forms';

//Page
import { HomeComponent } from './pages/home/home.component';




@NgModule({
  declarations: [
    HeaderComponent,
    TodoButtonDeletAllComponent,
    TodoInputAddItensComponent,
    TodoListComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class HomeModule { }
