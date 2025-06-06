import { CommonModule } from '@angular/common';
import { Component, OnInit, output } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FriendsList } from '../../../../../../fack-db/friends-list';
import { FriendComponent } from './friend/friend.component';
import { DataFilterPipe } from '../../../../shared/filter/data-filter.pipe';
import { FormsModule } from '@angular/forms';
import { NgScrollbarModule } from 'ngx-scrollbar';

@Component({
  selector: 'app-chat-user-list',
  imports: [CommonModule, RouterModule, FriendComponent, DataFilterPipe, FormsModule, NgScrollbarModule],
  templateUrl: './chat-user-list.component.html',
  styleUrl: './chat-user-list.component.scss'
})
export class ChatUserListComponent implements OnInit {
  readonly ChatCollapse = output();
  readonly ChatToggle = output();
  // eslint-disable-next-line
  friendsList: any;
  searchFriends!: string;

  constructor() {
    this.friendsList = FriendsList.friends;
  }

  ChatOn() {
    this.ChatToggle.emit();
  }
  ngOnInit(): void {
    
  }
}
