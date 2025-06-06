import { CommonModule } from '@angular/common';
import { Component, input, OnInit, output } from '@angular/core';
import { RouterModule } from '@angular/router';

interface friendsList {
  id: number;
  photo: string;
  name: string;
  new: number;
  status: number;
  time: string;
}


@Component({
  selector: 'app-friend',
  imports: [CommonModule, RouterModule],
  templateUrl: './friend.component.html',
  styleUrl: './friend.component.scss'
})
export class FriendComponent implements OnInit {
  readonly friends = input.required<friendsList>();
  ChatOn = output<number>();

  public innerChatToggle(friends: friendsList) {
    this.ChatOn.emit(friends.id);
  }
  constructor() {

  }
  ngOnInit(): void {
    
  }
}
