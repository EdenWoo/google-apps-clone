import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-top-stories',
  templateUrl: './top-stories.component.html',
  styleUrls: ['./top-stories.component.scss']
})
export class TopStoriesComponent implements OnInit {

  spotlights = [
    {
      title: `Auckland's filthy restaurants: Why do eateries get D and E grades?`,
      img: 'https://lh5.googleusercontent.com/proxy/-S2rPA-82OuWLmmSHjnqnbGGQNa3IQ7OUGRftGhMm9n8lnRaCsPb3xu2CtvPSJPDM3aIFk-_icMUWdxv8Y4Z6__O3B0oj0bSF_tlgEUs3hpdmDhVGDuyxF0gE-O241QQS2P9P9-DKjtkpLaTCMKRjIhiLfTvl06ArTagJVH1mCNVtJ2Aj1UFxkFc6QKnC9ImdJT1sQ78nKCJhiTWQmEYBf__jcTkyE8y5LtLRz1_3M57FB7wsuYerI7GGCGdbA=-p-df-h56-w56-rw'
    },
    {
      title: `Boardroom kicks: The rise of the office sneaker`,
      img: 'https://lh5.googleusercontent.com/proxy/IpRjY-FNO__5_Ni7c4NbNAUoI5V87TgigOzwDMqK3OqEubwPKBdgPKF-sOMkmDBOLQWGbX8OU6X6IFTm2-pxa39DaI53VV-gMAs6k7zCQKB-__fbdF1lSJdgzSfDqDqafFAmBcT5ReMFrUStKzNGmOPLdkg6v9xVmrCEXothvIwxrY_wNDT0_DQtJ5Jsahq3ZdB4YSSNgR_9TLRM3-zcV3duLlC4PumN=-p-df-h56-w56-rw'
    },
    {
      title: `LDV eDeliver 3: an electric hauler - Reviews`,
      img: 'https://lh6.googleusercontent.com/proxy/JCPs4Dt46pl4zBYmcJz5JmM_0haStZwp3thngh_nDCI8FtlMdeZJG9uRvdvLUhUb5wqYankSu_ZamPdo1vcgxmspF1ii0FumN8NuNeiksPd46UFErdiVDe9W=-p-df-h56-w56-rw'
    },
    {
      title: `Tauranga expert to talk about drugs from the sea - The Bay's News First`,
    }
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

}
