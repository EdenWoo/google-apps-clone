import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-following',
  templateUrl: './following.component.html',
  styleUrls: ['./following.component.scss']
})
export class FollowingComponent implements OnInit {

  imgList = {
    name: 'img',
    fields: [
      {val: "https://lh3.googleusercontent.com/o_tai07eFNo8w2jfrZY_vh2Mv3DnrgXM1Ven6HBYn4vFxe949KwJgvAhYdq2Hmr4C_5jUbkkn84=-rw"},
      {val: "https://lh3.googleusercontent.com/7Iv4pkYA_hqsvlyo6XNy3UU0tUYgBR9rGrDHekm8-6cHO14jbUrOu8dCU86to2kzYoRVHJn0Ow=-rw"},
      {val: "https://lh3.googleusercontent.com/tFGfZ19wiRAvJsi5LeFL42_k_gV7bXV6dj3aKnatkcPRWKpu2fHUp367Awcdd7JceiE_bzBc=-rw"}
    ]
  };
  saveSearchImg = 'https://lh3.googleusercontent.com/o_tai07eFNo8w2jfrZY_vh2Mv3DnrgXM1Ven6HBYn4vFxe949KwJgvAhYdq2Hmr4C_5jUbkkn84=-rw';
  saveStoryImg = 'https://lh3.googleusercontent.com/7Iv4pkYA_hqsvlyo6XNy3UU0tUYgBR9rGrDHekm8-6cHO14jbUrOu8dCU86to2kzYoRVHJn0Ow=-rw';
  constructor() { }

  ngOnInit(): void {
  }

}
