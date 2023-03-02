import { AccountService } from './../../services/account.service';
import { UserDto } from 'src/app/models/User/userDto.interface';
import { Component, OnInit } from '@angular/core';
import { Member } from 'src/app/models/member';
import { Pagination } from 'src/app/models/pagination';
import { MembersService } from './../../services/members.service';
import { UserParams } from 'src/app/models/userParams.model';
import { take } from 'rxjs/operators';

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
  user: UserDto | undefined;

  constructor(
    private membersService: MembersService,
    private accountService: AccountService
  ) {
    this.accountService.currentUser$.pipe(take(1)).subscribe({
      next: (user) => {
        if (!user) return;
        this.userParams = new UserParams(user);
        this.user = user;
      },
    });
  }

  ngOnInit(): void {
    this.loadMembers();
  }

  loadMembers() {
    if (!this.userParams) return;
    this.membersService.getMembers(this.userParams).subscribe({
      next: (response) => {
        if (response.result && response.pagination) {
          this.members = response.result;
          this.pagination = response.pagination;
        }
      },
    });
  }

  onPageChanged(pageNumber: number) {
    if (!this.userParams || this.userParams.pageNumber === pageNumber) return;
    this.userParams.pageNumber = pageNumber;
    this.loadMembers();
  }
}
