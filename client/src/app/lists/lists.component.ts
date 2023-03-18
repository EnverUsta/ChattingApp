import { MembersService } from 'src/app/services/members.service';
import { Component, OnInit } from '@angular/core';
import { Member } from '../models/member';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.css'],
})
export class ListsComponent implements OnInit {
  members: Member[] | undefined;
  title: string = 'Members I like';

  constructor(private membersService: MembersService) {}

  ngOnInit(): void {
    this.loadLikes('liked');
  }

  loadLikes(predicate: string) {
    this.title =
      predicate === 'liked' ? 'Members I like' : 'Members who like me';

    this.membersService.getLikes(predicate).subscribe({
      next: (response) => {
        this.members = response;
      },
    });
  }
}
