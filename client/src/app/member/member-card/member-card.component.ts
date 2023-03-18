import { ToastrService } from 'ngx-toastr';
import { Component, Input } from '@angular/core';
import { Member } from 'src/app/models/member';
import { MembersService } from 'src/app/services/members.service';

@Component({
  selector: 'app-member-card',
  templateUrl: './member-card.component.html',
  styleUrls: ['./member-card.component.css'],
})
export class MemberCardComponent {
  @Input() member: Member | undefined;

  constructor(
    private membersService: MembersService,
    private toastr: ToastrService
  ) {}

  addLike(member: Member | undefined) {
    if (!member) {
      this.toastr.error('Member not found');
      return;
    }
    this.membersService.addLike(member.username).subscribe({
      next: () => {
        this.toastr.success('You have liked ' + member.knownAs);
      },
    });
  }
}
