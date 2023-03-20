import { Pagination } from './../models/pagination';
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
  pageNumber = 1;
  pageSize = 5;
  pagination: Pagination | undefined;
  //! currPredicate is added temporarily
  currPredicate = 'liked';

  constructor(private membersService: MembersService) {}

  ngOnInit(): void {
    this.loadLikes('liked');
  }

  loadLikes(predicate: string) {
    this.title =
      predicate === 'liked' ? 'Members I like' : 'Members who like me';
    this.currPredicate = predicate;

    this.membersService
      .getLikes(predicate, this.pageNumber, this.pageSize)
      .subscribe({
        next: (response) => {
          this.members = response.result;
          this.pagination = response.pagination;
        },
      });
  }

  onPageChanged(pageNumber: number) {
    if (this.pageNumber !== pageNumber) return;
    this.pageNumber = pageNumber;
    this.loadLikes(this.currPredicate);
  }
}
