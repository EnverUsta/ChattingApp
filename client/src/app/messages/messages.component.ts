import { Component, OnInit } from '@angular/core';
import { Message } from '../models/message';
import { PaginatedResult, Pagination } from '../models/pagination';
import { MessageService } from '../services/message.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css'],
})
export class MessagesComponent implements OnInit {
  messages?: Message[];
  pagination?: Pagination;
  container = 'Unread';
  pageNumber = 1;
  pageSize = 5;

  constructor(private messageService: MessageService) {}

  ngOnInit(): void {
    this.loadMessages(this.container);
  }

  loadMessages(container: string) {
    this.container = container;
    this.messageService
      .getMessages(this.pageNumber, this.pageSize, this.container)
      .subscribe({
        next: (response: PaginatedResult<Message[]>) => {
          this.messages = response.result;
          this.pagination = response.pagination;
        },
      });
  }

  onPageChanged(pageNumber: number) {
    if (this.pageNumber !== pageNumber) {
      this.pageNumber = pageNumber;
      this.loadMessages(this.container);
    }
  }
}
