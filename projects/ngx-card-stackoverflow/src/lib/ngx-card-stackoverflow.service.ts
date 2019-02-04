import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NgxCardStackoverflowService {
  private apiUrl = 'https://api.stackexchange.com/2.2/users/';

  constructor(private http: HttpClient) {}

  getUser(id: string) {
    const params = new HttpParams().set('site', 'stackoverflow');
    return this.http
      .get<IStackoverflow>(`${this.apiUrl}${id}`, { params })
      .pipe(map(data => data.items[0]))
      .toPromise();
  }
}

export interface IBadgeCount {
  bronze: number;
  silver: number;
  gold: number;
}

export interface IStackoverflowUser {
  badge_counts: IBadgeCount;
  account_id: number;
  is_employee: boolean;
  last_modified_date: number;
  last_access_date: number;
  reputation_change_year: number;
  reputation_change_quarter: number;
  reputation_change_month: number;
  reputation_change_week: number;
  reputation_change_day: number;
  reputation: number;
  creation_date: number;
  user_type: string;
  user_id: number;
  location: string;
  website_url: string;
  link: string;
  profile_image: string;
  display_name: string;
}

export interface IStackoverflow {
  items: IStackoverflowUser[];
  has_more: boolean;
  quota_max: number;
  quota_remaining: number;
}
