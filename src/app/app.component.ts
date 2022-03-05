import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { fromEvent, Observable } from 'rxjs';
import { SubSink } from 'subsink';
import { ErrorPopUpComponent } from './shared/components/error-pop-up/error-pop-up.component';
import { IPopUpData } from './shared/Models/IPopUpData';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'Demo';
  subs = new SubSink();
  onlineEvent: Observable<Event> = fromEvent(window, "online");
  offlineEvent: Observable<Event> = fromEvent(window, "offline");
  connectionStatusMessage: string = "";
  connectionStatus: boolean = false;

  constructor(public dialog: MatDialog) {}



  ngOnInit(): void {

    this.onlineEvent = fromEvent(window, "online");
    this.offlineEvent = fromEvent(window, "offline");

    this.subs.add(
      this.onlineEvent.subscribe((e) => {
        (this.connectionStatusMessage = "Back to online"),(this.connectionStatus = true);
        this.openErrorDialog("Back to online");
      }),
      this.offlineEvent.subscribe((e) => {
        (this.connectionStatusMessage =
          "Connection lost! You are not connected to internet"),(this.connectionStatus = true);
          this.openErrorDialog("Connection lost! You are not connected to internet");
      })
    );
  }

  openErrorDialog(message : string) {
      let model : IPopUpData = {
          Msg:message,
          IsNetworkError:true
      }
      const dialogRef = this.dialog.open(ErrorPopUpComponent, {
      width: "250px",
      data: model,
      disableClose: true,
    });
  }

  closeError() {
    this.connectionStatus = false;
    this.connectionStatusMessage = "";
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }
}
