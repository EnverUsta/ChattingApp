import { ToastrService } from 'ngx-toastr';
import { MembersService } from './../../services/members.service';
import { Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { Member } from 'src/app/models/member';
import { UserDto } from 'src/app/models/User/userDto.interface';
import { AccountService } from 'src/app/services/account.service';
import { take } from 'rxjs/operators';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-member-edit',
  templateUrl: './member-edit.component.html',
  styleUrls: ['./member-edit.component.css'],
})
export class MemberEditComponent implements OnInit {
  @ViewChild('editForm') editForm: NgForm | undefined;
  @HostListener('window:beforeunload', ['$event']) unloadNotification(
    $event: any
  ) {
    if (this.editForm?.dirty) {
      $event.returnValue = true;
    }
  }
  member: Member | undefined;
  user: UserDto | undefined;

  constructor(
    private accountService: AccountService,
    private memberService: MembersService,
    private toastr: ToastrService
  ) {
    this.accountService.currentUser$.pipe(take(1)).subscribe({
      next: (user) => {
        if (user) this.user = user;
      },
    });
  }

  ngOnInit(): void {
    this.loadMember();
  }

  loadMember() {
    if (!this.user) return;
    this.memberService
      .getMember(this.user.username)
      .subscribe((member) => (this.member = member));
  }

  updateMember() {
    this.memberService.updateMember(this.member!).subscribe({
      next: (_) => {
        this.toastr.success('Profile updated successfully');
        this.editForm?.reset(this.member);
      },
    });
  }
}
