import { Component } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { MessageService } from '../../providers/message/message.service';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss']
})
export class NotificationsComponent {
  messages: Array<any> = [];

  constructor(
    public messageService: MessageService,
    public popoverController: PopoverController
  ) {
    this.getMessages();
  }

  getMessages() {
    this.messages = this.messageService.getMessages();
  }

  close() {
    this.popoverController.dismiss();
  }

  
}
