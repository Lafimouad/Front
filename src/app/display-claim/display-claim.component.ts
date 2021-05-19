import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Claim } from '../claim';
import { ClaimServiceService } from '../claim-service.service';
import { TokenStorgeService } from '../token-storage.service';
import { User } from '../user';

@Component({
  selector: 'app-display-claim',
  templateUrl: './display-claim.component.html',
  styleUrls: ['./display-claim.component.css']
})
export class DisplayClaimComponent implements OnInit {
  claims:Claim[];
  user: User;
  subject : string;
  status: string;
  level: number;
  idClaim: number;
  claim:Claim;
  private roles: string[];
  public authority: string;
  public authoritymanager : boolean = false ;
  public authorityadmin : boolean = false ;
  public authorityclient : boolean = false ;
  public authoritydeliverer : boolean = false ;
  info : any ; 
  boo: boolean;
  editClaim: Claim;
  

  constructor(private service:ClaimServiceService, private tokenStorage: TokenStorgeService , private token:TokenStorgeService) { }

  ngOnInit() {
      
    this.getAllClaims();


      this.info = {
        token: this.token.getToken(),
        username: this.token.getUsername(),
        authorities: this.token.getAuthorities()};
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
          }else if (role === 'ROLE_DELIVERER') {
            this.authority = 'deliverer';
            this.authoritydeliverer = true;
            return false;
          }else if (role === 'ROLE_MANAGER') {
            this.authority = 'manager';
            this.authoritymanager = true;
            return false;
          }
          this.authority = 'user';
          return true;
        });
      }
      

  }


  public getAllClaims(): void {
    this.service.getClaims().subscribe(
      (response: Claim[]) => {
        this.claims = response;
        console.log(this.claims);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public gettingBysubject(){
    let resp = this.service.findCBySubject(this.subject.toString().toLocaleLowerCase());
      resp.subscribe((data)=>this.claims=data);
  }
  public gettingByid(){
    let resp = this.service.findCById(this.idClaim);
      resp.subscribe((data)=>this.claim=data);
  }

  public gettingBystatus(){
    let resp = this.service.findCByStatus();
      resp.subscribe((data)=>this.claims=data);
  }
  public gettingBystatus2(){
    let resp = this.service.findCByStatus2();
      resp.subscribe((data)=>this.claims=data);
  }
  public gettingBylevelA(){
    let resp = this.service.findCBylevelAsc();
      resp.subscribe((data)=>this.claims=data);
  }
  public gettingBylevelD(){
    let resp = this.service.findCBylevelDesc();
      resp.subscribe((data)=>this.claims=data);
  }

  public deletingClaim(idClaim:number){
    let resp = this.service.deleteClaim(idClaim);
      resp.subscribe((data)=>this.claim=data);
  }

 /* public func (){

    let level=this.level
    if (level==1) {
    this.boo = true; 
    return this.gettingBylevelA();}
    else 
    return this.gettingBylevelD();
  

}

public func2(){

  let status=this.status
  if (status="Treated") 
  {return this.gettingBystatus();}
  else 
  if (status="Not_Treated") 

  {return this.gettingBystatus2();}

}*/





public answeringClaim(claim: Claim): void{
  this.service.answerClaim(claim).subscribe(
    (response: Claim) => {
      console.log(response);
      this.service.getClaims();
    },
    (error: HttpErrorResponse) => {
      alert(error.message);
    }
  )  }




  public onOpenModal(claim: Claim,mode: string): void{
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type='button';
    button.style.display='none';
    button.setAttribute('data-toggle','modal');
    if (mode == 'edit') {
      this.editClaim = claim;
      console.log("el claimouta",this.editClaim);
      console.log("el user",this.editClaim.user);
      button.setAttribute('data-target','#updateClaimModal');
    }  
    
    container.appendChild(button);
    console.log("el decision",this.editClaim.decision);
    button.click();   
}





}




