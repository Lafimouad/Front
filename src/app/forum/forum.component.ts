import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {ForumService} from '../forum.service';
import {Subject} from '../subject';
import {Comment} from '../comment';

import {HttpErrorResponse} from '@angular/common/http';
import {NgForm} from '@angular/forms';
import {TokenStorgeService} from '../token-storage.service';
import {Dictionary} from '../dictionary';


@Component({
  selector: 'app-forum',
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.css']
})

export class ForumComponent implements OnInit {
  comments: Comment[];
  commentSubjectId: number;
  dictionary: Dictionary[];
  subjects: Subject[];
  featuredSubjects: Subject[];
  filteredByLikesSubjects: Subject[];
  deleteEmployee: Subject;
  S: Subject;
  info: any;
  editId: number;
  editIdC: number;
  featured = false;
  global = true;
  showComments = false;
  prohibition = false;
  subj: Subject;
  private roles: string[];
  public authority: string;
  public authoritymanager = false;
  public authorityadmin = false;
  public authorityclient = false;
  public authoritydeliverer = false;
  public edit = false;
  public editC = false;
  public editSubject: Subject;
  public editComment: Comment;
  minLikes = 0;
  maxLikes = 100;

  constructor(
    private router: Router,
    private service: ForumService,
    private token: TokenStorgeService,
    private tokenStorage: TokenStorgeService
  ) {
  }

  ngOnInit(): void {
    this.setMostPertinentComments();
    this.getFilteredByLikesSubjects();
    this.setFeatured();
    this.getEmployees();
    this.getFeatured();
    this.info = {
      token: this.token.getToken(),
      username: this.token.getUsername(),
      authorities: this.token.getAuthorities()
    };
    if (this.tokenStorage.getToken()) {
      this.roles = this.tokenStorage.getAuthorities();
      this.roles.every(role => {
        if (role === 'ROLE_ADMIN') {
          this.authority = 'admin';
          this.authorityadmin = true;
          return false;
        } else if (role === 'ROLE_CLIENT') {
          this.authority = 'client';
          this.authorityclient = true;
          return false;
        } else if (role === 'ROLE_DELIVERER') {
          this.authority = 'deliverer';
          this.authoritydeliverer = true;
          return false;
        } else if (role === 'ROLE_MANAGER') {
          this.authority = 'manager';
          this.authoritymanager = true;
          return false;
        }
        this.authority = 'user';
        return true;
      });
    }
  }

