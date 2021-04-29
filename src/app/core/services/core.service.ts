import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CoreService {
  mailChimpEndpoint = 'https://gesiklo.us1.list-manage.com/subscribe/post-json?u=9207b9c77dbf9c9bb6ec108de&id=97f4d377f9';

  private showComponent = new BehaviorSubject<boolean>(true);
  showComponent$ = this.showComponent.asObservable();
  times = 0;

  constructor(private db: AngularFirestore, private http: HttpClient) { }

  saveSubscriber(value) {
    return this.db.collection('newsletter').add({
      name: value.name,
      email: value.email
    });
  }

  getSubscribers(): Observable<any[]> {
    return this.db.collection('newsletter')
      .snapshotChanges()
      .pipe(
        map(snaps => this.convertSnaps(snaps)));
  }

  convertSnaps<T>(snaps) {
    return <T[]>snaps.map(snap => {
      return {
        id: snap.payload.doc.id,
        ...snap.payload.doc.data()
      };

    });
  }

  setComponentState(show: boolean) {
    this.showComponent.next(show);
  }

  getComponentState() {
    return this.showComponent$;
  }

  sendEmail(url, data) {
    return this.http.post(url, data);
  }

  subscribeToList(data): any {
    const params = new HttpParams()
      .set('EMAIL', data.email)
      .set('b_9207b9c77dbf9c9bb6ec108de_97f4d377f9', '')
      .set('callback', `__ng_jsonp__.__req${this.times}.finished`);
    this.times = this.times + 1;
    const mailChimpUrl = `${this.mailChimpEndpoint}&${params.toString()}`;
    return this.http.jsonp(mailChimpUrl, 'c')
  }
}
