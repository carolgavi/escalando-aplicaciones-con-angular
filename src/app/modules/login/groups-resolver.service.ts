import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { GroupService } from './group.service';

@Injectable({
  providedIn: 'root'
})
export class GroupsResolverService {

  constructor(
    private groupService: GroupService,
  ) { }

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Group[]> {
      return this.groupService.getGroups();
  }
}

interface Group {
  id: string;
  value: string;
  active: boolean;
}
