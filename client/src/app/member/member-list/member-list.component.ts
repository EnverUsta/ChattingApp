import { Component, OnInit } from '@angular/core';
import { Member } from 'src/app/models/member';
import { Pagination } from 'src/app/models/pagination';
import { UserParams } from 'src/app/models/userParams.model';
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
  userParams: UserParams | undefined;
  genderList = [
    { value: 'male', display: 'Males' },
    {
      value: 'female',
      display: 'Females',
    },
  ];

  constructor(private membersService: MembersService) {
    this.userParams = this.membersService.getUserParams();
  }

  ngOnInit(): void {
    this.loadMembers();
  }

  loadMembers() {
    if (this.userParams) {
      this.membersService.setUserParams(this.userParams);
      this.membersService.getMembers(this.userParams).subscribe({
        next: (response) => {
          if (response.result && response.pagination) {
            this.members = response.result;
            this.pagination = response.pagination;
          }
        },
      });
    }
  }

  loadMembersOrderByNewest() {
    if (!this.userParams) return;
    this.userParams.orderBy = 'created';
    this.loadMembers();
  }

  loadMembersOrderByLastActive() {
    if (!this.userParams) return;
    this.userParams.orderBy = 'lastActive';
    this.loadMembers();
  }

  resetFilters() {
    this.userParams = this.membersService.resetUserParams();
    this.loadMembers();
  }

  onPageChanged(pageNumber: number) {
    if (!this.userParams || this.userParams.pageNumber === pageNumber) return;
    this.userParams.pageNumber = pageNumber;
    this.membersService.setUserParams(this.userParams);
    this.loadMembers();
  }
}
