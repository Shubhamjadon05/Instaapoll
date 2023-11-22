import { Component,Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-block',
  templateUrl: './block.component.html',
  styleUrls: ['./block.component.css']
})
export class BlockComponent implements OnInit {
  img =""
  // data transfer from parent to ChildActivationEndld, child to parent, betbeen sibling
  @Input() 
  transfer:any=[]
  constructor(){
  }
  ngOnInit(): void {
  }
}