  public getEmployees(): void {
    this.service.getAllSubjects().subscribe(
      (response: Subject[]) => {
        this.subjects = response;
        console.log(this.subjects);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public searchEmployees(key: string): void {
    console.log(key);
    const results: Subject[] = [];
    const resultsF: Subject[] = [];
    for (const employee of this.subjects) {
      if (employee.descriptionSubject.toLowerCase().indexOf(key.toLowerCase()) !== -1) {
        results.push(employee);
      }
    }
    this.subjects = results;
    if (results.length === 0 || !key) {
      this.getEmployees();
    }

    for (const employee of this.filteredByLikesSubjects) {
      if (employee.descriptionSubject.toLowerCase().indexOf(key.toLowerCase()) !== -1) {
        resultsF.push(employee);
      }
    }
    this.filteredByLikesSubjects = resultsF;
    if (resultsF.length === 0 || !key) {
      this.getFilteredByLikesSubjects();
    }
  }

  public onDeleteEmloyee(subjectId: number): void {
    this.service.deleteSubject(subjectId).subscribe(
      (response: void) => {
        console.log(response);
        this.getEmployees();
        this.getFilteredByLikesSubjects();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public onDeleteComment(idComment: number): void {
    this.service.deleteComment(idComment).subscribe(
      (response: void) => {
        console.log(response);
        this.getCommentsBySubject(this.commentSubjectId);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public onLike(subjectId: number): void {
    this.service.like(subjectId, this.S).subscribe(
      (response: void) => {
        console.log(response);
        this.getEmployees();
        this.getFilteredByLikesSubjects();

      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public onLikeComment(idComment: number): void {
    this.service.likeComment(idComment, this.S).subscribe(
      (response: void) => {
        console.log(response);
        this.setMostPertinentComments();
        this.getCommentsBySubject(this.commentSubjectId);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public onDislikeComment(idComment: number): void {
    this.service.dislikeComment(idComment, this.S).subscribe(
      (response: void) => {
        console.log(response);
        this.getCommentsBySubject(this.commentSubjectId);

      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public onDislike(subjectId: number): void {
    this.service.dislike(subjectId, this.S).subscribe(
      (response: void) => {
        console.log(response);
        this.getEmployees();
        this.getFilteredByLikesSubjects();

      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public onAddEmloyee(addForm: NgForm): void {
    // document.getElementById('add-employee-form').click();
    this.service.addSubject(addForm.value).subscribe(
      (response: Subject) => {
        console.log(response);
        this.getEmployees();
        alert('Subject added successfully...');
        addForm.reset();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
        addForm.reset();
      }
    );
  }

  public onAddComment(addFormC: NgForm): void {
    this.service.addComment(addFormC.value, this.commentSubjectId).subscribe(
      (response: Comment) => {
        console.log(response);
        this.getCommentsBySubject(this.commentSubjectId);
        alert('Comment added successfully...');
        addFormC.reset();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
        addFormC.reset();
      }
    );
  }

  public onEdit(subject: Subject, subjectId: number): void {
    this.edit = true;
    this.editSubject = subject;
    this.editId = subjectId;
  }

  public onEditComment(comment: Comment, idComment: number): void {
    this.editC = true;
    this.editComment = comment;
    this.editIdC = idComment;
  }




  public onUpdateEmloyee(employee: Subject): void {
    this.service.updateSubject(employee).subscribe(
      (response: Subject) => {
        console.log(response);
        this.edit = false;
        this.getEmployees();
        this.getFilteredByLikesSubjects();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
        console.log(employee);
      }
    );
  }

  public onUpdateComment(employee: Comment): void {
    this.service.getSubject(this.commentSubjectId).subscribe(
      (response: Subject) => {
        this.subj = response;
        console.log('subj', this.subj);
        console.log('comment.subject', employee.subject);
        employee.subject = this.subj;
        console.log('comment.subject2', employee.subject);
        this.service.updateComment(employee).subscribe(
          (resp: Comment) => {
            console.log('testtest3', resp);
            this.editC = false;
            this.getCommentsBySubject(this.commentSubjectId);
          },
          (error: HttpErrorResponse) => {
            alert(error.message);
            console.log(employee);
          }
        );
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
        console.log(employee);
      }
    );
  }

  public setFeatured(): void {
    this.service.setFeaturedSubjects(this.S).subscribe(
      (response: void) => {
        console.log(response);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public setMostPertinentComments(): void {
    this.service.setPertinentComments(this.S).subscribe(
      (response: void) => {
        console.log(response);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public getFeatured(): void {
    this.service.getFeaturedSubjects().subscribe(
      (response: Subject[]) => {
        this.featuredSubjects = response;
        console.log(this.featuredSubjects);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public getFilteredByLikesSubjects(): void {
    this.service.getSubjectsByLikes(this.minLikes, this.maxLikes).subscribe(
      (response: Subject[]) => {
        this.filteredByLikesSubjects = response;
        console.log(this.filteredByLikesSubjects);
        console.log(this.maxLikes);
        console.log(this.minLikes);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  onFeaturedClick() {
    this.featured = true;
    this.global = false;
    this.prohibition = false;

  }

  onGlobalClick() {
    this.featured = false;
    this.global = true;
    this.prohibition = false;

  }

  formatLabel(value: number) {
    if (value >= 1000) {
      return Math.round(value / 1000) + 'k';
    }

    return value;
  }

  public getCommentsBySubject(subjectId: number): void {
    this.commentSubjectId = subjectId;
    this.service.getComments(subjectId).subscribe(
      (response: Comment[]) => {
        this.comments = response;
        console.log(this.comments);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
    this.showComments = true;
    this.global = false;
  }

  public getDictionary(): void {
    this.service.getDictionary().subscribe(
      (response: Dictionary[]) => {
        this.dictionary = response;
        console.log(this.dictionary);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public onProhibition(): void {
    this.getDictionary();
    this.prohibition = true;
    this.global = false;
  }

  onDeleteBadWord(idDictionary: number): void{
    this.service.deleteBadWord(idDictionary).subscribe(
      (response: void) => {
        console.log(response);
        this.getDictionary();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public onAddWord(addFormC: NgForm): void {
    this.service.addBadWord(addFormC.value).subscribe(
      (response: Dictionary) => {
        console.log(response);
        this.getDictionary();
        addFormC.reset();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
        addFormC.reset();
      }
    );
  }
}

