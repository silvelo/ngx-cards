import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class NgxCardGithubService {
  private apiUrl = 'https://api.github.com/users/';

  constructor(private http: HttpClient) {}

  getUser(id: string) {
    return this.http.get<IGithubUser>(`${this.apiUrl}${id}`).toPromise();
  }

  getTotalStars(id: string) {
    return this.http
      .get(`${this.apiUrl}${id}/repos`)
      .pipe(
        map((data: any[]) =>
          data.reduce(
            (previous, current) => previous + current.stargazers_count,
            0
          )
        )
      )
      .toPromise();
  }
}

export interface IGithubUser {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  site_admin: boolean;
  name: string;
  company?: any;
  blog: string;
  location: string;
  email?: any;
  hireable: boolean;
  bio?: any;
  public_repos: number;
  public_gists: number;
  followers: number;
  following: number;
  created_at: Date;
  updated_at: Date;
}
