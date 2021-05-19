import { Component, OnInit } from '@angular/core';
import { AdsService } from '../ads.service';
import { Claim } from '../claim';
import { ClaimServiceService } from '../claim-service.service';
import { TokenStorgeService } from '../token-storage.service';
import { User } from '../user';
import { UserService } from '../user.service';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  submitted:boolean;
  claim: Claim = new Claim() ;
  message:any;
  errorMessage = '';
  user : User;
  idUser:number;
  id:number;
  private roles: string[];
  public authority: string;
  public authoritymanager : boolean = false ;
  public authorityadmin : boolean = false ;
  public authorityclient : boolean = false ;
  public authoritydeliverer : boolean = false ;
  info : any ; 
  subject: string;
  systemProblem : string;
  productProblem : string;
  deliveryProblem: string;
  productWithProb : number;
  description: string;
  username: string;
  idouda: any;
  idouda2: any;
  usernameUser:string;

  


  constructor(private service: ClaimServiceService, private tokenStorage: TokenStorgeService , private token:TokenStorgeService,private service2: AdsService) { }

  
    ngOnInit() {
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

    public addingClaim(){
    this.submitted = true
    this.user= new User();
    //this.idouda=this.usernameUser;
    //console.log("idouda",this.idouda);
    //this.idouda2=this.gettingid(this.idouda);
    this.user.idUser= this.idUser;
    console.log("arwah",this.user);
    this.claim=new Claim();
    this.claim.subject=this.subject;
    this.claim.systemProblem=this.systemProblem;
    this.claim.productProblem=this.productProblem;
    this.claim.deliveryProblem=this.deliveryProblem;
    this.claim.description=this.description;
    this.claim.productWithProb=this.productWithProb;
    console.log("gimme the claim", this.claim);
    this.claim.user=this.user;
    console.log("gimme the claim with client pls", this.claim);
    this.service.addClaim(this.claim).subscribe((data)=>this.message=data);
    console.log("hal 3ak3akna?",this.message)

    }
    public gettingid(username: string){
      this.service2.wantId(username).subscribe((data)=>{console.log("lafi",data) ;
     this.id=data} );
  

}
}
