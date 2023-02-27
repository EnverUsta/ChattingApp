import { Component, OnInit } from '@angular/core';
import { Member } from 'src/app/models/member';
import { Pagination } from 'src/app/models/pagination';
import { MembersService } from './../../services/members.service';

@Component({
  selector: 'app-member-list',
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.css'],
})
export class MemberListComponent implements OnInit {
  // members$: Observable<Member[]> | undefined;
  members: Member[] | undefined = [];
  pagination: Pagination | undefined;
  pageSize = 5;

  constructor(private membersService: MembersService) {}

  ngOnInit(): void {
    // this.members$ = this.membersService.getMembers();
    this.loadMembers();
  }

  loadMembers(pageNumber: number = 1) {
    this.membersService.getMembers(pageNumber, this.pageSize).subscribe({
      next: (response) => {
        if (response.result && response.pagination) {
          this.members = response.result;
          this.pagination = response.pagination;
        }
      },
    });
  }

  onPageChanged(pageNumber: number) {
    console.log(
      '🚀 ~ file: member-list.component.ts:37 ~ MemberListComponent ~ onPageChanged ~ pageNumber:',
      pageNumber
    );
    this.loadMembers(pageNumber);
  }
}
