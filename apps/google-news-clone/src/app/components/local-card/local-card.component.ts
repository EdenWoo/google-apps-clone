import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sirius-local-card',
  templateUrl: './local-card.component.html',
  styleUrls: ['./local-card.component.scss']
})
export class LocalCardComponent implements OnInit {
  cityName = {
    name: 'city',
    fields: [
      {val: "Auckland "},
      {val: "Hamilton"}
    ]
  };

  imgAuckland = 'https://lh5.googleusercontent.com/proxy/fz_nRcvaNxzI8eF2uR0f6qDItPvGAsrRSzBPoWbehf87bgUFHDY4Em8hXS9ESs9BvkMQ9nDH3YHmlqnYoETxDZBL-BQuGRiXixJwdmcj83Hcm2P_jlcH8fDjljgdr-AP03Ln6vmHr-bQLGTQ7h3hJIss9kQJKGlUyRupBC56HiHufzo=p-rw';

  constructor() {
  }

  ngOnInit(): void {
  }

}
