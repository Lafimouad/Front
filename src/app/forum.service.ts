import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Subject} from './subject';
import {Comment} from './comment';

@Injectable({
  providedIn: 'root'
})
export class ForumService {

  constructor(private http: HttpClient) {
  }

  public addSubject(subject: Subject): Observable<Subject> {
    return this.http.post<Subject>(`http://localhost:8081/Forum/Subject/add`, subject);
  }

  public addComment(comment: Comment, id: number): Observable<Comment> {
    return this.http.put<Comment>(`http://localhost:8081/Forum/Comment/add/${id}`, comment);
  }

  public updateSubject(subject: Subject): Observable<Subject> {
    return this.http.put<Subject>(`http://localhost:8081/Forum/Subject/update`, subject);
  }

  public updateComment(comment: Comment): Observable<Comment> {
    return this.http.put<Comment>(`http://localhost:8081/Forum/Comment/update`, comment);
  }

  public deleteSubject(subjectId: number): Observable<void> {
    return this.http.delete<void>(`http://localhost:8081/Forum/Subject/remove-id/${subjectId}`);
  }

  public deleteComment(idComment: number): Observable<void> {
    return this.http.delete<void>(`http://localhost:8081/Forum/Comment/remove-id/${idComment}`);
  }

  public dislike(subjectId: number, S: Subject): any {
    return this.http.put(`http://localhost:8081/Forum/Subject/dislikeSubject-id/${subjectId}`, S);
  }

  public dislikeComment(idComment: number, S: Subject): any {
    return this.http.put(`http://localhost:8081/Forum/Comment/dislikeComment-id/${idComment}`, S);
  }

  public like(subjectId: number, S: Subject): any {
    return this.http.put(`http://localhost:8081/Forum/Subject/likeSubject-id/${subjectId}`, S);
  }

  public likeComment(idComment: number, S: Subject): any {
    return this.http.put(`http://localhost:8081/Forum/Comment/likeComment-id/${idComment}`, S);
  }

  public getFeaturedSubjects(): Observable<Subject[]> {
    return this.http.get<Subject[]>(`http://localhost:8081/Forum/Subject/getFeaturedSubjects`);
  }

  public getMostPertinentComments(): Observable<Comment[]> {
    return this.http.get<Comment[]>(`http://localhost:8081/Forum/Comment/mostPertinentComments`);
  }

  public setFeaturedSubjects(S: Subject): any {
    return this.http.put(`http://localhost:8081/Forum/Subject/setFeauturedSubjects/`, S);
  }

  public setPertinentComments(S: Subject): any {
    return this.http.put(`http://localhost:8081/Forum/Comment/pertinentComments`, S);
  }




  public getComments(idSubject: number): Observable<Comment[]> {
    return this.http.get<Comment[]>(`http://localhost:8081/Forum/Comment/retrieveSubjectComments-idSubject/${idSubject}`);
  }

  public getSubject(idSubject: number): Observable<Subject> {
    return this.http.get<Subject>(`http://localhost:8081/Forum/Subject/retrieve-id/${idSubject}`);
  }

  public getSubjectsByLikes(minLikes: number, maxLikes: number): Observable<Subject[]> {
    return this.http.get<Subject[]>(`http://localhost:8081/Forum/Subject/getLikesFilteredSubjects/${minLikes}/${maxLikes}`);
  }

  public getAllSubjects(): Observable<Subject[]> {
    return this.http.get<Subject[]>(`http://localhost:8081/Forum/Subject/retrieve-all`);
  }


}
