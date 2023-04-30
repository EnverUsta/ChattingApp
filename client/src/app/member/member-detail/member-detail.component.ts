import { MembersService } from './../../services/members.service';
import { Member } from 'src/app/models/member';
import {
  AfterContentInit,
  AfterViewInit,
  Component,
  OnInit,
  ViewChild,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
  NgxGalleryAnimation,
  NgxGalleryImage,
  NgxGalleryOptions,
} from '@kolkov/ngx-gallery';
import { NgbNav } from '@ng-bootstrap/ng-bootstrap';
import { MemberDetailTab } from 'src/app/models/member-detail-tab.enum';

@Component({
  selector: 'app-member-detail',
  templateUrl: './member-detail.component.html',
  styleUrls: ['./member-detail.component.css'],
})
export class MemberDetailComponent implements OnInit {
  private ngbNav?: NgbNav;
  @ViewChild('nav') set setNgbNav(nav: NgbNav | undefined) {
    if (!nav) return;
    this.ngbNav = nav;
    const tab = this.route.snapshot.queryParamMap.get('tab');
    if (!tab) return;
    this.ngbNav.select(+tab);
  }

  member: Member | undefined;
  readonly memberDetailTab = MemberDetailTab;
  galleryOptions: NgxGalleryOptions[] = [];
  galleryImages: NgxGalleryImage[] = [];

  constructor(
    private memberService: MembersService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.loadMember();

    this.galleryOptions = [
      {
        width: '500px',
        height: '500px',
        imagePercent: 100,
        thumbnailsColumns: 4,
        imageAnimation: NgxGalleryAnimation.Slide,
        preview: false,
      },
    ];
  }

  // TabIds: 1-About, 2-Interests, 3-Photos, 4-Messages
  selectTabById(id: MemberDetailTab) {
    if (!this.ngbNav || !id) return;
    this.ngbNav.select(id);
  }

  getImages() {
    if (!this.member) return [];
    const imageURls = [];
    for (const photo of this.member.photos) {
      imageURls.push({
        small: photo.url,
        medium: photo.url,
        big: photo.url,
      });
    }
    return imageURls;
  }

  loadMember() {
    const username = this.route.snapshot.paramMap.get('username');
    if (!username) return;

    this.memberService.getMember(username).subscribe((member) => {
      this.member = member;
      this.galleryImages = this.getImages();
    });
  }
}
